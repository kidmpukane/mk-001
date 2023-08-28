import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

//Organisms
import { CollectionLink } from "../components/organisms/CollectionLink";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Data fetching Hooks
import {
  UseGetCollectionInfo,
  UseGetCollectionInfo2,
  UseGetCollectionInfo3,
} from "../hooks/useGetUserInfo";

const StorePage = () => {
  const { isLoading, isError, error, data } = UseGetCollectionInfo3();
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
  const { isLoading, isError, error, data } = UseGetCollectionInfo();
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
              onPress={() => navigation.navigate("StoreGallery")}
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
  const { isLoading, isError, error, data } = UseGetCollectionInfo2();
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
              onPress={() => navigation.navigate("StoreGallery")}
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
