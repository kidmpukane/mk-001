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
import { useStoreInfo } from "../hooks/useGetUserInfo";
import { useNavigation } from "@react-navigation/native";

function UserProfileForm() {
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

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  const responseData = data && data.length > 0 ? data[0] : null;
  console.log(responseData);

  return (
    <View>
      <Text>Allo!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export { UserProfileForm };
