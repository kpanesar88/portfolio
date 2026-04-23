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
     =
        {/* Optional Twitter Card */}
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
