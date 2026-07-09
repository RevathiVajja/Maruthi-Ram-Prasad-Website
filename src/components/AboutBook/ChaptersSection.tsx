"use client";

const CHAPTERS = [
    { n: 1, t: "What is Positive Parenting?", d: "Ditch the taskmaster role. Learn the science of warmth, empathy and boundaries that actually stick.", c: "var(--brand-crimson-light)" },
    { n: 2, t: "Early Indicators", d: "Recognise the first brushstrokes of genius — curiosity, focus, language, and emotional depth.", c: "var(--brand-gold)" },
    { n: 3, t: "Home As A Learning Space", d: "Turn your kitchen, living room and garden into curiosity labs without buying a single toy.", c: "var(--brand-ember)" },
    { n: 4, t: "Promoting Emotional Intelligence", d: "EQ is not the soft skill — it is the skill. Help your child feel deeply and function brilliantly.", c: "var(--brand-gold-bright)" },
    { n: 5, t: "Creative Play", d: "Open-ended play is where genius seeds germinate. Protect the beautiful mess.", c: "#10b981" },
    { n: 6, t: "Asking Questions", d: "Teach children to ask better questions — the superpower that outlasts every curriculum.", c: "#3b82f6" },
    { n: 7, t: "Academic Excellence", d: "Grades as one signal, not the whole story. How to pursue excellence without losing joy.", c: "var(--brand-crimson)" },
    { n: 8, t: "Educational Tools for Young Minds", d: "Technology, books, and environments that amplify learning at every developmental stage.", c: "var(--brand-ember)" },
    { n: 9, t: "Social Skills Development", d: "Brilliant minds need kind hearts. Build the social wiring that makes genius usable.", c: "var(--brand-gold)" },
    { n: 10, t: "Providing Support", d: "The art of being present without hovering. Support that builds independence, not reliance.", c: "#10b981" },
    { n: 11, t: "Identifying Challenges", d: "Recognise perfectionism, anxiety and twice-exceptionality before they become crises.", c: "#3b82f6" },
    { n: 12, t: "Recognising Milestones", d: "Every child's timeline is unique. Celebrate progress without obsessing over comparison.", c: "var(--brand-gold-bright)" },
    { n: 13, t: "Continual Progression", d: "Genius isn't a destination. It's a lifelong practice of curiosity, resilience and joy.", c: "var(--brand-ember)" },
];

export default function ChaptersSection() {
    return (
        <section
            id="chapters"
            className="pt-16 px-6"
            style={{ background: "color-mix(in oklch,var(--background) 70%,var(--brand-crimson) 1%)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "var(--brand-gold)" }}>
                        Inside the book
                    </p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                        13 chapters, one complete roadmap
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CHAPTERS.map((ch) => (
                        <div
                            key={ch.n}
                            className="relative overflow-hidden rounded-2xl border border-border p-5 transition-all duration-300 hover:scale-[1.02] group"
                            style={{ background: "var(--card)" }}
                        >
                            {/* Top-right accent blob */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                style={{ background: `radial-gradient(circle at top right,${ch.c},transparent 30%)` }}
                            />

                            <div
                                className="text-sm font-bold tracking-widest uppercase mb-2"
                                style={{ color: ch.c }}
                            >
                                Chapter {ch.n}
                            </div>
                            <div className="text-lg font-bold text-foreground mb-2 leading-snug">{ch.t}</div>
                            <div className="text-md leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{ch.d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
