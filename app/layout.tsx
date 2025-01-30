// app/layout.tsx

import React from 'react';
import Navbar from './navbar/navbar';  // Your Navbar component
import Homepage from './page_one/homepage/homepage';
import CornerMenu from './cornermenu/cornerMenu';
import About from './page_one/about/about';
import Footer from './footer/footer';
import Interests from './page_one/interests/interest';
import MoreInfo from './page_one/moreinfo/moreinfo';

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
        <Homepage/>
        <About/>
        <Interests/>
        <MoreInfo/>
        <Footer/>
     </body>
    </html>
  );
};

export default RootLayout;
