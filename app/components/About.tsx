import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-5">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              Pedro Ferreira
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
              <p>
                Stack Rack is the alias of Pedro Ferreira — a UK producer and DJ
                forged in the Kentish woodlands and London&apos;s underground
                squat party scene. His journey began at 15, cutting his teeth at
                illegal raves before Hallucinogen&apos;s{" "}
                <em className="text-emerald-400 not-italic font-medium">
                  Twisted
                </em>{" "}
                and a life-changing psychedelic experience set his course: two
                decades crafting uncompromising full-on psytrance.
              </p>
              <p>
                His debut live performance at The Fridge, London in 2008 —
                alongside Scorb, RAM and NRS — was followed by his acclaimed
                album{" "}
                <em className="text-emerald-400 not-italic font-medium">
                  Planetary Collisions
                </em>{" "}
                (2009). Since then his sound has sharpened into something more
                deliberate: blistering full-on intensity with hypnotic leads and
                driving basslines that command the floor.
              </p>
              <p>
                He has taken that sound international — a five-club week in
                Tokyo (2023), the stages of Touch Samadhi Festival (North
                Carolina), Sacred Earth (Missouri) and Maui Waui Festival.
                Shared stages include Ace Ventura, Laughing Buddha, Symbolic,
                Mandala, Tron and Burn in Noise.
              </p>
              <p>
                Recent momentum includes the{" "}
                <em className="text-emerald-400 not-italic font-medium">
                  Random EP
                </em>{" "}
                on Cosmic Era reaching{" "}
                <span className="text-white font-medium">#1 on Beatport</span>,
                collaborations with Kri Samadhi, Distant Touch & Daksinamurti
                and Wavelength, and remixes for Rugrats, NaiLik and Sabretooth.
                A new 9-track album is in progress alongside forthcoming
                releases on Free-Spirit Records and Phonix Records. He also
                produces under aliases{" "}
                <span className="text-blue-400">Anthropod</span>,{" "}
                <span className="text-blue-400">Alien Devices</span> and{" "}
                <span className="text-blue-400">Systematic Audio</span>.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div>
                <p className="text-2xl font-display font-bold text-white">
                  2003
                </p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">
                  Since
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-display font-bold text-white">
                  20+
                </p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">
                  Years Active
                </p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-display font-bold text-white">#1</p>
                <p className="text-xs text-gray-600 tracking-widest uppercase mt-1">
                  Beatport
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="https://f4.bcbits.com/img/0041697518_10.jpg"
                alt="Stack Rack (Pedro Ferreira) — UK full-on psychedelic trance artist and DJ, active since 2003"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
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
