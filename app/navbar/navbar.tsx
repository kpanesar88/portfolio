'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { BsExclamationTriangle } from 'react-icons/bs';
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
        {/* Logo Section */}
        <div id="logo">
          <Link href="/">#</Link>
        </div>

        {/* Hamburger Menu */}
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
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-person" style={{ marginRight: '8px', fontSize: '23px' }}></i>
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-person" style={{ marginRight: '8px', fontSize: '23px' }}></i>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-code-slash" style={{ marginRight: '15px', fontSize: '23px' }}></i>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-chat-square-text" style={{ marginRight: '15px', fontSize: '20px' }}></i>
              Contact
            </Link>
          </li>
          <li>
            <div className="resume-container">
              <a
                href="/resume/Karanveer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                <span>
                  <i className="bi bi-file-code" style={{ marginRight: '15px', fontSize: '23px' }}></i>
                  Resume
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div id="menu-slide" className={isMenuOpen ? 'active' : ''}>
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/skills" onClick={closeMenu}>Skills</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        
        <a
          href="/resume/Karanveer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          onClick={closeMenu}
        >
          Resume
        </a>

        <div className="nav-icons">
          <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>

      <hr id="navbar-divider" />
    </nav>
  );
};

export default Navbar;
