'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css'; // Ensure styles are loaded correctly

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is already enabled in localStorage on mount
  useEffect(() => {
   
  }, []);

  
  //✦#✧★
  return (
    <nav id="navbar">
      <div id="navbar-container">
        <div id="logo">
          <a href="#">#</a>
        </div>
        <ul id="navbar-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><div className="resume-container">
              <a 
                href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-button"
              ><span>Resume</span>
              </a>
            </div>
          </li> 
        </ul>
      </div>
      <hr id="navbar-divider" />
    </nav>
  );
};

export default Navbar;
