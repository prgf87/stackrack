export default function Videos() {
  return (
    <section id="videos" className="py-16 md:py-20 px-6 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Video
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          Live Sets
        </h2>

        <div className="border border-white/8 bg-white/2">
          <video
            src="/mauiwaui.mp4"
            controls
            className="w-full block"
            preload="metadata"
          />
          <div className="px-5 py-4">
            <p className="text-white font-display font-bold tracking-wide text-lg">
              Stack Rack @ Maui Waui - Psybercell Stage
            </p>
            <p className="text-white font-light tracking-wide text-sm">
              Track ID: Wavelength VS Stack Rack - Alpha Centauri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
