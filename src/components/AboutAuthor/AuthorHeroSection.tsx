"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

/* ── Rotating accolades ─────────────────────────────────────────────────── */
const ACCOLADES = [
    {
        quote: "Distinguished academician with over three decades of experience in teaching, training, and administration.",
        source: "Author's Profile",
        tag: "30+ Years of Excellence",
    },
    {
        quote: "Recipient of the International School Award (ISA) from the British Council.",
        source: "British Council",
        tag: "Global Recognition",
    },
    {
        quote: "Indian Achievers' Award 2024–25 for Outstanding Professional Achievement.",
        source: "Indian Achievers' Forum",
        tag: "National Honour",
    },
    {
        quote: "Recognised as one of the Top 100 Global Educational Leaders.",
        source: "MC STEM Eduversity",
        tag: "Top 100 Globally",
    },
    {
        quote: "International Educational Ambassador and Accredited Teacher Trainer.",
        source: "Bestow Edutrex International",
        tag: "International Impact",
    },
    {
        quote: "Lifetime Fellow Member of Eudoxia Research University, USA.",
        source: "Eudoxia Research University",
        tag: "Lifetime Fellowship",
    },
];

const AUTO_MS = 6000;

/* ── Dot indicator ──────────────────────────────────────────────────────── */
function Dot({ active, onClick, i }: { active: boolean; onClick: () => void; i: number }) {
    return (
        <button
            aria-label={`Accolade ${i + 1}`}
            onClick={onClick}
            className="rounded-full transition-all duration-300 focus-visible:outline-none"
            style={{
                width: active ? 22 : 7,
                height: 7,
                flexShrink: 0,
                background: active
                    ? "var(--gradient-brand)"
                    : "color-mix(in oklch, var(--foreground) 28%, transparent)",
            }}
        />
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   AUTHOR HERO SECTION — Mel Robbins style full-bleed split
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AuthorHeroSection() {
    const [idx, setIdx] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((i: number) => {
        setIdx(i);
        setAnimKey((k) => k + 1);
    }, []);

    const next = useCallback(() => {
        goTo((idx + 1) % ACCOLADES.length);
    }, [idx, goTo]);

    useEffect(() => {
        timerRef.current = setTimeout(next, AUTO_MS);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [next]);

    const accolade = ACCOLADES[idx];

    return (
        <section
            className="relative w-full overflow-hidden bg-background lg:min-h-[75vh] my-8"
            aria-label="About the author"
        >

            {/* ══ Full-screen grid ══ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[75vh]">

                {/* ═══ LEFT — Full-bleed image ═══ */}
                <div
                    className="relative min-h-[85vw] sm:min-h-[65vw] lg:min-h-[80vh] order-1"
                >
                    <Image
                        src="/images/author-heading.png"
                        alt="Maruthi Ram Prasad Pelluri"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-bottom select-none"
                        draggable={false}
                    />

                    {/* Right-edge fade: white → page background */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-0 w-25 pointer-events-none hidden lg:block"
                        style={{
                            background: "linear-gradient(to right, transparent, var(--background))",
                        }}
                    />

                    {/* Left-edge fade: page bg → white (so left edge also blends) */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-12 pointer-events-none"
                        style={{
                            background: "linear-gradient(to left, transparent, var(--background))",
                        }}
                    />

                    {/* Bottom fade for mobile */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 inset-x-0 h-5 pointer-events-none"
                        style={{
                            background: "linear-gradient(to top, var(--background) 2%, transparent)",
                        }}
                    />

                    {/* Top fade */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 inset-x-0 h-6 pointer-events-none"
                        style={{
                            background: "linear-gradient(to bottom, var(--background) 10%, transparent)",
                        }}
                    />
                </div>

                {/* ═══ RIGHT — Quote panel ═══ */}
                <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-10 lg:py-0 order-2">

                    {/* Subtle ambient glow on right side */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/4 right-0 w-80 h-80 rounded-full"
                        style={{
                            background: "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 16%, transparent) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-1/4 left-0 w-64 h-64 rounded-full"
                        style={{
                            background: "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 10%, transparent) 0%, transparent 70%)",
                            filter: "blur(56px)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col gap-8 w-full max-w-md lg:max-w-lg">

                        {/* Rotating quote block */}
                        <div
                            key={animKey}
                            className="flex flex-col gap-5 text-center lg:text-left"
                            style={{ animation: "ah-fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {/* Quote */}
                            <p
                                className="font-semibold italic leading-snug"
                                style={{
                                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                                    color: "var(--foreground)",
                                    lineHeight: 1.45,
                                }}
                            >
                                &ldquo;{accolade.quote}&rdquo;
                            </p>

                            {/* Source — brand gradient, like CNN red in the reference */}
                            <p
                                className="text-base font-black tracking-[0.12em] uppercase"
                                style={{
                                    background: "var(--gradient-brand)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                    animation: "ah-shimmer 8s linear infinite",
                                }}
                            >
                                {accolade.source}
                            </p>
                        </div>

                        {/* Dot indicators — same row position as in reference */}
                        <div
                            className="flex items-center gap-2 justify-center lg:justify-start"
                            role="tablist"
                            aria-label="Accolade indicators"
                        >
                            {ACCOLADES.map((_, i) => (
                                <Dot key={i} i={i} active={i === idx} onClick={() => goTo(i)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
