import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import theme from "../assets/themes/theme";
import imageGallery from "../assets/data/imageGallery";

const UploadScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);

  return (
    <ScrollView style={styles.layout}>
      <View>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: "https://images.unsplash.com/photo-1503595855261-9418f48a991a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Write a description......"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Set the price......"
          keyboardType="numeric"
        />
 
        <Button title="Post" style={styles.button} />
        <Text style={styles.heading}>Select Images</Text>
        <View style={styles.galleryContainer}>
          {imageGallery.map((item) => (
            <Image
              key={item.id}
              style={styles.galleryImage}
              source={{ uri: item.gallery }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
  },
  heading: {
    margin: 24,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    padding: 8,
  },
  button: {
    padding: 8,
  },
  imageBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.xl,
    marginBottom: theme.spacing.xs,
    marginHorizontal: theme.spacing.sm,
    paddingHorizontal: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    justifyContent: "center",
  },
  galleryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
    marginBottom: theme.spacing.m,
  },
  galleryImage: {
    height: theme.imageHeight.l,
    width: theme.imageHeight.l,
    margin: 2,
    width: Dimensions.get("window").width / 4 - 9,
    alignItems: "center",
  },
});

export { UploadScreen };
