import { View } from "react-native";
import React from "react";
import { Texts } from "../atoms/headings";
import { StyleSheet } from "react-native-web";

const CategoryInfo = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Texts texts={props.headingTexts} style={styles.heading} />
      </View>

      <View style={styles.subHeadingContainer}>
        <Texts texts={props.subTexts} style={styles.subHeading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  heading: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },
  subHeadingContainer: {
    marginVertical: -16,
  },
  subHeading: {
    color: "#000000",
    fontWeight: "light",
    fontSize: 25,
  },
});

export { CategoryInfo };
