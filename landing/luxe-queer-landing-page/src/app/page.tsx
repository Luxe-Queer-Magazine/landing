"use client";

import { useEffect, useState } from "react";
import { LavaLamp } from "@/components/LavaLamp";
import { Button } from "@/components/Button";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 800);

    const enterButtonTimer = setTimeout(() => {
      setShowEnterButton(true);
    }, 3000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(enterButtonTimer);
    };
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

  const handleEnter = () => {
    setEntered(true);
    // In a real implementation, this would navigate to the main site
    // For now, we'll just show an alert
    alert('Welcome to Luxe Queer! This would navigate to the main site in the full implementation.');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LavaLamp />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Large Blue Lips Logo */}
        <div className={`relative w-full max-w-3xl mb-12 transition-all duration-1500 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-[#0000ff] opacity-20 blur-[80px] rounded-full transform scale-125"></div>

          <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className="w-full relative z-10 drop-shadow-[0_0_50px_rgba(0,0,255,0.8)]">
            <defs>
              <linearGradient id="lipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000066" />
                <stop offset="50%" stopColor="#0000ff" />
                <stop offset="100%" stopColor="#0033ff" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="20" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
                <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
                <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
              </filter>
            </defs>

            {/* Main Lips Shape */}
            <path
              d="M300,100 C450,100 550,150 550,200 C550,250 450,300 300,300 C150,300 50,250 50,200 C50,150 150,100 300,100 Z"
              fill="url(#lipGradient)"
              filter="url(#glow)"
            />

            {/* Mouth Opening */}
            <path
              d="M300,140 C400,140 480,160 480,200 C480,240 400,260 300,260 C200,260 120,240 120,200 C120,160 200,140 300,140 Z"
              fill="#000000"
              filter="url(#innerShadow)"
            />

            {/* Lip Details - Top */}
            <path
              d="M300,100 C380,100 450,110 500,130 C450,110 380,120 300,120 C220,120 150,110 100,130 C150,110 220,100 300,100 Z"
              fill="#0033ff"
              opacity="0.7"
            />

            {/* Lip Details - Bottom */}
            <path
              d="M300,300 C380,300 450,290 500,270 C450,290 380,280 300,280 C220,280 150,290 100,270 C150,290 220,300 300,300 Z"
              fill="#000099"
              opacity="0.7"
            />

            {/* Lip Highlight */}
            <path
              d="M150,170 C200,150 400,150 450,170 C400,160 200,160 150,170 Z"
              fill="#ffffff"
              opacity="0.3"
            />
          </svg>

          {/* Brand Name */}
          <div className="text-center mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0000ff] drop-shadow-[0_0_5px_rgba(0,0,255,0.5)]">LUXE QUEER</h2>
          </div>
        </div>

        {/* Coming Soon Text */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-8 tracking-wider text-center transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0000ff] to-[#3333ff]">
            COMING SOON
          </span>
        </h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl mb-6 font-light text-center max-w-xl transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Redefining luxury through an authentic queer lens.
          <span className="block mt-3 text-[#0000ff]">Launching Summer 2024</span>
        </p>

        {/* Blue Lipstick Manifesto */}
        <div className={`w-full max-w-xl mb-12 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black/30 backdrop-blur-sm border border-[#0000ff]/20 rounded-lg p-6 text-center relative overflow-hidden">
            {/* Decorative blue lips in background */}
            <div className="absolute -right-12 -bottom-12 opacity-5">
              <svg width="150" height="100" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                <path d="M250,50 C350,50 450,100 450,150 C450,200 350,250 250,250 C150,250 50,200 50,150 C50,100 150,50 250,50 Z" fill="#0000ff" />
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

        {/* Subscription Form */}
        <div className={`w-full max-w-md transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm mb-3 text-center">Be the first to know when we launch:</p>
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

        {/* Social Media Links */}
        <div className={`mt-8 flex gap-6 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Click to Enter Button */}
        <div className={`mt-12 transition-all duration-1000 ${showEnterButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <button
            type="button"
            onClick={handleEnter}
            className="px-8 py-3 rounded-full bg-[#0000ff] text-white font-medium tracking-wider uppercase text-sm hover:bg-[#0000cc] hover:shadow-[0_0_15px_rgba(0,0,255,0.6)] transition-all duration-300 animate-pulse"
          >
            Click to Enter
          </button>
        </div>
      </div>
    </div>
  );
}
