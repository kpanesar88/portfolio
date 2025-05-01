'use client';
import { useRef, useState } from 'react';
import './contact.css';
import 'boxicons/css/boxicons.min.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: '✓ Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus({ success: false, message: '✗ Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left Side - Always Visible */}
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
    <span>Want to collaborate?</span>
    <span className="desktop-only"> - I'd love to team up on something special! </span>
  </li>
  <li>
    <span>Job opportunities?</span>
    <span className="desktop-only"> - Open to discussing exciting possibilities! </span>
  </li>
  <li>
    <span>Got questions?</span>
    <span className="desktop-only"> - Happy to chat about my projects or code! </span>
  </li>
</ul>



            <div className="social-buttons"> 
              <a href="https://www.linkedin.com/in/kpanesar88/" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="LinkedIn">
                <span className="social-icon"><i className='bx bxl-linkedin'></i></span>
              </a>
              <a href="https://github.com/kpanesar88" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="GitHub">
                <span className="social-icon"><i className='bx bxl-github'></i></span>
              </a>
              <a href="mailto:karanveerpanesar04@gmail.com" className="social-button" aria-label="Email">
                <span className="social-icon"><i className='bx bxs-envelope'></i></span>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  aria-label="Your Message"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="submit-btn"
                aria-label="Send Message"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>
              {submitStatus && (
                <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;