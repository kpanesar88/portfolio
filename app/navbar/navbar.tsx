'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaGithub, FaEnvelope, FaSnowflake } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav id="navbar" className={isMenuOpen ? 'open' : ''}>
      <div id="navbar-container">
        <div id="logo">
          <Link href="#home" onClick={closeMenu}>
            <FaSnowflake className="snowflake-icon" />
          </Link>
        </div>

        <ul id="navbar-links">
          <li>
            <Link href="#about" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-person" style={{ marginRight: '8px', fontSize: '23px' }}></i>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-lightbulb" style={{ marginRight: '8px', fontSize: '23px' }}></i>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-code-slash" style={{ marginRight: '15px', fontSize: '23px' }}></i>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-chat-square-text" style={{ marginRight: '15px', fontSize: '20px' }}></i>
              Contact
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kpanesar88/" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:karanveerpanesar04@gmail.com" className="nav-social-icon">
            <FaEnvelope />
          </a>

          <div className="resume-container">
            <a
              href="/resume/Karanveer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span>
                <i className="bi bi-file-code" style={{ marginRight: '12px', fontSize: '22px' }}></i>
                Resume
              </span>
            </a>
          </div>
        </div>

        <button
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </div>

      <div id="menu-slide" className={isMenuOpen ? 'active' : ''}>
        <button className="menu-close-button" onClick={closeMenu} aria-label="Close menu">
  ×
</button>
        <Link href="#about" onClick={closeMenu}>About</Link>
        <Link href="#skills" onClick={closeMenu}>Skills</Link>
        <Link href="#projects" onClick={closeMenu}>Projects</Link>
        <Link href="#contact" onClick={closeMenu}>Contact</Link>

        <div className="social-hamburger">
          <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kpanesar88/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:karanveerpanesar04@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <a
          href="/resume/Karanveer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>

      <hr id="navbar-divider" />
    </nav>
  );
};

export default Navbar;