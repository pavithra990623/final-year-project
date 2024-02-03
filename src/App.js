import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Lab from "./Pages/Lab";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import About from "./Pages/About";

import Footer from "./components/Footer";
import Header from "./components/Header";

// Import your authContext here
//import {AuthContext} from "./context/AuthContext"


function App() {
  // Assuming you have authContext imported or defined somewhere in your code
  //const { currentUser } = useContext(AuthContext);

  //const RequireAuth = ({ children }) => {
   // return currentUser ? children : <Navigate to="/login" />;
  //};

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
             // <RequireAuth>
                <Home />
             // </RequireAuth>
            }
          />

          {/* Lab Route */}
          <Route path="/Lab" element={<Lab />} />

          {/* Login Route */}
          <Route path="/Login" element={<Login />} />

          {/* Register Route */}
          <Route path="/Register" element={<Register />} />

          {/* Profile Route */}
          <Route path="/Profile" element={<Profile />} />

          {/* About Route */}
          <Route path="/About" element={<About />} />

          {/* Footer Route */}
          <Route path="/Footer" element={<Footer />} />

          {/* Header Route */}
          <Route path="/Header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
