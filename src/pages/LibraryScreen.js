import * as React from "react";
import { useState } from "react";
import {
  Image,
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { Headings, Texts } from "../components/atoms/headings";
import { CustomButton2 } from "../components/atoms/buttons";

export default function LibraryScreen() {

  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },

  } = useForm({

    defaultValues: {
      category: "",
      title: "",
      category_tag: "",
      description: "",
      price: "",
      discount_price: "",
      colour: "",
      image: "",

    },
  });
  const onSubmit = (data) => console.log(data);


  
  const imageUploader = async (data) => {
 
        try {

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });

      let imageData = {
        type: result.type,
        uri: result.uri,
      };

      
      const data = new FormData();
      data.append("image", imageData);
      

      console.log(imageData);

      console.log(result);
      setImage(result.uri);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.layout}>
      <View>
        <Headings style={styles.title} texts="Select Image" />
        <Texts
          style={styles.body}
          texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
        />
        {image && <Image source={{ uri: image }} style={styles.coverImage} />}
        <CustomButton2
          title="Select Image"
          onPress={()=>{
            imageUploader();
          }}
          style={styles.customButton}
        />
      </View>
      <Headings style={styles.title} texts="Fill In Information" />

      <Texts
        style={styles.body}
        texts="Select the images you wish to upload one at a time, they will appear on the carousel below. You can select and delete the ones you no longer wish to upload. Bare in mind that this is a temporary feature and will be addressed in the Beta release."
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Category"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="category"
      />
      {errors.category && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Category Tag"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="category_tag"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Description"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Title"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Price"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="price"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Discount Price"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="discount_price"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Colour"
            placeholderTextColor="white"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="colour"
      />

      <CustomButton2
        title="Submit"
        style={styles.customSubmitButton}
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
}

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
    fontSize: 20,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  body: {
    margin: 24,
    fontSize: 12,
    color: "#D9D9D9",
  },
  coverImage: {

    width: "98%",
    height: 350,
    resizeMode: "cover",
    overflow: "hidden",
    marginBottom: 20,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    borderRadius: 50,
    justifyContent: "center",
  },
});
