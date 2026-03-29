import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          About
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          Stack Rack
        </h2>

        {/* Image floats right — text wraps around it, then flows full-width once past */}
        <div className="md:float-right md:ml-10 md:mb-6 mb-8 md:w-[38%]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/profile-picture.JPG"
              alt="Stack Rack (Pedro Ferreira) — UK full-on psychedelic trance artist and DJ, active since 2003"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="space-y-5 text-gray-400 leading-relaxed text-base">
          <p>
            Stack Rack is the alias of Pedro Ferreira — a distinguished UK-based
            Portuguese psychedelic trance producer and DJ whose 20-plus year
            career has made him a respected figure in the global full-on and
            twilight psytrance scene. His signature sound combines powerful
            driving basslines, intricate percussion, soaring arpeggios and
            aggressive acid and FM lines — a deliberate full-on assault at
            146–148 BPM liberally charged with twilight modulations and
            Goa-inspired euphoric moments.
          </p>

          <p>
            His story began at 15 in Kent, immersed in the underground scene —
            organising parties, DJing at forest raves and navigating
            London&apos;s legendary squat party circuit. Hallucinogen&apos;s
            seminal album{" "}
            <em className="text-emerald-400 not-italic font-medium">Twisted</em>{" "}
            sparked an obsessive need to understand the mechanics of psychedelic
            music production, setting him on a path of intensive study in music
            theory, composition and computer music systems — with Cubase
            becoming his primary creative instrument.
          </p>

          <p>
            His debut live performance came in 2008 at The Fridge, London,
            alongside Last Possible Solution Records legends Scorb, RAM and NRS.
            His first album{" "}
            <em className="text-emerald-400 not-italic font-medium">
              Technophobia
            </em>{" "}
            (2005) drew on the sounds of Ambivalent and Doof Records, while{" "}
            <em className="text-emerald-400 not-italic font-medium">
              Planetary Collisions
            </em>{" "}
            (2009) — built from half a decade of peak dancefloor experiences —
            received critical acclaim for its variety, depth and mature
            production techniques.
          </p>

          <p>
            He has released on prestigious international labels including
            Sculpted Sounds (USA), MMD Records (South Africa), Nexus Media
            (South Africa) and Metabolizm Records (Canada). His{" "}
            <em className="text-emerald-400 not-italic font-medium">
              Year of the Snake
            </em>{" "}
            collaboration with Random reached{" "}
            <span className="text-white font-medium">
              #3 on the Beatport Psytrance Release Charts
            </span>
            , when Random&apos;s{" "}
            <em className="text-emerald-400 not-italic font-medium">
              Cosmic Era EP
            </em>{" "}
            landed on Sculpted Sounds in 2025.
          </p>

          <p>
            Stack Rack has performed across three continents — a five-club week
            in Tokyo (2023), Touch Samadhi Festival in North Carolina (2019),
            Sacred Earth in Missouri (2022) and Maui Waui Festival, UK. He has
            shared stages with Ace Ventura, Burn in Noise, Laughing Buddha,
            Scorb, Symbolic, Mandala, Tron, Dirty Saffi, Illegal Machines and
            headlined countless events across the UK circuit.
          </p>

          <p>
            A new 9-track album is in progress alongside forthcoming releases on
            Free-Spirit Records, Phonix Records and MMD Records. Beyond Stack
            Rack, Pedro also produces as{" "}
            <span className="text-emerald-400">Anthropod</span> (experimental
            psytrance), <span className="text-emerald-400">Alien Devices</span>{" "}
            (progresive full-on) and{" "}
            <span className="text-emerald-400">Systematic Audio</span> (techno
            inspired psytrance).
          </p>
        </div>

        <blockquote className="mt-8 border-l-2 border-emerald-400 pl-5 text-gray-500 italic leading-relaxed text-sm">
          &ldquo;I started making music after a really amazing experience: my
          first full sunrise at a party and as I woke up from a brief nap, my
          back against a tree and the sound system in front of me&hellip; I saw
          the sound waves emanating from the speakers and flowing through those
          beautiful woods. I haven&apos;t stopped since that incredible
          experience.&rdquo;
        </blockquote>

        <div className="clear-both" />
      </div>
    </section>
  );
}
