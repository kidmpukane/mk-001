import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { CustomButton2 } from "../components/atoms/buttons";
import { useNavigation } from "@react-navigation/native";

const userInfoFormSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(3, "User Name must be between 5 to 25 characters")
    .max(25, "User Name must be between 5 to 25 characters")
    .required("Required"),
  user_bio: Yup.string()
    .min(3, "User Bio must be between 5 to 25 characters")
    .max(500, "User Bio must be between 5 to 25 characters")
    .required("Required"),
  profile_picture: Yup.string()
    .min(3, "Profile Picture Required")
    .max(250, "Profile Picture Required")
    .required("Required"),
  background_picture: Yup.string()
    .min(3, "Background Picture Required")
    .max(250, "Background Picture Required")
    .required("Required"),
});

const UserInfoForm = () => {
  const { item } = useLocalSearchParams();
  const { authInfo } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  return (
    <Formik
      validationSchema={userInfoFormSchema}
      initialValues={{
        id: item.id,
        user_name: item.user_name !== undefined ? item.user_name : "",
        profile_picture: item.profile_picture ? item.profile_picture : "",
        background_picture: item.background_picture
          ? item.background_picture
          : "",
        at_user: item.at_user
          ? item.at_user
          : `@${
              item.user_name !== undefined ? item.user_name.toLowerCase() : ""
            }`,
        user_bio: item.user_bio ? item.user_bio : "",
        is_merchant: item.is_merchant,
        user: item.user,
      }}
      onSubmit={async (values) => {
        console.log("Data being sent:", values);
        try {
          const response = await axios.put(
            `http://10.0.2.2:8000/api/customer-profile-update/${item.id}/`,
            values,
            {
              headers: {
                "X-CSRFToken": authInfo.authCookie,
                sessionId: authInfo.sessionToken,
                "Content-Type": "application/json",
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
        isValid,
        errors,
        touched,
      }) => (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1B2631",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              padding: 40,
            }}
          >
            <Text>{JSON.stringify(errors, null, 2)}</Text>
            User Registration Screen
          </Text>

          <TextInput
            style={styles.input}
            onBlur={handleBlur("user_name")}
            value={values.user_name}
            placeholder="User Name"
            placeholderTextColor="white"
            onChangeText={handleChange("user_name")}
          />

          <TextInput
            style={styles.input}
            onBlur={handleBlur("user_bio")}
            value={values.user_bio}
            placeholder="User Bio"
            placeholderTextColor="white"
            onChangeText={handleChange("user_bio")}
          />

          <TextInput
            style={styles.input}
            onBlur={handleBlur("profile_picture")}
            value={values.profile_picture}
            placeholder="Profile Picture"
            placeholderTextColor="white"
            onChangeText={handleChange("profile_picture")}
          />

          <TextInput
            style={styles.input}
            onBlur={handleBlur("background_picture")}
            value={values.background_picture}
            placeholder="Background Picture"
            placeholderTextColor="white"
            onChangeText={handleChange("background_picture")}
          />

          <Button onPress={handleSubmit} title="SUBMIT" />
        </View>
      )}
    </Formik>
  );
};

export { UserInfoForm };

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderColor: "gray",
    borderRadius: 25,
    borderWidth: 2,
    color: "white",
    marginBottom: 30,
    padding: 20,
    width: 350,
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
