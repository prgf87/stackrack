'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PARTICLE_COLORS = [
  '#a855f7',
  '#7c3aed',
  '#c084fc',
  '#3b82f6',
  '#60a5fa',
  '#00ff88',
  '#00d4ff',
];

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    for (let i = 0; i < 130; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.15,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.2 + 0.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * pulse;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Animated radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(124,58,237,0.18) 0%, rgba(59,130,246,0.10) 40%, transparent 70%)',
          animation: 'pulse-glow 10s ease-in-out infinite',
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-purple-400/80 uppercase mb-10">
          Full-On Psychedelic Trance
        </p>

        <h1 className="sr-only">Stack Rack</h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/logo-white.png"
            alt="Stack Rack"
            width={700}
            height={225}
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-2xl"
            style={{
              filter:
                'drop-shadow(0 0 40px rgba(168,85,247,0.7)) drop-shadow(0 0 80px rgba(59,130,246,0.4))',
            }}
            priority
          />
        </div>

        <p className="text-gray-500 text-sm md:text-base tracking-[0.35em] uppercase mb-12">
          UK Underground Since 2003
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#bookings"
            className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-[0.2em] text-xs uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            Book Now
          </a>
          <a
            href="#music"
            className="px-8 py-3.5 border border-white/20 hover:border-purple-500/60 text-gray-300 hover:text-white font-semibold tracking-[0.2em] text-xs uppercase transition-all duration-300"
          >
            Hear the Music
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-purple-600 to-transparent" style={{ animation: 'float-up 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
