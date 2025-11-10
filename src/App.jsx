import React from 'react';
import Hero3D from './components/Hero3D';
import AchievementGallery from './components/AchievementGallery';
import HighlightClips from './components/HighlightClips';
import StreamerInfo from './components/StreamerInfo';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[120rem] px-6 sm:px-10">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-fuchsia-500/30 bg-black/60 px-4 py-3 backdrop-blur-xl">
          <a href="#home" className="font-black tracking-widest text-white">
            <span className="text-fuchsia-400">NEON</span>LAB
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#clips" className="hover:text-white">Clips</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1.5 hover:bg-fuchsia-500/20">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="w-full bg-black border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NeonLab — All rights reserved.</p>
        <div className="text-sm">
          Built with a love for games, code, and neon.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter','Geist','IBM Plex Sans',system-ui]">
      <Navbar />
      <main className="mt-20">
        <Hero3D />
        <AchievementGallery />
        <HighlightClips />
        <StreamerInfo />
      </main>
      <Footer />
    </div>
  );
}
