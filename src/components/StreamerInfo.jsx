import React from 'react';
import { User, Twitch, Twitter, Youtube, Gamepad2 } from 'lucide-react';

export default function StreamerInfo() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-zinc-950 text-white py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 backdrop-blur">
              <User size={16} className="text-fuchsia-300" />
              <span className="text-xs tracking-wider text-fuchsia-200">ABOUT THE STREAMER</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black">Cyberpunk Creator & Competitive Gamer</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
              I build immersive experiences and compete in high-stakes arenas. When I\'m not grinding leaderboards, I\'m crafting worlds and tinkering with tech. Expect fast-paced gameplay, deep strategy, and a neon-soaked vibe.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Main Games', value: 'Neon Arena, Cyber Runner, Rift Ops', icon: Gamepad2 },
                { label: 'Live Schedule', value: 'Mon, Wed, Fri — 7PM GMT', icon: Twitch },
                { label: 'Community', value: 'Discord.gg/yourserver', icon: User },
              ].map((stat, idx) => (
                <div key={idx} className="rounded-xl border border-fuchsia-500/30 bg-zinc-900/40 p-4">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    {React.createElement(stat.icon, { size: 16, className: 'text-fuchsia-300' })}
                    {stat.label}
                  </div>
                  <div className="mt-2 font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-fuchsia-500/30 bg-zinc-900/40 p-6">
              <p className="text-sm text-zinc-400">CONNECT</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href="#" className="inline-flex items-center gap-3 rounded-lg border border-fuchsia-500/30 bg-black/40 px-4 py-3 hover:bg-fuchsia-500/10 transition-colors">
                  <Twitch size={18} className="text-fuchsia-300" /> Twitch
                </a>
                <a href="#" className="inline-flex items-center gap-3 rounded-lg border border-fuchsia-500/30 bg-black/40 px-4 py-3 hover:bg-fuchsia-500/10 transition-colors">
                  <Youtube size={18} className="text-red-400" /> YouTube
                </a>
                <a href="#" className="inline-flex items-center gap-3 rounded-lg border border-fuchsia-500/30 bg-black/40 px-4 py-3 hover:bg-fuchsia-500/10 transition-colors">
                  <Twitter size={18} className="text-sky-400" /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
