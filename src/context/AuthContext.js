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
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const history = useHistory(); // Access to navigation history

  // Example authentication function for sign-in
  const signIn = (email, password) => {
    // Your sign-in logic here, this is just a placeholder
    // Authenticate the user using your preferred method (e.g., Firebase Authentication)
    setUser({ email }); // Example: Set user upon successful sign-in
    history.push("/profile"); // Redirect to profile page after sign-in
  };

  // Example authentication function for sign-out
  const signOut = () => {
    // Your sign-out logic here, this is just a placeholder
    // Sign out the user using your preferred method (e.g., Firebase Authentication)
    setUser(null); // Clear user upon sign-out
    history.push("/login"); // Redirect to login page after sign-out
  };

  // Value to provide to consuming components
  const value = {
    user,
    signIn,
    signOut,
    // Add more authentication-related methods or state here as needed
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
