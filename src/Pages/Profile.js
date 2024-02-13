import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BarChart from '../Charts/BarChart';

import './Profile.css';

//import { doc, setDoc } from "firebase/firestore"; 

export default function Profile() {
  return (
    <div>
    <Header/>
      <h1>The Profile</h1>
      <BarChart/>
    <Footer/>
    </div>
  )
}
