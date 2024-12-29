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
          <div className="input-box">
          I've recently started snowboarding and love the adrenaline rush. It's a thrilling challenge, and I'm excited to keep improving and pushing my limits.
          </div>
        </div>
        <div className="item item2">
          <div className="content">
            <h1 className="title">Hockey</h1>
          </div>
          <div className="input-box">
          I've been a hockey fan since childhood, proudly supporting the Toronto Maple Leafs. Patrick Kane is my favorite player, admired for his incredible hands and skill on the ice.
          </div>
        </div>
        <div className="item item3">
          <div className="content">
            <h1 className="title">Volleyball</h1>
          </div>
          <div className="input-box">
          I've been playing volleyball since middle school, where I played as a middle blocker during high school games. Recently, I've been expanding my skills by learning how to play as a winger!
          </div>
        </div>
        <div className="item item4">
          <div className="content">
            <h1 className="title">Video Games</h1>
          </div>
          <div className="input-box">
          I enjoy a variety of video games, from competitive titles like League of Legends, Valorant, and Apex Legends to immersive story-driven games like Red Dead Redemption 2 and A Plague Tale, both of which are among my favorites.
          </div>
        </div>
        <div className="item item5">
          <div className="content">
            <h1 className="title">Windbreaker</h1>
          </div>
          <div className="input-box">
            Donec sit amet sapien sed libero commodo scelerisque.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
