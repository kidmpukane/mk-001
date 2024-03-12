import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";
//Organisms
import { CollectionLink } from "../components/organisms/CollectionLink";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Data fetching Hooks
import { useStoreInfo } from "../hooks/useGetUserInfo";

const StorePage = ({ route }) => {
  const { id } = route.params;
  const collectionStatus = "tertiary";
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
            <View>
              <CustomOpacity
                style={styles.customButton}
                title="Edit Collection"
                onPress={() =>
                  navigation.navigate("EditStoreCollectionForm", {
                    item: JSON.stringify(item),
                    collectionStatus: collectionStatus,
                  })
                }
              />
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
      {data ? (
        <View>
          <CustomButton2
            style={styles.customButton2}
            title="Create Collection"
            onPress={() =>
              navigation.navigate("CreateStoreCollectionForm", {
                item: data[0], // Access the first item in the data array
                collectionStatus: collectionStatus,
              })
            }
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

const MenPage = ({ route }) => {
  const { id } = route.params;
  const collectionStatus = "secondary";
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
                navigation.navigate("MaleStoreGallery", {
                  item: JSON.stringify(item),
                })
              }
              source={{
                uri: item
                  ? `http://10.0.2.2:8000/${item.collection_image}`
                  : "Nothing To Display...",
              }}
            />
            <View>
              <CustomOpacity
                style={styles.customButton}
                title="Edit Collection"
                onPress={() =>
                  navigation.navigate("EditStoreCollectionForm", {
                    item: JSON.stringify(item),
                    collectionStatus: collectionStatus,
                  })
                }
              />
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
      {data ? (
        <View>
          <CustomButton2
            style={styles.customButton2}
            title="Create Collection"
            onPress={() =>
              navigation.navigate("CreateStoreCollectionForm", {
                item: data[0], // Access the first item in the data array
                collectionStatus: collectionStatus,
              })
            }
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

const WomenPage = ({ route }) => {
  const { id } = route.params;
  const collectionStatus = "primary";
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
        data.map((item, index) => (
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
            <View>
              <CustomOpacity
                style={styles.customButton}
                title="Edit Collection"
                onPress={() =>
                  navigation.navigate("EditStoreCollectionForm", {
                    item: JSON.stringify(item),
                    collectionStatus: collectionStatus,
                  })
                }
              />
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}

      {data ? (
        <View>
          <CustomButton2
            style={styles.customButton2}
            title="Create Collection"
            onPress={() =>
              navigation.navigate("CreateStoreCollectionForm", {
                item: JSON.stringify(data), // Access the first item in the data array
                collectionStatus: collectionStatus,
              })
            }
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C0404",
  },
  subContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  customButton: {
    padding: 5,
    alignItems: "center",
    backgroundColor: "#0C0404",
    borderWidth: 2,
    borderColor: "#777575",
    borderRadius: 50,
    color: "white",
    fontSize: 8,
  },
  customButton2: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    marginRight: 80,
  },
});

export { StorePage, WomenPage, MenPage };
