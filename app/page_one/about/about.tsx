'use client';


import React, { useState, useEffect } from "react";
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

  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentQuote((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="about-page">
      <section className="about">
        <div className="image-container">
          <button className="arrow left" onClick={() => setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>&lt;</button>
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
          <button className="arrow right" onClick={() => setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)}>&gt;</button>
        </div>

        <div className="content-container">
          <h2>About Me</h2>
          <div className="about-points">
            <div className="point">
              <span>📍</span>
              <p>Based in Toronto, Canada.</p>
            </div>
            <div className="point">
              <span>💻</span>
              <p>Currently pursuing a Bachelor of Computer Engineering @ York University.</p>
            </div>
            <div className="point">
              <span>🛠️</span>
              <p>Experienced in both Software and Hardware development.</p>
            </div>
            <div className="point">
              <span>🤖</span>
              <p>Passionate about applying AI to hardware and software.</p>
            </div>
            <div className="point">
              <span>🚀</span>
              <p>Ready to take on new roles and shape the future of tech.</p>
            </div>
            
            {/* Quotes Section */}
            <div className="quotes-section">
              <div className="quote">
                <span className="big-quote">“</span>
                <p>"{quotes[currentQuote].text}" — {quotes[currentQuote].author}</p>
              </div>

              {/* "Another One" Button */}
              <button className="another-quote-button" onClick={() => setCurrentQuote((prevIndex) => (prevIndex + 1) % quotes.length)}>
                Randomize
              </button>
            </div>
            
            {/* Scroll Down Section */}
            <div className="scrollabout-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              <i className="bx bx-chevron-down"></i>
              <span>#HOBBIES</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
