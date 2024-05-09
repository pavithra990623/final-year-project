// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebarlab.css';

// Import your logo file
import logo from '../asserts/logo.png';

const Sidebarlab = ({ openSidebarlab }) => {
  return (
    <aside id="sidebarl">
      <div className='sidebarl-title'>
        <div className='sidebarl-brand'>
          <Link to="/">
            <img src={logo} alt="Logo" /> {/* Include your logo */}
          </Link>
        </div>
        <span className='icon close_icon' onClick={openSidebarlab}></span>
      </div>

      <ul className='sidebarl-list'>
        <li className='sidebarl-list-item'>
          <Link to="/Patientlabr">
            Add Patient Report
          </Link>
        </li>
        <li className='sidebarl-list-item'>
          <Link to="/Profile">
            Profile
          </Link>  
        </li>
        <li className='sidebarl-list-item'>
          <Link to="/Home">
            Home
          </Link>  
        </li>
      </ul>
    </aside>
  );
}

export default Sidebarlab;
