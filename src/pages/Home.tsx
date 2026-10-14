import React from 'react';
import HeroBanner from '../components/sections/HeroBanner';
import ClientMarquee from '../components/sections/ClientMarquee';
import Catalog from './Catalog';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* 1. Headline Banner */}
      <HeroBanner />

      {/* 2. Logo Brand Berjalan */}
      <ClientMarquee />

      {/* 3. Katalog Kreator */}
      <section className="py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 mb-2 text-center">
          <h2 className="text-2xl md:text-3xl font-black">Direktori Kreator Pilihan</h2>
          <p className="text-zinc-500 text-xs md:text-sm mt-1">
            Gunakan filter kategori atau pencarian untuk menemukan talenta yang sesuai kebutuhan Anda.
          </p>
        </div>
        <Catalog />
      </section>
    </div>
  );
}