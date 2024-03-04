import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Aboutus.css';

// import newHospitalImage1 from '../asserts/newHospitalImage1.png'
// import newHospitalImage2 from '../asserts/newHospitalImage2.jpg'
// import newHospitalImage3 from '../asserts/newHospitalImage3.jpeg'

export default function About() {
  return (
    <div>
    <Header/>

{/*     
      <h1>About Us</h1> <br></br>

      <div className="image-container">
       <img src={newHospitalImage1} alt="Hospital 1" className="hospitalImage" />
       <img src={newHospitalImage2} alt="Hospital 2" className="hospitalImage" />
       <img src={newHospitalImage3} alt="Hospital 3" className="hospitalImage" />
      </div>

      <br></br>
      <h2>Who We Are</h2>
      <ul>
        <li>We are providing a space to store your all the medical records 
        in one place.</li>
        <li>Now your lab reports, medical history and vaccination details 
        are safe with us.</li>
        <li>Join us & have the experience !!!</li>
      </ul>
      <br></br> */}


      <section id="about" class="about">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Dine Pad</a></h4>
              <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
            </div>

          </div>
        </div>

      </div>
    </section>


    <Footer/>
    </div>
  )
}
