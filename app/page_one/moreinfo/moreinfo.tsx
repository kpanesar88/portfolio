import React from 'react';
import './moreinfo.css';

const MoreInfo: React.FC = () => {
  return (
    <div className="moreinfo-container">
      {/* Left Side Text */}
      <div className="moreinfo-left">
        <h1>Want to learn more?</h1>
      </div>

      {/* Right Side Cards */}
      <div className="moreinfo-right">
        <div className="card">Skills</div>

        <div className="card">Projects</div>
        
        <div className="card">Contact</div>

      </div>
    </div>
  );
};

export default MoreInfo;
