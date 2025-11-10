import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Grand Champion',
    desc: 'Ranked top 1% in competitive ladder across seasons.',
    year: '2024',
  },
  {
    icon: Star,
    title: 'Community MVP',
    desc: 'Voted favorite streamer by the community awards.',
    year: '2023',
  },
  {
    icon: Medal,
    title: 'Speedrun Record',
    desc: 'Set a new world record in Cyber Runner: Neon Drift.',
    year: '2022',
  },
];

export default function AchievementGallery() {
  return (
    <section id="achievements" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-fuchsia-400/80 text-sm tracking-widest">ACHIEVEMENT GALLERY</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">Unlocked Milestones</h2>
          </div>
          <div className="text-zinc-400 max-w-xl">
            Curated highlights from competitive play, speedruns, and community events. Each badge represents a unique milestone in the journey.
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-fuchsia-500/30 bg-zinc-900/40 p-6 overflow-hidden hover:border-fuchsia-400/60 transition-colors"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-[2px] rounded-2xl bg-[radial-gradient(circle_at_10%_10%,rgba(217,70,239,0.2),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.2),transparent_40%)]" />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 blur-xl rounded-full bg-fuchsia-500/30" />
                  <div className="relative rounded-xl bg-zinc-900 p-3 border border-fuchsia-500/30">
                    {React.createElement(a.icon, { size: 24, className: 'text-fuchsia-300' })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{a.title}</h3>
                  <p className="text-xs text-zinc-400">{a.year}</p>
                </div>
              </div>
              <p className="mt-4 text-zinc-300 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
