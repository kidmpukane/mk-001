import { View, Text, ScrollView } from "react-native";
import React from "react";
import { GalleryPageTop } from "../components/organisms/StorePageTop";
import { HorizontalScroll } from "../components/organisms/HorizontalScroll";

const MaleStoreGallery = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#292929",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <GalleryPageTop
            galleryDisplayImage=""
            galleryHeading="Nothing"
            galleryDescription="Non"
          />
        </View>

        <View
          style={{
            height: 470,
            width: "100%",
          }}
        >
          <HorizontalScroll
            categoryContainerHeading="Watches"
            productPrimaryHeading="Rolex OysterFlex Daytona"
            productSubHeading="Rose Gold/Green Band"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export { MaleStoreGallery };
