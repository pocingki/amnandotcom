import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../common/Icons';

export default function Navbar() {
  const waUrl = 'https://wa.me/62895329345424?text=Halo%20AMNAN.ID,%20saya%20ingin%20konsultasi%20mengenai%20kampanye%20brand.';

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-black text-white tracking-tighter">
          AMNAN<span className="text-[#ccff00]">.ID</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
            Beranda
          </Link>
          <Link to="/catalog" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
            Katalog
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#ccff00] text-black hover:bg-[#b3e600] transition-colors shadow-lg"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Konsultasi WA</span>
          </a>
        </nav>
      </div>
    </header>
  );
}