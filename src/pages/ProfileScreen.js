import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import CreatePost from "./CreatePost";

//Atoms
import { ProductImages } from "../components/atoms/Images";
import { CustomButton3 } from "../components/atoms/buttons";
import { Texts } from "../components/atoms/headings";

//Organisms
import { UserInfoOrganism } from "../components/organisms/UserInfoOrganism.jsx";
import { OurStory } from "../components/organisms/OurStory";
import { SocialMediaLinkBar } from "../components/organisms/SocialMediaLinks";
import { ReviewCard } from "../components/organisms/ReviewCard";

//Fake API
import userProfileData from "../assets/data/userProfileData";

const Stack = createNativeStackNavigator();

function ProfileScreen({ route }) {
  return (
    <View>
      {userProfileData.map((userInfo) => (
        <ScrollView
          key={userInfo.id}
          style={styles.profileScrollViewContainer}
        >
          <View style={styles.profileScreenContainer}>
            <ImageBackground
              source={{ uri: userInfo.backgroundImage }}
              style={styles.profileBackGroundImageContainer}
            >
              <View
                style={styles.userInfoContainer}>
                <UserInfoOrganism />
              </View>
            </ImageBackground>
          </View>

          <View
            style={styles.customButtonContainer}>
            <CustomButton3
              style={styles.customButton}
              title="Start Shopping"
              onPress={() => {
                console.log("Yes!!!");
              }}/>
          </View>

          <View
            style={styles.ourStoryContainer}>
            <OurStory />
          </View>

          <View
            style={styles.subHeadingContainer}>
            <Texts
              style={styles.subHeadings}
              texts="social media & links"
            />
            <SocialMediaLinkBar />
          </View>
          
          <View
            style={styles.reviewCardContainer}>
            <ReviewCard />
          </View>
      

          <View>
            <Texts
              style={styles.subHeadings}
              texts="t&c's"
            />
            <Texts
              style={styles.copyWrightLaws}
              texts={userInfo.content.description}
            />
          </View>

          <View>
            <Texts
              style={styles.storeName}
              texts={userInfo.content.userNameId}
            />
          </View>

            <Texts
              style={styles.copyWrightLaws}
              texts={userInfo.content.copyRight}
            />
        </ScrollView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  profileScrollViewContainer: {
    backgroundColor: "#292929",
  },
  profileScreenContainer: {
    width: "100%",
    height: 400,
    paddingBottom: 10,
  },
  profileBackGroundImageContainer: {
    height: "100%",
    width: "100%",
  },
  userInfoContainer: {
    width: "100%",
    height: 900,
  },
  customButtonContainer: {
    width: "100%",
    paddingTop: 120,
  },
  customButton: {
    marginTop: 10,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  reviewCardContainer: {
    marginTop: 10,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  ourStoryContainer: {
    paddingTop: 20,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  subHeadingContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  subHeadings: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    padding: 20,
  },
  copyWrightLaws: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    padding: 40,
  },
  storeName: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 40,
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
    color: "#08060B",
  },
}); 

export default ProfileScreen;
