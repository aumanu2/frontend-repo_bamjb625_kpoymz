import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 backdrop-blur">
              <Rocket size={16} className="text-fuchsia-400" />
              <span className="text-xs tracking-wider text-fuchsia-200">CYBER ARENA // LIVE</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Step into the Streamer\'s <span className="text-fuchsia-400">3D World</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl">
              Explore achievements, watch highlight reels, and learn more about the creator in an interactive, cyberpunk-inspired environment.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#clips"
                className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.6)] transition-shadow"
              >
                <Play size={18} /> Watch Highlights
              </a>
              <a
                href="#achievements"
                className="rounded-lg border border-fuchsia-500/40 bg-black/40 px-5 py-3 font-semibold text-white hover:bg-fuchsia-500/10 transition-colors"
              >
                View Achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
