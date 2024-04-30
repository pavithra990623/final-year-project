import React, { useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Doctor.css";
import 'remixicon/fonts/remixicon.css';

// Importing images
const doctor1 = require('D:/year3/A-individual project/final-year-project/src/asserts/img/doctors/doctors-1.jpg');
const doctor2 = require('D:/year3/A-individual project/final-year-project/src/asserts/img/doctors/doctors-2.jpg');
const doctor3 = require('D:/year3/A-individual project/final-year-project/src/asserts/img/doctors/doctors-3.jpg');
const doctor4 = require('D:/year3/A-individual project/final-year-project/src/asserts/img/doctors/doctors-4.jpg');



function Doctor() {
  // State to store booked dates
  const [bookedDates, setBookedDates] = useState([]);

  // Function to handle booking
  const handleBooking = (doctorName, date) => {
    // Add booked date to state
    setBookedDates([...bookedDates, { doctor: doctorName, date: date }]);
  };

  return (
    <div>
      <Header/>

      {/* ======= Doctors Section ======= */}

      <section id="doctors" className="doctors">
        <div className="container">

          <div className="section-title">
            <h2>Doctors</h2>
            <p>Driven by a passion to alleviate great pains, our doctor ensures that patients' needs are met, offering synthetic yet effective solutions. With an unwavering commitment to care, anyone seeking relief can trust in our doctor's expertise. No obstacle deters the pursuit of better health, as our doctor tirelessly works to provide comfort and healing in every medical encounter.</p>
          </div>

          <div className="row">

            <div className="col-lg-6">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={doctor1} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Dr. C. Johnson</h4>
                  <span>Specialization: Cardiology</span>
                  <p>Experience: With over 15 years of practice, Dr. Johnson has honed her skills in diagnosing and treating various cardiovascular conditions.
                     Philosophy: Driven by compassion, he believes in providing personalized care to each patient, ensuring they receive the best possible treatment tailored to their needs.</p>
                  {/* <button onClick={() => handleBooking("Dr. C. Johnson", "2024-04-23")}>Make Appointment</button> */}
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={doctor2} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Dr. E. Roberts</h4>
                  <span>Specialization: Pediatrics</span>
                  <p>Experience: Dr. Roberts has dedicated her career to caring for children, drawing from extensive experience working in pediatric hospitals and clinics.
                     Philosophy: With warm  empathetic approach, she believes in building strong relationships with patients and families, ensuring they feel supported and understood throughout the healthcare journey.</p>
                  {/* <button onClick={() => handleBooking("Dr. C. Johnson", "2024-04-23")}>Make Appointment</button> */}
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={doctor3} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Dr. A. Michael </h4>
                  <span>Specialization: Orthopedics</span>
                  <p>Experience: As a seasoned orthopedic surgeon with a decade of experience, Dr. Anderson has performed numerous successful joint replacements and orthopedic surgeries.
                     Philosophy: Committed to restoring mobility and improving quality of life, Dr. Anderson approaches each case with meticulous attention to detail and a focus on patient-centered care.</p>
                  {/* <button onClick={() => handleBooking("Dr. C. Johnson", "2024-04-23")}>Make Appointment</button> */}
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="pic"><img src={doctor4} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>Dr. David Lee</h4>
                  <span>Specialization: Neurology</span>
                  <p>Experience: Dr. Lee brings a wealth of knowledge and expertise to the field of neurology, having conducted groundbreaking research and successfully treated complex neurological conditions.
                     Philosophy: Dr. Lee is passionate about empowering his patients by providing them with comprehensive education and personalized treatment plans, guiding them towards optimal neurological health and well-being.</p>
                  {/* <button onClick={() => handleBooking("Dr. C. Johnson", "2024-04-23")}>Make Appointment</button> */}
                  <div className="social">
                    <a href=""><i className="ri-twitter-fill"></i></a>
                    <a href=""><i className="ri-facebook-fill"></i></a>
                    <a href=""><i className="ri-instagram-fill"></i></a>
                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* End Doctors Section */}

      <Footer/>
    </div>
  )
}

export default Doctor;
