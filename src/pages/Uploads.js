import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import uploadData from "../assets/data/uploadData";
import theme from "../assets/themes/theme";
import { useNavigation } from "@react-navigation/native";
import storeDataDB from "../assets/data/storeDataDB";

const Uploads = ({ item }) => {
  const navigation = useNavigation();

  return (
    <>
      {storeDataDB.map((item) => (
        <ImageBackground
          key={item.id}
          source={{ uri: item.collections }}
          style={styles.imageBackground}
        >
          <TouchableOpacity
            style={styles.contentContainer}
            title="ProductPage"
            onPress={() => navigation.navigate("ProductViewScreen", {
              profile: item
            })}
          >
            <Pressable
              title="Profile" 
              onPress={() => navigation.navigate("Profile")}>
              <Image
                source={{ uri: item.store_profile_picture }}
                style={styles.contentImg}
              />
            </Pressable>
            <Text style={styles.contentTitle}>{item.store_title}</Text>
            <Text style={styles.contentText} numberOfLines={3}>
              {item.store_description}
            </Text>
            <Text style={styles.contentText}>{item.store_title}</Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </>
  );
}; 
const styles = StyleSheet.create({
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
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
  contentContainer: {
    textAlign: "center",
    opacity: 0.6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginTop: 165,
    marginBottom: theme.spacing.xs,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    backgroundColor: "#000",
  },
  contentImg: {
    opacity: 0.6,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  contentTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  contentText: {
    color: "#FFF",
  },
});

export default Uploads;
