import * as React from "react";
import axios from "axios";
import { useState, useContext } from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { Headings, Texts } from "../components/atoms/headings";
import { CustomButton2, CustomOpacity } from "../components/atoms/buttons";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";

const EditStoreForm = () => {
  const { item } = useLocalSearchParams();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const { authInfo } = useContext(AuthenticationContext);

  const initialValues = {
    store_name: "",
    store_description: "",
    store_image: null,
    merchant_id: item.id,
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();

      // Add your form data fields to the formData object
      formData.append("store_name", values.store_name);
      formData.append("store_description", values.store_description);
      formData.append("store_image", values.store_image);

      // Add any other fields as needed

      const response = await axios.put(
        `http://10.0.2.2:8000/api/update-store/${item?.id}/`,
        formData,
        {
          headers: {
            "X-CSRFToken": authInfo.authCookie,
            sessionId: authInfo.sessionId,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const imageUploader = async (setFieldValue) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        let imageData = {
          name: "image",
          type: result.type,
          uri: result.uri,
        };

        console.log(imageData);
        console.log(result);
        setImage(result.uri);
        setFieldValue("store_image", imageData); // Set the image data in the form
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <ScrollView style={styles.layout}>
          <View>
            {image && (
              <Image source={{ uri: image }} style={styles.coverImage} />
            )}
            <CustomOpacity
              style={styles.imageButton}
              title="+ Add Your Stores Cover Image"
              onPress={() => {
                imageUploader();
              }}
            />
          </View>

          <TextInput
            placeholder="enter store name"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={handleBlur("store_name")}
            onChangeText={handleChange("store_name")}
            value={values.store_name}
          />

          <TextInput
            placeholder="enter store description"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={handleBlur("store_description")}
            onChangeText={handleChange("store_description")}
            value={values.store_description}
          />

          <CustomButton2
            title="Submit"
            style={styles.customSubmitButton}
            onPress={handleSubmit}
          />
        </ScrollView>
      )}
    </Formik>
  );
};

export { EditStoreForm };
const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#0C0404",
    padding: 15,
  },
  imageButton: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#0C0404",
    borderWidth: 3,
    borderColor: "#777575",
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: 8,
    paddingHorizontal: 6,
  },

  input: {
    backgroundColor: "#0C0404",
    borderWidth: 3,
    borderColor: "#777575",
    borderRadius: 150,
    marginHorizontal: 6,
    paddingHorizontal: 25,
    margin: 10,
    padding: 12,
    color: "white",
    fontSize: 18,
  },

  customSubmitButton: {
    marginTop: 20,
    marginBottom: 20,
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  title: {
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  body: {
    margin: 15,
    fontSize: 15,
    color: "#D9D9D9",
  },
  coverImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    overflow: "hidden",
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
});
