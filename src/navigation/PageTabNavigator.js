import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//pages

import Home from "../pages/HomeScreen";
import LibraryScreen from "../pages/LibraryScreen";
import SearchScreen from "../pages/SearchScreen";
import ProfileScreen from "../pages/ProfileScreen";
import { StoreGallery } from "../pages/StoreGallery";
import CreateStore from "../pages/CreateStore";

//Screen names
const homeName = "Home";
const libraryName = "Library";
const profileName = "Profile";
const searchName = "Search";
const storeGallery = "Store";
const createStore = "Create-Store"

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
        name={createStore}
        component={CreateStore}
        options={{
          tabBarLabel: "Create-Store",
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

{
  /*


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
        name={storeGallery}
        component={StoreGallery}
        options={{
          tabBarLabel: "Store-Gallery",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

*/
}

export { PageTabNavigator };
