"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Slide data ─────────────────────────────────────────────────────────── */
const SLIDES = [
    { src: "/images/author-image2.png", alt: "Maruthi Ram Prasad Pelluri — speaking" },
    { src: "/images/author-image3.png", alt: "Maruthi Ram Prasad Pelluri — workshop" },
    { src: "/images/author-image4.png", alt: "Maruthi Ram Prasad Pelluri — candid" },
    { src: "/images/author-image5.png", alt: "Maruthi Ram Prasad Pelluri — event" },
    { src: "/images/author-image6.png", alt: "Maruthi Ram Prasad Pelluri — school" },
    { src: "/images/author-image7.png", alt: "Maruthi Ram Prasad Pelluri — school" },
    { src: "/images/author-image8.png", alt: "Maruthi Ram Prasad Pelluri — school" },
    { src: "/images/author-image9.png", alt: "Maruthi Ram Prasad Pelluri — school" },
];

const AUTO_INTERVAL = 4000; // ms

/* ── Keyframes ─────────────────────────────────────────────────────────── */
const KF = `
@keyframes pc-fadeIn  { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }
@keyframes pc-orb1    { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(18px,-12px) scale(1.06); } }
@keyframes pc-orb2    { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-14px,10px) scale(1.04); } }
`;

/* ── Arrow button ───────────────────────────────────────────────────────── */
function Arrow({
    dir,
    onClick,
}: {
    dir: "prev" | "next";
    onClick: () => void;
}) {
    return (
        <button
            aria-label={dir === "prev" ? "Previous photo" : "Next photo"}
            onClick={onClick}
            className="group flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60 active:scale-95"
            style={{
                width: 48,
                height: 48,
                background: "color-mix(in oklch, var(--brand-gold) 10%, var(--card))",
                border: "1px solid color-mix(in oklch, var(--brand-gold) 28%, transparent)",
                flexShrink: 0,
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                    "color-mix(in oklch, var(--brand-gold) 22%, var(--card))";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "color-mix(in oklch, var(--brand-gold) 50%, transparent)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 16px color-mix(in oklch, var(--brand-gold) 22%, transparent)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                    "color-mix(in oklch, var(--brand-gold) 10%, var(--card))";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "color-mix(in oklch, var(--brand-gold) 28%, transparent)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
        >
            {dir === "prev" ? (
                <ChevronLeft
                    size={22}
                    strokeWidth={2}
                    style={{ color: "var(--brand-gold-bright)" }}
                    className="transition-transform duration-200 group-hover:-translate-x-0.5"
                />
            ) : (
                <ChevronRight
                    size={22}
                    strokeWidth={2}
                    style={{ color: "var(--brand-gold-bright)" }}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
            )}
        </button>
    );
}

/* ── Dot indicator ─────────────────────────────────────────────────────── */
function Dot({
    active,
    onClick,
    index,
}: {
    active: boolean;
    onClick: () => void;
    index: number;
}) {
    return (
        <button
            aria-label={`Go to photo ${index + 1}`}
            onClick={onClick}
            className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60"
            style={{
                width: active ? 24 : 8,
                height: 8,
                background: active
                    ? "var(--gradient-brand)"
                    : "color-mix(in oklch, var(--brand-gold) 25%, var(--muted))",
                flexShrink: 0,
            }}
        />
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PHOTO CAROUSEL
   ═══════════════════════════════════════════════════════════════════════════ */
export default function PhotoCarousel() {
    const [current, setCurrent] = useState(0);
    const [animKey, setAnimKey] = useState(0); // force re-mount to replay CSS anim
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((idx: number) => {
        setCurrent(idx);
        setAnimKey((k) => k + 1);
    }, []);

    const prev = useCallback(() => {
        goTo((current - 1 + SLIDES.length) % SLIDES.length);
    }, [current, goTo]);

    const next = useCallback(() => {
        goTo((current + 1) % SLIDES.length);
    }, [current, goTo]);

    /* Auto-advance */
    useEffect(() => {
        timerRef.current = setTimeout(next, AUTO_INTERVAL);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [next]);

    /* Keyboard navigation */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    return (
        <section
            className="relative w-full overflow-hidden py-12 md:py-8"
            aria-label="Author photo gallery"
        >
            <style>{KF}</style>

            {/* Ambient glow orbs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 22%, transparent) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    animation: "pc-orb1 9s ease-in-out infinite",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 18%, transparent) 0%, transparent 70%)",
                    filter: "blur(55px)",
                    animation: "pc-orb2 11s ease-in-out infinite",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 w-full">
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, var(--brand-gold) 80%)",
                            opacity: 0.4,
                        }}
                    />
                    <p
                        className="text-lg font-bold tracking-[0.25em] uppercase flex-shrink-0"
                        style={{ color: "var(--brand-gold-bright)" }}
                    >
                        Photo Gallery
                    </p>
                    <div
                        className="h-px flex-1"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--brand-gold) 20%, transparent)",
                            opacity: 0.4,
                        }}
                    />
                </div>

                {/* ── Carousel frame ── */}
                <div
                    className="relative w-full rounded-lg overflow-hidden"
                    style={{
                        border: "1px solid color-mix(in oklch, var(--brand-gold) 20%, var(--border))",
                        boxShadow:
                            "0 4px 8px color-mix(in oklch, var(--brand-ember) 2%, transparent), 0 4px 8px rgba(0,0,0,0.20)",
                        background: "var(--card)",
                    }}
                >
                    {/* Image */}
                    <div
                        className="relative w-full"
                        style={{ aspectRatio: "5/3" }}
                    >
                        <Image
                            key={animKey}
                            src={SLIDES[current].src}
                            alt={SLIDES[current].alt}
                            fill
                            priority={current === 0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                            className="object-cover object-top select-none"
                            draggable={false}
                            style={{
                                animation: "pc-fadeIn 0.4s cubic-bezier(0.22,1,0.36,1) both",
                            }}
                        />

                        {/* Subtle bottom gradient overlay */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                            style={{
                                background:
                                    "linear-gradient(to top, color-mix(in oklch, var(--card) 20%, transparent), transparent)",
                            }}
                        />

                        {/* Corner bracket decoration — top-left */}
                        <div
                            aria-hidden="true"
                            className="absolute top-3 left-3 w-7 h-7 pointer-events-none"
                            style={{
                                borderTop: "2px solid var(--brand-gold)",
                                borderLeft: "2px solid var(--brand-gold)",
                                opacity: 0.55,
                                borderRadius: "4px 0 0 0",
                            }}
                        />
                        {/* Corner bracket decoration — bottom-right */}
                        <div
                            aria-hidden="true"
                            className="absolute bottom-3 right-3 w-7 h-7 pointer-events-none"
                            style={{
                                borderBottom: "2px solid var(--brand-gold)",
                                borderRight: "2px solid var(--brand-gold)",
                                opacity: 0.55,
                                borderRadius: "0 0 4px 0",
                            }}
                        />
                    </div>
                </div>

                {/* ── Controls row: arrow · dots · arrow ── */}
                <div className="flex items-center justify-between w-full gap-4">
                    <Arrow dir="prev" onClick={prev} />

                    {/* Dots */}
                    <div
                        className="flex items-center gap-2 flex-1 justify-center"
                        role="tablist"
                        aria-label="Slide indicators"
                    >
                        {SLIDES.map((_, i) => (
                            <Dot
                                key={i}
                                index={i}
                                active={i === current}
                                onClick={() => goTo(i)}
                            />
                        ))}
                    </div>

                    <Arrow dir="next" onClick={next} />
                </div>
            </div>
        </section>
    );
}
