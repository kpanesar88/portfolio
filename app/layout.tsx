// app/layout.tsx
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        {children} {/* Your homepage/content goes here */}
        <Footer />
      </body>
    </html>
  );
}