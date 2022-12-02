import { ScrollView, Text, View } from "react-native";
import { ProductImages } from "../atoms/Images";
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
      <Text>Test Molecule</Text>
    </View>
  );
};

export { Testmol };
