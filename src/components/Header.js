import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      {/* Header */}
      <div className='header'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li> 
          <li><Link to="/Profile">Profile</Link></li> 
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Lab">Lab</Link></li>
          <li><Link to="/Doctor">Doctor</Link></li>
        </ul>
      </div>

      {/* Top bar */}
      {/* <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
            <i className="bi bi-phone"></i> +1 5589 55488 55
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div> */}
      
    </div>
  );
}
