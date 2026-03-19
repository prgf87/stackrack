'use client';

import { useState } from 'react';

type Tab = 'bandcamp' | 'spotify' | 'beatport';

type Release = {
  title: string;
  year: number;
  label: string;
  cover: string;
  link: string;
};

const RELEASES: Release[] = [
  {
    title: 'Cosmic Era',
    year: 2025,
    label: 'Sculpted Sounds',
    cover: 'https://geo-media.beatport.com/image_size/1400x1400/468b4b67-18c2-4a7d-b2ba-436dbf1574bd.jpg',
    link: 'https://www.beatport.com/release/cosmic-era/5441833',
  },
  {
    title: 'Future Bionics',
    year: 2024,
    label: 'Dropland Recordings',
    cover: 'https://geo-media.beatport.com/image_size/1400x1400/3517c920-99fb-47f3-82e9-64c7e6877228.jpg',
    link: 'https://www.beatport.com/release/future-bionics/4455640',
  },
  {
    title: 'Universal Conspiration',
    year: 2024,
    label: 'Metabolizm Records',
    cover: 'https://geo-media.beatport.com/image_size/1400x1400/dbe8a317-d864-4e9b-8825-7dd5a4ebdde0.jpg',
    link: 'https://www.beatport.com/release/universal-conspiration/4481406',
  },
  {
    title: 'Moon Juice',
    year: 2022,
    label: 'MMD Records',
    cover: 'https://geo-media.beatport.com/image_size/1400x1400/3046fce3-aa26-46ed-b892-298ff64784de.jpg',
    link: 'https://www.beatport.com/release/moon-juice/3867732',
  },
  {
    title: 'Incoming Transmission',
    year: 2021,
    label: 'Sculpted Sounds',
    cover: 'https://f4.bcbits.com/img/a2130698299_10.jpg',
    link: 'https://stackrack.bandcamp.com/album/incoming-transmission',
  },
  {
    title: 'Modular Dimensions EP',
    year: 2021,
    label: 'Sculpted Sounds',
    cover: 'https://f4.bcbits.com/img/a2000732227_10.jpg',
    link: 'https://stackrack.bandcamp.com/album/modular-dimensions-ep',
  },
  {
    title: 'Initiation EP',
    year: 2020,
    label: 'Sculpted Sounds',
    cover: 'https://f4.bcbits.com/img/a3773032975_10.jpg',
    link: 'https://stackrack.bandcamp.com/album/initiation-ep',
  },
  {
    title: 'Planetary Collisions',
    year: 2009,
    label: 'Sculpted Sounds',
    cover: 'https://f4.bcbits.com/img/a1500098929_10.jpg',
    link: 'https://stackrack.bandcamp.com/album/planetary-collisions',
  },
];

const BEATPORT_RELEASES = RELEASES.filter((r) =>
  r.link.includes('beatport.com')
);

const TABS: { id: Tab; label: string }[] = [
  { id: 'bandcamp', label: 'Latest Release' },
  { id: 'spotify', label: 'Spotify' },
  { id: 'beatport', label: 'Buy on Beatport' },
];

export default function Music() {
  const [activeTab, setActiveTab] = useState<Tab>('bandcamp');

  return (
    <section id="music" className="py-24 md:py-32 px-6 md:px-8 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-5">Discography</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
          The Music
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 mb-8 border border-white/10 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Embed area */}
        <div className="mb-16 min-h-[120px]">
          {activeTab === 'bandcamp' && (() => {
            const latest = RELEASES[0];
            return (
              <div className="flex flex-col sm:flex-row gap-6 border border-white/5 bg-white/3 p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={latest.cover}
                  alt={`Stack Rack — ${latest.title}`}
                  className="w-full sm:w-40 aspect-square object-cover shrink-0"
                />
                <div className="flex flex-col justify-center gap-4">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] text-emerald-400 uppercase mb-1">Latest Release</p>
                    <p className="text-white text-xl font-display font-bold tracking-wide">{latest.title}</p>
                    <p className="text-gray-500 text-xs mt-1">{latest.label} · {latest.year}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={latest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#01ff95] hover:bg-[#00e085] text-black font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300"
                    >
                      Buy on Beatport
                    </a>
                    <a
                      href="https://stackrack.bandcamp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-white/20 hover:border-blue-500/60 text-gray-300 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    >
                      Bandcamp
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}

          {activeTab === 'spotify' && (
            <iframe
              src="https://open.spotify.com/embed/artist/6v9NIHItM3m531lZYWUphW"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0 rounded-sm"
              title="Stack Rack on Spotify"
            />
          )}

          {activeTab === 'beatport' && (
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BEATPORT_RELEASES.map((release) => (
                  <a
                    key={release.title}
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden bg-white/3 hover:bg-white/8 border border-white/5 hover:border-[#01ff95]/40 transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={release.cover}
                        alt={`Stack Rack — ${release.title} (${release.year}) on ${release.label}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-white text-xs font-semibold leading-snug">{release.title}</p>
                      <p className="text-gray-600 text-[11px] mt-1">
                        {release.label} · {release.year}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.beatport.com/artist/stack-rack/540654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-[#01ff95] hover:bg-[#00e085] text-black font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300"
                >
                  View All on Beatport
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.4em] text-gray-600 uppercase mb-6">All Releases</p>
          <div className="w-12 h-px bg-blue-600/60" />
        </div>

        {/* Release cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RELEASES.map((release) => (
            <a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden bg-white/3 hover:bg-white/8 border border-white/5 hover:border-blue-600/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={release.cover}
                  alt={`Stack Rack — ${release.title} (${release.year}) on ${release.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5">
                <p className="text-white text-xs font-semibold leading-snug">{release.title}</p>
                <p className="text-gray-600 text-[11px] mt-1">
                  {release.label} · {release.year}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
