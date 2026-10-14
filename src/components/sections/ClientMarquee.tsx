import React from 'react';

const BRAND_LOGOS = [
  {
    name: 'Shopee',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 120 40">
        <path d="M18 10c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.5L14 30h8l-1.5-4.5c3.2-1 5.5-4 5.5-7.5 0-4.4-3.6-8-8-8zm0 4c2.2 0 4 1.8 4 4 0 .9-.3 1.8-.8 2.5L18 20l-3.2.5c-.5-.7-.8-1.6-.8-2.5 0-2.2 1.8-4 4-4z" />
        <text x="35" y="26" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Shopee</text>
      </svg>
    )
  },
  {
    name: 'Tokopedia',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 135 40">
        <circle cx="16" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="13" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <text x="36" y="25" fontSize="17" fontWeight="bold" fontFamily="sans-serif">tokopedia</text>
      </svg>
    )
  },
  {
    name: 'Telkomsel',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 130 40">
        <polygon points="12,10 24,20 12,30" />
        <circle cx="15" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="32" y="25" fontSize="17" fontWeight="bold" fontFamily="sans-serif">Telkomsel</text>
      </svg>
    )
  },
  {
    name: 'Gojek',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 110 40">
        <circle cx="15" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="15" cy="20" r="3.5" />
        <text x="32" y="26" fontSize="18" fontWeight="bold" fontFamily="sans-serif">gojek</text>
      </svg>
    )
  },
  {
    name: 'BCA',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 90 40">
        <rect x="5" y="10" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M11 15h8M15 15v10" stroke="currentColor" strokeWidth="2.5" />
        <text x="34" y="26" fontSize="19" fontWeight="900" fontFamily="sans-serif">BCA</text>
      </svg>
    )
  },
  {
    name: 'Samsung',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 130 40">
        <ellipse cx="65" cy="20" rx="60" ry="14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" />
        <text x="22" y="25" fontSize="15" fontWeight="900" letterSpacing="2" fontFamily="sans-serif">SAMSUNG</text>
      </svg>
    )
  },
  {
    name: 'TikTok',
    svg: (
      <svg className="h-7 w-auto fill-current" viewBox="0 0 115 40">
        <path d="M18 11a4 4 0 01-3-3V6h-3v11a2.5 2.5 0 11-2.5-2.5c.3 0 .5.05.8.12V11a5.5 5.5 0 105.5 5.5V11.5A7 7 0 0018 12.5V11z" />
        <text x="28" y="25" fontSize="17" fontWeight="bold" fontFamily="sans-serif">TikTok</text>
      </svg>
    )
  }
];

export default function ClientMarquee() {
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="py-12 bg-black border-y border-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          Dipercaya oleh Brand & Agensi Terkemuka
        </p>
      </div>

      {/* Gradasi pudar kiri & kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Brand Logos Running Marquee */}
      <div className="flex animate-marquee items-center gap-14">
        {duplicatedLogos.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex items-center justify-center min-w-[150px] opacity-40 hover:opacity-100 transition-opacity text-zinc-300 hover:text-[#ccff00] cursor-pointer"
          >
            {brand.svg}
          </div>
        ))}
      </div>
    </section>
  );
}