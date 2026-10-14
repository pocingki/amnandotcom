import React, { useState } from 'react';
import { 
  UsersIcon, 
  DocumentIcon, 
  ChartIcon, 
  SearchIcon, 
  CheckIcon, 
  XMarkIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon
} from '../components/common/Icons';
import { Creator, AdminTab } from '../types';
import { CREATORS_DATA, NICHES_DATA } from '../data/mockData';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<AdminTab>('kreator');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [creators, setCreators] = useState<Creator[]>(CREATORS_DATA);
  const [editingCreator, setEditingCreator] = useState<Creator | null>(null);
  const [localNiches, setLocalNiches] = useState<string[]>(NICHES_DATA);
  const [isAddingNiche, setIsAddingNiche] = useState<boolean>(false);
  const [newNicheInput, setNewNicheInput] = useState<string>('');

  const filteredCreators = creators.filter(c => {
    const nameMatch = (c?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    const titleMatch = (c?.title || '').toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch || titleMatch;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (!editingCreator) return;
    const isCheckbox = type === 'checkbox';
    setEditingCreator({
      ...editingCreator,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSaveCreator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCreator) return;
    setCreators(prev => prev.map(c => c.id === editingCreator.id ? editingCreator : c));
    setEditingCreator(null);
  };

  const handleAddNiche = (e: React.FormEvent) => {
    e.preventDefault();
    const val = newNicheInput.trim();
    if (val && !localNiches.includes(val)) {
      setLocalNiches(prev => [...prev, val]);
    }
    setNewNicheInput('');
    setIsAddingNiche(false);
  };

  const handleDeleteNiche = (val: string) => {
    setLocalNiches(prev => prev.filter(n => n !== val));
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row font-sans text-white">
      {/* SIDEBAR */}
      <div className="w-full md:w-64 bg-black border-r border-zinc-900 flex flex-col flex-shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-900">
          <div className="w-8 h-8 bg-gradient-to-tr from-lime-500 to-[#ccff00] rounded-xl flex items-center justify-center text-black font-black text-lg shadow-lg shadow-lime-500/20">
            A
          </div>
          <div>
            <span className="text-xl font-black tracking-tight">AMNAN<span className="text-[#ccff00]">.ADMIN</span></span>
            <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Control Center</span>
          </div>
        </div>

        <div className="p-4 flex-1 space-y-1.5">
          {(['dashboard', 'kreator', 'pengajuan', 'kategori'] as AdminTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setEditingCreator(null); }}
              className={`w-full text-left px-4 py-3 rounded-xl capitalize font-bold text-sm transition-all flex items-center gap-3 ${
                activeTab === tab
                  ? 'bg-[#ccff00] text-black shadow-lg shadow-[#ccff00]/10'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
              }`}
            >
              {tab === 'dashboard' && <ChartIcon className="w-4 h-4" />}
              {tab === 'kreator' && <UsersIcon className="w-4 h-4" />}
              {tab === 'pengajuan' && <DocumentIcon className="w-4 h-4" />}
              {tab === 'kategori' && <span className="w-4 h-4 text-center font-mono font-bold">#</span>}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="flex-1 overflow-auto bg-zinc-950 p-6 lg:p-10">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* HEADER AKTIF */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-900">
            <div>
              <h1 className="text-3xl font-black capitalize flex items-center gap-2">
                Manajemen {activeTab}
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              </h1>
              <p className="text-zinc-500 text-xs mt-1">Sistem manajemen direktori talenta dan kampanye media agensi.</p>
            </div>
            {activeTab === 'kreator' && (
              <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-lg">
                💡 Klik baris mana saja pada tabel untuk mengedit profil
              </span>
            )}
          </div>

          {/* TAB 1: DASHBOARD STATS LEBIH HIDUP */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ccff00]/5 rounded-full blur-2xl pointer-events-none" />
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Total Kreator</p>
                  <h3 className="text-4xl font-black text-white">{creators.length}</h3>
                  <span className="text-[11px] text-[#ccff00] font-semibold mt-2 block">100% Siap Kampanye</span>
                </div>

                <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl relative overflow-hidden">
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Kategori Niche</p>
                  <h3 className="text-4xl font-black text-white">{localNiches.length}</h3>
                  <span className="text-[11px] text-zinc-400 mt-2 block">Industri Terkoneksi</span>
                </div>

                <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl relative overflow-hidden">
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">Total Jangkauan</p>
                  <h3 className="text-4xl font-black text-white">1.1M+</h3>
                  <span className="text-[11px] text-lime-400 font-semibold mt-2 block">Akumulasi Audiens</span>
                </div>

                <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl relative overflow-hidden">
                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">WhatsApp Helpline</p>
                  <h3 className="text-lg font-black text-[#ccff00] truncate">+62 895-3293-45424</h3>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" /> Siap Melayani
                  </span>
                </div>
              </div>

              {/* Box Info Cepat */}
              <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-white">Butuh bantuan pengelolaan talenta agensi?</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Semua data langsung tersinkron ke halaman katalog pengunjung secara otomatis.</p>
                </div>
                <button
                  onClick={() => setActiveTab('kreator')}
                  className="px-5 py-2.5 rounded-xl bg-[#ccff00] text-black font-extrabold text-xs hover:bg-[#b3e600] transition-colors"
                >
                  Kelola Daftar Kreator
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: KREATOR (KLIK MANA SAJA UNTUK EDIT) */}
          {activeTab === 'kreator' && (
            editingCreator ? (
              <div className="bg-black rounded-2xl border border-zinc-800 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span>Edit Profil:</span>
                    <span className="text-[#ccff00]">{editingCreator.name}</span>
                  </h2>
                  <button
                    onClick={() => setEditingCreator(null)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    Tutup Form (ESC)
                  </button>
                </div>

                <form onSubmit={handleSaveCreator} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={editingCreator.name || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Spesialisasi / Headline</label>
                      <input
                        type="text"
                        name="title"
                        value={editingCreator.title || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Total Followers</label>
                      <input
                        type="text"
                        name="followers"
                        value={editingCreator.followers || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Engagement Rate (ER)</label>
                      <input
                        type="text"
                        name="engagementRate"
                        value={editingCreator.engagementRate || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Lokasi</label>
                      <input
                        type="text"
                        name="location"
                        value={editingCreator.location || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-[#ccff00]"
                      />
                    </div>
                    <div className="flex items-center gap-3 pt-6">
                      <input
                        type="checkbox"
                        id="verifiedCheck"
                        name="verified"
                        checked={!!editingCreator.verified}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#ccff00] cursor-pointer"
                      />
                      <label htmlFor="verifiedCheck" className="text-sm font-bold text-white cursor-pointer flex items-center gap-1.5">
                        Lencana Terverifikasi <CheckIcon className="w-4 h-4 text-[#ccff00]" />
                      </label>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-zinc-400 mb-2">Bio Singkat</label>
                      <textarea
                        name="bio"
                        rows={3}
                        value={editingCreator.bio || ''}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl p-4 outline-none focus:border-[#ccff00] text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4 border-t border-zinc-800">
                    <button
                      type="button"
                      onClick={() => setEditingCreator(null)}
                      className="px-5 py-2.5 bg-zinc-900 text-zinc-300 font-bold rounded-xl text-xs hover:text-white"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#ccff00] text-black font-extrabold rounded-xl text-xs hover:bg-[#b3e600] shadow-lg shadow-[#ccff00]/10"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-black rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 w-80">
                    <SearchIcon />
                    <input
                      type="text"
                      placeholder="Cari nama kreator untuk diedit..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none text-xs text-white outline-none w-full"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr className="text-zinc-500 border-b border-zinc-800 bg-zinc-900/40 text-xs uppercase font-bold tracking-wider">
                        <th className="px-6 py-4">Kreator</th>
                        <th className="px-6 py-4">Headline</th>
                        <th className="px-6 py-4">Platform</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60">
                      {filteredCreators.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-zinc-500">
                            Tidak ada data kreator ditemukan.
                          </td>
                        </tr>
                      ) : (
                        filteredCreators.map(c => (
                          <tr
                            key={c.id}
                            onClick={() => setEditingCreator(c)}
                            className="hover:bg-zinc-900/60 cursor-pointer transition-colors group"
                            title="Klik baris untuk mengedit"
                          >
                            <td className="px-6 py-4 flex items-center gap-3">
                              <img src={c.img || 'https://placehold.co/100'} alt="" className="w-10 h-10 rounded-full object-cover border border-zinc-800 group-hover:border-[#ccff00] transition-colors" />
                              <div>
                                <span className="font-bold flex items-center gap-1.5 text-white group-hover:text-[#ccff00] transition-colors">
                                  {c.name} {c.verified && <CheckIcon />}
                                </span>
                                <span className="text-[11px] text-zinc-500">{c.location}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-zinc-400">{c.title || '-'}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                {c.platforms?.map((p, i) => (
                                  <span key={i} className="inline-flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded text-[11px] border border-zinc-800 text-zinc-300">
                                    {p.platform === 'instagram' && <InstagramIcon className="w-3 h-3 text-pink-500" />}
                                    {p.platform === 'tiktok' && <TikTokIcon className="w-3 h-3 text-cyan-400" />}
                                    {p.platform === 'youtube' && <YouTubeIcon className="w-3 h-3 text-red-500" />}
                                    {p.followers}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {c.verified ? (
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                                  Terverifikasi
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-400">
                                  Reguler
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="text-xs font-bold text-zinc-400 group-hover:text-[#ccff00] group-hover:underline">
                                Edit Profil →
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}

          {/* TAB 3: PENGAJUAN */}
          {activeTab === 'pengajuan' && (
            <div className="bg-black border border-zinc-800 p-12 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto text-zinc-500">
                <DocumentIcon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base">Belum Ada Pengajuan Baru</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Pengajuan kreator yang masuk melalui formulir publik akan ditampilkan di sini untuk disetujui atau ditolak.
              </p>
            </div>
          )}

          {/* TAB 4: KATEGORI */}
          {activeTab === 'kategori' && (
            <div className="bg-black border border-zinc-800 p-8 rounded-2xl space-y-6">
              <div>
                <h2 className="text-lg font-bold">Daftar Niche Industri</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Kategori ini otomatis muncul sebagai tombol filter di halaman Katalog pengunjung.</p>
              </div>

              <div className="flex flex-wrap gap-2.5 items-center">
                {localNiches.map(n => (
                  <span key={n} className="px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-bold flex items-center gap-2.5">
                    <span>{n}</span>
                    <button
                      onClick={() => handleDeleteNiche(n)}
                      className="text-zinc-500 hover:text-red-400 transition-colors"
                      title="Hapus Kategori"
                    >
                      <XMarkIcon />
                    </button>
                  </span>
                ))}

                {isAddingNiche ? (
                  <form onSubmit={handleAddNiche} className="flex gap-2">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Nama Niche Baru..."
                      value={newNicheInput}
                      onChange={e => setNewNicheInput(e.target.value)}
                      className="bg-zinc-900 border border-zinc-700 text-xs px-3.5 py-2 rounded-xl text-white outline-none focus:border-[#ccff00]"
                    />
                    <button type="submit" className="px-4 py-2 bg-[#ccff00] text-black text-xs font-bold rounded-xl hover:bg-[#b3e600]">
                      Simpan
                    </button>
                    <button type="button" onClick={() => setIsAddingNiche(false)} className="px-2 text-zinc-500 text-xs hover:text-white">
                      Batal
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsAddingNiche(true)}
                    className="px-4 py-2 border border-dashed border-[#ccff00]/40 text-[#ccff00] text-xs font-bold rounded-xl hover:bg-[#ccff00]/10 transition-colors"
                  >
                    + Tambah Niche Baru
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}