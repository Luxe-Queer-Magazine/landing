import React from 'react';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ContentPreview } from '@/components/ContentPreview';

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <ContentPreview />
    </main>
  );
}
