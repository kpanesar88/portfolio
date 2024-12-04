'use client';

import React, { useState, useEffect } from "react";
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
  const [fadeKey, setFadeKey] = useState(0); // Used to trigger re-render for fade animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeKey(prevKey => prevKey + 1); // Trigger fade effect
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <section className="about">
      <div className="image-container">
        <div className="image-wrapper">
          <img
            key={fadeKey}  // Use fadeKey to force re-render when transitioning
            src={images[currentImage].src}
            alt={`Image ${currentImage + 1}`}
            className="fade-image"
          />
        </div>
        <div className="caption">
          <p>{images[currentImage].text}</p>
        </div>
      </div>

      <div className="content-container">
        <h2>Key Highlights</h2>
        <ul>
          <li>Point one explaining something important.</li>
          <li>Another point with key details.</li>
          <li>Third point to emphasize an idea.</li>
          <li>Final point to wrap it up neatly.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
