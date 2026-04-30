"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = "spotify" | "bandcamp" | "latest" | "beatport";

type Release = {
  title: string;
  year: number;
  label: string;
  cover: string;
  link: string;
};

const RELEASES: Release[] = [
  {
    title: "Cosmic Era",
    year: 2025,
    label: "Sculpted Sounds",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/468b4b67-18c2-4a7d-b2ba-436dbf1574bd.jpg",
    link: "https://www.beatport.com/release/cosmic-era/5441833",
  },
  {
    title: "The Good, The Bad, & The Filthy Vol. 4",
    year: 2025,
    label: "MMD Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/929c07d1-0da9-498e-992b-2a3de6af5795.jpg",
    link: "https://www.beatport.com/release/the-good-the-bad-the-filthy-vol-4-2020-2025/4915647",
  },
  {
    title: "Psychedelic Therapy 2",
    year: 2024,
    label: "Sculpted Sounds",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/5f26ab8e-23cf-4453-a3be-7b5270fe7510.jpg",
    link: "https://www.beatport.com/release/psychedelic-therapy-2-compiled-by-blackburn/4594456",
  },
  {
    title: "Future Bionics",
    year: 2024,
    label: "Dropland Recordings",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/3517c920-99fb-47f3-82e9-64c7e6877228.jpg",
    link: "https://www.beatport.com/release/future-bionics/4455640",
  },
  {
    title: "Universal Conspiration",
    year: 2024,
    label: "Metabolizm Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/dbe8a317-d864-4e9b-8825-7dd5a4ebdde0.jpg",
    link: "https://www.beatport.com/release/universal-conspiration/4481406",
  },
  {
    title: "Root Function",
    year: 2023,
    label: "Phonix Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/c7607a95-8aec-454e-aa2d-acd2589128c5.jpg",
    link: "https://www.beatport.com/release/root-function-compiled-by-ishikawa/4076812",
  },
  {
    title: "Foundational Frequencies 3",
    year: 2022,
    label: "Sculpted Sounds",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/d3641b84-afae-48f6-adfc-657caa16f2de.jpg",
    link: "https://www.beatport.com/release/foundational-frequencies-3/3913835",
  },
  {
    title: "Moon Juice",
    year: 2022,
    label: "MMD Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/3046fce3-aa26-46ed-b892-298ff64784de.jpg",
    link: "https://www.beatport.com/release/moon-juice/3867732",
  },
  {
    title: "Incoming Transmission",
    year: 2021,
    label: "Sculpted Sounds",
    cover: "https://f4.bcbits.com/img/a2130698299_10.jpg",
    link: "https://stackrack.bandcamp.com/album/incoming-transmission",
  },
  {
    title: "Modular Dimensions EP",
    year: 2021,
    label: "Sculpted Sounds",
    cover: "https://f4.bcbits.com/img/a2000732227_10.jpg",
    link: "https://stackrack.bandcamp.com/album/modular-dimensions-ep",
  },
  {
    title: "Carousel Vol 2",
    year: 2021,
    label: "Sculpted Sounds",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/42528582-b4e0-44f1-8fc2-712339b3bf5d.jpg",
    link: "https://www.beatport.com/release/carousel-vol-2/3235242",
  },
  {
    title: "Initiation EP",
    year: 2020,
    label: "Sculpted Sounds",
    cover: "https://f4.bcbits.com/img/a3773032975_10.jpg",
    link: "https://stackrack.bandcamp.com/album/initiation-ep",
  },
  {
    title: "Twin Realities",
    year: 2020,
    label: "Maharetta Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/f39f47b2-0c90-4c1f-b22d-483de166fae4.jpg",
    link: "https://www.beatport.com/release/twin-realities/3032352",
  },
  {
    title: "Twilight Core Vol. 3",
    year: 2020,
    label: "Phonix Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/39473c1f-9e9f-4f72-b0e3-52ad3bbbfd35.jpg",
    link: "https://www.beatport.com/release/twilight-core-vol-3-compiled-by-ishikawa/2959298",
  },
  {
    title: "Digital Breed Vol. 5",
    year: 2019,
    label: "MMD Records",
    cover:
      "https://geo-media.beatport.com/image_size/1400x1400/9a781388-b1f3-4b46-917c-399ab3188e93.jpg",
    link: "https://www.beatport.com/release/digital-breed-vol-5-vital-components/2684907",
  },
  {
    title: "Planetary Collisions",
    year: 2009,
    label: "Sculpted Sounds",
    cover: "https://f4.bcbits.com/img/a1500098929_10.jpg",
    link: "https://stackrack.bandcamp.com/album/planetary-collisions",
  },
];

