'use client'; // Marking this component as a client-side component

import React, { useEffect } from "react";
import "./homepage.css"; // Import the CSS file
import 'boxicons/css/boxicons.min.css';
import Typed from "typed.js"; // Import Typed.js

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
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
    };

    const typed = new Typed(".text-animation span", options);

    return () => {
      typed.destroy(); // Cleanup the animation when the component unmounts
    };
  }, []);

  return (
    <div>
      {/* First Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, It's <span>Karanveer</span></h1>
          <h3 className="text-animation">I'm a <span></span></h3> {/* The span will be animated */}
          <p> ➤ Computer Engineering @ York University</p>
          <p> ➤ Aspiring Software & Hardware Dev</p>
          <p> ➤ Passionate for AI Implementation</p>




          <div className="social-icons">
            <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i> {/* Boxicon LinkedIn */}
            </a>
            <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i> {/* Boxicon GitHub */}
            </a>
            <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className='bx bxs-envelope'></i>{/* Boxicon Mail */}
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

        <div className="home-img">
          <img src='/images/karan.jpg' alt="Profile Picture" />
        </div>

        <div className="scroll-down" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <i className="bx bx-chevron-down"></i>
           {/* Boxicon chevron down */}
        </div>
      </section>

    </div>
  );
};

export default Homepage;
