import React, { createContext, useContext } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticationStack } from "./src/navigation/AuthenticationStack";
import { ApplicationStack } from "./src/navigation/ApplicationStack";

const queryClient = new QueryClient();
const authenticationInfo = {
  authCookie: "f1DOPdf234t1341dgg",
  sessionToken: null,
  userId: 34134315,
};
const AuthenticationContext = createContext(authenticationInfo); // Added React.createContext
const App = () => {
  const { sessionToken } = authenticationInfo;
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* Added value prop to provide authenticationInfo to the context */}
        <AuthenticationContext.Provider value={authenticationInfo}>
          {sessionToken ? <ApplicationStack /> : <AuthenticationStack />}
        </AuthenticationContext.Provider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
