import React from 'react';
import './interest.css';

const Interests: React.FC = () => {
  return (
    <div className="container-interest">
      <div className="accordion_gallery">
        <div className="item item1">
          <div className="content">
            <h1 className="title">Snowboarding</h1>
          </div>
        </div>
        <div className="item item2">
          <div className="content">
            <h1 className="title">Hockey</h1>
          </div>
        </div>
        <div className="item item3">
          <div className="content">
            <h1 className="title">Volleyball</h1>
          </div>
        </div>
        <div className="item item4">
          <div className="content">
            <h1 className="title">Video Games</h1>
          </div>
        </div>
        <div className="item item5">
          <div className="content">
            <h1 className="title">Ice Skating</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
