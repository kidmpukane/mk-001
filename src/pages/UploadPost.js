import * as React from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Headings, Texts } from "../components/atoms/headings";
import { Formik, useFormik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { CustomButton2 } from "../components/atoms/buttons";
import theme from "../assets/themes/theme";



export const UploadScreen = (props) => (
  <ScrollView style={styles.layout}>
    <Formik
      

      initialValues={{
        category: "",
        category_tag: "",
        description: "",
        price: "",
        discount_price: "",
        colour: "",
        images: "",
      }}
      onSubmit={
        (values) => console.log(values)
      }
    >
      {({ 
        
        handleChange, 
        handleBlur, 
        handleSubmit, 
        values }) => (

        <View>

          <Headings style={styles.title} texts="Select Image" />

          <Texts
            style={styles.body}
            texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
          />

          <CustomButton2
            title="Select Image"
            onPress={

              async () => {

                try {
                  let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: false,
                    allowsMultipleSelection: true,
                    aspect: [4, 3],
                    quality: 1,
                  });
            
                  let data = {
                    type: result.type,
                    uri: result.uri,
                  }
                  
            
                  console.log(data);
            
                  //console.log(result);
                  setImage(result.uri);
                } catch (error) {
                  console.log(error);
                }
              }

            }
            style={styles.customButton}
          />

          <Headings style={styles.title} texts="Fill In Information" />

          <Texts
            style={styles.body}
            texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
          />

          <TextInput
            style={styles.input}
            placeholder="Category"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("category")}
            value={values.category}
          />

          <TextInput
            style={styles.input}
            placeholder="Category Tag"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("category_tag")}
            value={values.category_tag}
          />

          <TextInput
            style={styles.input}
            placeholder="Description"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("description")}
            value={values.description}
          />

          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("title")}
            value={values.title}
          />

          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor="white"
            type="number"
            onChange={handleChange("price")}
            value={values.price}
          />

          <TextInput
            style={styles.input}
            placeholder="Discount Price"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("discount_Price")}
            value={values.discount_Price}
          />

          <TextInput
            style={styles.input}
            placeholder="Colour"
            placeholderTextColor="white"
            type="text"
            onChange={handleChange("colour")}
            value={values.colour}
          />

          <CustomButton2
            title="Submit Form"
            onPress={handleSubmit}
            style={styles.customSubmitButton}
          />

          <Texts
            style={styles.body}
            texts="Select the images you wish to upload one at a time."
          />
        </View>
      )}
    </Formik>
  </ScrollView>
);

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "#292929",
  },
  customButton: {
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,

    marginHorizontal: 4,
    paddingHorizontal: 4,
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
  coverImage: {
    marginTop: 30,
    width: "100%",
    height: 350,
    resizeMode: "cover",
    overflow: "hidden",
    marginBottom: 10,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    borderRadius: 50,
    justifyContent: "center",
  },
  title: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  body: {
    margin: 24,
    fontSize: 12,
    color: "#D9D9D9",
  },
  galleryContainer: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
    marginBottom: theme.spacing.m,
  },
  galleryImage: {
    height: 50,
    width: 50,
    margin: 2,
    alignItems: "center",
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
    fontSize: 15,
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

