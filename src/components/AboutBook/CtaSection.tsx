"use client";

import { useState } from "react";
import { ShoppingCart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBuyModal } from "../shared/BuyModalContext";

const KEYFRAMES = `
@keyframes cta-shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
`;

export default function CtaSection() {
    const { open } = useBuyModal();
    const [shared, setShared] = useState(false);

    async function handleShare() {
        const shareData = {
            title: "How to Raise a Genius Child",
            text: "Check out this book — it\'s a must-read for every parent!",
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setShared(true);
                setTimeout(() => setShared(false), 2500);
            }
        } catch (err) {
            // User cancelled the share dialog — silently ignore
            if ((err as DOMException)?.name !== "AbortError") {
                await navigator.clipboard.writeText(window.location.href);
                setShared(true);
                setTimeout(() => setShared(false), 2500);
            }
        }
    }

    return (
        <section className="relative py-20 px-6 overflow-hidden text-center bg-background">
            <style>{KEYFRAMES}</style>

            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, color-mix(in oklch,var(--brand-ember) 14%,transparent) 0%, transparent 68%)",
                }}
            />

            {/* Ambient orbs */}
            <div className="absolute pointer-events-none -top-24 -left-24 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle,color-mix(in oklch,var(--brand-crimson) 18%,transparent),transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute pointer-events-none -bottom-24 -right-24 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle,color-mix(in oklch,var(--brand-gold) 15%,transparent),transparent 70%)", filter: "blur(60px)" }} />

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-5">🧠</div>

                <h2
                    className="font-black tracking-tight leading-tight mb-5"
                    style={{ fontSize: "clamp(26px,4.5vw,46px)" }}
                >
                    Your child&apos;s potential<br />
                    is waiting to be{" "}
                    <span style={{
                        background: "linear-gradient(90deg,var(--brand-gold-pale) 0%,var(--brand-gold-bright) 30%,var(--brand-ember) 60%,var(--brand-gold-pale) 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "cta-shimmer 4s linear infinite",
                    }}>
                        unlocked
                    </span>
                </h2>

                <p
                    className="leading-relaxed mb-10"
                    style={{ fontSize: 16.5, color: "var(--muted-foreground)" }}
                >
                    Every question they ask, every story they tell, every song they sing — these are brushstrokes of brilliance in progress. This book shows you how to see them.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                        variant="brand"
                        size="xl"
                        onClick={() => open()}
                    >
                        <ShoppingCart size={18} />
                        Get the Book Now
                    </Button>
                    <button
                        className="flex items-center gap-2 rounded-full border px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:scale-105 backdrop-blur"
                        style={{
                            background: "color-mix(in oklch,white 5%,transparent)",
                            borderColor: "color-mix(in oklch,white 15%,transparent)",
                            color: "var(--muted-foreground)",
                        }}
                        onClick={handleShare}
                    >
                        {shared ? <Check size={16} /> : <Share2 size={16} />}
                        {shared ? "Link copied!" : "Share with a parent"}
                    </button>
                </div>
            </div>
        </section>
    );
}
