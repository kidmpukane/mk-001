import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../pages/ProfileScreen";
import { UserInfoForm } from "../pages/UserInfoForm";
import CreateGallery from "../pages/CreateGallery";
import CreateStore from "../pages/CreateStore";
import { UserProfileForm } from "../forms/UserProfileForm";
import { PageTabNavigator } from "./PageTabNavigator";
import { StoreDivider } from "../pages/StoreDivider";
import { EditStoreForm } from "../forms/EditStoreForm";
import { EditStoreCollectionForm } from "../forms/EditStoreCollectionForm";
import { CreateStoreCollectionForm } from "../forms/CreateStoreCollectionForm";
import { CustomerCollections } from "../pages/CustomerCollections";
import { EditCustomerCollectionForm } from "../forms/EditCustomerCollectionForm";
import { CreateCustomerCollectionForm } from "../forms/CreateCustomerCollectionForm";
import { FemaleStoreGallery } from "../pages/FemaleStoreGallery";
import { StorePage } from "../pages/StorePage";
import { StoreGallery } from "../pages/StoreGallery";
import { MaleStoreGallery } from "../pages/MaleStoreGallery";
import ProductUpload from "../pages/ProductUpload";
import { ProductViewScreen } from "../pages/ProductViewScreen";
import { ProductPage } from "../pages/ProductPage";

const Stack = createStackNavigator();

const ApplicationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainNavigationBar" component={PageTabNavigator} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="UserInfoForm" component={UserInfoForm} />
      <Stack.Screen name="UserProfileFormScreen" component={UserProfileForm} />
      <Stack.Screen name="CreateStore" component={CreateStore} />
      <Stack.Screen name="CreateGallery" component={CreateGallery} />
      <Stack.Screen name="StoreDivider" component={StoreDivider} />
      <Stack.Screen name="EditStoreForm" component={EditStoreForm} />
      <Stack.Screen name="ProductPage" component={ProductPage} />
      <Stack.Screen name="StorePage" component={StorePage} />
      <Stack.Screen name="FemaleStoreGallery" component={FemaleStoreGallery} />
      <Stack.Screen name="MaleStoreGallery" component={MaleStoreGallery} />
      <Stack.Screen name="StoreGallery" component={StoreGallery} />
      <Stack.Screen name="ProductUpload" component={ProductUpload} />
      <Stack.Screen name="ProductViewScreen" component={ProductViewScreen} />
      <Stack.Screen
        name="EditStoreCollectionForm"
        component={EditStoreCollectionForm}
      />
      <Stack.Screen
        name="CreateStoreCollectionForm"
        component={CreateStoreCollectionForm}
      />
      <Stack.Screen
        name="CustomerCollections"
        component={CustomerCollections}
      />
      <Stack.Screen
        name="EditCustomerCollectionForm"
        component={EditCustomerCollectionForm}
      />
      <Stack.Screen
        name="CreateCustomerCollectionForm"
        component={CreateCustomerCollectionForm}
      />
    </Stack.Navigator>
  );
};

export { ApplicationStack };

{
  /* 
          <Stack.Screen name="CreateStore" component={CreateStore} />
          <Stack.Screen name="CreateCollection" component={CreateCollection} />


          <Stack.Screen name="Testmol" component={Testmol} />

           */
}
