"use client";

import { useEffect, useRef } from "react";

const STATS = [
    { ico: "🎓", target: 30, suffix: "+", cap: "Years of Teaching Experience" },
    { ico: "📚", target: 13, suffix: "", cap: "Comprehensive Chapters" },
    { ico: "🌍", target: 7, suffix: "", cap: "Graphic Elements for Better Understanding" },
    { ico: "🔬", target: 100, suffix: "%", cap: "Research-Backed Strategies" },
];

function animateCounter(el: HTMLElement) {
    const target = +(el.dataset.target || 0);
    const suffix = el.dataset.suffix || "";
    let v = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        v = Math.min(v + step, target);
        el.textContent = v + suffix;
        if (v >= target) clearInterval(timer);
    }, 28);
}

export default function StatsSection() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    grid.querySelectorAll<HTMLElement>("[data-target]").forEach(animateCounter);
                    obs.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(grid);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="pt-12 px-6 max-w-6xl mx-auto">
            <div
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {STATS.map((s, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-border p-7 text-center transition-all duration-300 hover:scale-105"
                        style={{
                            background: "color-mix(in oklch,var(--brand-gold) 12%,var(--card))",
                            borderColor: "color-mix(in oklch,var(--brand-gold) 20%,transparent)",
                        }}
                    >
                        <div className="text-3xl mb-3">{s.ico}</div>
                        <div
                            className="text-3xl font-black mb-2 leading-none"
                            style={{ color: "var(--brand-gold)" }}
                            data-target={s.target}
                            data-suffix={s.suffix}
                        >
                            0{s.suffix}
                        </div>
                        <div
                            className="text-md tracking-wide"
                            style={{ color: "var(--muted-foreground)" }}
                        >
                            {s.cap}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
