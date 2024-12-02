import React from "react";
import "./homepage.css"; // Import the CSS file
import 'boxicons/css/boxicons.min.css';


interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, It's <span>Karanveer</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro quam fuga repellendus. Incidunt architecto, a reprehenderit error culpa optio eveniet, autem reiciendis in porro, vero debitis. Quia, veniam numquam.</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i> {/* Boxicon LinkedIn */}
          </a>
          <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i> {/* Boxicon GitHub */}
          </a>
          <a href="mailto:karanveerpanesar04@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className='bx bxs-envelope'></i>{/* Boxicon Mail */}
          </a>

        </div>

        <div className="btn-group">
          <a href="#contact" className="btn">Contact</a>
          <a 
              href="https://docs.google.com/document/d/1hXIAfesbOFMY2b5rrTsvSImxTnzYOdhR/edit?usp=sharing&ouid=117936281308893913869&rtpof=true&sd=true" 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer">
              Resume
          </a>
        </div>
      </div>

      <div className="home-img">
      <img src='/images/karan.jpg' alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Homepage;
