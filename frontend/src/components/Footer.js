import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3><span>MediLab</span></h3>
                    <p>We are providing a space to store your all the medical records in one placen and Join with us to have the experience !!!</p>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Register</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5>Contact Us With</h5>
                    <p><i class="fa-solid fa-phone-volume"></i> +94 11 345 678 9</p>
                    <p><i class="fa-solid fa-envelope"></i> MediLab@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
        <p>Copyright © 2023-2024 MedRecordKEEPER. All rights reserved.
 </p>
    </div>
</>
      );
    };
    
  

