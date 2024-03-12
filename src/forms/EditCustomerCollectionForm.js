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

const EditCustomerCollectionForm = ({ route }) => {
  const { item } = useLocalSearchParams();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const { authInfo } = useContext(AuthenticationContext);
  const { collectionStatus } = route.params;
  console.log(collectionStatus);
  const initialValues = {
    collection_title: item?.collection_title,
    collection_subtitle: item?.collection_subtitle,
    collection_image: item?.collection_image,
    customer_id: item?.customer_id,
    id: item?.id,
  };

  const onSubmit = async (values) => {
    console.log("Values:", JSON.stringify(values));
    try {
      const formData = new FormData();

      // Add your form data fields to the formData object
      formData.append("collection_title", values.collection_title);
      formData.append("collection_subtitle", values.collection_subtitle);
      if (values.collection_image && values.collection_image.uri) {
        const collectionImageUri = values.collection_image.uri;
        const collectionImageName = collectionImageUri.split("/").pop();
        const collectionImageType = "image/jpeg"; // Adjust the type based on your requirements

        console.log("collectionImageUri:", collectionImageUri);
        console.log("collectionImageName:", collectionImageName);
        console.log("collectionImageType:", collectionImageType);

        formData.append("collection_image", {
          uri: collectionImageUri,
          name: collectionImageName,
          type: collectionImageType,
        });
      }
      formData.append("customer_id", values.customer_id);
      formData.append("id", values.id);

      // Add any other fields as needed

      const response = await axios.put(
        `http://10.0.2.2:8000/api/store/edit-customer-collections/${item?.id}/`,
        formData,
        {
          headers: {
            "X-CSRFToken": authInfo.authCookie,
            sessionId: authInfo.sessionId,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(`Form Data: ${formData}`);
      console.log("Success:", response.data);
      navigation.navigate("Home");
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

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // Check if setFieldValue is defined and call it with the correct arguments
        if (setFieldValue) {
          setFieldValue("collection_image", result.assets[0]); // Note: Pass the entire result.assets[0] object
        }
        console.log(result);
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
              title="+ Add Your Collection Cover Image"
              onPress={() => {
                imageUploader(setFieldValue); // Pass setFieldValue as a parameter
              }}
            />
          </View>

          <TextInput
            placeholder="enter collection title"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={handleBlur("collection_title")}
            onChangeText={handleChange("collection_title")}
            value={values.collection_title}
          />

          <TextInput
            placeholder="enter collection subtitle"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={handleBlur("collection_subtitle")}
            onChangeText={handleChange("collection_subtitle")}
            value={values.collection_subtitle}
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

export { EditCustomerCollectionForm };
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
