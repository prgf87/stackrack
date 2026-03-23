'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Mixes', href: '#mixes' },
  { label: 'Dates', href: '#dates' },
  { label: 'Book', href: '#bookings' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Stack Rack"
            width={180}
            height={58}
            className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#bookings"
            className="ml-4 px-5 py-2 border border-blue-600/60 text-blue-400 hover:bg-blue-700 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-200"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
