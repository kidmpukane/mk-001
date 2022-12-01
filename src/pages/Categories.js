import React from "react";
import { CustomButton } from "../components/atoms/buttons";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import buttonArray from "../assets/data/buttonArray";
import theme from "../assets/themes/theme";

const Categories = ({ item, index }) => {
  return (
    <ScrollView horizontal style={buttonArray.scrollView}>
      {buttonArray.map((item) => (
        <CustomButton
          key={item.id}
          title={item.name}
          style={styles.buttonContainer}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 45,
    height: 65,
    width: 125,
    marginTop: theme.spacing.xs,
    marginHorizontal: theme.spacing.sm,
    marginBottom: theme.spacing.m,

  },
  scrollView: {
    padding: 20,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
});


{/*
        <TouchableOpacity key={item.id} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
 */}

export default Categories;
