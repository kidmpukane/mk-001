import { ScrollView, Text, View } from "react-native";
import { useGetItemById } from "../../hooks/useGetUserInfo";
import React from "react";

const Testmol = () => {
  const hyperLinkUrl = "http://192.168.0.106:3000/male_bags";
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
      {data ? (
        data?.map((item, index) => (
          <View key={item.id}>
            <Text>{item.product_name}</Text>
          </View>
        ))
      ) : (
        <Text>Error</Text>
      )}
    </View>
  );
};

export { Testmol };
