import React, { useContext, useState } from "react";
import { Headings, Texts } from "../components/atoms/headings";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "One number"),
});

const LogInScreen = (props) => {
  const { authInfo, updateAuthInfo } = useContext(AuthenticationContext);
  const [backendError, setBackendError] = useState("");
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.layout}>
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

            // Log CSRF token for debugging
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
              sessionId: loginResponse.data.sessionid,
              userId: loginResponse.data.user_id,
              isMerchant: loginResponse.data.is_merchant,
            });

            // Log login response for debugging
            console.log("Login response:", loginResponse.data);

            // Handle successful login (e.g., navigate to home screen)
            // This part depends on your application's structure
          } catch (error) {
            console.error(error);

            let backendErrorMessage =
              "An error occurred. Please try again later.";

            if (error.response && error.response.data) {
              const statusCode = error.response.status;

              switch (statusCode) {
                case 400:
                  backendErrorMessage =
                    "Invalid request. Please check your input and try again.";
                  break;
                case 401:
                  backendErrorMessage =
                    "Unauthorized. Please check your credentials and try again.";
                  break;
                case 403:
                  backendErrorMessage =
                    "Forbidden. You don't have permission to access this resource.";
                  break;
                case 404:
                  backendErrorMessage =
                    "Resource not found. Please check the URL and try again.";
                  break;
                // Add more cases for other common HTTP status codes as needed
                default:
                  break;
              }
            }

            // Assuming setBackendError is a function to update the UI with the error message
            setBackendError(backendErrorMessage);
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
            <Headings style={styles.title} texts="Log In" />

            <TextInput
              style={styles.input}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="e-mail"
              placeholderTextColor="white"
              onChangeText={handleChange("email")}
            />

            {errors.email && touched.email && (
              <Texts style={styles.errorText} texts={errors.email} />
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
              <Texts style={styles.errorText} texts={errors.password} />
            )}
            <Texts style={styles.authErrorText} texts={backendError} />
            <View style={styles.buttonContainer}>
              <CustomButton2
                style={styles.customSubmitButton}
                onPress={handleSubmit}
                title="Submit"
                disabled={!values.email && !values.password}
              />
              <CustomButton2
                style={styles.customSubmitButton}
                onPress={() => navigation.navigate("RegistrationScreen")}
                title="Don't Have An Account YET?"
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#0C0404",
  },
  container: {
    marginTop: 180,
    padding: 15,
  },
  buttonContainer: {
    paddingTop: 50,
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
    fontSize: 15,
  },
  errorText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f60b29",
    marginLeft: 20,
  },
  authErrorText: {
    fontSize: 16,
    color: "#f60b29",
    textAlign: "center",
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
    fontSize: 50,
    alignItems: "center",
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  body: {
    margin: 24,
    fontSize: 12,
    color: "#D9D9D9",
  },
});

export { LogInScreen };
