import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/mockData';

export const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export const SearchIcon = ({className="w-5 h-5"}) => <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className={className} />;
export const MenuIcon = () => <Icon path="M4 6h16M4 12h16M4 18h16" />;
export const XIcon = () => <Icon path="M6 18L18 6M6 6l12 12" />;
export const LocationIcon = () => <Icon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" className="w-4 h-4" />;
export const CheckBadgeIcon = ({className="w-5 h-5 text-[#ccff00]"}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);
export const PlatformIcon = ({ name, className="w-4 h-4" }) => {
  if(name === 'TikTok') return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.56-5.17 2.47-6.84 1.11-.98 2.52-1.62 4.02-1.81.39-.06.79-.07 1.18-.08v4.06c-.46.03-.92.09-1.36.21-1.4.38-2.5 1.54-2.89 2.92-.3 1.08-.18 2.29.35 3.25.68 1.25 2.1 2.05 3.55 2.04 1.55-.01 2.96-.98 3.53-2.41.28-.71.39-1.48.37-2.24-.04-4.83-.02-9.66-.02-14.49h.03z"/></svg>;
  if(name === 'Instagram') return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
  return <Icon path="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" className={className} />;
};

export const Button = ({ children, variant = 'primary', size='md', className = '', ...props }) => {
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-8 py-4 text-base" };
  const variants = {
    primary: "bg-[#ccff00] text-black hover:bg-[#b3e600] shadow-[0_0_15px_rgba(204,255,0,0.3)]",
    secondary: "bg-transparent text-[#ccff00] border border-[#ccff00] hover:bg-[#ccff00] hover:text-black",
    dark: "bg-zinc-900 text-white border border-zinc-800 hover:border-[#ccff00] hover:text-[#ccff00]",
  };
  return (
    <button className={`inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const WhatsAppLink = ({ phone, text, children, className }) => (
  <a href={`https://wa.me/${phone}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className={className} onClick={(e) => e.stopPropagation()}>{children}</a>
);

export const CreatorCard = ({ creator }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a0a0a] rounded-2xl border border-zinc-800 overflow-hidden hover:border-[#ccff00]/40 hover:shadow-[0_8px_30px_rgba(204,255,0,0.06)] transition-all duration-300 flex flex-col h-full group cursor-pointer" onClick={() => navigate(`/profile/${creator.id}`)}>
      <div className="p-6 flex-1 flex flex-col">
        
        {/* HEADER PROFIL */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative flex-shrink-0">
            <img src={creator.img} alt={creator.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-zinc-800 group-hover:ring-[#ccff00] transition-colors duration-300" />
            {creator.verified && (
              <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                <CheckBadgeIcon className="w-5 h-5 text-[#ccff00]" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-bold text-lg text-white leading-tight truncate">
              {creator.name}
            </h3>
            <p className="text-sm font-medium text-[#ccff00] truncate mt-0.5">{creator.title}</p>
            <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1.5 font-medium">
              <LocationIcon className="w-3.5 h-3.5" /> {creator.location}
            </div>
          </div>
        </div>

        {/* METRIK PLATFORM (Fokus Utama untuk Brand) */}
        <div className="flex flex-wrap items-center gap-4 mb-5 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
           {creator.platforms.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <PlatformIcon name={p.name} className="w-4 h-4 text-zinc-500 group-hover:text-[#ccff00] transition-colors" />
                <span className="font-bold text-white tracking-tight">{p.followers}</span>
              </div>
           ))}
        </div>

        {/* KEAHLIAN / NICHE (Dibuat Redup agar Elegan) */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {creator.niches.slice(0, 3).map(niche => (
            <span key={niche} className="px-2.5 py-1 bg-black text-zinc-400 text-xs font-medium rounded-md border border-zinc-800/80">
              {niche}
            </span>
          ))}
          {creator.niches.length > 3 && (
            <span className="px-2.5 py-1 bg-black text-zinc-500 text-xs font-medium rounded-md border border-zinc-800/80">
              +{creator.niches.length - 3}
            </span>
          )}
        </div>

        {/* TOMBOL (Selalu terdorong ke paling bawah secara simetris) */}
        <div className="mt-auto pt-4">
          <WhatsAppLink phone={WHATSAPP_NUMBER} text={`Halo ${creator.name}, saya menemukan profil Anda di AMNAN.COM dan tertarik berkolaborasi.`} className="block w-full">
             <Button variant="primary" className="w-full flex items-center justify-center gap-2 py-3.5 text-sm">
               Hubungi via AMNAN
             </Button>
          </WhatsAppLink>
        </div>

      </div>
    </div>
  );
};