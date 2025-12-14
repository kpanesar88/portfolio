'use client';

import React, { useState, useEffect } from "react";
import "./about.css";

const About: React.FC = () => {
  const images = [
    {
      src: '/images/about/ctrlhackdel.jpg',
      text: 'CtrlHackDel 2024 @ YorkU.',
    },
    {
      src: '/images/about/hackthehill.jpg',
      text: 'Hack the Hill 2024 @ uOttawa.',
    },
    {
      src: '/images/about/starterhacks.png',
      text: 'StarterHacks 2024 @ uWaterloo.',
    },
    {
      src: '/images/about/cat1.png',
      text: 'My Cat!.',
    },
    {
      src: '/images/about/cat2.png',
      text: 'My Cat x2!',
    },
  ];

  const quotes = [
    { text: "No great invention ever came without sacrifice.", author: "Jayce (Arcane)" },
    { text: "The grind never stops.", author: "Sett" },
    { text: "It ain't about how hard you can hit. It's about how hard you can get hit and keep moving forward.", author: "Rocky Balboa" },
    { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
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
          <button
            className="arrow left"
            onClick={() => setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
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
            onClick={() => setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)}
            aria-label="Next Image"
          >
            &gt;
          </button>
        </div>

        <div className="content-container">
          <h2></h2>
          <div className="about-points">
            <div className="point">
              <span>📍</span>
              <p>Spawned in Toronto, Canada</p>
            </div>
            <div className="point">
              <span>💻</span>
              <p>Studying Computer Engineering @ York University.</p>
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
              <p>Always down for a challenge — it’s how I level up.</p>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="quotes-section">
            <div className="quote">
              <span className="big-quote">“</span>
              <p>"{quotes[currentQuote].text}" — {quotes[currentQuote].author}</p>
            </div>

            {/* "Randomize" Button */}
            <button
              className="another-quote-button"
              onClick={() => setCurrentQuote((prevIndex) => (prevIndex + 1) % quotes.length)}
            >
              Randomize
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;