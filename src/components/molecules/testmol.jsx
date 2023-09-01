import { ScrollView, Text, View } from "react-native";
import { useGetItemById } from "../../hooks/useGetUserInfo";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const Testmol = () => {
  const { item } = useLocalSearchParams();
  //const { item } = route.params
  let num = 2;
  const hyperLinkUrl = `http://192.168.0.106:3000/male_shoes/${item.id}`;
  const { isLoading, isError, data, error } = useGetItemById(hyperLinkUrl);

  if (isLoading) {
    <Text>Loading...</Text>;
  }

  if (isError) {
    <Text>{error.message}</Text>;
  }

  console.log(data ? data : error);

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Text>{data ? data.name : "Loading..."}</Text>
      <Text>{data ? data.colours : "Loading..."}</Text>
    </View>
  );
};

export { Testmol };
