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
        <div className="card">
        <i className="bi bi-tools" style={{ marginRight: '15px' , fontSize: '25px' }}></i>
        Skills
        </div>

        <div className="card">
        <i className="bi bi-code-slash" style={{ marginRight: '15px' , fontSize: '25px' }}></i>
        Projects
        </div>
        
        <div className="card">
            <i className="bi bi-chat-square-text"style={{ marginRight: '15px' , fontSize: '23px' }}></i>
        Contact
        </div>

      </div>
    </div>
  );
};

export default MoreInfo;
