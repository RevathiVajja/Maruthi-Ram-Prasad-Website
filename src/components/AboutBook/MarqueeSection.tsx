"use client";

const TAGS = [
    "Positive Parenting", "Emotional Intelligence", "Creative Play",
    "Asking Questions", "Early Indicators", "Social Skills",
    "Growth Mindset", "Academic Excellence", "Home Learning",
    "Resilience", "Gifted Education", "Whole Child Development",
];

export default function MarqueeSection() {
    return (
        <div className="overflow-hidden border-y border-border py-3 bg-[color-mix(in_oklch,var(--brand-gold)_7%,transparent)]">
            <div className="flex w-max animate-[marquee_28s_linear_infinite]">
                {[...TAGS, ...TAGS].map((tag, i) => (
                    <span
                        key={i}
                        className="px-6 text-lg font-medium tracking-wide whitespace-nowrap text-muted-foreground"
                    >
                        ✦ {tag}
                    </span>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
