import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function One() {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Get Started</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Card for Patient */}
        <div style={{ border: '5px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
          <h2>Patient</h2>
          <p>Manage patient information</p>
          <Link to="/Login">
            <button style={{ backgroundColor: '#091e35', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Get Started</button>
          </Link>
        </div>
        {/* Card for Lab */}
        <div style={{ border: '5px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
          <h2>Lab</h2>
          <p>Manage lab data</p>
          <Link to="/Lablogin">
            <button style={{ backgroundColor: '#091e35', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Get Started</button>
          </Link>
        </div>
      </div>
      <br />
      <Footer/>
    </div>
  );
}

export default One;
