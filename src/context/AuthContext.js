//AuthContext.js

import React, { createContext, useContext, useState } from "react";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
}











// end of this


