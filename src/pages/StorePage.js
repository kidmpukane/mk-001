import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

//Organisms
import { CollectionLink } from "../components/organisms/CollectionLink";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Data fetching Hooks
import { useStoreInfo } from "../hooks/useGetUserInfo";

const StorePage = ({ route }) => {
  const { id } = route.params;
  const storeInfoUrl = `http://10.0.2.2:8000/api/store/get-tertiary-collections/${id}/`;
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
                uri: item
                  ? `http//10.0.2.2:8000/${item.collection_image}`
                  : "Nothing To Display...",
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

const MenPage = ({ route }) => {
  const { id } = route.params;
  const storeInfoUrl = `http://10.0.2.2:8000/api/store/get-secondary-collections/${id}/`;
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
                uri: item
                  ? `http://10.0.2.2:8000/${item.collection_image}`
                  : "Nothing To Display...",
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

const WomenPage = ({ route }) => {
  const { id } = route.params;
  const storeInfoUrl = `http://10.0.2.2:8000/api/store/get-primary-collections/${id}/`;
  const { isLoading, isError, error, data } = useStoreInfo(storeInfoUrl);
  const navigation = useNavigation();
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  console.log(data ? data[0] : "none");
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
                uri: item
                  ? `http://10.0.2.2:8000/${item.collection_image}`
                  : "Nothing To Display...",
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
