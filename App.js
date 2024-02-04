import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticationStack } from "./src/navigation/AuthenticationStack";
import { ApplicationStack } from "./src/navigation/ApplicationStack";

const queryClient = new QueryClient();
const sessionId = null;
const authData = {
  sessionToke: "dgsgrhwrsdg23524",
  userId: 34134315,
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {sessionId ? <ApplicationStack /> : <AuthenticationStack />}
      </NavigationContainer>
    </QueryClientProvider>
  );
};
export default App;
