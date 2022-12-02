import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  WomenPage, MenPage, StorePage  } from '../pages/StorePage'


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="WomenPage"
      style={{paddingTop: 20}}
      Options={{
        tabBarActiveTintColor: '#292929',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#292929" },
      }}
    >
      <Tab.Screen
        name="WomenPage"
        component={WomenPage}
        options={{ tabBarLabel: 'WomenPage' }}
      />
      <Tab.Screen
        name="MenPage"
        component={MenPage}
        options={{ tabBarLabel: 'MenPage' }}
      />
      <Tab.Screen
        name="Profile"
        component={StorePage}
        options={{ tabBarLabel: 'StorePage' }}
      />
    </Tab.Navigator>
  );
};


export { MyTabs };