import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { WomenPage, MenPage, StorePage } from "../pages/StorePage";

const Tab = createMaterialTopTabNavigator();

function MyTabs({ id }) {
  return (
    <Tab.Navigator
      initialRouteName="WomenPage"
      style={{ paddingTop: 20 }}
      Options={{
        tabBarActiveTintColor: "#0C0404",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#0C0404" },
      }}
    >
      <Tab.Screen
        name="WomenPage"
        component={WomenPage}
        initialParams={{ id: id }}
        options={{ tabBarLabel: "WomenPage" }}
      />
      <Tab.Screen
        name="MenPage"
        component={MenPage}
        initialParams={{ id: id }}
        options={{ tabBarLabel: "MenPage" }}
      />
      <Tab.Screen
        name="StorePage"
        component={StorePage}
        initialParams={{ id: id }}
        options={{ tabBarLabel: "StorePage" }}
      />
    </Tab.Navigator>
  );
}

export { MyTabs };
