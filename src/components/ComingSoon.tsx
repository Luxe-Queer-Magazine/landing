"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './Button';

export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Simulate logo loading animation
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto min-h-screen">
      {/* Logo Animation with Dramatic Entrance Effect */}
      <div className={`relative w-full max-w-lg mb-16 transition-all duration-1000 ease-out ${logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="relative">
          {/* Blue Lips Logo */}
          <div className="w-full max-w-md mx-auto mb-6">
            <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#000066" />
                  <stop offset="50%" stopColor="#0066ff" />
                  <stop offset="100%" stopColor="#0099ff" />
                </linearGradient>
              </defs>
              <path d="M250,50 C350,50 450,100 450,150 C450,200 350,250 250,250 C150,250 50,200 50,150 C50,100 150,50 250,50 Z"
                fill="url(#lipGradient)"
                filter="drop-shadow(0 0 10px rgba(0,0,255,0.5))" />
              <path d="M250,80 C330,80 410,110 410,150 C410,190 330,220 250,220 C170,220 90,190 90,150 C90,110 170,80 250,80 Z" fill="#000000" />
              <text x="250" y="160" fontSize="36" fontFamily="serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">Luxe Queer</text>
            </svg>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <div className="w-32 h-1 bg-gradient-to-r from-[#0000ff] to-[#3333ff] mx-auto mb-4"></div>
          </div>
        </div>
      </div>

      {/* Coming Soon Text with Staggered Animation */}
      <h1 className={`text-5xl md:text-7xl font-light mb-8 tracking-wider transition-all duration-1000 delay-300 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0000ff] to-[#ff00cc]">COMING SOON</span>
      </h1>

      {/* Tagline */}
      <p className={`text-xl md:text-2xl mb-16 font-light max-w-xl transition-all duration-1000 delay-500 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Redefining luxury through an authentic queer lens.
        <span className="block mt-3 text-[#0000ff]">Launching Summer 2024</span>
      </p>

      {/* Subscription Form */}
      <div className={`w-full max-w-md transition-all duration-1000 delay-700 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-sm mb-3">Be the first to know when we launch:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-[#0000ff]/30 focus:border-[#0000ff] outline-none"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Notify Me'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm border border-[#0000ff]/30 rounded-lg p-6 text-center animate-fade-in">
            <h3 className="text-xl font-bold mb-2 text-[#0000ff]">Thank You!</h3>
            <p>We'll notify you when Luxe Queer launches.</p>
          </div>
        )}
      </div>

      {/* Blue Lipstick Manifesto */}
      <div className={`mt-16 w-full max-w-xl transition-all duration-1000 delay-900 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-black/30 backdrop-blur-sm border border-[#0000ff]/20 rounded-lg p-6 text-center relative overflow-hidden">
          {/* Decorative blue lips in background */}
          <div className="absolute -right-12 -bottom-12 opacity-5">
            <svg width="150" height="100" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
              <path d="M250,50 C350,50 450,100 450,150 C450,200 350,250 250,250 C150,250 50,200 50,150 C50,100 150,50 250,50 Z" fill="#0066ff" />
            </svg>
          </div>

          <h3 className="text-xl font-bold mb-4 text-[#0000ff] uppercase tracking-wider">The Blue Lipstick Manifesto</h3>
          <p className="text-sm md:text-base font-light italic mb-4 relative z-10">
            "We wear our blue as a statement. A declaration that luxury isn't just about price tags—it's about authenticity, expression, and the courage to live brilliantly in a world that often demands conformity."
          </p>
          <p className="text-sm md:text-base font-light italic relative z-10">
            "Luxe Queer isn't just a brand. It's a movement. A celebration of those who dare to redefine luxury through a queer lens, embracing both elegance and rebellion in the same breath."
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className={`mt-8 flex gap-6 transition-all duration-1000 delay-1000 ${logoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a
          href="#"
          className="text-foreground/70 hover:text-[#0000ff] transition-colors"
          aria-label="Follow us on Facebook"
          title="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="text-foreground/70 hover:text-[#0000ff] transition-colors"
          aria-label="Follow us on Instagram"
          title="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="#"
          className="text-foreground/70 hover:text-[#0000ff] transition-colors"
          aria-label="Follow us on Twitter"
          title="Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
