'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css'; // Ensure the CSS is loaded correctly
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing social icons
import { BsExclamationTriangle } from 'react-icons/bs'; // Importing the warning triangle icon
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility and change navbar background
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when the screen is larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false); // Close the menu if the screen is wider than 768px
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]); // Effect depends on isMenuOpen state

  return (
    <nav id="navbar" className={isMenuOpen ? 'open' : ''}>
      <div id="navbar-container">
        {/* Logo Section */}
        <div id="logo">
          <a href="#">#</a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        {/* Navbar Links */}
        <ul id="navbar-links" className={isMenuOpen ? 'active' : ''}>
          <li>
          <a href="#about" className="nav-link" onClick={closeMenu}>
             <i className="bi bi-person" style={{ marginRight: '8px' , fontSize: '23px' }}></i> About
          </a>

          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu}>
            <i className="bi bi-tools" style={{ marginRight: '15px' , fontSize: '23px' }}></i>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
            <i className="bi bi-code-slash" style={{ marginRight: '15px' , fontSize: '23px' }}></i>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
            <i className="bi bi-chat-square-text"style={{ marginRight: '15px' , fontSize: '20px' }}></i>
              Contact
            </a>
          </li>
          <li>
            <div className="resume-container">
              <a
                href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                <span>
                <i className="bi bi-file-code"style={{ marginRight: '15px' , fontSize: '23px' }}></i>
                  Resume</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Sliding Menu */}
      <div id="menu-slide" className={isMenuOpen ? 'active' : ''}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a
          href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          onClick={closeMenu}
        >
          Resume
        </a>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin social-icon"></i>
          </a>
          <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github social-icon"></i>
          </a>
          <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxs-envelope social-icon"></i>
          </a>
        </div>

        {/* Disclaimer Text */}
        <div className="disclaimer">
          <BsExclamationTriangle className="warning-icon" />
          <p>For the best experience, view on a desktop.</p>
        </div>
      </div>

      <hr id="navbar-divider" />
    </nav>
  );
};

export default Navbar;
