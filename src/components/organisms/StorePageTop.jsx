import { StyleSheet, Text, View } from "react-native";
import { ProductImages } from "../atoms/Images";
import { Headings, Texts } from "../atoms/headings";
import React from "react";

const StorePageTop = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ProductImages
          source={{
            uri: props.storeDisplayImage,
          }}
          style={styles.productImages}
        />
      </View>

      <View style={styles.bottomSubContainer}>
        <Headings texts={props.storeNameHeading} style={styles.headingStyles} />
        <Texts texts={props.storeDescription} style={styles.textStyles} />
      </View>
    </View>
  );
};

const GalleryPageTop = (props) => {
  return (
    <View style={styles.galleryTopContainer}>
      <View style={styles.subContainer}>
        <ProductImages
          source={{
            uri: "https://www.kolpaper.com/wp-content/uploads/2020/12/Rolex-Wallpaper-iPhone.jpg",
          }}
          style={styles.productImages}
        />
      </View>

      <View style={styles.bottomSubContainer}>
        <Headings texts={props.galleryHeading} style={styles.headingStyles} />
        <Texts texts={props.galleryDescription} style={styles.textStyles} />
      </View>
    </View>
  );
};

export { StorePageTop, GalleryPageTop };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0404",
  },

  subContainer: {
    padding: 2,
    paddingTop: 10,
    width: "100%",
    height: 450,
    backgroundColor: "#0C0404",
  },

  productImages: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#0C0404",
  },

  bottomSubContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  textStyles: {
    color: "#D9D9D9",
    fontSize: 15,
    fontWeight: "light",
  },

  headingStyles: {
    fontSize: 24,
  },

  galleryTopContainer: {
    flex: 1,
  },
});
