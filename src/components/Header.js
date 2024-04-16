import { Link } from 'react-router-dom';
import './Header.css';

const logo = require('D:/year3/A-individual project/final-year-project/src/asserts/logo.png'); // Import your logo file

export default function Header() {
  return (
    <div>
      {/* Header */}
      <div className='header'>
      <img src={logo} alt="Logo" /> {/* Include your logo */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Doctor">Doctor</Link></li>
          <li><Link to="/Lab">Lab</Link></li>
          <li><Link to="/Patientlabr">Patientlabr</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>                             
          <li><Link to="/Profile">Profile</Link></li> 
          
        </ul>
      </div>

      
      
    </div>
  );
}
