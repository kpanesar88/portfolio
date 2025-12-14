'use client';
import { useEffect } from 'react';
import './contact.css';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          
          {/* LEFT SIDE (Text + Socials) */}
          <div className="contact-left">
            <div className="title-wrapper">
              <h2 className="section-title">
                <span className="contact-title-part">$CONTACT</span>
                <span className="me-title-part">ME</span>
              </h2>
              <div className="title-line"></div>
            </div>

            <ul className="contact-bullets">
              <li>
                 <span>Collaborate?</span>
                 <span className="desktop-only"> - Let’s make it happen! </span>
            </li>
            <li>
              <span>Job opportunities?</span>
              <span className="desktop-only"> - I’m ready! </span>
            </li>
              <li>
                <span>Just stopping by?</span>
                <span className="desktop-only"> - Say hi — I don’t bite 😸</span>
              </li>
            </ul>


            <div className="social-buttons">
              <a href="https://www.linkedin.com/in/kpanesar88/" target="_blank" rel="noopener noreferrer" className="social-button">
                <span className="social-icon"><i className='bx bxl-linkedin'></i></span>
              </a>
              <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer" className="social-button">
                <span className="social-icon"><i className='bx bxl-github'></i></span>
              </a>
              <a href="mailto:karanveerpanesar04@gmail.com" className="social-button">
                <span className="social-icon"><i className='bx bxs-envelope'></i></span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (Bongo Cat GIF) */}
          <div className="contact-right">
            <div
              className="tenor-gif-embed"
              data-postid="17773853"
              data-share-method="host"
              data-aspect-ratio="0.640625"
              data-width="100%"
            >
              <a href="https://tenor.com/view/bongo-cat-typing-keyboard-smash-gif-17773853">
                Bongo Cat Typing GIF
              </a>
              from <a href="https://tenor.com/search/bongo+cat-gifs">Bongo Cat GIFs</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
