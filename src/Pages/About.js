import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Aboutus.css';

import newHospitalImage1 from '../asserts/newHospitalImage1.png'
import newHospitalImage2 from '../asserts/newHospitalImage2.jpg'
import newHospitalImage3 from '../asserts/newHospitalImage3.jpeg'

export default function About() {
  return (
    <div>
    <Header/>
      <h1>About Us</h1> <br></br>

      <div className="image-container">
       <img src={newHospitalImage1} alt="Hospital 1" className="hospitalImage" />
       <img src={newHospitalImage2} alt="Hospital 2" className="hospitalImage" />
       <img src={newHospitalImage3} alt="Hospital 3" className="hospitalImage" />
      </div>

      <br></br>
      <h2>Who We Are</h2>
      <ul>
        <li>We are providing a space to store your all the medical records 
        in one place.</li>
        <li>Now your lab reports, medical history and vaccination details 
        are safe with us.</li>
        <li>Join us & have the experience !!!</li>
      </ul>
      <br></br>
    <Footer/>
    </div>
  )
}
