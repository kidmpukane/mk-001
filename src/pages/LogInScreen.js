import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const logInValidationSchema = Yup.object().shape({
  username: Yup.string().required("User name required"),
  password: Yup.string()
    .min(8, "Password must be between 8 to 25 characters")
    .max(25, "Password must be between 8 to 25 characters")
    .required("Required")
    .matches(/[a-z]+/, "One lowercase character")
    // .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "One number"),
});

const LogInScreen = (props) => (
  <Formik
    validationSchema={logInValidationSchema}
    initialValues={{
      username: "",
      password: "",
    }}
    onSubmit={async (values) => {
      try {
        const response = await axios.post(
          "http://10.0.2.2:8000/accounts/login",
          values
        );
        console.log(response.data);
        // Handle successful login (e.g., navigate to home screen)
      } catch (error) {
        console.error(error);
        // Handle failed login (e.g., show error message)
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
            fontSize: 26,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Log In Screen
        </Text>

        <TextInput
          style={styles.input}
          onBlur={handleBlur("username")}
          value={values.username} // Change from values.email to values.username
          placeholder="Username" // Change from "username" to "Username"
          placeholderTextColor="white"
          onChangeText={handleChange("username")}
        />

        {errors.username && touched.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}

        <TextInput
          style={styles.input}
          onBlur={handleBlur("password")}
          value={values.password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={handleChange("password")}
        />

        {errors.password && touched.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Button
          onPress={handleSubmit}
          title="Submit"
          disabled={!values.username || !values.password}
        />
      </View>
    )}
  </Formik>
);

export { LogInScreen };

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#1B2631",
    borderColor: "grey",
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "space-between",
  },
  errorText: {
    fontSize: 12.5,
    color: "orange",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2631",
  },
});
