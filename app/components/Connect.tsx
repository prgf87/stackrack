const SOCIALS = [
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/stackrack',
    color: 'hover:text-orange-400 hover:border-orange-400/50',
  },
  {
    name: 'Bandcamp',
    url: 'https://stackrack.bandcamp.com',
    color: 'hover:text-teal-400 hover:border-teal-400/50',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/6v9NIHItM3m531lZYWUphW',
    color: 'hover:text-green-400 hover:border-green-400/50',
  },
  {
    name: 'Beatport',
    url: 'https://www.beatport.com/artist/stack-rack/540654',
    color: 'hover:text-[#01ff95] hover:border-[#01ff95]/50',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/stack-rack/1088648814',
    color: 'hover:text-pink-400 hover:border-pink-400/50',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/stackrackmusic/',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/stackrack',
    color: 'hover:text-gray-200 hover:border-gray-400/50',
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-24 md:py-32 px-6 md:px-8 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs tracking-[0.5em] text-purple-400 uppercase mb-5">Follow the Signal</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
          Connect
        </h2>

        {/* Social links */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 border border-white/12 text-gray-500 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/5 ${s.color}`}
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto">
          <p className="text-gray-600 text-xs tracking-wide mb-5 uppercase">
            Stay informed — releases, shows, no spam
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 border-r-0 text-white placeholder-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-purple-600/80 transition-colors duration-200"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
