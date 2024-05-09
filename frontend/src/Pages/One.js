import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Header from '../components/Header';
import Footer from '../components/Footer';

function One() {
  return (
    <div>
      <Header />
      <h1>Get Started</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {/* Card for Patient */}
        <div style={{ border: '5px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px' }}>
          <h2>Patient</h2>
          <p>Manage patient information</p>
          {/* Use Link to navigate to Patient page */}
          <Link to="/Login">
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>Get Started</button>
          </Link>
        </div>
        {/* Card for Lab */}
        <div style={{ border: '5px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px' }}>
          <h2>Lab</h2>
          <p>Manage lab data</p>
          {/* Use Link to navigate to Lab page */}
          <Link to="/lab">
            <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>Get Started</button>
          </Link>
        </div>
      </div>
      <br></br><br></br>
      <Footer/>
    </div>
  );
}

export default One;
