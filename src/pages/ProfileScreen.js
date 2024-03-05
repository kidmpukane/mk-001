import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AuthenticationContext } from "../authProviders/AuthenticationContext.js";
import { Headings, Texts } from "../components/atoms/headings";
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { CustomOpacity, CustomButton2 } from "../components/atoms/buttons.jsx";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  const { authInfo } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const storeInfoUrl = `http://10.0.2.2:8000/accounts/get-${
    authInfo.isMerchant == true ? "merchant" : "customer"
  }/${authInfo?.userId}/`;

  const { isLoading, data, isError, error, refetch } =
    useStoreInfo(storeInfoUrl);

  useEffect(() => {
    if (data && data.length > 0) {
      setUserInfo(data[0]);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <Text>Loading Please Be Patient...</Text>;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View>
      <ScrollView style={styles.profileScrollViewContainer}>
        {/* <Headings
          style={styles.titleGrand}
          texts={userInfo ? userInfo.user_name : "Loading..."}
        /> */}
        <View style={styles.profileScreenContainer}>
          <ImageBackground
            source={{
              uri: userInfo
                ? `http://10.0.2.2:8000/${userInfo.background_picture}`
                : "Loading...",
            }}
            style={styles.profileBackGroundImageContainer}
          ></ImageBackground>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: userInfo
                  ? `http://10.0.2.2:8000/${userInfo.profile_picture}`
                  : "Loading...",
              }}
              style={styles.profilePicture}
            />
            <View style={styles.userDetails}>
              <Headings
                style={styles.title}
                texts={userInfo ? userInfo.user_name : "Loading..."}
              />
              <Texts
                style={styles.texts}
                texts={userInfo ? userInfo.email : "Loading..."}
              />
              <View style={styles.blockContainer}>
                <Texts
                  style={styles.longTexts}
                  numberOfLines={4}
                  texts={userInfo ? userInfo.user_bio : "Loading..."}
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
                navigation.navigate("UserInfoForm", { item: userInfo })
              }
              title="EDIT INFO"
            />
          </View>
          {authInfo.isMerchant === true ? (
            <View style={styles.merchCustomButtonContainer}>
              <CustomOpacity
                style={styles.customButton}
                title="Start Shopping"
                onPress={() =>
                  navigation.navigate("StoreDivider", { item: data })
                }
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
