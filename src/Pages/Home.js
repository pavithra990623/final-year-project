import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';

import './Home.css';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>
    <Header/>
    <br></br>
      <h1>Home</h1>

      <Slideshow />

      <div className="text-content">
          <h2>Welcome to MedRecord KEEPER Hospital Management System</h2>
          <p>
            Our system provides a comprehensive solution for managing medical records, appointments,
            lab reports, and more. Join us and experience the convenience of centralized healthcare information.
          </p>
        </div>
    <Footer/>  
    </div>
  )
}
