import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({
    authCookie: null,
    sessionToken: null,
    userId: null,
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
