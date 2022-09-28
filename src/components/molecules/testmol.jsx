import { ScrollView, Text, View } from "react-native";
import { ProductImages } from "../atoms/Images";
import { Headings, Texts } from "../atoms/headings";
import { CustomButton } from "../atoms/buttons";
import React from "react";
import { ProductViewTop, ProductViewScroll } from "./productViewTop";

const Testmol = (props) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#292929",
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: 500,
          }}
        >
          <ProductImages
            source={{
              uri: "https://assets.givenchy.com/m/64034cb69cd4654a/High_Resolution_JPG-BH603FH14A001-03-04.jpg?imwidth=1024",
            }}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              backgroundColor: "#292929",
            }}
          />
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <ProductViewTop />
          </View>
        </View>
        <View
          style={{
            paddingTop: 80,
          }}
        >
          <ProductViewScroll />
        </View>
      </ScrollView>
    </View>
  );
};

export { Testmol };
