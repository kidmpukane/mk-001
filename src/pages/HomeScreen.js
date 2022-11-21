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
import {CreatePost} from "../pages/CreatePost";
//import Avatars from "../pages/Home/Avatars";
import Categories from "./Categories";
import theme from "../assets/themes/theme";
import Uploads from "./Uploads";



const Title = (props) => <Text style={styles.title}>{props.children}</Text>;
const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>;

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CreatePost />
        {/*<Avatars />*/}
        <Heading
          style={styles.heading}
          >Categories</Heading>
        <Categories  />
        <Uploads  />
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#292929",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 10,
    padding: 2,
    paddingHorizontal: 15,
    color: "#D9D9D9",
  },
}); 

export default Home;
