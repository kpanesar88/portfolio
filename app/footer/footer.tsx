'use client';
import React, { useEffect } from "react";
import "./footer.css";
import Head from "next/head";

const Footer: React.FC = () => {

  return (
    <>
      {/* Option 2: Using Next/Head (alternative approach) */}
      <Head>
        <link rel="icon" href="/images/homepage/favicon.png" />
        {/* Additional favicon formats for better compatibility */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/homepage/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/homepage/favicon.png" />
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