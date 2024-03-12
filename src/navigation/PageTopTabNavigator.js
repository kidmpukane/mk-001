import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { WomenPage, MenPage, StorePage } from "../pages/StorePage";

const Tab = createMaterialTopTabNavigator();

function MyTabs({ id }) {
  const getCollectionStatus = (route) => {
    // Customize this logic based on your requirements
    switch (route.name) {
      case "WomenPage":
        return "primary";
      case "MenPage":
        return "secondary";
      case "StorePage":
        return "tertiary";
      default:
        return "";
    }
  };
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
        initialParams={{ id: id, collectionStatus: "primary" }}
        options={{ tabBarLabel: "WomenPage" }}
      />
      <Tab.Screen
        name="MenPage"
        component={MenPage}
        initialParams={{ id: id, collectionStatus: "secondary" }}
        options={{ tabBarLabel: "MenPage" }}
      />
      <Tab.Screen
        name="StorePage"
        component={StorePage}
        initialParams={{ id: id, collectionStatus: "tertiary" }}
        collectionStatus={"tertiary"}
        options={{ tabBarLabel: "StorePage" }}
      />
    </Tab.Navigator>
  );
}

export { MyTabs };
