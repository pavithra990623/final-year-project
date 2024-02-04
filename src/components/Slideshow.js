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
        <img src="slideim1.jpg" alt="Slide 1"       style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 1 ? 'block' : 'none'}}>
        <img src="slideim2.avif" alt="Slide 2"      style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 2 ? 'block' : 'none'}}>
        <img src="slideim3.webp" alt="Slide 3"      style={{width: '100%'}} />
      </div>
      <div className="mySlides fade"                style={{display: slideIndex === 3 ? 'block' : 'none'}}>
        <img src="slideim4.jpg" alt="Slide 4"       style={{width: '100%'}} />
      </div>
    </div>
  );
}

export default Slideshow;
