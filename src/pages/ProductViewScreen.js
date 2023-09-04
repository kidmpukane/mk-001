import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

//Atoms
import { ProductImages } from "../components/atoms/Images";
import { ProductViewTop } from "../components/molecules/productViewTop";
import { useGetItemById } from "../hooks/useGetUserInfo";
import { useLocalSearchParams } from "expo-router";

const ProductViewScreen = (props) => {
  const { item } = useLocalSearchParams();
  const hyperLinkUrl = `http://192.168.0.106:3000/male_shoes/${item.id}`;
  const { isLoading, isError, data, error } = useGetItemById(hyperLinkUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }

  if (isError) {
    <Text>{error.message}</Text>;
  }

  console.log(data ? data : error);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <ProductImages
            source={{
              uri: data ? data.product_image : "Loading...",
            }}
            style={styles.productImage}
          />
          <View style={styles.productViewTopStyles}>
            <ProductViewTop
              productName={data ? data.name : "Loading..."}
              secondaryName={data ? data.colours : "Loading..."}
            />
          </View>
        </View>
        <View style={styles.productViewScrollStyles}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    padding: 2,
    backgroundColor: "#292929",
  },
  subContainer: {
    flex: 1,
    width: "100%",
  },
  productImage: {
    height: 500,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929",
  },
  productViewTopStyles: {
    padding: 10,
  },
});

export { ProductViewScreen };
