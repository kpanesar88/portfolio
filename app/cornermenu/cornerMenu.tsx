"use client"; // Add this at the top to mark the file as a client component

import React, { useState, useEffect } from "react";
import './cornerMenu.css';

const CornerMenu: React.FC = () => {

  return (
    <div className="corner-menu">
      
      <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className='bx bxs-envelope corner-menu-icon'></i>
      </a>

      <div className="line short"></div> {/* Short line */}

      <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-github corner-menu-icon'></i>
      </a>

      <div className="line short"></div> {/* Short line */}

      <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
        <i className='bx bxl-linkedin corner-menu-icon'></i>
      </a>

      <div className="line long"></div> {/* Long line */}
    </div>
  );
};

export default CornerMenu;
