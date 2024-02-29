import React, { useContext } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
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
  return (
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
            User Registration Screen
          </Text>

          <TextInput
            style={styles.input}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="E-mail"
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
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="white"
            onChangeText={handleChange("password")}
          />

          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TextInput
            style={styles.input}
            onBlur={handleBlur("re_password")}
            value={values.re_password}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="white"
            onChangeText={handleChange("re_password")}
          />

          {errors.re_password && touched.re_password && (
            <Text style={styles.errorText}>{errors.re_password}</Text>
          )}

          <Button
            onPress={handleSubmit}
            title="Submit"
            disabled={!isValid || values.email === ""}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", marginRight: 10 }}>
              Become A Merchant:
            </Text>
            <Switch
              value={values.is_merchant}
              onValueChange={(value) => {
                handleChange("is_merchant")({
                  target: { value, name: "is_merchant" },
                });
              }}
            />
          </View>

          <Button
            onPress={() => navigation.navigate("LogInScreen")}
            title="Already Have An Account"
          />
        </View>
      )}
    </Formik>
  );
};

export { RegistrationScreen };

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
