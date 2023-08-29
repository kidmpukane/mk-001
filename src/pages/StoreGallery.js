import { View, Text } from "react-native";
import React from "react";

const StoreGallery = () => {
  return (
    <View>
      <Text>StoreGallery</Text>
    </View>
  );
};

export { StoreGallery };

{
  /*

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GalleryPageTop } from "../components/organisms/StorePageTop";
import { HorizontalScroll } from "../components/organisms/HorizontalScroll";
import { UseGetStoresInfo } from "../hooks/useGetUserInfo";

const StoreGallery = () => {
  const { isLoading, isError, data, error } = UseGetStoresInfo();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#292929",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          {data ? (
            data?.map((item, index) => (
              <GalleryPageTop
                galleryDisplayImage=""
                galleryHeading="Nothing"
                galleryDescription="Non"
              />
            ))
          ) : (
            <View>
              <Text>{error.message}</Text>
            </View>
          )}
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll />
        </View>
      </ScrollView>
    </View>
  );
};

export { StoreGallery };

*/
}
