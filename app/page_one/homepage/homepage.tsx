'use client';

import React, { useEffect, useState } from "react";
import "./homepage.css"; // Import the CSS file
import 'boxicons/css/boxicons.min.css';
import Typed from "typed.js"; // Import Typed.js

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check screen width on initial render
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Event listener for screen resizing
    window.addEventListener("resize", checkScreenSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Initialize the Typed.js animation with the words you provided
    const options = {
      strings: [
        "Engineering Student. ",
        "Frontend Developer. ",
        "Tech Innovator. ",
        "Software Engineer. ",
        "Hardware Enthusiast "
      ], // List of words to animate
      typeSpeed: 60, // Speed of typing
      backSpeed: 40, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing starts
      startDelay: 500, // Delay before typing starts
      loop: true, // Infinite loop
      showCursor: true, // Show typing cursor
      cursorChar: "|", // Customize cursor style
    };

    const typed = new Typed(".text-animation span", options);

    return () => {
      typed.destroy(); // Cleanup the animation when the component unmounts
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        // Content for mobile screen size (width <= 768px)
        <section className="home" id="home">
          {/* Main Content */}
          <div className="home-content">
            <h1>Hi, It's <span>Karanveer</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3>
            <p><span className="arrow-icon">➤</span> Computer Engineering @ York University</p>
            <p><span className="arrow-icon">➤</span> Aspiring Software & Hardware Dev</p>
            <p><span className="arrow-icon">➤</span> Passionate for AI Implementation</p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </a>
              <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className='bx bxs-envelope'></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="home-img">
            <img src="/images/homepage/karan.jpg" alt="Profile Picture" />
          </div>

          {/* Button Section */}
          <div className="btn-group">
            <a 
              href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true" 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer">
              Resume
            </a>
            <a href="#contact" className="btn">Contact</a>
          </div>

          {/* Scroll Down Section */}
          <div 
            className="scroll-down" 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <i className="bx bx-chevron-down"></i>
            <span>#ABOUTME</span>
          </div>
        </section>
      ) : (
        // Content for larger screen sizes (isMobile: false)
        <section className="home" id="home">
          {/* Button Section (Above Image for larger screens) */}
          

          {/* Main Content */}
          <div className="home-content">
            <h1>Hi, It's <span>Karanveer</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3>
            <p><span className="arrow-icon">➤</span> Computer Engineering @ York University</p>
            <p><span className="arrow-icon">➤</span> Aspiring Software & Hardware Dev</p>
            <p><span className="arrow-icon">➤</span> Learning AI to Shape the Future.</p>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github'></i>
              </a>
              <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className='bx bxs-envelope'></i>
              </a>
            </div>

            <div className="btn-group">
            <a 
              href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true" 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer">
              Resume
            </a>
            <a href="#contact" className="btn">Contact</a>
          </div>
          
          </div>

          {/* Image Section */}
          <div className="home-img">
            <img src="/images/homepage/karan.jpg" alt="Profile Picture" />
          </div>

        
          {/* Scroll Down Section */}
          <div 
            className="scroll-down" 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <i className="bx bx-chevron-down"></i>
            <span>#ABOUTME</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default Homepage;
