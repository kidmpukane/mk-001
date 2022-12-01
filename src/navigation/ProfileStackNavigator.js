import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

//Screens
import UploadScreen from "../pages/UploadPost";
import { StorePage } from "../pages/StorePage";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name='SignIn' component={SignInScreen} />
      {/*<Stack.Screen name='SignUp' component={SignUpScreen} />*/}
      <Stack.Screen name="UploadPost" component={UploadScreen} />
      <Stack.Screen name="StorePage" component={StorePage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export { ProfileStackNavigator };

{
  /*        headerStyle: {
          backgroundColor: "#1B2631",
        },
        headerTintColor: "#909497",
        headerBackTitle: "Back",*/
}
