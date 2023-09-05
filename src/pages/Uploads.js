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
import productsAPI from "../assets/data/productsAPI";
import { useStoreInfo } from "../hooks/useGetUserInfo";

const Uploads = ({ item }) => {
  const navigation = useNavigation();
  const storeInfoUrl = `http://192.168.0.106:3000/collections`;

  const { isLoading, isError, data, error } = useStoreInfo(storeInfoUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }
  if (isError) {
    <Text>{error.message}</Text>;
  } else {
    <Text>Error Couldn't Load Information</Text>;
  }
  console.log(data ? data : "loading...");

  return (
    <>
      {data.map((item) => (
        <ImageBackground
          key={item.id}
          source={{ uri: item.product_image }}
          style={styles.imageBackground}
        >
          <TouchableOpacity
            style={styles.contentContainer}
            title="ProductPage"
            onPress={() =>
              navigation.navigate("ProductViewScreen", { item: item })
            }
          >
            <Pressable
              title="Profile"
              onPress={() => navigation.navigate("Profile", { item: item })}
            >
              <Image
                source={{
                  uri: "https://i.pinimg.com/564x/79/3b/b3/793bb33bbce6c8d6beabc9c02c965fff.jpg",
                }}
                style={styles.contentImg}
              />
            </Pressable>
            <Text style={styles.contentTitle}>{item.product_name}</Text>
            <Text style={styles.contentText}>{item.colours}</Text>
            <Text numberOfLines={3} style={styles.contentText}>
              {item.product_description}
            </Text>
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
    height: theme.imageHeight.xxl,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.s,
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
    marginTop: 400,
    marginBottom: theme.spacing.s,
    marginHorizontal: 2,
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
