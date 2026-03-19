import Image from "next/image";

export default function Mixes() {
  return (
    <section id="mixes" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-5">
          Mixes & Radio
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
          Hear It Live
        </h2>

        {/* Live photo strip */}
        <div className="grid grid-cols-2 gap-2 mb-10">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/live-dj-1.jpeg"
              alt="Stack Rack live DJ set — close-up of decks under purple UV lights"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="/live-dj-2.jpeg"
              alt="Stack Rack performing live under blue UV lights"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* SoundCloud embed */}
        <div className="mb-10 border border-white/5">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/stackrack/are-you-out-there-remix&color=%2300ff88&auto_play=false&visual=true"
            className="border-0 block"
            title="Stack Rack on SoundCloud"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-white/8 bg-white/2">
          <div>
            <p className="text-gray-400 text-sm">
              More mixes and free tracks available on SoundCloud.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              EPK and tech rider available on request.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://soundcloud.com/stackrack"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-white/15 text-gray-400 hover:text-white hover:border-white/30 text-xs tracking-[0.2em] uppercase transition-all duration-200"
            >
              SoundCloud
            </a>
            <a
              href="#bookings"
              className="px-5 py-2.5 border border-blue-600/50 text-blue-400 hover:bg-blue-700 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-200"
            >
              Request EPK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
