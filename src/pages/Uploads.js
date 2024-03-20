import React, { useState } from "react";
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
  const [storeInfoUrl, setStoreInfoUrl] = useState(
    "http://10.0.2.2:8000/api/products/all-products"
  );

  const { isLoading, isError, data, error } = useStoreInfo(storeInfoUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }
  if (isError) {
    <Text>{error.message}</Text>;
  } else {
    <Text>Error Couldn't Load Information</Text>;
  }
  // console.log(data ? data : "loading...");

  const handleClick = (item) => {
    fetch("http://10.0.2.2:8000/api/products/find-nearest-neighbors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        // Handle response from the endpoint if needed
      })
      .catch((error) => {
        // Handle errors
      });

    setStoreInfoUrl("http://10.0.2.2:8000/api/products/find-nearest-neighbors");
  };
  // console.log(
  //   data ? data.all_products[0].product_image : "Nothing to display..."
  // );
  return (
    <>
      {data &&
        data.all_products?.map((item, index) => (
          <ImageBackground
            key={index}
            source={{
              uri: item
                ? `http://10.0.2.2:8000/${item.product_image}`
                : "Loading...",
            }}
            style={styles.imageBackground}
          >
            <View style={styles.mainContainer}>
              <View style={styles.leftSideButtonContainer}>
                <TouchableOpacity
                  style={styles.contentContainer}
                  title="ProductPage"
                  onPress={() => handleClick(item)}
                >
                  <Pressable
                    title="Profile"
                    onPress={() =>
                      navigation.navigate("Profile", { item: item })
                    }
                  >
                    <Image
                      source={{
                        uri: "https://i.pinimg.com/564x/79/3b/b3/793bb33bbce6c8d6beabc9c02c965fff.jpg",
                      }}
                      style={styles.contentImg}
                    />
                  </Pressable>
                  <Text style={styles.contentTitle}>{item.product_name}</Text>
                  <Text style={styles.contentText}>{item.product_colours}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rightSideButtonContainer}>
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={() => console.log({ item: item.id })}
                >
                  <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.escapeButton}
                  onPress={() => console.log({ item: item.id })}
                >
                  <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => console.log({ item: item.id })}
                >
                  <Text>3</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        ))}
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
  },
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
    paddingHorizontal: 10,
    paddingVertical: 40,
    marginBottom: theme.spacing.s,
    marginHorizontal: 2,
    paddingHorizontal: theme.spacing.m,
    borderRadius: 20,
    backgroundColor: "#000",
  },
  searchButton: {
    justifyContent: "center",
    opacity: 0.6,
    paddingHorizontal: 8,
    paddingVertical: 19,
    paddingHorizontal: theme.spacing.m,
    borderRadius: 12,
    backgroundColor: "#000",
  },
  escapeButton: {
    textAlign: "center",
    opacity: 0.6,
    marginTop: -6,
    paddingHorizontal: 8,
    paddingVertical: 19,
    paddingHorizontal: theme.spacing.m,
    borderRadius: 12,
    backgroundColor: "#000",
  },
  addButton: {
    textAlign: "center",
    opacity: 0.6,
    paddingHorizontal: 8,
    marginTop: -6,
    paddingTop: 32,
    paddingVertical: 32,
    paddingHorizontal: theme.spacing.m,
    borderRadius: 12,
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
  leftSideButtonContainer: {
    width: "85%",
    marginTop: 390,
  },
  rightSideButtonContainer: {
    width: "15%",
    marginTop: 380,
    justifyContent: "space-evenly",
  },
});

export default Uploads;
