"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Award, Globe, GraduationCap, Star, BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";

/* ── Credential badge ───────────────────────────────────────────────────── */
interface CredentialProps {
  icon: React.ReactNode;
  text: string;
  index: number;
  isVisible: boolean;
}

function Credential({ icon, text, index, isVisible }: CredentialProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(16px)",
        transition: `opacity 0.5s ease ${0.4 + index * 0.08}s, transform 0.5s ease ${0.4 + index * 0.08}s`,
        background: hovered
          ? "color-mix(in oklch, var(--brand-gold) 10%, var(--card))"
          : "var(--card)",
        border: `1px solid ${hovered ? "color-mix(in oklch, var(--brand-gold) 35%, transparent)" : "var(--border)"}`,
        boxShadow: hovered ? "0 2px 16px color-mix(in oklch, var(--brand-gold) 12%, transparent)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ color: "var(--brand-gold)" }} className="flex-shrink-0">
        {icon}
      </span>
      <span className="text-md font-medium leading-tight" style={{ color: "var(--foreground)" }}>
        {text}
      </span>
    </div>
  );
}

/* ── Stat chip ──────────────────────────────────────────────────────────── */
interface StatProps {
  value: string;
  label: string;
  index: number;
  isVisible: boolean;
}

function Stat({ value, label, index, isVisible }: StatProps) {
  return (
    <div
      className="flex flex-col items-center text-center px-4 py-4 rounded-xl lg:mt-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${0.3 + index * 0.08}s, transform 0.5s ease ${0.3 + index * 0.08}s`,
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="text-xl font-black leading-none"
        style={{
          background: "var(--gradient-brand)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </span>
      <span className="text-[0.80rem] tracking-[0.10em] uppercase mt-0.5 font-semibold" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </span>
    </div>
  );
}

const credentials = [
  { icon: <GraduationCap size={24} strokeWidth={1.8} />, text: "Experienced Educator" },
  { icon: <Star size={24} strokeWidth={1.8} />, text: "Positive Parenting Coach" },
  { icon: <Award size={24} strokeWidth={1.8} />, text: "Certified Life skills and Value Education Trainer" },
  { icon: <BadgeCheck size={24} strokeWidth={1.8} />, text: "Accredited Teacher Trainer" }
];

const stats = [
  { value: "36 Years of Experience in Education", label: "" }
];

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT AUTHOR SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AboutAuthorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-8 md:py-10">

      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, color-mix(in oklch, var(--brand-crimson) 18%, transparent) 0%, transparent 70%)",
          filter: "blur(56px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, color-mix(in oklch, var(--brand-gold) 12%, transparent) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section label ── */}
        <div
          className="flex items-center gap-4 lg:mb-10 mb-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--brand-gold) 80%)", opacity: 0.4 }} />
          <p className="text-md font-bold tracking-[0.25em] uppercase flex-shrink-0" style={{ color: "var(--brand-gold)" }}>
            Meet the Author
          </p>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--brand-gold) 20%, transparent)", opacity: 0.4 }} />
        </div>

        {/* ── Main 2-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center">

          {/* ═══ LEFT — Photo + stats ═══ */}
          <div
            className="flex flex-col items-center lg:items-start gap-6 mt-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s",
            }}
          >
            {/* Photo card */}
            <div className="relative">
              {/* Decorative corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 pointer-events-none" style={{ borderTop: "2px solid var(--brand-gold)", borderLeft: "2px solid var(--brand-gold)", opacity: 0.6, borderRadius: "4px 0 0 0" }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 pointer-events-none" style={{ borderBottom: "2px solid var(--brand-gold)", borderRight: "2px solid var(--brand-gold)", opacity: 0.6, borderRadius: "0 0 4px 0" }} />

              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, color-mix(in oklch, var(--brand-ember) 25%, transparent) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }}
              />

              <div
                className="relative overflow-hidden rounded-xl"
                style={{ border: "1px solid var(--border)" }}
              >
                <Image
                  src="/images/author-image.png"
                  alt="Maruthi Ram Prasad Pelluri — Author"
                  width={540}
                  height={800}
                  className="object-cover object-top w-[380px] sm:w-[320px] lg:w-[500px] xl:w-[540px] h-[520px] sm:h-[520px] lg:h-[580px] xl:h-[580px]"
                  style={{ display: "block" }}
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, color-mix(in oklch, var(--background) 60%, transparent), transparent)",
                  }}
                />
              </div>
            </div>

            {/* Stat chips row */}
            <div className="flex gap-3 flex-wrap justify-center w-[550px]">
              {stats.map((s, i) => (
                <Stat key={s.label} value={s.value} label={s.label} index={i} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* ═══ RIGHT — Content ═══ */}
          <div className="flex flex-col gap-3">

            {/* Eyebrow */}
            <p
              className="text-base font-bold tracking-[0.14em] uppercase text-center lg:text-left"
              style={{
                color: "var(--brand-gold-bright)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
              }}
            >
              A Visionary Educator
            </p>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black leading-tight text-center lg:text-left"
              style={{
                color: "var(--foreground)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s",
              }}
            >
              The Man Behind<br />
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the Genius Method
              </span>
            </h2>

            {/* Body text */}
            <p
              className="text-lg leading-relaxed text-center lg:text-left"
              style={{
                color: "var(--muted-foreground)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.55s ease 0.25s, transform 0.55s ease 0.25s",
              }}
            >
              <strong style={{ color: "var(--foreground)", fontWeight: 700 }}>36 Years. One Mission.</strong> For over three decades,
              <strong> Maruthi Ram Prasad Pelluri </strong>
              has shaped generations at The Hyderabad Public School, Begumpet and other leading institutions across India.
              But he’s not just teaching students. He’s empowering parents and teachers to see what’s always been there:
              <strong style={{ color: "var(--foreground)", fontWeight: 700 }}> The hidden genius in every child.</strong> <br />
              This is education.
              This is a movement.

              For Parents
              From classrooms to living rooms, his guidance helps families move from pressure to potential.

              For Educators
              Training teachers to teach beyond textbooks, and reach the child behind the marks.

              Join the movement. Get the copy of the book and discover your child’s Genius.
            </p>

            {/* Quote block */}
            <blockquote
              className="relative pl-5 py-1"
              style={{
                borderLeft: "3px solid var(--brand-gold)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                transition: "opacity 0.55s ease 0.32s, transform 0.55s ease 0.32s",
              }}
            >
              <p className="text-lg italic leading-relaxed" style={{ color: "var(--foreground)", opacity: 1 }}>
                "Education must empower, not merely instruct. Every child carries a genius — our job is to find the key."
              </p>
              <footer className="mt-2 text-[0.9rem] font-bold tracking-[0.14em] uppercase" style={{ color: "var(--foreground)", opacity: 1 }}>
                — Maruthi Ram Prasad Pelluri
              </footer>
            </blockquote>

            {/* Credentials grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1"
            >
              {credentials.map((c, i) => (
                <Credential key={c.text} icon={c.icon} text={c.text} index={i} isVisible={isVisible} />
              ))}
            </div>

            {/* CTA row */}
            <div
              className="flex items-center gap-4 mt-2 flex-wrap"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.55s ease 0.62s, transform 0.55s ease 0.62s",
              }}
            >
              <Link href="/about-the-author">
                <Button variant={"brand"} size={"lg"}>
                  <span>Read Full Story</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
