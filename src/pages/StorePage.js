import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

//Organisms
import { CollectionLink } from "../components/organisms/CollectionLink";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Data fetching Hooks
import { useStoreInfo } from "../hooks/useGetUserInfo";

const StorePage = () => {
  const storeInfoUrl = "http://192.168.0.106:3000/explore_divider";
  const { isLoading, isError, error, data } = useStoreInfo(storeInfoUrl);
  const navigation = useNavigation();
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {data ? (
        data?.map((item, index) => (
          <View key={index} style={styles.subContainer}>
            <CollectionLink
              headingTexts={item.collection_title}
              subTexts={item.collection_subtitle}
              onPress={() => console.log("pressed")}
              source={{
                uri: item.collection_cover_image,
              }}
            />
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const MenPage = () => {
  const storeInfoUrl = "http://192.168.0.106:3000/male_divider";
  const { isLoading, isError, error, data } = useStoreInfo(storeInfoUrl);
  const navigation = useNavigation();
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {data ? (
        data?.map((item, index) => (
          <View key={index} style={styles.subContainer}>
            <CollectionLink
              headingTexts={item.collection_title}
              subTexts={item.collection_subtitle}
              onPress={() =>
                navigation.navigate("MaleStoreGallery", { item: item })
              }
              source={{
                uri: item.collection_cover_image,
              }}
            />
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const WomenPage = () => {
  const storeInfoUrl = "http://192.168.0.106:3000/women's_divider";
  const { isLoading, isError, error, data } = useStoreInfo(storeInfoUrl);
  const navigation = useNavigation();
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {data ? (
        data?.map((item, index) => (
          <View key={index} style={styles.subContainer}>
            <CollectionLink
              headingTexts={item.collection_title}
              subTexts={item.collection_subtitle}
              onPress={() => navigation.navigate("FemaleStoreGallery")}
              source={{
                uri: item.collection_cover_image,
              }}
            />
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
  },
  subContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export { StorePage, WomenPage, MenPage };
