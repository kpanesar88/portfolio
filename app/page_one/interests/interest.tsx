import React from 'react';
import './interest.css';

const Interests: React.FC = () => {
  return (
    <div className="container-interest">
      <div className="accordion_gallery">
        <div className="item item1">
          <div className="content">
            <h1 className="title">Image 1</h1>
            <p className="description">This is some random text under Image 1 that will appear when you hover.</p>
          </div>
        </div>
        <div className="item item2">
          <div className="content">
            <h1 className="title">Image 2</h1>
            <p className="description">This is some random text under Image 2 that will appear when you hover.</p>
          </div>
        </div>
        <div className="item item3">
          <div className="content">
            <h1 className="title">Image 3</h1>
            <p className="description">This is some random text under Image 3 that will appear when you hover.</p>
          </div>
        </div>
        <div className="item item4">
          <div className="content">
            <h1 className="title">Image 4</h1>
            <p className="description">This is some random text under Image 4 that will appear when you hover.</p>
          </div>
        </div>
        <div className="item item5">
          <div className="content">
            <h1 className="title">Image 5</h1>
            <p className="description">This is some random text under Image 5 that will appear when you hover.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;
