import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-8 py-16 px-4 max-w-5xl mx-auto">
      <div className="relative w-full max-w-md mb-8">
        <Image
          src="/logo.png"
          alt="Luxe Queer Logo"
          width={400}
          height={200}
          priority
          className="mx-auto"
        />
      </div>

      <h2 className="text-3xl md:text-5xl font-light">
        Elevating Queer Luxury Lifestyle
      </h2>

      <p className="text-lg md:text-xl max-w-2xl font-light">
        Redefining luxury through an authentic queer lens. Fashion, culture, and lifestyle for the discerning LGBTQ+ community.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button href="#latest" variant="primary">
          Explore Collection
        </Button>
        <Button href="#subscribe" variant="secondary" size="fixed">
          Subscribe
        </Button>
      </div>
    </section>
  );
}
