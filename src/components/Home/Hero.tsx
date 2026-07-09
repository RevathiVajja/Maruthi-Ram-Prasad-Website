"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ShoppingCart, Shield, BookOpen, Gem, Truck } from "lucide-react";
import { Button } from "../ui/button";
import { useBuyModal } from "@/components/shared/BuyModalContext";

/* ── Floating gold particles (canvas) ──────────────────────────────────── */
function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animId: number;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const dots = Array.from({ length: 55 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.4 + 0.3,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            alpha: Math.random() * 0.45 + 0.1,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach((d) => {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < 0) d.x = canvas.width;
                if (d.x > canvas.width) d.x = 0;
                if (d.y < 0) d.y = canvas.height;
                if (d.y > canvas.height) d.y = 0;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240,180,70,${d.alpha})`;
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
        />
    );
}

/* ── Amazon Logo ────────────────────────────────────────────────────── */
function AmazonLogo() {
    return (
        <div className="relative h-6 w-20 sm:h-7 sm:w-24 mt-2">
            <Image
                src="/images/logo-white-amazon.png"
                alt="Amazon"
                fill
                className="object-contain hidden dark:block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
                src="/images/logo-black-amazon.png"
                alt="Amazon"
                fill
                className="object-contain block dark:hidden"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}

function FlipkartLogo() {
    return (
        <div className="relative h-12 w-10 sm:h-12 sm:w-16">
            <Image
                src="/images/flipkart1.png"
                alt="Flipkart"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}

/* ── Trust badge ────────────────────────────────────────────────────────── */
function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex flex-col items-center align-center gap-2 min-w-[60px]">
            <span className="flex items-center justify-center w-9 h-9 text-[var(--brand-gold-bright)]">
                {icon}
            </span>
            <span className="text-[0.9rem] font-medium tracking-wide text-muted-foreground text-center leading-tight">
                {label}
            </span>
        </div>
    );
}

/* ── Decorative faint bar chart SVG (right bg) ──────────────────────────── */
function ChartDecor() {
    const bars = [40, 80, 120, 175, 230];
    return (
        <svg
            viewBox="0 0 290 250"
            className="absolute bottom-50 -right-20 w-84 opacity-[0.15] pointer-events-none"
            fill="none"
        >
            {bars.map((h, i) => (
                <rect
                    key={i}
                    x={i * 52 + 8}
                    y={250 - h}
                    width={32}
                    height={h}
                    rx={5}
                    fill="#e8a020"
                />
            ))}
            <path
                d="M8 230 L60 190 L112 148 L164 98 L216 56 L268 14"
                stroke="#e8a020"
                strokeWidth="2"
                strokeDasharray="6 4"
            />
        </svg>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function HeroSection() {
    const { open } = useBuyModal();
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-0 md:py-0 bg-background">
            {/* Ambient glow orbs */}
            <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full pointer-events-none bg-[var(--brand-ember)]/15 blur-[64px]" />
            <div className="absolute -bottom-24 -right-16 w-[28rem] h-[28rem] rounded-full pointer-events-none bg-[var(--brand-gold)]/15 blur-[64px]" />

            {/* Floating gold particles */}
            <Particles />

            {/* ── 2-column grid ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-10 lg:pt-0">

                {/* ═══════ LEFT ═══════ */}
                <div className="flex flex-col gap-5 lg:gap-6 order-2 lg:order-1">

                    {/* Eyebrow */}
                    <p className="text-[1.2rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground leading-relaxed text-center">
                        A Global Game Changer in<br className="hidden sm:block" /> Parenting and Family Dynamics
                    </p>

                    {/* Title block */}
                    <div className="flex flex-col gap-2">
                        {/* "HOW TO RAISE A" with rules */}
                        <div className="flex items-center gap-3">
                            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--brand-gold)]/60 to-transparent" />
                            <span className="lg:text-[2rem] text-[1.8rem] font-semibold tracking-[0.14em] uppercase text-foreground/80 whitespace-nowrap">
                                How to Raise a
                            </span>
                            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--brand-gold)]/60 to-transparent" />
                        </div>

                        {/* GENIUS CHILD */}
                        <h1
                            className="leading-[0.88] font-black uppercase tracking-[0.04em] select-none text-gradient-brand pb-2 text-center"
                            style={{
                                fontSize: "clamp(4rem, 10vw, 7rem)",
                                filter: "drop-shadow(0 0 28px rgba(220,155,18,0.45))",
                            }}
                        >
                            GENIUS<br />CHILD
                        </h1>
                    </div>

                    {/* Subtitle / desc */}
                    <p className="text-[1.2rem] font-semibold tracking-[0.1em] uppercase text-muted-foreground leading-[1.75] text-center">
                        A Comprehensive Guide for Parents to<br />Develop Remarkable Potential
                    </p>

                    {/* CTA row */}
                    <div className="flex items-center gap-5 flex-wrap justify-center">
                        <Button
                            variant="brand"
                            size={"xl"}
                            onClick={open}
                        >
                            <ShoppingCart className="size-6" />
                            <span>Buy Now</span>
                        </Button>

                        {/* Available on */}
                        <div className="flex items-center gap-2">
                            <span className="text-[0.95rem] italic text-muted-foreground tracking-wide">Available on</span>
                            <FlipkartLogo />
                            <AmazonLogo />
                        </div>

                    </div>

                    {/* Trust badges */}
                    <div className="flex gap-5 flex-wrap pt-6 justify-center sm:pb-10 lg:pb-0 pb-10">
                        <TrustBadge icon={<Truck size={44} />} label="Global Delivery" />
                        <TrustBadge icon={<Shield size={44} />} label="Secure Payment" />
                        <TrustBadge icon={<BookOpen size={44} />} label="Premium Quality" />
                        <TrustBadge icon={<Gem size={44} />} label="Value for Money" />
                    </div>
                </div>

                {/* ═══════ RIGHT — Book ═══════ */}
                <div className="relative flex items-center justify-center min-h-[360px] lg:min-h-[540px] order-1 lg:order-2">
                    {/* Faint decorative bar chart */}
                    <ChartDecor />

                    {/* Book + platform wrapper — float animation via inline style */}
                    <div
                        className="relative z-10 flex flex-col items-center"
                        style={{ animation: "heroFloat 4s ease-in-out infinite" }}
                    >
                        {/* Glow platform disc */}
                        <div
                            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[240px] h-6 rounded-full pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(ellipse at center, rgba(200,55,8,0.8) 0%, rgba(160,25,4,0.55) 40%, transparent 80%)",
                                filter: "blur(10px)",
                            }}
                        />

                        {/* Book PNG — place your 3D mockup at /public/book-mockup.png */}
                        <img
                            src="/images/hero.png"
                            alt="How to Raise a Genius Child — 3D Book Mockup"
                            className="relative z-10 w-full max-w-[520px] lg:max-w-[520px] h-auto object-contain select-none transition-all duration-500"
                            style={{
                                filter:
                                    "drop-shadow(0 22px 44px rgba(0,0,0,0.75)) drop-shadow(0 0 55px rgba(175,75,8,0.42))",
                            }}
                            draggable={false}
                        />
                    </div>
                </div>
            </div>

            {/* Float keyframe injected once */}
            <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
        </section>
    );
}
