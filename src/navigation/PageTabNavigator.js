import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//pages

import Home from "../pages/HomeScreen";
import LibraryScreen from "../pages/LibraryScreen";
import SearchScreen from "../pages/SearchScreen";
import ProfileScreen from "../pages/ProfileScreen";

//Screen names
const homeName = "Home";
const libraryName = "Library";
const profileName = "Profile";
const searchName = "Search";

const Tab = createBottomTabNavigator();

const PageTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={{ headerShown: false }}
      style={{ backgroundColor: "#1B2631" }}
    >
      <Tab.Screen
        name={homeName}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name={libraryName}
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-open-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={searchName}
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { PageTabNavigator };
