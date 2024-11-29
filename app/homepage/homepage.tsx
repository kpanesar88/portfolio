import React from "react";
import "./homepage.css"; // Import the CSS file
import linkedinIcon from '../../public/images/linkedin-logo.png';
import githubIcon from '../../public/images/github.png'
import mailIcon from '../../public/images/linkedin-logo.png';

// Define props if necessary (optional for now)
interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It's <span>Karanveer</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          porro quam fuga repellendus. Incidunt architecto, a reprehenderit
          error culpa optio eveniet, autem reiciendis in porro, vero debitis.
          Quia, veniam numquam.
        </p>

        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/karanveer-panesar-0203a1247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/kpanesar88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a
            href="mailto:karanveerpanesar04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/email.png" alt="Mail" />
          </a>
        </div>
      </div>
      <div className="home-img">
        {/* Replace with your profile image path */}
        <img src="path_to_your_image_here" alt="Profile Picture" />
      </div>
    </section>
  );
};

export default Homepage;
