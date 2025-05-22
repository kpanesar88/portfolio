'use client';
import React from "react";
import Head from "next/head";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/images/homepage/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/homepage/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/homepage/favicon.png" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Karanveer Panesar – Portfolio" />
        <meta property="og:description" content="Software engineer portfolio showcasing projects, skills, and resume." />
        <meta property="og:url" content="https://kpanesar.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://kpanesar.dev/images/og-preview.jpg" 
        />
        {/* Optional Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <footer className="footer">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Karanveer Panesar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
