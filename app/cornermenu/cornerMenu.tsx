"use client"; // Add this at the top to mark the file as a client component

import React from "react";
import './cornerMenu.css';

const CornerMenu: React.FC = () => {

  return (
    <div className="corner-menu">
      <div className="line-container">
        <div className="line short"></div> {/* Short vertical line */}

        {/* Horizontal line above the short vertical line */}
        <div className="line horizontal"></div> {/* Horizontal line */}
      </div>

      <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className='bx bxs-envelope corner-menu-icon'></i>
      </a>

      <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-github corner-menu-icon'></i>
      </a>

      <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin corner-menu-icon'></i>
      </a>

      <div className="line-container">
        <div className="line long"></div> {/* Long vertical line */}
      </div>
    </div>
  );
};

export default CornerMenu;