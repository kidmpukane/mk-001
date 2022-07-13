import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import ProfileScreen from "../pages/ProfileScreen";
import CreatePost from "../pages/CreatePost";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    );
  }

export { ProfileStackNavigator };


{/*        headerStyle: {
          backgroundColor: "#1B2631",
        },
        headerTintColor: "#909497",
        headerBackTitle: "Back",*/}