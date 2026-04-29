"use client";

import { CldImage } from "next-cloudinary";

export default function Mixes() {
  return (
    <section id="mixes" className="py-16 md:py-20 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Mixes & Radio
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
          Lost in the Cloud
        </h2>

        {/* Live photo strip */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="relative aspect-video overflow-hidden">
            <CldImage
              src="profile_1_x8qwcc.jpg"
              alt="Stack Rack live DJ set — close-up of decks under purple UV lights"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <CldImage
              src="profile_2_hcqqpt.jpg"
              alt="Stack Rack performing live under blue UV lights"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* SoundCloud embed */}
        <div className="mb-6 border border-white/5">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1296307240&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            className="border-0 block"
            title="Stack Rack on SoundCloud"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-white/8 bg-white/2">
          <div>
            <p className="text-gray-400 text-base">
              More mixes and free tracks available on SoundCloud.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              EPK and tech rider available on request.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://soundcloud.com/stackrack"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/15 text-gray-400 hover:text-white hover:border-white/30 text-sm tracking-[0.2em] uppercase transition-all duration-200"
            >
              SoundCloud
            </a>
            <a
              href="#bookings"
              className="px-5 py-2.5 border border-emerald-600/50 text-emerald-400 hover:bg-emerald-700 hover:text-white text-sm tracking-[0.2em] uppercase transition-all duration-200"
            >
              Request EPK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
