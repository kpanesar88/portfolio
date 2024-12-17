'use client';
import React, { useState } from 'react';
import './navbar.css'; // Ensure the CSS is loaded correctly

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav id="navbar">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            style={{ fill: 'rgba(187, 134, 252, 1)' }}
          >
            <path
              className={`line top ${isMenuOpen ? 'rotate-top' : ''}`}
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            ></path>
          </svg>
        </div>

        {/* Navbar Links */}
        <ul id="navbar-links" className={isMenuOpen ? 'active' : ''}>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
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
                <span>Resume</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Sliding Menu (Pink Background) */}
      <div id="menu-slide" className={isMenuOpen ? 'active' : ''}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
      </div>

      <hr id="navbar-divider" />
    </nav>
  );
};

export default Navbar;
