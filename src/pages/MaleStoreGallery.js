import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { GalleryPageTop } from "../components/organisms/StorePageTop";
import { CategoryCard } from "../components/molecules/categoryCard";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";

const MaleStoreGallery = (props) => {
  const { item } = props.route.params;
  const parsedItem = JSON.parse(item); // Parse the item here
  const navigation = useNavigation();
  const storeInfoUrl = `http://10.0.2.2:8000/api/products/secondary-products-for-collections/${parsedItem?.id}/`;
  const { isLoading, isError, data, error } = useStoreInfo(storeInfoUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }
  if (isError) {
    <Text>{error.message}</Text>;
  } else {
    <Text>Error Couldn't Load Information</Text>;
  }

  console.log(data ? data?.collections : "loading...");
  console.log(parsedItem ? parsedItem.id : "Oh my...");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0C0404",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {data ? (
          data?.map((item) => (
            <View key={item.id}>
              <CategoryCard
                onPress={() => {
                  navigation.navigate("ProductViewScreen", { item: item });
                }}
                productImage={
                  item
                    ? `http://10.0.2.2:8000/${item.product_image} `
                    : "darn..."
                }
                productPrimaryHeading={item.product_name}
                productSubHeading={item.product_colours}
              />
            </View>
          ))
        ) : (
          <Text>Error</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  columnStyling: {
    height: 450,
    width: "100%",
  },
});

export { MaleStoreGallery };
