import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Texts, Headings } from "../atoms/headings";
import { Images } from "../atoms/Images";
import Icon from "react-native-vector-icons/FontAwesome";
import userProfileData from "../../assets/data/userProfileData";

const UserCardInfo = (props) => {
  return (
    <View>
      <View style={cardStyles.cardImage}>
        <Images source={{ uri: props.profilePicture }} />
        <View style={cardStyles.cardText}>
          <Headings texts={props.userName} style={cardStyles.heading} />

          <Texts texts={props.atName} style={cardStyles.textStyles} />
        </View>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  cardImage: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  cardText: {
    paddingLeft: 50,
    justifyContent: "center",
  },
  title: {
    lineHeight: 30,
    color: "#D9D9D9",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D9D9D9",
  },
  textStyles: {
    paddingTop: 5,
    fontSize: 15,
    color: "#D9D9D9",
  },
});

export { UserCardInfo };
