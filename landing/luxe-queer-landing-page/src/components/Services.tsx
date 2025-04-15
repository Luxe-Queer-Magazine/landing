import React from 'react';
import Image from 'next/image';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, description, image }) => (
  <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
    <div className="relative h-64 w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform hover:scale-105 duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  </div>
);

export function Services() {
  return (
    <section id="latest" className="py-16 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Collections</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">Explore our curated luxury collections designed for the modern queer aesthetic.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CollectionCard
            title="Avant-Garde Apparel"
            description="Bold, gender-fluid fashion pieces that challenge conventions and celebrate individuality."
            image="/images/collection-fashion.jpg"
          />
          <CollectionCard
            title="Home & Lifestyle"
            description="Sophisticated decor and accessories that bring luxury and queer sensibility to your space."
            image="/images/collection-home.jpg"
          />
          <CollectionCard
            title="Limited Editions"
            description="Exclusive collaborations with queer artists and designers creating one-of-a-kind pieces."
            image="/images/collection-limited.jpg"
          />
        </div>
      </div>
    </section>
  );
}
