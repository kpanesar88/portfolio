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
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </div>
  );
};

export default MoreInfo;
