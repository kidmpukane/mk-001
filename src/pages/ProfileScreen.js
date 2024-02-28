import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  StyleSheet,
} from "react-native";

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
  const [userInfoFormSubmitted, setUserInfoFormSubmitted] = useState(false);
  const storeInfoUrl = `http://10.0.2.2:8000/accounts/get-${
    authInfo.isMerchant == true ? "merchant" : "customer"
  }/${authInfo?.userId}/`;
  const { isLoading, data, isError, error, refetch } =
    useStoreInfo(storeInfoUrl);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // useEffect(() => {
  //   if (userInfoFormSubmitted) {
  //     refetch();
  //     setUserInfoFormSubmitted(false);
  //   }
  // }, [userInfoFormSubmitted, refetch]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (userInfoFormSubmitted) {
  //       refetch();
  //     }
  //   }, [userInfoFormSubmitted, refetch])
  // );
  if (isError) {
    return <Text>{error.message}</Text>;
  }

  console.log(data ? data : error.message);
  console.log(
    data && data.length > 0 ? data[0].is_merchant : "Unidentified???"
  );
  const responseData = data && data.length > 0 ? data[0] : null;

  return (
    <View>
      <ScrollView style={styles.profileScrollViewContainer}>
        <View style={styles.profileScreenContainer}>
          <ImageBackground
            source={{
              uri: responseData
                ? `http://10.0.2.2:8000/${responseData.background_picture}`
                : "Loading...",
            }}
            style={styles.profileBackGroundImageContainer}
          >
            <View style={styles.userInfoContainer}>
              <UserInfoOrganism
                profilePicture={
                  responseData
                    ? `http://10.0.2.2:8000/${responseData.profile_picture}`
                    : "Loading..."
                }
                userName={responseData ? responseData.user_name : "Loading..."}
                atName={responseData ? responseData.at_user : "Loading..."}
                customButtonTitle="FOLLOWERS"
                customButtonTitleTwo="EDIT INFO"
                smallButtonOnPress={() => console.log("Small Button Pressed")}
                customButtonTwoOnPress={() =>
                  navigation.navigate("UserInfoForm", { item: responseData })
                }
                customButtonOnPress={() =>
                  navigation.navigate("CreateGallery", { item: responseData })
                }
              />
            </View>
          </ImageBackground>
        </View>

        {responseData && responseData.is_merchant === true ? (
          <View style={styles.customButtonContainer}>
            <CustomButton3
              style={styles.customButton}
              title="Start Shopping"
              onPress={() => console.log("Start Shopping")}
              // onPress={() => navigation.navigate("StoreDivider", { item: data })}
            />
          </View>
        ) : null}

        {/* <View style={styles.ourStoryContainer}>
          <OurStory />
        </View> */}

        <View style={styles.subHeadingContainer}>
          <Texts style={styles.subHeadings} texts="social media & links" />
          <SocialMediaLinkBar />
        </View>

        <View style={styles.reviewCardContainer}>
          <ReviewCard />
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
    height: "100%",
  },
  profileScreenContainer: {
    width: "100%",
    paddingBottom: 10,
  },
  profileBackGroundImageContainer: {
    height: "100%",
    width: "99.2%",
    marginTop: 20,
  },
  userInfoContainer: {
    width: "100%",
    height: "100%",
    marginTop: 200,
  },
  customButtonContainer: {
    width: "100%",
    paddingTop: -2000,
  },
  customButton: {
    paddingTop: 200,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  // reviewCardContainer: {
  //   marginTop: 10,
  //   marginHorizontal: 4,
  //   paddingHorizontal: 4,
  // },
  // ourStoryContainer: {
  //   paddingTop: 20,
  //   marginHorizontal: 4,
  //   paddingHorizontal: 4,
  // },
  // subHeadingContainer: {
  //   paddingTop: 100,
  //   paddingBottom: 20,
  //   marginHorizontal: 4,
  //   paddingHorizontal: 4,
  // },
  // subHeadings: {
  //   color: "#D9D9D9",
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   padding: 20,
  // },
  // copyWrightLaws: {
  //   color: "#D9D9D9",
  //   fontSize: 12,
  //   padding: 40,
  // },
  // copyWrightLaws2Container: {
  //   justifyContent: "center",
  //   alignContent: "center",
  // },
  // copyWrightLaws2: {
  //   justifyContent: "center",
  //   alignContent: "center",
  //   color: "#D9D9D9",
  //   fontSize: 12,
  //   padding: 10,
  // },
  // storeName: {
  //   color: "#D9D9D9",
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   paddingBottom: 40,
  // },
  // title: {
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   paddingHorizontal: 15,
  // },
  // heading: {
  //   fontSize: 22,
  //   fontWeight: "bold",
  //   paddingBottom: 10,
  //   padding: 2,
  //   paddingHorizontal: 15,
  //   color: "#08060B",
  // },
});

export { ProfileScreen };
