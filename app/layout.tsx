// app/layout.tsx
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Template from './template';
import { Analytics } from "@vercel/analytics/next"

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

        {/* ✅ Open Graph meta tags should be here */}
        <meta property="og:title" content="Karanveer Panesar – Portfolio" />
        <meta property="og:description" content="Software engineer portfolio showcasing projects, skills, and resume." />
        <meta property="og:url" content="https://kpanesar.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kpanesar.dev/images/og-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
