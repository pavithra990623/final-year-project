import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Details.css';

function Edituser() {
  const initialDetails = {
    username: 'J.M. Jayasinghe',
    email: 'Jmsbjayasinghe@gmail.com',
    age: 74,
    gender: 'Male',
    dob: '1950.12.31',
    address: 'F 81/4, School Lane, Thulhiriya, Alawwa',
    contactNumber: '071 - 23 54 667',
    allergies: 'seafood, pineapple',
    nic: '506457395v'
  };

  const [details, setDetails] = useState(initialDetails);
  const [editedDetails, setEditedDetails] = useState({});

  const handleChange = (field, value) => {
    setEditedDetails(prevDetails => ({
      ...prevDetails,
      [field]: value
    }));
  };

  const handleUpdateDetails = () => {
    setDetails(prevDetails => ({
      ...prevDetails,
      ...editedDetails
    }));
    setEditedDetails({});
  };

  return (
    <div>
      <Header />
      <h1>Edit User Details</h1>
      <div className="details-container">
        {Object.keys(details).map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type="text"
              id={field}
              value={editedDetails[field] || details[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleUpdateDetails}>Update Details</button>
      <Footer />
    </div>
  );
}

export default Edituser;
