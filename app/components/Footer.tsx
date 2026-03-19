import Image from 'next/image';

const QUICK_LINKS = ['home', 'about', 'music', 'mixes', 'dates', 'bookings', 'connect'];

export default function Footer() {
  return (
    <footer className="bg-[#050508] pt-12 pb-8 px-6 md:px-8">
      {/* Psychedelic gradient divider */}
      <div
        className="w-full h-px mb-12"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #1d4ed8 20%, #3b82f6 40%, #00ff88 60%, #1d4ed8 80%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="text-center md:text-left">
            <a href="#home">
              <Image
                src="/logo-white.png"
                alt="Stack Rack"
                width={160}
                height={51}
                className="h-7 w-auto opacity-60 hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-gray-700 text-xs mt-2">Pedro Ferreira · UK · Since 2003</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {QUICK_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-700 hover:text-emerald-400 text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-700 text-[11px] tracking-wide">
            © Stack Rack / Pedro Ferreira. All rights reserved.
          </p>
          <p className="text-gray-800 text-[11px]">Full-On Psychedelic Trance</p>
        </div>
      </div>
    </footer>
  );
}
