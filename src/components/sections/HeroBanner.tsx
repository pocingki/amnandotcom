import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../common/Icons';

export default function HeroBanner() {
  const waUrl = 'https://wa.me/62895329345424?text=Halo%20AMNAN.COM,%20saya%20tertarik%20konsultasi%20kampanye%20kreator.';

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20 bg-zinc-950 text-white text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-[#ccff00]">
          Creator Hub & Media Agency
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
          Temukan Kreator Terbaik untuk Kampanye Brand Anda
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
          Eksplorasi direktori talenta dan kreator terverifikasi lintas berbagai niche industri dengan metrik performa transparan.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            to="/catalog"
            className="px-8 py-3.5 rounded-xl bg-[#ccff00] text-black font-extrabold text-sm hover:bg-[#b3e600] transition-colors shadow-lg"
          >
            Lihat Katalog
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 text-white font-bold text-sm border border-zinc-800 hover:border-[#ccff00] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#ccff00]" />
            <span>Konsultasi via WA</span>
          </a>
        </div>
      </div>
    </section>
  );
}