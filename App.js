import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
//import { LogIn } from './src/pages/LogInScreen.js'; 
//import {  UserRegistration  } from './src/pages/UserRegistrationScreen';
//import { PageTabNavigator } from './src/navigation/PageTabNavigator';
//import { Testmol } from './src/components/molecules/testmol';
//import { StoreDivider } from './src/pages/StoreDivider';
import { ProductPage } from './src/pages/ProductPage';
import { ProductCardContainer } from './src/components/organisms/ProductCardContainer';


const App = () => {
  return (
    <NavigationContainer>
     {/*<ProductCardContainer/>
     <Testmol/>
      <StoreDivider/>*/}
    <ProductPage/>
    </NavigationContainer>
  );
}
export default App
