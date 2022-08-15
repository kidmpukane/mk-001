import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
//import { LogIn } from './src/pages/LogInScreen.js'; 
//import {  UserRegistration  } from './src/pages/UserRegistrationScreen';
//import { PageTabNavigator } from './src/navigation/PageTabNavigator';
import { Testmol } from './src/components/molecules/testmol';
//import { StoreDivider } from './src/pages/StoreDivider';


const App = () => {
  return (
    <NavigationContainer>
      <Testmol/>
     {/**/}
    </NavigationContainer>
  );
}
export default App
