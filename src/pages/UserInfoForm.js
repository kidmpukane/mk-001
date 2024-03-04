import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";
import { Headings, Texts } from "../components/atoms/headings";

const userInfoFormSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(5, "User Name must be between 5 to 25 characters")
    .max(25, "User Name must be between 5 to 25 characters")
    .required("Required"),
  user_bio: Yup.string()
    .min(5, "User Bio must be between 5 to 500 characters")
    .max(500, "User Bio must be between 5 to 500 characters")
    .required("Required"),
});

const UserInfoForm = () => {
  const { item } = useLocalSearchParams();
  const { authInfo } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const pickCoverImage = async (setFieldValue) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCoverImage(result.assets[0].uri);
      setFieldValue("background_picture", result.assets[0].uri);
      console.log(result);
    }
  };

  const pickProfileImage = async (setFieldValue) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      setFieldValue("profile_picture", result.assets[0].uri);
      console.log(result);
    }
  };

  return (
    <Formik
      validationSchema={userInfoFormSchema}
      initialValues={{
        id: item.id,
        at_user: item.at_user,
        user_name: item.user_name || "",
        user_bio: item.user_bio || "",
        profile_picture: null,
        background_picture: null,
      }}
      onSubmit={async (values) => {
        try {
          const formData = new FormData();

          formData.append("id", values.id);
          formData.append("at_user", values.at_user);
          formData.append("user_name", values.user_name);
          formData.append("user_bio", values.user_bio);

          // Check if background_picture is not null
          if (values.background_picture) {
            const backgroundPictureUri = values.background_picture;
            const backgroundPictureName = backgroundPictureUri.split("/").pop();
            const backgroundPictureType = "image/jpeg"; // Adjust the type based on your requirements

            formData.append("background_picture", {
              uri: backgroundPictureUri,
              name: backgroundPictureName,
              type: backgroundPictureType,
            });
          }

          // Check if profile_picture is not null
          if (values.profile_picture) {
            const profilePictureUri = values.profile_picture;
            const profilePictureName = profilePictureUri.split("/").pop();
            const profilePictureType = "image/jpeg"; // Adjust the type based on your requirements

            formData.append("profile_picture", {
              uri: profilePictureUri,
              name: profilePictureName,
              type: profilePictureType,
            });
          }

          const response = await axios.put(
            `http://10.0.2.2:8000/api/${
              item.is_merchant == true ? "merchant" : "customer"
            }-profile-update/${values.id}/`,
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
          navigation.navigate("Profile");
        } catch (error) {
          console.error("Error:", error);
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <ScrollView style={styles.layout}>
          <Headings style={styles.title} texts="Fill In Information" />
          <Texts style={styles.body} texts={JSON.stringify(errors, null, 2)} />

          <View>
            {coverImage && (
              <Image source={{ uri: coverImage }} style={styles.coverImage} />
            )}
            <CustomOpacity
              style={styles.imageButton}
              title="+ Add Cover Image"
              onPress={() => pickCoverImage(setFieldValue)}
            />
          </View>
          <View>
            {profileImage && (
              <Image source={{ uri: profileImage }} style={styles.coverImage} />
            )}
            <CustomOpacity
              style={styles.imageButton2}
              title="+ Add Profile Image"
              onPress={() => pickProfileImage(setFieldValue)}
            />
          </View>
          <Texts style={styles.body} texts="USER NAME" />
          <TextInput
            style={styles.input}
            onBlur={handleBlur("user_name")}
            value={values.user_name}
            placeholder="User Name"
            placeholderTextColor="white"
            onChangeText={handleChange("user_name")}
          />
          <Texts style={styles.body} texts="BIO" />
          <TextInput
            multiline
            style={styles.bioInput}
            onBlur={handleBlur("user_bio")}
            value={values.user_bio}
            placeholder="User Bio"
            placeholderTextColor="white"
            onChangeText={handleChange("user_bio")}
          />

          <CustomButton2
            style={styles.customSubmitButton}
            onPress={handleSubmit}
            title="SUBMIT"
          />
        </ScrollView>
      )}
    </Formik>
  );
};

export { UserInfoForm };

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#292929",
  },
  imageButton: {
    padding: 100,
    alignItems: "center",
    backgroundColor: "#3D3D3D",
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: 8,
    paddingHorizontal: 6,
  },
  imageButton2: {
    width: 80,
    height: 80,
    alignItems: "center",
    backgroundColor: "#3D3D3D",
    borderRadius: 10,
    marginTop: -20,
    marginHorizontal: 8,
    paddingHorizontal: 6,
  },

  customButton: {
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,

    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  input: {
    backgroundColor: "#292929",
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
  bioInput: {
    textAlignVertical: "top",
    backgroundColor: "#292929",
    borderColor: "#777575",
    color: "white",
    borderWidth: 3,
    borderRadius: 20,
    marginHorizontal: 6,
    paddingHorizontal: 25,
    margin: 10,
    padding: 12,
    paddingTop: 30,
    height: 250,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  body: {
    margin: 15,
    fontSize: 15,
    color: "#D9D9D9",
  },
  coverImage: {
    width: "98%",
    height: 350,
    resizeMode: "cover",
    overflow: "hidden",
    marginBottom: 20,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    borderRadius: 50,
    justifyContent: "center",
  },
  customButton2: {
    height: 50,
    width: 350,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
  },
});
