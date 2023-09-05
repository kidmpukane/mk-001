import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { GalleryPageTop } from "../components/organisms/StorePageTop";
import { CategoryCard } from "../components/molecules/categoryCard";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";

const MaleStoreGallery = (props) => {
  const { item } = useLocalSearchParams();
  const navigation = useNavigation();
  const storeInfoUrl = `http://192.168.0.106:3000/male_divider/${item.id}/?_embed=collections`;
  const { isLoading, isError, data, error } = useStoreInfo(storeInfoUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }
  if (isError) {
    <Text>{error.message}</Text>;
  } else {
    <Text>Error Couldn't Load Information</Text>;
  }

  console.log(data ? data?.collections : "fuckenewl...");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#292929",
      }}
    >
      <Text>Allo</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data ? (
          data?.collections.map((item, index) => (
            <View key={item.id}>
              <CategoryCard
                onPress={() => {
                  navigation.navigate("ProductViewScreen", { item: item });
                }}
                productImage={item.product_image}
                productPrimaryHeading={item.name}
                productSubHeading={item.colours}
                // productImage="No Images"
                // productPrimaryHeading="No Info"
                // productSubHeading="No Colours"
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
