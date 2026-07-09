"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const HIGHLIGHTS: Record<"parents" | "educators", { ico: string; title: string; desc: string }[]> = {
    parents: [
        { ico: "🔍", title: "Spot the signs early", desc: "Know what exceptional curiosity, focus and empathy look like before age 5." },
        { ico: "🌱", title: "Nurture the whole child", desc: "Academic + emotional + social — all three treated as equally essential." },
        { ico: "💬", title: "Have better conversations", desc: "Scripts, questions and real-life strategies for connecting with a gifted child." },
        { ico: "🛡️", title: "Protect their joy", desc: "Balance support and limits so education complements childhood, not overshadows it." },
    ],
    educators: [
        { ico: "🎯", title: "Identify without labels", desc: "Gifted children aren't always straight-A students. Spot them in every corner." },
        { ico: "⚡", title: "Differentiate instantly", desc: 'Curriculum compacting, tiered tasks, and "Most Difficult First" — use tomorrow.' },
        { ico: "🤝", title: "Partner with parents", desc: "Turn intense parent advocates into your most powerful classroom resource." },
        { ico: "💛", title: "Support emotional needs", desc: "20–25% of gifted students face emotional difficulties. This book helps you respond." },
    ],
};

export default function ForSection() {
    const [tab, setTab] = useState<"parents" | "educators">("parents");

    return (
        <section className="pt-16 px-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
                <p
                    className="text-sm font-bold tracking-widest uppercase mb-3"
                    style={{ color: "var(--brand-gold)" }}
                >
                    Built for you
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                    Who gets the most out of this book?
                </h2>
            </div>

            {/* Tab switcher */}
            <div className="flex justify-center mb-10">
                <div
                    className="flex rounded-full p-1 border border-border"
                    style={{ background: "color-mix(in oklch,white 4%,transparent)" }}
                >
                    {(["parents", "educators"] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-md font-semibold transition-all duration-200",
                                tab === t
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            style={
                                tab === t
                                    ? { background: "var(--brand-gold)", color: "#1a0a0c" }
                                    : {}
                            }
                        >
                            {t === "parents" ? "👨‍👩‍👧 Parents" : "👩‍🏫 Educators"}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {HIGHLIGHTS[tab].map((h, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-border p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[var(--brand-gold)]/40"
                        style={{ background: "var(--card)", animationDelay: `${i * 0.05}s` }}
                    >
                        <div className="text-3xl mb-3">{h.ico}</div>
                        <div className="text-lg font-bold text-foreground mb-2">{h.title}</div>
                        <div className="text-md leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{h.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
