import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.css';
import backgroundimage1 from '../asserts/imageone.png';
import backgroundimage2 from '../asserts/slideim1.jpg';
import backgroundimage3 from '../asserts/slideim4.jpg';

import { useAuth } from '../context/AuthContext';

export default function Home() {
  const {user} = useAuth();
  console.log(user)
  return (
    <div >

    <Header/> 

    <br></br>
      {/* <h1>Home</h1> */}
      {/* <!-- ======= Why Us Section ======= --> */}
      <div class="container">
        <h1>Welcome To MediLab</h1>
        <p1>We are Team of Talented medical Specialist that make your health care in a well manner</p1>
      </div>

      {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Medilab?</h3>
              <p>
              At Medilab, we prioritize your well-being with a patient-centered approach that sets us apart.From our highly skilled physicians and nurses to our dedicated specialists and support staff, everyone at Medilab is focused on providing personalized care tailored to your individual needs. Your health and well-being are our top priorities, and we strive to exceed your expectations every step of the way. Welcome to Medilab, your trusted partner in health.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">

                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0" style={{ backgroundColor: '#D3D3D3' }}>
                  <img src={backgroundimage3} alt="Join the Revolution" className="icon-img" />
                    <i class="bx bx-receipt"></i>
                    <h4>Lab Report Management</h4>
                    <p>Securely store and manage your lab reports online for convenient access whenever you need them</p>
                  </div>
                </div>

                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0" style={{ backgroundColor: '#D3D3D3' }}>
                  <img src={backgroundimage2} alt="Doctor-Patient Collaboration" className="icon-img" />
                    <i class="bx bx-cube-alt"></i>
                    <h4>Doctor-Patient Collaboration</h4>
                    <p>Collaborate seamlessly with your healthcare provider by sharing medical information and updates securely online</p>
                  </div>
                </div>

                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0" style={{ backgroundColor: '#D3D3D3' }}>
                  <img src={backgroundimage1} alt="Join the Revolution" className="icon-img" />
                    <i class="bx bx-images"></i>
                    <h4>Join the Revolution</h4>
                    <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
                  </div>
                </div>

              </div>
             </div> {/*<!-- End .content--> */}
          </div>
        </div>

      </div>
     </section> {/*<!-- End Why Us Section --> */}

    <Footer/>  
    </div>
  )
}
