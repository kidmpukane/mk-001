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
import { useForm, Controller } from "react-hook-form";
import { Headings, Texts } from "../components/atoms/headings";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";

const CreateStore = () => {
  const { item } = useLocalSearchParams();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const { authInfo } = useContext(AuthenticationContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      store_name: null,
      store_description: null,
      store_image: null,
      merchant_id: item.id,
    },
  });
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Add your form data fields to the formData object
      formData.append("store_name", data.store_name);
      formData.append("store_description", data.store_description);
      formData.append("store_image", data.store_image);

      // Add any other fields as needed

      const response = await axios.post(
        "http://10.0.2.2:8000/api/register-new-store/",
        formData,
        {
          headers: {
            "X-CSRFToken": authInfo.authCookie,
            sessionId: authInfo.sessionToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const imageUploader = async (data) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });

      let imageData = {
        type: result.type,
        uri: result.uri,
      };

      const data = new FormData();
      data.append("image", imageData);

      console.log(imageData);

      console.log(result);
      setImage(result.uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.layout}>
      <View>
        {image && <Image source={{ uri: image }} style={styles.coverImage} />}
        <CustomOpacity
          style={styles.imageButton}
          title="+ Add Your Stores Cover Image"
          onPress={() => {
            imageUploader();
          }}
        />
      </View>
      <Headings style={styles.title} texts="Fill In Information" />

      <Texts
        style={styles.body}
        texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Store Name"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="store_name"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Store Description"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="store_description"
      />

      <Headings style={styles.title} texts="Fill In Information" />

      <Texts
        style={styles.body}
        texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
      />

      <CustomButton2
        title="SKIP"
        style={styles.customSubmitButton}
        onPress={() => navigation.navigate("Profile")}
      />

      <CustomButton2
        title="Submit"
        style={styles.customSubmitButton}
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
};

export default CreateStore;

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
