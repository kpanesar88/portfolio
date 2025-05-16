'use client';
import React, { useEffect } from "react";
import "./footer.css";
import Head from "next/head";

const Footer: React.FC = () => {
  // Option 1: Dynamic favicon (runs when component mounts)
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('href', '/images/favicon.ico');
    document.head.appendChild(favicon);
  }, []);

  return (
    <>
      {/* Option 2: Using Next/Head (alternative approach) */}
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        {/* Additional favicon formats for better compatibility */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
      </Head>

      {/* About section here */}
      
      <footer className="footer">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Karanveer Panesar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;