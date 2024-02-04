import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.css';

export default function Home() {
  return (
    <div>
    <Header/>
    <br></br>
      <h1>Home</h1>
      

        
      <div className="text-content">
          <h2>Welcome to ABC Hospital Management System</h2>
          <p>
            Our system provides a comprehensive solution for managing medical records, appointments,
            lab reports, and more. Join us and experience the convenience of centralized healthcare information.
          </p>
        </div>
    <Footer/>  
    </div>
  )
}
