// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from './AuthReducer'; // Updated import statement

// const INITIAL_STATE = {
//   currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.currentUser));
//   }, [state.currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  
  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
};
