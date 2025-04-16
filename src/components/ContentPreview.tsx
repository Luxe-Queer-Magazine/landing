import React from 'react';
import { UnsplashImage } from './UnsplashImage';

interface ArticlePreviewProps {
  category: string;
  title: string;
  imageQuery: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ category, title, imageQuery }) => (
  <div className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,255,0.2)]">
    <div className="relative h-[400px] w-full overflow-hidden">
      <UnsplashImage
        query={imageQuery}
        alt={title}
        width={600}
        height={800}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
      <span className="inline-block mb-2 text-sm font-bold uppercase tracking-wider text-[#0000ff] bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
        {category}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

export function ContentPreview() {
  return (
    <section id="preview" className="py-20 px-4 bg-gradient-to-b from-black/80 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Articles</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
          Explore our thought-provoking content celebrating queer excellence across fashion, art, technology, and culture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArticlePreview
            category="Technology"
            title="Quantum Computing: The Next Frontier for Queer Innovation"
            imageQuery="/quantum-visualization.jpg"
          />
          <ArticlePreview
            category="Art"
            title="Digital Canvas: The Evolution of Queer Art in Virtual Spaces"
            imageQuery="digital art installation neon"
          />
          <ArticlePreview
            category="Fashion"
            title="Wearable Intelligence: Fashion's Cognitive Revolution"
            imageQuery="futuristic fashion runway blue"
          />
        </div>
      </div>
    </section>
  );
}
