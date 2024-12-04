// app/layout.tsx

import React from 'react';
import Navbar from './navbar/navbar';  // Your Navbar component
import Homepage from './page_one/homepage/homepage';
import CornerMenu from './cornermenu/cornerMenu';
import About from './page_one/homepage/about';


export const metadata = {
  title: 'My Next.js App',  // Customize your app's title here
  description: 'A Next.js app with custom layout.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add any additional head tags here */}
      </head>
      <body>
        <Navbar />
        {/* This renders the content of the page */}
        {children}
        <Homepage/>
        <CornerMenu/>
        <About/>
      </body>
    </html>
  );
};

export default RootLayout;
