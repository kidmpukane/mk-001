import { createStackNavigator } from "@react-navigation/stack";
import { LogInScreen } from "../pages/LogInScreen";
import { RegistrationScreen } from "../pages/RegistrationScreen";
import CreateStore from "../pages/CreateStore";
import { UserProfileForm } from "../forms/UserProfileForm";
import { ProfileScreen } from "../pages/ProfileScreen";
import { UserInfoForm } from "../pages/UserInfoForm";

import React from "react";
const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="UserProfileFormScreen" component={UserProfileForm} />
      <Stack.Screen name="CreateStore" component={CreateStore} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="UserInfoForm" component={UserInfoForm} />
    </Stack.Navigator>
  );
};

export { AuthenticationStack };
