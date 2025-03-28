// app/layout.tsx
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Template from 'app/template';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Template>
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
    </Template>
  );
}