import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/Login">Login</Link></li>
      <li> <Link to="/Register">Register</Link></li> 
      <li> <Link to="/Profile">Profile</Link></li> 
      <li> <Link to="/About">About</Link></li>
      <li> <Link to="/Lab">Lab</Link></li>
    </div>
  )
}
