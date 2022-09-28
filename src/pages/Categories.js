import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import buttonArray from "../assets/data/buttonArray";
import theme from "../assets/themes/theme";

const Categories = ({ item, index }) => {
  return (
    <ScrollView horizontal style={buttonArray.scrollView}>
      {buttonArray.map((item) => (
        <TouchableOpacity key={item.id} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "yellow",
    borderRadius: 45,
    height: 65,
    width: 125,
    marginTop: theme.spacing.xs,
    marginHorizontal: theme.spacing.sm,
    marginBottom: theme.spacing.m,
    borderColor: "#0000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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

export default Categories;
