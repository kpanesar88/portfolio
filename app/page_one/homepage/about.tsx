'use client';

import React, { useState } from "react";
import "./about.css";

const About: React.FC = () => {
  const images = [
    {
      src: '/images/sampleimg1.jpg',
      text: 'This is the description for image 1.',
    },
    {
      src: '/images/sampleimg2.jpg',
      text: 'This is the description for image 2.',
    },
    {
      src: '/images/sampleimg3.jpg',
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
        <h2>About Me!</h2>
        <ul>
          <li>Point one explaining something important.</li>
          <li>Another point with key details.</li>
          <li>Third point to emphasize an idea.</li>
          <li>Final point to wrap it up neatly.</li>
          <li>Learn more about my interest & hobbies ...</li>

        </ul>
      </div>
    </section>
  );
};

export default About;
