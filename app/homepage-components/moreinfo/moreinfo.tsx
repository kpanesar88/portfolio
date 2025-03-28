import React from 'react';
import './moreinfo.css';

const MoreInfo: React.FC = () => {
  return (
    <div className="more-info-container">
      <h1>Want to learn more?</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Skills</h2>
        </div>
        <div className="card">
          <h2>Projects</h2>
        </div>
        <div className="card">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;