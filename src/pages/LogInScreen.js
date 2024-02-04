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

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be between 8 to 25 characters")
    .max(25, "Password must be between 8 to 25 characters")
    .required("Required")
    .matches(/[a-z]+/, "One lowercase character")
    .matches(/[A-Z]+/, "One uppercase character")
    .matches(/\d+/, "One number"),
});

const LogInScreen = (props) => (
  <Formik
    validationSchema={signUpValidationSchema}
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={(values) => console.log(values)}
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

        <Button
          onPress={handleSubmit}
          title="Submit"
          disabled={!isValid || values.email === ""}
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
