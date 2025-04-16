import './globals.css';

export const metadata = {
  title: 'Luxe Queer Magazine',
  description: 'Luxury is About to Be Redefined. Prepare for an unapologetic exploration of fashion, art, culture, and opulence—through a gloriously queer lens.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
