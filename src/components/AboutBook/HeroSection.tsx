"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Play, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBuyModal } from "../shared/BuyModalContext";

/* ── Keyframes injected once ──────────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes ab-shimmer  { 0%{background-position:200% center} 100%{background-position:-200% center} }
@keyframes ab-fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes ab-scaleIn  { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
@keyframes ab-float    { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
@keyframes ab-floatAlt { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
@keyframes ab-badgePulse {
  0%,100%{box-shadow:0 0 0 0 color-mix(in oklch,var(--brand-gold) 55%,transparent)}
  70%{box-shadow:0 0 0 7px transparent}
}
@keyframes ab-glow {
  0%,100%{opacity:.5;transform:scale(1)}
  50%{opacity:.9;transform:scale(1.08)}
}
@keyframes vm-fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes vm-slideUp { from{opacity:0;transform:translateY(32px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
`;

const VIDEO_LANGUAGES = [
    { id: "telugu", label: "తెలుగు (Telugu)", flag: "🇮🇳", sub: "Telugu dubbed summary", color: "#8b5cf6", bg: "rgba(139,92,246,0.10)", border: "rgba(139,92,246,0.28)", href: "https://www.youtube.com/watch?v=uO7U98Z7e1I" },
];

/* ── Shine text ───────────────────────────────────────────────────────────── */
function ShineText({ children }: { children: React.ReactNode }) {
    return (
        <span style={{
            background: "linear-gradient(90deg, var(--brand-gold-pale) 0%, var(--brand-gold-bright) 30%, var(--brand-ember) 60%, var(--brand-gold-pale) 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "ab-shimmer 8s linear infinite",
        }}>
            {children}
        </span>
    );
}

