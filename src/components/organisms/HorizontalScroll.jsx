import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

//Atoms
import { Headings } from "../atoms/headings";

//Molecules
import { CategoryCard } from "../molecules/categoryCard";

//Navigation

const HorizontalScroll = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.subContainer}>
        <Headings
          texts={props.categoryContainerHeading}
          style={styles.heading}
        />
        <Headings texts="See All" />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>

        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>

        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>

        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>

        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>

        <View style={styles.categoryCardSubContainer}>
          <CategoryCard
            productPrimaryHeading={props.productPrimaryHeading}
            productSubHeading={props.productSubHeading}
          />
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  subContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
  },
  categoryCardSubContainer: {
    width: "10%",
    flex: 1,
    height: 250,
  },
});

export { HorizontalScroll };
