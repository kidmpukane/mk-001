import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Button,
  StyleSheet,
  Image,
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
import {
  CustomOpacity,
  CustomButton2,
  CustomButton3,
} from "../components/atoms/buttons";
import { Headings, Texts } from "../components/atoms/headings";

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
  console.log(responseData);
  console.log(authInfo);

  return (
    <View>
      <ScrollView style={styles.profileScrollViewContainer}>
        <Headings
          style={styles.titleGrand}
          texts={responseData ? responseData.user_name : "Loading..."}
        />
        <View style={styles.profileScreenContainer}>
          <ImageBackground
            source={{
              uri: responseData
                ? `http://10.0.2.2:8000/${responseData.background_picture}`
                : "Loading...",
            }}
            style={styles.profileBackGroundImageContainer}
          ></ImageBackground>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: responseData
                  ? `http://10.0.2.2:8000/${responseData.profile_picture}`
                  : "Loading...",
              }}
              style={styles.profilePicture}
            />
            <View style={styles.userDetails}>
              <Headings
                style={styles.title}
                texts={responseData ? responseData.user_name : "Loading..."}
              />
              <Texts
                style={styles.texts}
                texts={responseData ? responseData.email : "Loading..."}
              />
              <View style={styles.blockContainer}>
                <Texts
                  numberOfLines={4}
                  style={styles.longTexts}
                  texts={responseData ? responseData.user_bio : "Loading..."}
                />
              </View>
            </View>
          </View>
          <View style={styles.customButtonContainer}>
            <CustomButton2
              style={styles.customSubmitButton}
              onPress={() => console.log("followers")}
              title="FOLLOWERS"
            />
            <CustomButton2
              style={styles.customSubmitButton}
              onPress={() =>
                navigation.navigate("UserInfoForm", { item: responseData })
              }
              title="EDIT INFO"
            />
          </View>
          {authInfo.isMerchant === true ? (
            <View style={styles.merchCustomButtonContainer}>
              <CustomOpacity
                style={styles.customButton}
                title="Start Shopping"
                onPress={() => console.log("Start Shopping")}
                // onPress={() => navigation.navigate("StoreDivider", { item: data })}
              />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileScrollViewContainer: {
    backgroundColor: "#0C0404",
    height: "100%",
  },
  titleGrand: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 30,
    alignItems: "center",
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    marginTop: -360,
    paddingBottom: 50,
  },
  userDetails: {
    paddingRight: 80,
    marginLeft: 20,
  },
  blockContainer: {
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
    color: "#0C0404",
  },
  texts: {
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
    color: "#0C0404",
  },
  longTexts: {
    fontSize: 12,
    color: "#0C0404",
    paddingRight: 50,
    alignItems: "center",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 8,
    paddingHorizontal: 6,
    resizeMode: "cover",
    overflow: "hidden",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#0C0404",
  },
  profileScreenContainer: {
    width: "100%",
  },
  profileBackGroundImageContainer: {
    width: "100%",
    height: 480,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 40,
  },
  userInfoContainer: {
    width: "100%",
    height: "100%",
    marginTop: -110,
  },
  customButtonContainer: {
    marginTop: 250,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  merchCustomButtonContainer: {
    justifyContent: "center",
  },
  customButton: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#0C0404",
    borderWidth: 3,
    borderColor: "#777575",
    borderRadius: 50,
    marginHorizontal: 6,
    paddingHorizontal: 100,
    margin: 10,
    color: "white",
    fontSize: 18,
  },
  customSubmitButton: {
    width: "100%",
    marginTop: -4,
    marginBottom: 20,
    padding: 18,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    marginRight: 80,
  },
});

export { ProfileScreen };
