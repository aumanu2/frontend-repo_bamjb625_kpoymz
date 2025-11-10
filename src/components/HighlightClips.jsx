import React from 'react';
import { Play, Youtube } from 'lucide-react';

const clips = [
  {
    id: 'clip1',
    title: 'Insane 1v4 clutch - Neon Arena',
    length: '1:12',
    thumb: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'clip2',
    title: 'Speedrun WR - Cyber Runner',
    length: '2:47',
    thumb: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'clip3',
    title: 'Perfect Parry Montage',
    length: '0:58',
    thumb: 'https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function HighlightClips() {
  return (
    <section id="clips" className="relative w-full bg-black text-white py-20">
      <div className="container mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-fuchsia-400/80 text-sm tracking-widest">HIGHLIGHT CLIPS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2">Top Plays & Reels</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-500/40 bg-zinc-900/60 px-4 py-2 text-sm hover:bg-fuchsia-500/10"
          >
            <Youtube size={18} className="text-red-400" /> Visit Channel
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {clips.map((c) => (
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-fuchsia-500/30 bg-zinc-900/40"
            >
              <img src={c.thumb} alt={c.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-xs text-zinc-400">{c.length}</p>
                </div>
                <div className="rounded-full bg-fuchsia-500 text-black p-3 shadow-[0_0_25px_rgba(217,70,239,0.5)]">
                  <Play size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
