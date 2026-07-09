"use client";

const IDEAS = [
    { ico: "🌱", title: "Nature × Nurture", desc: "Genes set the canvas. Environment paints the masterpiece." },
    { ico: "💎", title: "Whole-Child Development", desc: "EQ, IQ, social skill — none stands alone. All three need tending." },
    { ico: "🔥", title: "Growth Over Perfection", desc: "Mistakes aren't setbacks — they're the actual mechanism of learning." },
    { ico: "🎯", title: "Curiosity as the North Star", desc: "A child who loves to learn outperforms one who's pushed to achieve." },
];

export default function KeyIdeasSection() {
    return (
        <section className="pt-16 pb-4 px-6 max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-12 items-center">

                {/* Left */}
                <div className="flex-1 min-w-[300px]">
                    <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "var(--brand-ember)" }}>
                        Core philosophy
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-5">
                        Genius isn&apos;t born.<br />
                        <span style={{ color: "var(--brand-gold)" }}>It&apos;s grown.</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                        Think of your child as a seed. The genetic code sets possibilities — but the soil, sun, and water you provide determines whether that potential fully blooms.
                    </p>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        Every child is born a genius.
                        The problem? Most of us never learn how to unlock it.{" "} If you’ve ever wondered, “Is my child living up to their potential?”
                        This book gives you the answer and the roadmap.{" "}
                        <strong className="text-foreground">Because genius isn’t taught.
                            It’s uncovered.</strong>.
                    </p>
                </div>

                {/* Right */}
                <div className="flex-1 min-w-[280px] flex flex-col gap-3">
                    {IDEAS.map((idea, i) => (
                        <div
                            key={i}
                            className="flex gap-4 items-start rounded-2xl border border-border p-4 transition-all duration-300 hover:border-[var(--brand-gold)]/40 hover:scale-[1.01]"
                            style={{ background: "color-mix(in oklch,white 3%,transparent)" }}
                        >
                            <span className="text-3xl flex-shrink-0 mt-0.5">{idea.ico}</span>
                            <div>
                                <div className="text-lg font-bold text-foreground mb-1">{idea.title}</div>
                                <div className="text-md leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{idea.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
