import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../assets/themes/theme";
import { useNavigation } from "@react-navigation/native";

function CreatePost() {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        title="ProductUpload"
        onPress={() => navigation.navigate("ProductUpload")}
      >
        <View>
          <Ionicons name="add-outline" size={32} color={theme.colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 52,
    height: 52,
    margin: 5,
    backgroundColor: "#3D3D3D",
    borderColor: "#D9D9D9",
    marginHorizontal: theme.spacing.xxl,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export { CreatePost };
