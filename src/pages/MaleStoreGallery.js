import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { GalleryPageTop } from "../components/organisms/StorePageTop";
import { CategoryCard } from "../components/molecules/categoryCard";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { useNavigation } from "@react-navigation/native";

const MaleStoreGallery = (props) => {
  const navigation = useNavigation();
  const storeInfoUrl = "http://192.168.0.106:3000/male_shoes";
  const { isLoading, isError, data, error } = useStoreInfo(storeInfoUrl);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#292929",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {data ? (
          data?.map((item, index) => (
            <View key={index}>
              <CategoryCard
                onPress={() => {
                  navigation.navigate("Testmol", { item: item });
                }}
                productImage={item.product_image}
                productPrimaryHeading={item.name}
                productSubHeading={item.colours}
              />
            </View>
          ))
        ) : (
          <Text>Error Error</Text>
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
