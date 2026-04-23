'use client';

import React, { useEffect, useState } from "react";
import "./homepage.css";
import 'boxicons/css/boxicons.min.css';
import Typed from "typed.js";
import Link from 'next/link';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "Engineering Student.",
        "Embedded Systems Developer.",
        "Software Engineer.",
        "Hardware Enthusiast."
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(".text-animation span", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <section className="home" id="home">
          {/* Main Content */}
          <div className="home-content">
            <h4 className="home-subtitle">COMPUTER ENGINEERING</h4>

            <div className="home-name-stack">
              <h1 className="home-name">KARANVEER</h1>
              <h1 className="home-name">PANESAR</h1>
            </div>

            <h3 className="text-animation">
              <span></span>
            </h3>

            {/* Button Section */}
            <div className="btn-group">
              <a
                href="/resume/Karanveer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Resume
              </a>

              <Link href="/contact" className="btn">
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/kpanesar88/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-linkedin'></i>
              </a>
              <a
                href="https://github.com/kpanesar88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-github'></i>
              </a>
              <a
                href="mailto:karanveerpanesar04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxs-envelope'></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="home-img">
            <img src="/images/homepage/karan.jpg" alt="Profile Picture" />
          </div>
        </section>
      ) : (
        <section className="home" id="home">
          {/* Main Content */}
          <div className="home-content">
            <h4 className="home-subtitle">COMPUTER ENGINEERING</h4>

            <div className="home-name-stack">
              <h1 className="home-name">KARANVEER</h1>
              <h1 className="home-name">PANESAR</h1>
            </div>

            <h3 className="text-animation">
              <span></span>
            </h3>

            <div className="btn-group">
              <a
                href="/resume/Karanveer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Resume
              </a>

              <Link href="#contact" className="btn">
                Contact
              </Link>
            </div>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/kpanesar88/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-linkedin'></i>
              </a>
              <a
                href="https://github.com/kpanesar88"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-github'></i>
              </a>
              <a
                href="mailto:karanveerpanesar04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxs-envelope'></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="home-img">
            <img src="/images/homepage/karan.jpg" alt="Profile Picture" />
          </div>
        </section>
      )}
    </div>
  );
};

export default Homepage;