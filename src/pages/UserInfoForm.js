import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const UserInfoForm = () => {
  const { item } = useLocalSearchParams();
  console.log(item);
  return (
    <View>
      <Text>This is the form of user id: {item}</Text>
    </View>
  );
};

export { UserInfoForm };

const styles = StyleSheet.create({});
