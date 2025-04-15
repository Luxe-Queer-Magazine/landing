import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Queer | Coming Soon",
  description: "Redefining luxury through an authentic queer lens. Luxe Queer is launching soon - be the first to know.",
  keywords: ["LGBTQ+", "queer", "luxury", "fashion", "lifestyle", "coming soon"],
  openGraph: {
    title: "Luxe Queer | Coming Soon",
    description: "Redefining luxury through an authentic queer lens. Launching Summer 2024.",
    url: "https://luxequeer.com",
    siteName: "Luxe Queer",
    images: [
      {
        url: "https://luxequeer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxe Queer - Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Queer | Coming Soon",
    description: "Redefining luxury through an authentic queer lens. Launching Summer 2024.",
    images: ["https://luxequeer.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
