import { StyleSheet, ScrollView, Text, View } from "react-native";
import { CollectionLink } from "../components/organisms/CollectionLink";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons";
import React from "react";

const CustomerCollections = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item);
  console.log("Data fetched:", JSON.stringify(parsedItem, null, 2));

  const {
    id,
    user_name,
    email,
    user_bio,
    background_picture,
    profile_picture,
  } = parsedItem;
  const storeInfoUrl = `http://10.0.2.2:8000/api/store/get-customer-collections/${id}/`;
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
                  navigation.navigate("EditCustomerCollectionForm", {
                    item: JSON.stringify(item),
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
              navigation.navigate("CreateCustomerCollectionForm", {
                item: JSON.stringify(data),
              })
            }
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export { CustomerCollections };

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
