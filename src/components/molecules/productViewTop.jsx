import { View, StyleSheet } from "react-native";
import { Headings, Texts } from "../atoms/headings";
import React from "react";
import { CustomButton2 } from "../atoms/buttons";

const ProductViewTop = (props) => {
  return (
    <View>
      <Headings
        texts={props.productName}
        style={styles.productTopViewHeading}
      />
      <Headings
        texts={props.secondaryName}
        style={styles.productTopViewHeading2}
      />
      <CustomButton2
        style={styles.ProductViewScrollCustomButton}
        title="Buy Now"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productTopViewHeading: {
    fontSize: 30,
  },
  productTopViewHeading2: {
    fontSize: 20,
    marginTop: 20,
    color: "grey",
  },

  ProductViewScrollCustomButton: {
    marginTop: 70,
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
  },
});

export { ProductViewTop };
