import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthenticationStack } from "./src/navigation/AuthenticationStack";
import { ApplicationStack } from "./src/navigation/ApplicationStack";
import {
  AuthenticationProvider,
  AuthenticationContext,
} from "./src/authProviders/AuthenticationContext";
import { CustomerRegistration } from "./src/pages/CustomerRegistration";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthenticationProvider>
          <AppContent />
        </AuthenticationProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

// Example logging in AppContent component
const AppContent = () => {
  const { authInfo } = useContext(AuthenticationContext);
  const sessionId = authInfo?.sessionId;
  console.log("authState:", authInfo);
  console.log("sessionId:", sessionId);

  return sessionId ? <ApplicationStack /> : <AuthenticationStack />;
};

export default App;
