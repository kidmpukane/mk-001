import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../pages/ProfileScreen";
import { PageTabNavigator } from "./PageTabNavigator";
import React from "react";
const Stack = createStackNavigator();

const ApplicationStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="MainNavigationBar" component={PageTabNavigator} /> */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export { ApplicationStack };

{
  /* 
          <Stack.Screen name="CreateStore" component={CreateStore} />
          <Stack.Screen name="CreateCollection" component={CreateCollection} />
          <Stack.Screen name="CreateGallery" component={CreateGallery} />
          <Stack.Screen name="ProductUpload" component={ProductUpload} />
          <Stack.Screen name="ProductViewScreen" component={ProductViewScreen}/>
          <Stack.Screen name="Testmol" component={Testmol} />
          <Stack.Screen name="ProductPage" component={ProductPage} />
          <Stack.Screen name="StorePage" component={StorePage} />
          <Stack.Screen name="FemaleStoreGallery" component={FemaleStoreGallery}/>
          <Stack.Screen name="MaleStoreGallery" component={MaleStoreGallery} />
          <Stack.Screen name="StoreGallery" component={StoreGallery} />
          <Stack.Screen name="StoreDivider" component={StoreDivider} /> */
}
