import React, { useContext } from "react";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";
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
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be between 8 to 25 characters")
    .max(25, "Password must be between 8 to 25 characters")
    .required("Required")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/\d+/, "One number"),
});

const LogInScreen = (props) => {
  const { authInfo, updateAuthInfo } = useContext(AuthenticationContext);

  return (
    <Formik
      validationSchema={logInValidationSchema}
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={async (values) => {
        try {
          // Fetch CSRF token from the dedicated endpoint
          const csrfResponse = await axios.get(
            "http://10.0.2.2:8000/accounts/csrf_cookie"
          );

          // Uncomment the following line when you have a working API endpoint
          console.log("CSRF token:", csrfResponse.data.csrf_token);

          // Make the login request with the CSRF token in the headers
          const loginResponse = await axios.post(
            "http://10.0.2.2:8000/accounts/login",
            values,
            {
              headers: {
                "X-CSRFToken": csrfResponse.data.csrf_token,
              },
            }
          );

          // Update the authentication context with the new CSRF token, session ID, and user ID
          updateAuthInfo({
            authCookie: loginResponse.data.csrf_token,
            sessionToken: loginResponse.data.sessionid,
            userId: loginResponse.data.user_id,
            isMerchant: loginResponse.data.is_merchant,
          });

          // Uncomment the following line when you have a working API endpoint
          console.log("Login response:", loginResponse.data);

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
        <View style={styles.container}>
          <Text style={styles.title}>Log In Screen</Text>

          <TextInput
            style={styles.input}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="e-mail"
            placeholderTextColor="white"
            onChangeText={handleChange("email")}
          />

          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            onBlur={handleBlur("password")}
            value={values.password}
            placeholder="password"
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
            disabled={!values.email || !values.password}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B2631",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
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
  },
  errorText: {
    fontSize: 12.5,
    color: "orange",
  },
});

export { LogInScreen };
