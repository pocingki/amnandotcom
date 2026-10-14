import React, { useState } from 'react';
import { CREATORS_DATA, NICHES_DATA } from '../data/mockData';
import { 
  CheckIcon, 
  SearchIcon, 
  WhatsAppIcon,
  XMarkIcon,
  InstagramIcon, 
  TikTokIcon, 
  YouTubeIcon 
} from '../components/common/Icons';
import { Creator } from '../types';

export default function Catalog() {
  const [selectedNiche, setSelectedNiche] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const filteredCreators = CREATORS_DATA.filter(c => {
    const nameMatch = (c.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    const titleMatch = (c.title || '').toLowerCase().includes(searchQuery.toLowerCase());
    const nicheMatch = selectedNiche === 'All' || c.niches?.includes(selectedNiche);
    return (nameMatch || titleMatch) && nicheMatch;
  });

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 text-pink-500" />;
      case 'tiktok':
        return <TikTokIcon className="w-4 h-4 text-cyan-400" />;
      case 'youtube':
        return <YouTubeIcon className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-zinc-950 py-10 px-4 text-white min-h-[500px]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Kolom Pencarian & Filter Niche */}
        <div className="space-y-4">
          <div className="max-w-md mx-auto flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-zinc-600 transition-colors">
            <SearchIcon />
            <input
              type="text"
              placeholder="Cari nama kreator atau spesialisasi..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-sm text-white outline-none w-full placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <button
              onClick={() => setSelectedNiche('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedNiche === 'All'
                  ? 'bg-[#ccff00] text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              Semua
            </button>
            {NICHES_DATA.map(niche => (
              <button
                key={niche}
                onClick={() => setSelectedNiche(niche)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedNiche === niche
                    ? 'bg-[#ccff00] text-black shadow-md'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                {niche}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Kartu Kreator: Foto + Kapsul Nama Saja */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCreators.length === 0 ? (
            <div className="col-span-full py-16 text-center text-zinc-500 text-sm">
              Tidak ada kreator yang sesuai kriteria pencarian.
            </div>
          ) : (
            filteredCreators.map(c => {
              const primaryNiche = c.niches && c.niches.length > 0 ? c.niches[0] : 'Creator';

              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCreator(c)}
                  className="group relative aspect-[3/4] rounded-[28px] overflow-hidden cursor-pointer border border-zinc-800/80 hover:border-[#ccff00]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] bg-zinc-900"
                >
                  {/* Foto Utama Full Card */}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay Halus */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Badge Niche Pojok Kiri Atas */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#ff6b6b] text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-sm">
                      {primaryNiche}
                    </span>
                  </div>

                  {/* Kapsul Melayang di Bawah: Hanya Nama Kreator */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-4 shadow-xl flex items-center justify-between">
                    <h3 className="font-extrabold text-sm md:text-base text-zinc-900 truncate">
                      {c.name}
                    </h3>
                    {c.verified && (
                      <CheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* POPUP MODAL DETAIL KREATOR (Muncul saat kartu diklik) */}
      {selectedCreator && (
        <div 
          onClick={() => setSelectedCreator(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-white shadow-2xl animate-in zoom-in-95 duration-150"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedCreator(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>

            {/* Profil Singkat */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={selectedCreator.img}
                alt={selectedCreator.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#ccff00]"
              />
              <div>
                <h3 className="text-lg font-black flex items-center gap-1.5">
                  {selectedCreator.name}
                  {selectedCreator.verified && <CheckIcon className="w-4 h-4 text-[#ccff00]" />}
                </h3>
                <p className="text-zinc-400 text-xs mt-0.5">{selectedCreator.title}</p>
                <p className="text-zinc-500 text-[11px] mt-0.5">{selectedCreator.location}</p>
              </div>
            </div>

            {/* Bio Singkat */}
            {selectedCreator.bio && (
              <div className="mb-4 bg-zinc-950/70 border border-zinc-800/80 p-3.5 rounded-xl">
                <p className="text-zinc-300 text-xs leading-relaxed">
                  {selectedCreator.bio}
                </p>
              </div>
            )}

            {/* Total Followers & ER */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-zinc-950 border border-zinc-800/80 p-3 rounded-xl text-center">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Total Followers</span>
                <span className="text-lg font-black text-white mt-0.5 block">{selectedCreator.followers}</span>
              </div>
              <div className="bg-zinc-950 border border-zinc-800/80 p-3 rounded-xl text-center">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Engagement Rate</span>
                <span className="text-lg font-black text-[#ccff00] mt-0.5 block">{selectedCreator.engagementRate}</span>
              </div>
            </div>

            {/* Platform & Audiens */}
            {selectedCreator.platforms && selectedCreator.platforms.length > 0 && (
              <div className="mb-4 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Platform & Audiens
                </p>
                <div className="space-y-1.5">
                  {selectedCreator.platforms.map((p, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between bg-zinc-950 border border-zinc-800/80 px-3.5 py-2 rounded-xl text-xs"
                    >
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(p.platform)}
                        <span className="text-zinc-300 font-medium">{p.handle}</span>
                      </div>
                      <span className="font-extrabold text-[#ccff00]">{p.followers}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Niche Tags */}
            {selectedCreator.niches && selectedCreator.niches.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedCreator.niches.map(niche => (
                  <span 
                    key={niche}
                    className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-[11px] font-semibold text-zinc-300"
                  >
                    {niche}
                  </span>
                ))}
              </div>
            )}

            {/* Tombol Hubungi WhatsApp di Dalam Modal */}
            <a
              href={`https://wa.me/62895329345424?text=Halo%20AMNAN.COM,%20saya%20tertarik%20bekerja%20sama%20dengan%20kreator%20${encodeURIComponent(selectedCreator.name)}.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs hover:bg-[#b3e600] transition-colors shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Mulai Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}