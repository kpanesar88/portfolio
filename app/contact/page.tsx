// app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      
      <div className="contact-methods">
        <section className="contact-section">
          <h2>
            <i className="bi bi-envelope" style={{ marginRight: '10px' }}></i>
            Email Me
          </h2>
          <a href="mailto:your@email.com" className="contact-link">
            your@email.com
          </a>
        </section>

        <section className="contact-section">
          <h2>
            <i className="bi bi-linkedin" style={{ marginRight: '10px' }}></i>
            LinkedIn
          </h2>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Connect on LinkedIn
          </a>
        </section>

        <section className="contact-section">
          <h2>
            <i className="bi bi-github" style={{ marginRight: '10px' }}></i>
            GitHub
          </h2>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Visit My GitHub
          </a>
        </section>
      </div>

      <div className="back-home">
        <Link href="/" className="home-link">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}