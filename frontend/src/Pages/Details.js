import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Details.css';
import { useNavigate } from 'react-router-dom';

function Details() {
  const [details, setDetails] = useState({
    username: 'J.M. Jayasinghe',
    email: 'Jmsbjayasinghe@gmail.com',
    age: 74,
    gender: 'Male',
    dob: '1950.12.31',
    address: 'F 81/4, School Lane, Thulhiriya, Alawwa',
    contactNumber: '071 - 23 54 667',
    allergies: 'seafood, pineapple',
    nic: '506457395v'
  });

  const navigate = useNavigate(); // Define navigate here

  const handleNavigateToEdituser = () => {
    navigate('/edituser');
  };

  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <div className="details-container">
        <p>Username: {details.username}</p>
        <p>Email: {details.email}</p>
        <p>Age: {details.age}</p>
        <p>Gender: {details.gender}</p>
        <p>Date of Birth: {details.dob}</p>
        <p>Address: {details.address}</p>
        <p>Contact Number: {details.contactNumber}</p>
        <p>Allergies: {details.allergies}</p>
        <p>NIC: {details.nic}</p>

        <button onClick={handleNavigateToEdituser}>Edit My Details</button>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
