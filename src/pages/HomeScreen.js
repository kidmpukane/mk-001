import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import buttonArray from "../assets/data/buttonArray";
// import {CreatePost} from "../pages/CreatePost";
//import Avatars from "../pages/Home/Avatars";
import Categories from "./Categories";
import theme from "../assets/themes/theme";
import Uploads from "./Uploads";

const Title = (props) => <Text style={styles.title}>{props.children}</Text>;
const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <CreatePost /> */}
        {/*<Avatars />*/}
        <Heading style={styles.heading}></Heading>
        <Uploads />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#0C0404",
  },
  title: {
    fontSize: 2,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 2,
    fontWeight: "bold",
    paddingBottom: 5,
    padding: 5,
    paddingHorizontal: 5,
    color: "#D9D9D9",
  },
});

export default HomeScreen;