/* ── Pill badge ───────────────────────────────────────────────────────────── */
function Pill({ children, color }: { children: React.ReactNode; color: "purple" | "pink" | "gold" | "green" }) {
    const styles = {
        purple: { bg: "color-mix(in oklch,var(--brand-crimson) 15%,transparent)", border: "color-mix(in oklch,var(--brand-crimson) 30%,transparent)", text: "var(--brand-crimson-light)" },
        pink: { bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.28)", text: "#b33896ff" },
        gold: { bg: "color-mix(in oklch,var(--brand-gold) 10%,transparent)", border: "color-mix(in oklch,var(--brand-gold) 25%,transparent)", text: "var(--brand-gold)" },
        green: { bg: "rgba(16,185,129,0.10)", border: "rgba(16,185,129,0.25)", text: "#6ee7b7" },
    }[color];
    return (
        <span style={{
            display: "inline-block", padding: "4px 14px", borderRadius: 100,
            fontSize: 16, fontWeight: 600,
            background: styles.bg, border: `1px solid ${styles.border}`, color: styles.text,
        }}>
            {children}
        </span>
    );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function AboutBookHeroSection() {
    const [mounted, setMounted] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    useEffect(() => setMounted(true), []);
    const { open } = useBuyModal();

    /* Close video modal on Escape */
    useEffect(() => {
        if (!showVideo) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setShowVideo(false); };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [showVideo]);

    /* Lock body scroll while video modal is open */
    useEffect(() => {
        document.body.style.overflow = showVideo ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [showVideo]);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-12 sm:py-16 lg:py-0 bg-background">
            <style>{KEYFRAMES}</style>

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(color-mix(in oklch,var(--brand-gold) 4%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklch,var(--brand-gold) 4%,transparent) 1px,transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            {/* Ambient orbs */}
            <div className="absolute pointer-events-none" style={{ top: "8%", right: "4%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,color-mix(in oklch,var(--brand-crimson) 18%,transparent),transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute pointer-events-none" style={{ bottom: "8%", left: "-2%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,color-mix(in oklch,var(--brand-ember) 11%,transparent),transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute pointer-events-none" style={{ top: "42%", left: "28%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,color-mix(in oklch,var(--brand-gold) 6%,transparent),transparent 70%)", filter: "blur(60px)" }} />


            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center justify-center lg:justify-between">

                {/* ══ LEFT TEXT ══ */}
                <div
                    className="flex-1 min-w-[300px] max-w-[580px] flex flex-col items-center lg:items-start text-center lg:text-left"
                    style={{ animation: mounted ? "ab-fadeUp .7s .1s both" : "none" }}
                >
                    {/* Live badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "color-mix(in oklch,var(--brand-gold) 12%,transparent)",
                        border: "1px solid color-mix(in oklch,var(--brand-gold) 28%,transparent)",
                        borderRadius: 100, padding: "6px 16px", marginBottom: 26,
                    }}>
                        <div style={{
                            width: 7, height: 7, background: "var(--brand-gold-bright)",
                            borderRadius: "50%", animation: "ab-badgePulse 2s infinite",
                        }} />
                        <span className="text-xs" style={{ color: "var(--brand-gold-bright)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
                            Now Available · Amazon Kindle &amp; Paperback
                        </span>
                    </div>

                    <h1 className="text-[clamp(32px,5.5vw,58px)] font-black leading-[1.1] tracking-[-1.5px] mb-[22px]">
                        The book that<br />
                        <ShineText>unlocks your child&apos;s</ShineText><br />
                        <span className="text-foreground">inner genius</span>
                    </h1>

                    <p className="text-muted-foreground mb-6 mx-auto lg:mx-0" style={{ fontSize: 20, lineHeight: 1.78, maxWidth: 500 }}>
                        A research-backed, heart-first guide for{" "}
                        <strong className="text-foreground">Gen Z parents and teachers</strong>{" "}
                        who want to raise children that are brilliant, kind, and genuinely happy — not just high-achieving.
                    </p>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                        <Pill color="purple">Positive Parenting</Pill>
                        <Pill color="pink">Emotional Intelligence</Pill>
                        <Pill color="gold">Gifted Education</Pill>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                        <Button
                            variant="brand"
                            size="lg"
                            onClick={() => open()}
                        >
                            <ShoppingCart size={18} />
                            Get Your Copy
                        </Button>
                        <Button
                            variant={'link'}
                            size={'lg'}
                            onClick={() => setShowVideo(true)}
                        >
                            <Play size={16} fill="currentColor" />
                            Watch Video Summary
                        </Button>
                    </div>
                </div>

                {/* ══ RIGHT — Book Cover ══ */}
                <div
                    className="relative flex justify-center items-center"
                    style={{
                        flex: "0 0 auto",
                        width: "min(520px, 90vw)",
                        minHeight: 460,
                        animation: mounted ? "ab-scaleIn .75s .25s both" : "none",
                    }}
                >
                    {/* Book cover image — floating animation */}
                    <div
                        className="relative z-10 w-4/6"
                        style={{ animation: "ab-float 5s ease-in-out infinite" }}
                    >
                        {/* Reflection / shadow disc under book */}
                        <div
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
                            style={{
                                width: "75%",
                                height: 28,
                                background: "radial-gradient(ellipse at center, color-mix(in oklch,var(--brand-ember) 60%,transparent) 0%, transparent 75%)",
                                filter: "blur(14px)",
                            }}
                        />

                        <Image
                            src="/images/book-cover.png"
                            alt="How to Raise a Genius Child — Book Cover"
                            width={520}
                            height={680}
                            priority
                            className="relative z-10 h-auto w-full object-contain select-none"
                            style={{
                                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.4)) drop-shadow(0 0 60px color-mix(in oklch,var(--brand-ember) 38%,transparent))",
                                borderRadius: 6,
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>

            {/* ── Video Summary Modal ── */}
            {showVideo && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm cursor-pointer"
                        style={{ animation: "vm-fadeIn .2s ease both" }}
                        onClick={() => setShowVideo(false)}
                        aria-hidden="true"
                    />

                    {/* Modal panel */}
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Watch Video Summary"
                        className="fixed inset-0 z-[510] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden pointer-events-auto"
                            style={{
                                background: "var(--card)",
                                borderColor: "color-mix(in oklch,var(--brand-gold) 22%,transparent)",
                                animation: "vm-slideUp .28s cubic-bezier(0.34,1.56,0.64,1) both",
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowVideo(false)}
                                aria-label="Close"
                                className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 z-10"
                            >
                                <X size={16} />
                            </button>

                            {/* Header */}
                            <div className="px-7 pt-6 pb-4 text-center">
                                <div
                                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-3"
                                    style={{
                                        background: "color-mix(in oklch,var(--brand-crimson) 12%,transparent)",
                                        border: "1px solid color-mix(in oklch,var(--brand-crimson) 25%,transparent)",
                                    }}
                                >
                                    <Play size={24} style={{ color: "var(--brand-crimson-light)" }} fill="currentColor" />
                                </div>
                                <h2 className="text-xl font-black tracking-tight text-foreground mb-1">
                                    Watch Video Summary
                                </h2>
                                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                                    <Globe size={14} />
                                    Choose your preferred language
                                </p>
                            </div>

                            {/* Language options */}
                            <div className="px-6 pb-7 flex flex-col gap-3 max-h-[50vh] overflow-y-auto">
                                {VIDEO_LANGUAGES.map((lang) => (
                                    <a
                                        key={lang.id}
                                        href={lang.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 rounded-2xl border p-3.5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group"
                                        style={{ background: lang.bg, borderColor: lang.border }}
                                    >
                                        {/* Flag */}
                                        <div
                                            className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110 text-2xl"
                                            style={{ background: "color-mix(in oklch,white 5%,transparent)", border: `1.5px solid ${lang.border}` }}
                                        >
                                            {lang.flag}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-sm text-foreground leading-tight">{lang.label}</div>
                                            <div className="text-xs mt-0.5 text-muted-foreground">{lang.sub}</div>
                                        </div>

                                        {/* Play icon */}
                                        <Play
                                            size={16}
                                            className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                                            style={{ color: lang.color }}
                                            fill="currentColor"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
