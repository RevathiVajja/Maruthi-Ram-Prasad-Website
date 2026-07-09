"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG Icons ──────────────────────────────────────────────────────────── */
function IconBond() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.45" />
      <circle cx="13" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 26c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="27" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 26c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 21c0-1.5 1.5-2.5 2-1.5s1.5 1 2-1.5c.5 1.5 2 2 2 3s-2 3-2 3-4-1.5-4-3z" fill="currentColor" opacity="0.65" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.45" />
      <path d="M20 10c-4.5 0-7.5 3-7.5 6.5 0 1.5.5 3 1.5 4C12.5 22 11 24.5 11 27c0 3 2.5 4.5 5 4.5h8c2.5 0 5-1.5 5-4.5 0-2.5-1.5-5-2.5-6.5 1-1 1.5-2.5 1.5-4 0-3.5-3-6.5-7.5-6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M12.5 20.5c-1.5 0-2.5-1-2.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M27.5 20.5c1.5 0 2.5-1 2.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.45" />
      <rect x="9" y="24" width="4.5" height="7" rx="1" fill="currentColor" opacity="0.45" />
      <rect x="15.5" y="19" width="4.5" height="12" rx="1" fill="currentColor" opacity="0.65" />
      <rect x="22" y="14" width="4.5" height="17" rx="1" fill="currentColor" opacity="0.85" />
      <rect x="28.5" y="9" width="4" height="22" rx="1" fill="currentColor" />
      <path d="M10 22 L17 17 L23 12 L31 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 8 L31 8 L31 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.45" />
      <path d="M20 30s-10-6.5-10-13a7 7 0 0 1 10-6.3A7 7 0 0 1 30 17c0 6.5-10 13-10 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 17c0-1.5 1.5-2 2-1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}

/* ── Pillar item (horizontal compact layout) ────────────────────────────── */
interface PillarProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  index: number;
  isVisible: boolean;
}

function Pillar({ icon, title, description, accent, index, isVisible }: PillarProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center gap-3 px-4 py-5 flex-1 relative cursor-default select-none"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 transition-all duration-400 flex-shrink-0"
        style={{
          color: accent,
          transform: hovered ? "scale(1.12) translateY(-2px)" : "scale(1)",
          filter: hovered
            ? `drop-shadow(0 0 8px color-mix(in oklch, ${accent} 55%, transparent))`
            : "none",
          transition: "transform 0.3s ease, filter 0.3s ease",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        className="font-black tracking-[0.10em] uppercase text-xl leading-tight"
        style={{ color: accent }}
      >
        {title}
      </p>

      {/* Description */}
      <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)", maxWidth: "220px" }}>
        {description}
      </p>

      {/* Hover underline */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-400"
        style={{
          background: accent,
          width: hovered ? "50%" : "0%",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

/* ── Vertical divider between pillars ──────────────────────────────────── */
function VDivider({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className="hidden lg:block self-stretch w-px flex-shrink-0 transition-all duration-700"
      style={{
        background: "linear-gradient(180deg, transparent, var(--border) 30%, var(--border) 70%, transparent)",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}

/* ── Data ───────────────────────────────────────────────────────────────── */
const pillars = [
  {
    icon: <IconBond />,
    title: "Stronger Bonds",
    description: "Build deeper connections with your child",
    accent: "var(--brand-gold-bright)",
  },
  {
    icon: <IconBrain />,
    title: "Unlock Potential",
    description: "Nurture confidence, curiosity & creativity",
    accent: "var(--brand-ember)",
  },
  {
    icon: <IconChart />,
    title: "Proven Strategies",
    description: "Practical techniques rooted in research",
    accent: "var(--brand-gold)",
  },
  {
    icon: <IconHeart />,
    title: "Lifelong Impact",
    description: "Raise resilient & successful individuals",
    accent: "var(--brand-gold-bright)",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   EMPOWER SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function EmpowerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-6">

      {/* Subtle ambient top glow */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, color-mix(in oklch, var(--brand-gold) 12%, transparent) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-6 rounded-2xl py-6 border"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          boxShadow: "0 2px 20px color-mix(in oklch, var(--foreground) 4%, transparent)",
        }}
      >
        {/* ── Headline ── */}
        <div
          className="text-center mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <p
            className="text-[1.2rem] font-semibold tracking-[0.14em] uppercase mb-1"
            style={{ color: "var(--brand)", opacity: 0.75 }}
          >
            Why This Book
          </p>
          <h2
            className="text-base sm:text-lg md:text-3xl font-black tracking-[0.10em] uppercase"
            style={{
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Empower Today. Transform Tomorrow.
          </h2>
        </div>

        {/* Thin gold divider */}
        <div
          className="mx-auto mb-5 h-px w-40 transition-all duration-700"
          style={{
            background: "linear-gradient(90deg, transparent, var(--brand-gold) 50%, transparent)",
            opacity: isVisible ? 0.5 : 0,
          }}
        />

        {/* ── Pillars row ── */}
        <div className="flex flex-col sm:flex-row items-stretch">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex flex-row sm:flex-col lg:flex-row sm:flex-1 items-stretch">
              <Pillar
                icon={p.icon}
                title={p.title}
                description={p.description}
                accent={p.accent}
                index={i}
                isVisible={isVisible}
              />
              {i < pillars.length - 1 && <VDivider isVisible={isVisible} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
