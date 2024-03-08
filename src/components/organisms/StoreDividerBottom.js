import { View, StyleSheet } from "react-native";
import React from "react";
import { MyTabs } from "../../navigation/PageTopTabNavigator";

const StoreDividerBottom = ({ id }) => {
  return (
    <View style={styles.container}>
      <MyTabs id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});

export { StoreDividerBottom };
