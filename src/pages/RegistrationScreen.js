import React, { useContext, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Switch,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../authProviders/AuthenticationContext";
import { Headings, Texts } from "../components/atoms/headings";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be between 8 to 25 characters")
    .max(25, "Password must be between 8 to 25 characters")
    .required("Required")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "One number"),
  re_password: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  is_merchant: Yup.boolean().required("Required"),
});

const RegistrationScreen = (props) => {
  const navigation = useNavigation();
  const { authInfo, updateAuthInfo } = useContext(AuthenticationContext);
  const [backendError, setBackendError] = useState("");
  return (
    <ScrollView style={styles.layout}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          email: "",
          password: "",
          re_password: "",
          is_merchant: false,
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
            const registrationResponse = await axios.post(
              "http://10.0.2.2:8000/accounts/register",
              values,
              {
                headers: {
                  "X-CSRFToken": csrfResponse.data.csrf_token,
                },
              }
            );

            // Update the authentication context with the new CSRF token, session ID, and user ID
            updateAuthInfo({
              authCookie: registrationResponse.data.csrf_token,
              sessionToken: registrationResponse.data.sessionid,
              userId: registrationResponse.data.user_id,
              isMerchant: registrationResponse.data.is_merchant,
            });

            // Uncomment the following line when you have a working API endpoint
            console.log("Registration Response:", registrationResponse.data);
            navigation.navigate("UserProfileFormScreen", {
              item: registrationResponse.data,
            });
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
            <Headings style={styles.title} texts="Register" />

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

            <TextInput
              style={styles.input}
              onBlur={handleBlur("re_password")}
              value={values.re_password}
              placeholder="confirm Password"
              secureTextEntry={true}
              placeholderTextColor="white"
              onChangeText={handleChange("re_password")}
            />

            {errors.re_password && touched.re_password && (
              <Texts style={styles.errorText} texts={errors.re_password} />
            )}
            <Texts style={styles.authErrorText} texts={backendError} />

            <View style={styles.switchContainer}>
              <Texts style={styles.switchText} texts="Become A Merchant:" />

              <Switch
                value={values.is_merchant}
                onValueChange={(value) => {
                  handleChange("is_merchant")({
                    target: { value, name: "is_merchant" },
                  });
                }}
              />
            </View>
            <CustomButton2
              style={styles.customSubmitButton}
              onPress={handleSubmit}
              title="Submit"
              disabled={!isValid || (!values.email && !values.password)}
            />

            <CustomButton2
              style={styles.customSubmitButton}
              onPress={() => navigation.navigate("LogInScreen")}
              title="Already Have An Account"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export { RegistrationScreen };

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#0C0404",
  },
  container: {
    marginTop: 100,
    padding: 15,
  },
  authErrorText: {
    fontSize: 16,
    color: "#f60b29",
    textAlign: "center",
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
  switchText: {
    color: "white",
    marginRight: 50,
    fontSize: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
