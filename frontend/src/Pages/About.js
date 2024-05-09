import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Aboutus.css';

export default function About() {
  return (
    <div>

    <Header/>

      <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=VJ_s51QGbg8" class="glightbox play-btn mb-4"></a>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Welcome to HealthConnect, an innovative health records management system poised to revolutionize healthcare in Sri Lanka.</h3>
            <p>With a focus on addressing significant weaknesses in the current healthcare infrastructure, HealthConnect aims to simplify the management of health records through an intuitive online platform.</p>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Our Mission:</a></h4>
              <p class="description">At HealthConnect, our mission is clear: to create a comprehensive health records management system that addresses the significant weaknesses in Sri Lanka's healthcare system. We're committed to improving healthcare accessibility and efficiency for all.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Our Goals</a></h4>
              <p class="description">Our main goals include simplifying information gathering, centralizing personal health records, and enhancing the overall healthcare experience for patients and practitioners alike.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Meet Our Team</a></h4>
              <p class="description">Meet the dedicated team behind HealthConnect! With expertise in healthcare, technology, and innovation, our team is committed to making a difference in the lives of individuals across Sri Lanka.</p>
            </div>

          </div>
        </div>

      </div>
    </section>


    <Footer/>
    </div>
  )
}
