import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://stackrack.co.uk";
const OG_IMAGE = `${SITE_URL}/profile-picture.JPG`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Stack Rack | Full-On Psychedelic Trance",
  description:
    "Stack Rack is Pedro Ferreira — veteran psytrance producer and DJ active since 2003. Beatport charting Artist, Audience from 50+ countries, Tokyo club tour and multiple US festival stages. Available now for international bookings.",
  keywords: [
    "Stack Rack",
    "psychedelic trance",
    "psytrance",
    "full-on psytrance",
    "night full-on",
    "twilight full-on",
    "Pedro Ferreira",
    "UK psytrance",
    "UK psychedelic trance",
    "Goa trance",
    "Goa trance DJ",
    "Sculpted Sounds",
    "psytrance DJ",
    "psytrance producer",
    "psytrance DJ booking UK",
    "full-on psychedelic trance artist for hire",
    "UK psytrance DJ",
    "psytrance festival DJ",
    "psychedelic trance live act UK",
    "psytrance UK underground",
    "UK Goa trance producer",
    "Planetary Collisions album",
    "book psytrance DJ",
    "psytrance DJ hire",
    "Kentish psytrance",
    "Anthropod",
    "Alien Devices",
    "Systematic Audio",
  ],
  icons: {
    icon: "/logo-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Stack Rack | Full-On Psychedelic Trance",
    description:
      "Stack Rack is Pedro Ferreira — psytrance producer and DJ active since 2003. Available for festivals, club nights and international bookings.",
    url: SITE_URL,
    siteName: "Stack Rack",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Stack Rack (Pedro Ferreira) — full-on psychedelic trance artist and DJ",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Rack | Full-On Psychedelic Trance",
    description:
      "Stack Rack is Pedro Ferreira — psytrance producer and DJ active since 2003. Available for festivals, club nights and international bookings.",
    images: [OG_IMAGE],
    creator: "@stackrack",
  },
};

// ── JSON-LD structured data ───────────────────────────────────────────────────

const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Stack Rack",
  alternateName: "Pedro Ferreira",
  description:
    "Full-on psychedelic trance producer and DJ from Portugal, active since 2003. #3 Beatport, Tokyo tour, US festivals. Releases on Sculpted Sounds, Cosmic Era, MMD Records.",
  genre: ["Psychedelic trance", "Full-on psytrance", "Goa trance"],
  foundingDate: "2003",
  foundingLocation: {
    "@type": "Place",
    name: "Portugal",
  },
  member: {
    "@type": "Person",
    name: "Pedro Ferreira",
  },
  image: OG_IMAGE,
  url: SITE_URL,
  sameAs: [
    "https://stackrack.bandcamp.com",
    "https://open.spotify.com/artist/6v9NIHItM3m531lZYWUphW",
    "https://soundcloud.com/stackrack",
    "https://www.beatport.com/artist/stack-rack/540654",
    "https://music.apple.com/us/artist/stack-rack/1088648814",
    "https://www.facebook.com/stackrackmusic/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "booking",
    email: "stackrack@live.com",
    telephone: "+447472097891",
    availableLanguage: "English",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Ferreira",
  alternateName: [
    "Stack Rack",
    "Anthropod",
    "Alien Devices",
    "Systematic Audio",
  ],
  description:
    "Full-on psychedelic trance artist, producer and DJ known as Stack Rack. Active since 2003. Beatport charting Artist, Audience from 50+ countries, Tokyo club tour and multiple US festival stages. Available for festivals, headline slots and international bookings.",
  nationality: "Portuguese",
  url: SITE_URL,
  sameAs: [SITE_URL],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stack Rack",
  url: SITE_URL,
  description:
    "Official website of Stack Rack —  full-on psychedelic trance artist and DJ.",
};

const albumSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "Incoming Transmission",
    datePublished: "2021",
    byArtist: { "@type": "MusicGroup", name: "Stack Rack" },
    recordLabel: { "@type": "Organization", name: "Sculpted Sounds" },
    image: "https://f4.bcbits.com/img/a2130698299_10.jpg",
    url: "https://stackrack.bandcamp.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "Modular Dimensions EP",
    datePublished: "2021",
    byArtist: { "@type": "MusicGroup", name: "Stack Rack" },
    recordLabel: { "@type": "Organization", name: "Sculpted Sounds" },
    image: "https://f4.bcbits.com/img/a2000732227_10.jpg",
    url: "https://stackrack.bandcamp.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "Initiation EP",
    datePublished: "2020",
    byArtist: { "@type": "MusicGroup", name: "Stack Rack" },
    recordLabel: { "@type": "Organization", name: "Sculpted Sounds" },
    image: "https://f4.bcbits.com/img/a3773032975_10.jpg",
    url: "https://stackrack.bandcamp.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "Planetary Collisions",
    datePublished: "2009",
    byArtist: { "@type": "MusicGroup", name: "Stack Rack" },
    recordLabel: { "@type": "Organization", name: "Sculpted Sounds" },
    image: "https://f4.bcbits.com/img/a1500098929_10.jpg",
    url: "https://stackrack.bandcamp.com",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`scroll-smooth ${orbitron.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {albumSchemas.map((album) => (
          <script
            key={album.name}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(album) }}
          />
        ))}
      </head>
      <body className="font-sans bg-[#0a0a0f] text-gray-300 antialiased">
        <ReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
