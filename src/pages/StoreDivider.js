import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { StorePageTop } from "../components/organisms/StorePageTop";
import { StoreDividerBottom } from "../components/organisms/StoreDividerBottom";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { useLocalSearchParams } from "expo-router";

function StoreDivider() {
  const { item } = useLocalSearchParams();
  const storeInfoUrl = `http://10.0.2.2:8000/api/get-store/${item?.id}`;
  const { isLoading, data, isError, error } = useStoreInfo(storeInfoUrl);
  console.log(data ? data.id : "nothing to display...");

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {data ? (
        data?.map((item, index) => (
          <ScrollView
            key={index}
            nestedScrollEnabled={true}
            style={styles.scrollViewContainer}
          >
            <View style={styles.topPageContainer}>
              <StorePageTop
                storeDisplayImage={
                  item
                    ? `http://10.0.2.2:8000/${item.store_image}`
                    : "Loading..."
                }
                storeNameHeading={item.store_name}
                storeDescription={item.store_description}
              />
            </View>
            <View style={styles.subContainer}>
              <StoreDividerBottom />
            </View>
          </ScrollView>
        ))
      ) : (
        <View>
          <Text>{error.message}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0404",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  subContainer: {
    flex: 1,
    height: 600,
  },
  topPageContainer: {
    padding: 2,
  },
});

export { StoreDivider };
