import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  StyleSheet,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../authProviders/AuthenticationContext.js";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect

//Hooks
import { useStoreInfo } from "../hooks/useGetUserInfo";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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

function ProfileScreen() {
  const { authInfo } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  const storeInfoUrl = `http://10.0.2.2:8000/accounts/get-customer/${authInfo?.userId}/`;
  const { isLoading, data, isError, error, refetch } =
    useStoreInfo(storeInfoUrl);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // State to track whether UserInfoForm is submitted
  const [userInfoFormSubmitted, setUserInfoFormSubmitted] = useState(false);

  useEffect(() => {
    // Check if UserInfoForm is submitted, then trigger refetch
    if (userInfoFormSubmitted) {
      refetch();
      // Reset the state so that it doesn't refetch on every render
      setUserInfoFormSubmitted(false);
    }
  }, [userInfoFormSubmitted, refetch]);

  // Only use useFocusEffect when UserInfoForm is submitted
  useFocusEffect(
    React.useCallback(() => {
      if (userInfoFormSubmitted) {
        refetch();
      }
    }, [userInfoFormSubmitted, refetch])
  );
  if (isError) {
    return <Text>{error.message}</Text>;
  }

  console.log(data ? data : error.message);

  return (
    <View>
      <ScrollView style={styles.profileScrollViewContainer}>
        <View style={styles.profileScreenContainer}>
          <ImageBackground
            source={{
              uri: data
                ? `http://10.0.2.2:8000/${data.background_picture}`
                : "Loading...",
            }}
            style={styles.profileBackGroundImageContainer}
          >
            <View style={styles.userInfoContainer}>
              <UserInfoOrganism
                profilePicture={
                  data
                    ? `http://10.0.2.2:8000/${data.profile_picture}`
                    : "Loading..."
                }
                userName={data ? data.user_name : "Loading..."}
                atName={data ? data.at_user : "Loading..."}
                customButtonTitle="FOLLOWERS"
                customButtonTitleTwo="EDIT INFO"
                smallButtonOnPress={() => console.log("Small Button Pressed")}
                customButtonTwoOnPress={() =>
                  navigation.navigate("UserInfoForm", { item: data })
                }
                customButtonOnPress={() =>
                  navigation.navigate("CreateGallery", { item: data })
                }
              />
            </View>
          </ImageBackground>
        </View>

        {/* <View style={styles.customButtonContainer}>
          <CustomButton3
            style={styles.customButton}
            title="Start Shopping"
            onPress={() => console.log("Start Shopping")}
            // onPress={() => navigation.navigate("StoreDivider", { item: data })}
          />
        </View> */}

        {/* <View style={styles.ourStoryContainer}>
          <OurStory />
        </View> */}

        <View style={styles.subHeadingContainer}>
          <Texts style={styles.subHeadings} texts="social media & links" />
          <SocialMediaLinkBar />
        </View>

        {/* <View style={styles.reviewCardContainer}>
          <ReviewCard />
        </View> */}

        <View>
          <Texts style={styles.subHeadings} texts="t&c's" />
          <Texts
            style={styles.copyWrightLaws}
            texts={data ? data.user_bio : "Loading..."}
          />
        </View>

        <View style={styles.copyWrightLaws2Container}>
          <Texts
            style={styles.copyWrightLaws2}
            texts={data ? data.store_title : "Loading.."}
          />

          <Texts
            style={styles.copyWrightLaws2}
            texts={data ? data.store_owner : "Loading..."}
          />
        </View>
      </ScrollView>
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
    paddingTop: 100,
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
    padding: 40,
  },
  copyWrightLaws2Container: {
    justifyContent: "center",
    alignContent: "center",
  },
  copyWrightLaws2: {
    justifyContent: "center",
    alignContent: "center",
    color: "#D9D9D9",
    fontSize: 12,
    padding: 10,
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

export { ProfileScreen };
