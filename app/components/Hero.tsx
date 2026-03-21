"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const TUNNEL_COLORS = ["#1d4ed8", "#2563eb", "#00d4ff", "#00ff88", "#3b82f6"];

const PARTICLE_COLORS = [
  "#1d4ed8",
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#00ff88",
  "#00d4ff",
];

interface Ring {
  progress: number;
  speed: number;
  colorIndex: number;
  sides: number;
  rotation: number;
}

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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    let colorCounter = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const RING_COUNT = 14;
    const rings: Ring[] = Array.from({ length: RING_COUNT }, (_, i) => ({
      progress: i / RING_COUNT,
      speed: 0.0025 + Math.random() * 0.0015,
      colorIndex: i % TUNNEL_COLORS.length,
      sides: i % 3 === 0 ? 3 : 6,
      rotation: i % 3 === 0 ? Math.PI / 6 : Math.PI / 12,
    }));

    const particles: Particle[] = Array.from({ length: 65 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.28,
      dy: (Math.random() - 0.5) * 0.28,
      opacity: Math.random() * 0.35 + 0.08,
      color:
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const drawPolygon = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      sides: number,
      radius: number,
      rotation: number,
    ) => {
      c.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = ((2 * Math.PI) / sides) * i + rotation;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.closePath();
    };

    const BEAT_MS = 60000 / 147; // ~408.16ms

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.82;

      // Beat-synced centre glow — peaks on every 147 BPM beat
      const beatPhase = (timestamp % BEAT_MS) / BEAT_MS;
      const beatPulse = Math.pow(Math.cos(beatPhase * Math.PI), 2);
      const glowR = 120 + beatPulse * 60;
      const glowIntensity = 0.08 + beatPulse * 0.14;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      grd.addColorStop(0, `rgba(0, 212, 255, ${glowIntensity})`);
      grd.addColorStop(0.35, `rgba(29, 78, 216, ${glowIntensity * 0.5})`);
      grd.addColorStop(1, "transparent");
      ctx.globalAlpha = 1;
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tunnel rings
      rings.forEach((ring) => {
        ring.progress += ring.speed;
        if (ring.progress >= 1) {
          ring.progress = 0;
          colorCounter++;
          ring.colorIndex = colorCounter % TUNNEL_COLORS.length;
        }

        const eased = Math.pow(ring.progress, 1.6);
        const radius = eased * maxRadius;

        const opacity =
          ring.progress < 0.12
            ? (ring.progress / 0.12) * 0.55
            : ring.progress > 0.72
              ? ((1 - ring.progress) / 0.28) * 0.55
              : 0.55;

        ctx.strokeStyle = TUNNEL_COLORS[ring.colorIndex];
        ctx.lineWidth = 0.7;
        ctx.globalAlpha = opacity;
        drawPolygon(ctx, cx, cy, ring.sides, radius, ring.rotation);
        ctx.stroke();

        // Inner echo — swapped sides, counter-rotated
        ctx.globalAlpha = opacity * 0.3;
        ctx.lineWidth = 0.4;
        drawPolygon(
          ctx,
          cx,
          cy,
          ring.sides === 3 ? 6 : 3,
          radius * 0.58,
          ring.rotation + Math.PI / ring.sides,
        );
        ctx.stroke();
      });

      // Ambient particles
      ctx.globalAlpha = 1;
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.y < -5) p.y = canvas.height + 5;
        if (p.y > canvas.height + 5) p.y = -5;

        const pulse =
          Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.2 + 0.8;
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
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Outer radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(29,78,216,0.18) 0%, rgba(0,255,136,0.05) 45%, transparent 70%)",
          animation: "pulse-glow 6.531s ease-in-out infinite",
        }}
      />

      {/* Sacred geometry watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      >
        <Image
          src="/logo-icon.png"
          alt=""
          width={820}
          height={820}
          className="opacity-[0.055] select-none"
          style={{
            filter: "invert(1)",
            animation: "spin-slow 90s linear infinite",
          }}
          aria-hidden
          priority
        />
      </div>

      {/* Canvas — tunnel rings + particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-emerald-400/80 uppercase mb-10">
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
                "drop-shadow(0 0 40px rgba(0,255,136,0.5)) drop-shadow(0 0 80px rgba(29,78,216,0.6))",
            }}
            priority
          />
        </div>

        <p className="text-gray-500 text-sm md:text-base tracking-[0.35em] uppercase mb-12">
          Veteran UK Psytrance Producer & DJ · 20 Years Underground
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#bookings"
            className="px-8 py-3.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold tracking-[0.2em] text-xs uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(29,78,216,0.6)]"
          >
            Book Now
          </a>
          <a
            href="#music"
            className="px-8 py-3.5 border border-white/20 hover:border-blue-500/60 text-gray-300 hover:text-white font-semibold tracking-[0.2em] text-xs uppercase transition-all duration-300"
          >
            Hear the Music
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">
          Scroll
        </span>
        <div
          className="w-px h-10 bg-gradient-to-b from-blue-600 to-transparent"
          style={{ animation: "float-up 1.633s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
