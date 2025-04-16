import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  icon: string;
  alt: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, icon, alt, children }) => (
  <Link
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src={icon}
      alt={alt}
      width={16}
      height={16}
    />
    {children}
  </Link>
);

export function Footer() {
  return (
    <footer className="w-full flex gap-[24px] flex-wrap items-center justify-center py-6">
      <FooterLink 
        href="https://luxequeer.com/about" 
        icon="/file.svg" 
        alt="File icon"
      >
        About Us
      </FooterLink>
      <FooterLink 
        href="https://luxequeer.com/services" 
        icon="/window.svg" 
        alt="Window icon"
      >
        Services
      </FooterLink>
      <FooterLink 
        href="https://luxequeer.com" 
        icon="/globe.svg" 
        alt="Globe icon"
      >
        Visit luxequeer.com →
      </FooterLink>
    </footer>
  );
}
