const DATES = [
  // Replace these with real dates when available
  {
    date: "Sat 25-27 September 2026",
    iso: "2026-09-25",
    event: "TBC",
    city: "San Francisco",
    country: "USA",
    ticketUrl: "https://sculptedsounds.com/",
  },
];

const eventSchemas = DATES.map((show) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: show.event,
  startDate: show.iso,
  location: {
    "@type": "Place",
    name: show.city,
    address: {
      "@type": "PostalAddress",
      addressLocality: show.city,
      addressCountry: show.country,
    },
  },
  performer: {
    "@type": "MusicGroup",
    name: "Stack Rack",
    url: "https://stackrack.com",
  },
  url: show.ticketUrl !== "#" ? show.ticketUrl : "https://stackrack.com/#dates",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
}));

export default function LiveDates() {
  return (
    <section id="dates" className="py-16 md:py-20 px-6 md:px-8 bg-[#0d0d18]">
      {eventSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Shows
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
          Live Dates
        </h2>

        {DATES.length === 0 ? (
          <div className="text-center py-20 border border-white/8">
            <p className="text-gray-600 tracking-widest text-sm">
              No upcoming dates listed — check back soon.
            </p>
          </div>
        ) : (
          <div className="border-t border-white/8">
            {DATES.map((show, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/8 gap-3 hover:bg-white/2 px-2 transition-colors duration-200 group"
              >
                <div className="flex gap-4 sm:gap-10 items-start sm:items-center">
                  <time
                    dateTime={show.iso}
                    className="font-mono text-emerald-400 text-sm shrink-0 w-36"
                  >
                    {show.date}
                  </time>
                  <div>
                    <span className="text-white text-sm font-medium">
                      {show.event}
                    </span>
                    <span className="text-gray-600 ml-3 text-xs">
                      {show.city}, {show.country}
                    </span>
                  </div>
                </div>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] border border-emerald-600/50 text-emerald-400 hover:bg-emerald-700 hover:text-white px-4 py-2 tracking-[0.2em] uppercase transition-all duration-200 w-fit"
                >
                  Tickets
                </a>
              </div>
            ))}
          </div>
        )}

        <p className="text-gray-700 text-xs text-center mt-10 tracking-wide">
          For festival and event bookings,{" "}
          <a
            href="#bookings"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
          >
            use the contact form below
          </a>
          .
        </p>
      </div>
    </section>
  );
}
