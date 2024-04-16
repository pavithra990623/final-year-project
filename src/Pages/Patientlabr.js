import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './Patientlabr.css';

function Patientlabr() {
  return (
    <div>
      <Header/>
      
      {/* ======= Why Us Section ======= */}

      <div className='container'>

      <div className='patient'>

      <div className='row'>
        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-receipt"></i>
          <h4>Lab Report Management</h4>
          <p>Securely store and manage your lab reports online for convenient access whenever you need them</p>
        </div>   
   
        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-receipt"></i>
          <h4>Lab Report Management</h4>
          <p>Securely store and manage your lab reports online for convenient access whenever you need them</p>
        </div>
      
        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-cube-alt"></i>
          <h4>Doctor-Patient Collaboration</h4>
          <p>Collaborate seamlessly with your healthcare provider by sharing medical information and updates securely online</p>
        </div>
      
        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-images"></i>
          <h4>Join the Revolution</h4>
          <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
        </div>

        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-images"></i>
          <h4>Join the Revolution</h4>
          <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
        </div>

        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
          <i className="bx bx-images"></i>
          <h4>Join the Revolution</h4>
          <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
        </div>
      
        </div>
      {/* End .content */}
      </div>
      </div>
    
      <Footer/>

      </div>  
    
  );
}

export default Patientlabr;
