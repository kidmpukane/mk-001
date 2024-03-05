import { View, StyleSheet } from "react-native";
import React from "react";
import { CustomButton, MessagingButton, CustomButton2 } from "../atoms/buttons";
import { atomicStyles } from "../atoms/atomicStyles";

const UserCardButtons = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <CustomButton
          onPress={props.customButtonOnPress}
          title={props.customButtonTitle}
          style={styles.customButton}
        />
      </View>

      <View>
        <CustomButton2
          title={props.customButtonTitleTwo}
          style={styles.customButton2}
          onPress={props.customButtonTwoOnPress}
        />
      </View>

      <View>
        <MessagingButton onPress={props.smallButtonOnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  customButton: {
    height: 40,
    width: 120,
  },
  customButton2: {
    height: 40,
    width: 150,
    padding: 12,
    width: 150,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
});

export { UserCardButtons };
