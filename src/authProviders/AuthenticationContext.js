import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({
    authCookie: null,
    sessionId: null,
    userId: null,
    storeOwnerId: null,
    profileId: null,
    isMerchant: false,
  });

  const updateAuthInfo = (newAuthInfo) => {
    setAuthInfo((prevAuthInfo) => ({ ...prevAuthInfo, ...newAuthInfo }));
  };

  return (
    <AuthenticationContext.Provider value={{ authInfo, updateAuthInfo }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
