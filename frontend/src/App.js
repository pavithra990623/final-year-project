import React, { } from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Lab from "./Pages/Lab";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Patientlabr from "./Pages/Patientlabr";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Doctor from "./Pages/Doctor";
import ImageUpload from "./Pages/ImageUpload";
import One from "./Pages/One";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";
import AppointmentBookingPage from "./Pages/AppointmentBookingPage";
import Calendar from "./components/Calendar";
import Details from "./Pages/Details";
import Edituser from "./Pages/Edituser";
import Lablogin from "./Pages/Lablogin";
import Manualmes from "./Pages/Manualmes";
import ChartComponent from "./components/ChartComponent";
import Doclab from "./Pages/Doclab";
import Doctorlog from "./Pages/Doctorlog";
// Import your authContext here
//import {AuthContext} from "./context/AuthContext"

function App() {
  
  const currentUser = true;
  // Assuming you have authContext imported or defined somewhere in your code
  //const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <One />
              </RequireAuth>
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

          {/* Slideshow Route */}
          <Route path="/Slideshow" element={<Slideshow />} /> 

          {/* Doctor Route */}
          <Route path="/Doctor" element={<Doctor />} /> 

          {/*Patientlabr Route */}
          <Route path="/Patientlabr" element={<Patientlabr />} />

          {/*one*/} 
          <Route path="/Home" element={<Home/>} />

          {/*ImageUpload*/}
          <Route path="/ImageUpload" element={<ImageUpload/>} />

           {/*Dashboard*/}
           <Route path="/Dashboard" element={<Dashboard/>} />

           {/*sidebar*/}
           <Route path="/Sidebar" element={<Sidebar/>} />

           {/*Appoinmentmaking page*/}
           <Route path="/AppointmentBookingPage" element={<AppointmentBookingPage/>} />
           
           {/*Calender*/}
           <Route path="/Calender" element={<Calendar/>} />

           {/*Calender*/}
           <Route path="/Details" element={<Details/>} />

             {/*Calender*/}
             <Route path="/Edituser" element={<Edituser/>} />

             {/*Calender*/}
             <Route path="/Lablogin" element={<Lablogin/>} />

             {/*Calender*/}
             <Route path="/Manualmes" element={<Manualmes/>} />
             
              {/*Calender*/}
              <Route path="/ChartComponent" element={<ChartComponent/>} />

              {/*Calender*/}
              <Route path="/Doclab" element={<Doclab/>} />

              {/*Calender*/}
              <Route path="/Doctorlog" element={<Doctorlog/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
