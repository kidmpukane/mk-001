import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { StorePageTop } from "../components/organisms/StorePageTop";
import { StoreDividerBottom } from "../components/organisms/StoreDividerBottom";
import { useStoreInfo } from "../hooks/useGetUserInfo";

function StoreDivider() {
  const storeInfoUrl = "http://10.0.2.2:6660/store/";
  const { isLoading, data, isError, error } = useStoreInfo(storeInfoUrl);

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
            <View>
              <StorePageTop
                storeDisplayImage={item.store_display_picture}
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
    backgroundColor: "#292929",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  subContainer: {
    flex: 1,
    height: 600,
  },
});

export { StoreDivider };
