"use client";

import { useState } from "react";

const DATES = [
  {
    date: "Thu 24 Apr 2008",
    iso: "2008-04-24",
    event: "La Creme De La Creme",
    city: "Canterbury",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Thu 22 May 2008",
    iso: "2008-05-22",
    event: "La Creme De La Creme",
    city: "Canterbury",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Thu 12 Nov 2009",
    iso: "2009-11-12",
    event: "MultiVerse: La Creme De La Creme",
    city: "Canterbury",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Sat 30 Jan 2010",
    iso: "2010-01-30",
    event: "Secret Shindig 2",
    city: "London",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Fri 26 Mar 2010",
    iso: "2010-03-26",
    event: "Reborn Productions: Electric Dribble",
    city: "Kent",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Fri 19 Apr 2019",
    iso: "2019-04-19",
    event: "Psyrhythmix",
    city: "London",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Fri 21 Jun 2019",
    iso: "2019-06-21",
    event: "Solstice 4",
    city: "Asheville, NC",
    country: "USA",
    ticketUrl: "#",
  },
  {
    date: "Sat 14 Dec 2019",
    iso: "2019-12-14",
    event: "Psymera Christmas Special",
    city: "London",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Fri 17 Feb 2023",
    iso: "2023-02-17",
    event: "Star Planet @ WOMB Lounge",
    city: "Tokyo",
    country: "Japan",
    ticketUrl: "#",
  },
  {
    date: "Fri 9 Aug 2024",
    iso: "2024-08-09",
    event: "Elemental: Burn In Noise & Stack Rack",
    city: "Leeds",
    country: "UK",
    ticketUrl: "#",
  },
  {
    date: "Sat 8-10 May 2026",
    iso: "2026-05-08",
    event: "Private Event",
    city: "Algarve",
    country: "Portugal",
    ticketUrl: "#",
  },
  {
    date: "Sat 11 July 2026",
    iso: "2026-07-11",
    event: "Celtic Tribe: London Takeover",
    city: "London",
    country: "UK",
    ticketUrl: "https://www.tickettailor.com/events/celtictribe/2200278",
  },
  {
    date: "Sat 25-27 September 2026",
    iso: "2026-09-25",
    event: "PFG: Lunar Apex",
    city: "San Francisco",
    country: "USA",
    ticketUrl: "https://sculptedsounds.com/",
  },
  {
    date: "January 2027",
    iso: "2027-01-01",
    event: "Elemental Psytrance",
    city: "Leeds",
    country: "UK",
    ticketUrl: "#",
  },
];

const today = new Date().toISOString().slice(0, 10);
const isPast = (iso: string) => iso < today;

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
    url: "https://stackrack.co.uk",
  },
  ...(show.ticketUrl !== "#" && {
    url: show.ticketUrl,
    offers: {
      "@type": "Offer",
      url: show.ticketUrl,
      availability: "https://schema.org/InStock",
    },
  }),
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
}));

export default function LiveDates() {
  const [pastOpen, setPastOpen] = useState(false);

  const upcomingShows = DATES.filter((d) => !isPast(d.iso)).sort((a, b) =>
    a.iso.localeCompare(b.iso)
  );
  const pastShows = DATES.filter((d) => isPast(d.iso)).sort((a, b) =>
    b.iso.localeCompare(a.iso)
  );

  return (
    <section id="dates" className="py-16 md:py-20 px-6 md:px-8 bg-[#0d0d18]">
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.5em] text-emerald-400 uppercase mb-3">
          Shows
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          Live Dates
        </h2>

        {upcomingShows.length === 0 ? (
          <div className="text-center py-20 border border-white/8">
            <p className="text-gray-600 tracking-widest text-base">
              No upcoming dates listed, check back soon.
            </p>
          </div>
        ) : (
          <div className="border-t border-white/8">
            {upcomingShows.map((show, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/8 gap-3 hover:bg-white/2 px-2 transition-colors duration-200 group"
              >
                <div className="flex gap-4 sm:gap-10 items-start sm:items-center">
                  <time
                    dateTime={show.iso}
                    className="font-mono text-emerald-400 text-base shrink-0 w-40"
                  >
                    {show.date}
                  </time>
                  <div>
                    <span className="text-white text-base font-medium">
                      {show.event}
                    </span>
                    <span className="text-gray-600 ml-3 text-sm">
                      {show.city}, {show.country}
                    </span>
                  </div>
                </div>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-emerald-600/50 text-emerald-400 hover:bg-emerald-700 hover:text-white px-4 py-2 tracking-[0.2em] uppercase transition-all duration-200 w-fit"
                >
                  Tickets
                </a>
              </div>
            ))}
          </div>
        )}

        {pastShows.length > 0 && (
          <div className="mt-8">
            <button
              onClick={() => setPastOpen((v) => !v)}
              className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-gray-600 hover:text-gray-400 transition-colors duration-200"
            >
              <span className="text-base leading-none font-light">
                {pastOpen ? "−" : "+"}
              </span>
              Past shows ({pastShows.length})
            </button>

            {pastOpen && (
              <div className="border-t border-white/8 mt-6">
                {pastShows.map((show, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/8 gap-3 px-2 opacity-40"
                  >
                    <div className="flex gap-4 sm:gap-10 items-start sm:items-center">
                      <time
                        dateTime={show.iso}
                        className="font-mono text-gray-500 text-base shrink-0 w-40"
                      >
                        {show.date}
                      </time>
                      <div>
                        <span className="text-white text-base font-medium">
                          {show.event}
                        </span>
                        <span className="text-gray-600 ml-3 text-sm">
                          {show.city}, {show.country}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs border border-white/10 text-gray-600 px-4 py-2 tracking-[0.2em] uppercase w-fit shrink-0">
                      Past
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-gray-700 text-sm text-center mt-10 tracking-wide">
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
