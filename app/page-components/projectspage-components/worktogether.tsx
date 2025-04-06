import React from 'react';
import './worktogether.css';

const WorkTogether = () => {
  return (
    <div className="work-together-container">
      <div className="work-together-content">
        <p className="work-together-text">Want to work together?</p>
        <a href="/contact" className="contact-button">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;