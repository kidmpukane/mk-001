import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const userInfoFormSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(3, "User Name must be between 5 to 25 characters")
    .max(25, "User Name must be between 5 to 25 characters")
    .required("Required"),
  user_bio: Yup.string()
    .min(3, "User Bio must be between 5 to 25 characters")
    .max(25, "User Bio must be between 5 to 25 characters")
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
      onSubmit={(values) => {
        console.log(values);
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
              fontSize: 26,
              fontWeight: "bold",
              color: "white",
            }}
          >
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

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export { UserInfoForm };

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "white",
    marginBottom: 20,
    padding: 10,
    width: 200,
  },
});