const BEATPORT_RELEASES = RELEASES.filter((r) =>
  r.link.includes("beatport.com"),
);

const TABS: { id: Tab; label: string }[] = [
  { id: "latest", label: "Latest Release" },
  { id: "spotify", label: "Spotify" },
  { id: "bandcamp", label: "Bandcamp" },
  { id: "beatport", label: "Beatport" },
];

export default function Music() {
  const [activeTab, setActiveTab] = useState<Tab>("latest");

  return (
    <section id="music" className="py-16 md:py-20 px-6 md:px-8 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Discography
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          The Music
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 mb-6 border border-white/10 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-emerald-700 text-white"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Embed area */}
        <div className="mb-10 min-h-[120px]">
          {activeTab === "latest" &&
            (() => {
              const latest = RELEASES[0];
              return (
                <div className="flex flex-col sm:flex-row items-center gap-8 border border-white/5 bg-white/3 p-8 sm:p-10">
                  <div className="relative w-40 h-40 shrink-0">
                    <Image
                      src={latest.cover}
                      alt={`Stack Rack — ${latest.title}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
                    <div>
                      <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase mb-2">
                        Latest Release
                      </p>
                      <p className="text-white text-2xl font-display font-bold tracking-wide mb-1">
                        {latest.title}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {latest.label} · {latest.year}
                      </p>
                    </div>
                    <a
                      href={latest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-[#01ff95] hover:bg-[#00e085] text-black font-bold tracking-[0.15em] text-sm uppercase transition-all duration-300"
                    >
                      Buy on Beatport
                    </a>
                  </div>
                </div>
              );
            })()}

          {activeTab === "bandcamp" && (
            <div className="flex flex-col sm:flex-row items-center gap-8 border border-white/5 bg-white/3 p-8 sm:p-10">
              <div className="flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 shrink-0"
                  fill="#1DA0C3"
                >
                  <path d="M0 18.75l7.437-13.5H24L16.563 18.75z" />
                </svg>
                <div>
                  <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase mb-2">
                    Listen &amp; Buy on Bandcamp
                  </p>
                  <p className="text-white text-2xl font-display font-bold tracking-wide mb-1">
                    Stack Rack
                  </p>
                  <p className="text-gray-500 text-sm">
                    Albums · EPs · name your price
                  </p>
                </div>
                <a
                  href="https://stackrack.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1DA0C3] hover:bg-[#1db8df] text-black font-bold tracking-[0.15em] text-sm uppercase transition-all duration-300"
                >
                  Visit on Bandcamp
                </a>
              </div>
            </div>
          )}

          {activeTab === "spotify" && (
            <div className="flex flex-col sm:flex-row items-center gap-8 border border-white/5 bg-white/3 p-8 sm:p-10">
              <div className="flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 shrink-0"
                  fill="#1DB954"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <div>
                  <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase mb-2">
                    Stream on Spotify
                  </p>
                  <p className="text-white text-2xl font-display font-bold tracking-wide mb-1">
                    Stack Rack
                  </p>
                  <p className="text-gray-500 text-sm">
                    Full discography · playlists · new releases
                  </p>
                </div>
                <a
                  href="https://open.spotify.com/artist/6v9NIHItM3m531lZYWUphW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold tracking-[0.15em] text-sm uppercase transition-all duration-300"
                >
                  Follow on Spotify
                </a>
              </div>
            </div>
          )}

          {activeTab === "beatport" && (
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
                    <div className="aspect-square overflow-hidden relative">
                      <Image
                        src={release.cover}
                        alt={`Stack Rack — ${release.title} (${release.year}) on ${release.label}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3.5">
                      <p className="text-white text-sm font-semibold leading-snug">
                        {release.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
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
                  className="px-10 py-4 bg-[#01ff95] hover:bg-[#00e085] text-black font-bold tracking-[0.2em] text-sm uppercase transition-all duration-300"
                >
                  View All on Beatport
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mb-10">
          <h3 className="font-display text-4xl font-bold text-white mb-4 tracking-wider">
            All Releases
          </h3>
          <div className="w-[10em] h-px bg-emerald-600/60" />
        </div>

        {/* Release cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {RELEASES.map((release) => (
            <a
              key={release.title}
              href={release.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden bg-white/3 hover:bg-white/8 border border-white/5 hover:border-emerald-600/40 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={release.cover}
                  alt={`Stack Rack — ${release.title} (${release.year}) on ${release.label}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-3.5">
                <p className="text-white text-sm font-semibold leading-snug">
                  {release.title}
                </p>
                <p className="text-gray-400 text-xs mt-1">
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
