import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import theme from "../../assets/themes/theme";
import postsData from "../../assets/data/postsData";
import CardContent from "./CardContent";

const Cards = (props) => {
  return (
    <>
      {postsData.map((posts) => (
        <ImageBackground
          source={{ uri: posts.background }}
          style={styles.imageBackground}
          onPress={() =>
            navigation.navigate("Product Page", {
              album: item,
            })
          }
        >
          <CardContent />
        </ImageBackground>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    
    overflow: "hidden",
    height: theme.imageHeight.xl,
    marginTop: theme.spacing.s,
    marginBottom: theme.spacing.xs,
    marginHorizontal: theme.spacing.sm,
    paddingHorizontal: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    justifyContent: "center",
  },
  imageContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
});

export default Cards;
