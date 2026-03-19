import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-5">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              Pedro Ferreira
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
              <p>
                Pedro Ferreira has been crafting psychedelic music as Stack Rack since 2003,
                ignited by the Goa-inspired sounds of Hallucinogen and forged in the underground
                party scene of the Kentish woodlands.
              </p>
              <p>
                His first live performance was at The Fridge, London in 2008 alongside Scorb, RAM,
                and NRS. His debut album{' '}
                <em className="text-emerald-400 not-italic font-medium">Planetary Collisions</em>{' '}
                (2009) was praised for its depth and variety.
              </p>
              <p>
                He has since released through Sculpted Sounds and appeared on compilations globally,
                also producing under aliases{' '}
                <span className="text-blue-400">Anthropod</span>,{' '}
                <span className="text-blue-400">Alien Devices</span>, and{' '}
                <span className="text-blue-400">Systematic Audio</span>.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div>
                <p className="text-2xl font-display font-bold text-white">2003</p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">Since</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-display font-bold text-white">20+</p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">Years Active</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-display font-bold text-white">4+</p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">Releases</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div
              className="absolute -inset-0.5 rounded-sm blur opacity-50"
              style={{
                background: 'linear-gradient(135deg, #1d4ed8, #00ff88, #1d4ed8)',
              }}
            />
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="/artist-photo.jpg"
                alt="Stack Rack (Pedro Ferreira) — UK full-on psychedelic trance artist and DJ, active since 2003"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              {/* Subtle colour grade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
