'use client';

import React, { useState } from "react";
import "./about.css";

const About: React.FC = () => {
  const images = [
    {
      src: '/images/about/sampleimg1.jpg',
      text: 'This is the description for image 1.',
    },
    {
      src: '/images/about/sampleimg2.jpg',
      text: 'This is the description for image 2.',
    },
    {
      src: '/images/about/sampleimg3.jpg',
      text: 'This is the description for image 3.',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="about">
      <div className="image-container">
        <button className="arrow left" onClick={handlePrevious}>&lt;</button>
        <div className="image-wrapper">
          <img
            src={images[currentImage].src}
            alt={`Image ${currentImage + 1}`}
            className="fade-image"
          />
        </div>
        <div className="caption">
          <p>{images[currentImage].text}</p>
        </div>
        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>

      <div className="content-container">
    <h2>About Me</h2>
    <div className="about-points">

        
      <div className="point">
        <span>📍</span>
        <p>Based in Toronto, Canada</p>
      </div>
     
     
      <div className="point">
        <span>💻</span>
        <p>Computer Engineering @ York University.</p>
      </div>

      <div className="point">
      <span>🤖</span>
        <p>Passionate about AI and hardware implementations.</p>
      </div>

      <div className="point">
      <span>🛠️</span>
        <p>Experienced in both software and hardware development.</p>
      </div>

      <div className="point">
      <span>🚀</span>
        <p>Explore more about my interests and hobbies...</p>
      </div>

    </div>
  </div>
    </section>
  );
};

export default About;
