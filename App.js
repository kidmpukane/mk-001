import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PageTabNavigator } from "./src/navigation/PageTabNavigator";
import { UploadScreen } from "./src/pages/UploadPost";
import { ProductPage } from "./src/pages/ProductPage";
import ProfileScreen from "./src/pages/ProfileScreen";
import { StorePage } from "./src/pages/StorePage";
import { StoreGallery } from "./src/pages/StoreGallery";
import { ProductViewScreen } from "./src/pages/ProductViewScreen";
//import  SignUpScreen  from "./src/pages/SignUp";
//import  SignInScreen  from "./src/pages/SignIn";
//import { LogIn } from './src/pages/LogInScreen.js';
//import {  UserRegistration  } from './src/pages/UserRegistrationScreen';
//import {  Profile  } from './src/pages/ProfileScreen';
//import { PageTopTabNavigator } from './src/navigation/PageTopTabNavigator';
import { Testmol } from './src/components/molecules/testmol';
import { StoreDivider } from './src/pages/StoreDivider';
import { StoreDividerBottom } from "./src/components/organisms/StoreDividerBottom";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/*<Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />*/}
        <Stack.Screen name="Main" component={PageTabNavigator} />
        <Stack.Screen name="UploadPost" component={UploadScreen} />
        <Stack.Screen name="StorePage" component={StorePage} />
        <Stack.Screen name="StoreDivider" component={StoreDivider} />
        <Stack.Screen name="ProductViewScreen" component={ProductViewScreen} />
        <Stack.Screen name="StoreGallery" component={StoreGallery} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Testmol" component={Testmol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
