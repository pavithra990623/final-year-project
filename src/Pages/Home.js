import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import Slideshow from '../components/Slideshow';

import './Home.css';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>

    <Header/>

    <br></br>
      <h1>Home</h1>

      {/* <Slideshow />

      <div className="text-content">
          <h2>Welcome to MedRecord KEEPER Hospital Management System</h2>
          <p>
            Our system provides a comprehensive solution for managing medical records, appointments,
            lab reports, and more. Join us and experience the convenience of centralized healthcare information.
          </p>
        </div> */}

      {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Medilab?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
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
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
