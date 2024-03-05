import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  at_user: Yup.string()
    .min(5, "User Name must be between 5 to 25 characters")
    .max(25, "User Name must be between 5 to 25 characters")
    .required("Required"),
  user_bio: Yup.string()
    .min(3, "User Bio must be at least 3 characters")
    .required("Required"),
});

const generateRandomNumber = () => {
  let min = 100000000000; // Minimum  12 digit number
  let max = 999999999999; // Maximum  12 digit number
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const CustomerRegistration = (props) => (
  <Formik
    validationSchema={signUpValidationSchema}
    initialValues={{
      id: generateRandomNumber(),
      profile_picture: "",
      background_picture: "",
      at_user: "@",
      user_bio: "",
      user_id: "",
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
          onBlur={handleBlur("at_user")}
          value={values.at_user}
          placeholder="at_user"
          placeholderTextColor="white"
          onChangeText={handleChange("at_user")}
        />

        <TextInput
          style={styles.input}
          onBlur={handleBlur("user_bio")}
          value={values.user_bio}
          placeholder="user_bio"
          placeholderTextColor="white"
          onChangeText={handleChange("user_bio")}
        />

        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    color: "white",
    paddingLeft: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export { CustomerRegistration };
