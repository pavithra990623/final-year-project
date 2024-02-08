import React, { useState, useEffect } from 'react';
import './Slideshow.css'; 

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    setSlideIndex(prevIndex => (prevIndex + 1) % 4); // Assuming you have 4 images
  }

  return (
    <div className="slideshow-container">
      <div className="mySlides fade"                style={{display: slideIndex === 0 ? 'block' : 'none'}}>
        <img src="https://www.webalive.com.au/wp-content/uploads/2018/05/best-healthcare-website-design-feature-image.jpg" alt="Slide 1"       style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 1 ? 'block' : 'none'}}>
        <img src="https://www.shutterstock.com/image-photo/laptop-keyboard-stethoscope-on-blue-260nw-1907543080.jpg" alt="Slide 2"      style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 2 ? 'block' : 'none'}}>
        <img src="https://morweb.org/get/files/image/galleries/medical-website-design_feature_image.jpg?resize=1000x0&crop=1000x542" alt="Slide 3"      style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 3 ? 'block' : 'none'}}>
        <img src="https://media.istockphoto.com/id/1296726355/photo/successful-journey-through-medical-school.jpg?s=612x612&w=0&k=20&c=EwUGyZCE71pIzz8rknVQF9fKnkpO16UDtaAfpIuJZOg=" alt="Slide 4"       style={{width: '100%'}} />
      </div>
    </div>
  );
}

export default Slideshow;
