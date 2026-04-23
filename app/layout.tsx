// app/layout.tsx
import './static.css';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Template from './template';
import { Analytics } from "@vercel/analytics/next";
import { Poppins } from 'next/font/google';

// ✅ Load Poppins directly from Next.js
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Karanveer Panesar – Portfolio" />
        <meta property="og:description" content="Software engineer portfolio showcasing projects, skills, and resume." />
        <meta property="og:url" content="https://kpanesar.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kpanesar.dev/images/og-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      {/* ✅ Apply global font via className */}
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
