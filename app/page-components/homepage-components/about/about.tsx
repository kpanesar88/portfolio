'use client';

import React, { useState, useEffect } from "react";
import "./about.css";

const About: React.FC = () => {
  const images = [
    {
      src: '/images/about/yuki1.jpg',
      text: 'Pet.',
    },
    {
      src: '/images/about/yuki3.jpg',
      text: 'Pet.',
    },
     {
      src: '/images/about/mako1.jpg',
      text: 'Pet.',
    },
    {
      src: '/images/about/cat1.png',
      text: 'Pet.',
    },
    {
      src: '/images/about/cat2.png',
      text: 'Pet',
    },
    {
      src: '/images/about/yuki4.jpg',
      text: 'Pet',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="about-page">
      <section id="about" className="about">
        <div className="image-container">
          <button
            className="arrow left"
            onClick={() =>
              setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)
            }
            aria-label="Previous Image"
          >
            &lt;
          </button>

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

          <button
            className="arrow right"
            onClick={() =>
              setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
            }
            aria-label="Next Image"
          >
            &gt;
          </button>
        </div>

        <div className="content-container">
          <h2>About Me</h2>

          <div className="about-points">
            <div className="point">
              <span>📍</span>
              <p>Toronto, Canada</p>
            </div>
            <div className="point">
              <span>💻</span>
              <p>Computer Engineering @ York University.</p>
            </div>
            <div className="point">
              <span>🛠️</span>
              <p>I enjoy turning ideas into code and circuits that actually work.</p>
            </div>
            <div className="point">
              <span>🤖</span>
              <p>Fascinated by the ways AI can make everyday tech smarter.</p>
            </div>
            <div className="point">
              <span>🚀</span>
              <p>Intersecting Hardware & AI</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;