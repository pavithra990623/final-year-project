import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../asserts/logo.png'

export default function Header() {
  return (
    <div>
      {/* Header */}
      <div className='header'>
      <Link to="/">
          <img src={logo} alt="Logo" /> {/* Include your logo */}
        </Link>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Doctor">Doctor</Link></li>
          {/* <li><Link to="/Lab">Lab</Link></li> */}
          {/* <li><Link to="/Patientlabr">Patientlabr</Link></li> */}
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>                             
          <li><Link to="/Profile">Profile</Link></li> 
          
        </ul>
      </div>

      
      
    </div>
  );
}
