import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans selection:bg-[#ccff00] selection:text-black">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="border-t border-zinc-900 bg-black py-8 text-center text-xs text-zinc-600">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} AMNAN.COM. All rights reserved.</p>
            <p className="text-zinc-500">Creator Hub & Campaign Management</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}