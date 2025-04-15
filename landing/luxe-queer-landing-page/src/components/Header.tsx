import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-8">
      <Link href="/" className="flex items-center gap-2">
        <div className="font-bold text-xl">Luxe Queer</div>
      </Link>
      
      <nav className="hidden md:flex gap-6">
        <Link href="#services" className="hover:underline">Services</Link>
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
