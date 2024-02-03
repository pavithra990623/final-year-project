import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
    <Header/>
      <h1>About Us</h1> <br></br>
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
