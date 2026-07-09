"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const RATING_SUMMARY = {
  average: 4.9,
  total: 214,
  breakdown: [
    { stars: 5, pct: 88 },
    { stars: 4, pct: 9 },
    { stars: 3, pct: 2 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ],
};

const REVIEWS = [
  {
    id: 1,
    category: ["all", "teachers"],
    quote:
      "I've been a teacher for 14 years. This is the first parenting book I've ever recommended to parents at PTMs. It finally bridges the gap between what we do in school and what happens at home.",
    author: "Ms. Sangeeta V.",
    role: "Primary School Teacher, Hyderabad",
    stars: 5,
  },
  {
    id: 2,
    category: ["all", "parents", "5star"],
    quote:
      "As a working mum, I always felt guilty about screen time. This book helped me stop the guilt spiral and start having real conversations with my daughter about how she learns best. Absolute game changer.",
    author: "Priya R.",
    role: "Parent of two, Bengaluru",
    stars: 5,
  },
  {
    id: 3,
    category: ["all", "parents", "india", "5star"],
    quote:
      "The section on asking questions changed my daily commute conversations with my kids forever. Less 'how was school?' and much more 'what made you curious today?",
    author: "Arun S.",
    role: "Parent, Mumbai",
    stars: 5,
  },
  {
    id: 4,
    category: ["all", "teachers", "chapters"],
    quote:
      "The section on co-regulation techniques is something every school counsellor needs to read. I've already started adapting the exercises for my classroom toolkit.",
    author: "Deepa K.",
    role: "School Counsellor, Pune",
    stars: 5,
  },
  {
    id: 5,
    category: ["all", "india", "parents"],
    quote:
      "Chapter 4 on Emotional Intelligence genuinely rewired how I respond when my son melts down. I stopped reacting and started listening. The difference has been enormous.",
    author: "Meena T.",
    role: "Parent, Delhi",
    stars: 4,
  },
  {
    id: 6,
    category: ["all", "5star", "chapters"],
    quote:
      "The chapter on building a growth mindset through failure reframing was worth the entire price of the book. My son's attitude toward exams has completely shifted in three weeks.",
    author: "Rohit M.",
    role: "Father of two, Chennai",
    stars: 5,
  },
];

/* ─── Star renderer ─────────────────────────────────────────────────────── */
function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < count ? "var(--brand-gold-bright)" : "none"}
          stroke={i < count ? "var(--brand-gold-bright)" : "var(--brand-gold-bright)"}
          strokeWidth={1.5}
          style={{ opacity: i < count ? 1 : 0.25 }}
        />
      ))}
    </span>
  );
}

/* ─── Rating bar row ────────────────────────────────────────────────────── */
function RatingBar({ stars, pct }: { stars: number; pct: number }) {
  // colour shift: 5★=gold, 4★=teal-ish, 3★=ember, 2★=crimson, 1★=muted
  const barColor = [
    "var(--brand-gold-bright)",        // 5
    "oklch(0.72 0.13 195)",            // 4 – teal accent
    "var(--brand-ember)",              // 3
    "var(--brand-crimson-light)",      // 2
    "var(--muted-foreground)",         // 1
  ][5 - stars];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className="text-sm text-muted-foreground w-6 text-right shrink-0 tabular-nums">
        {stars}★
      </span>
      <div
        className="relative flex-1 h-2 rounded-full overflow-hidden"
        style={{ background: "color-mix(in oklch, var(--brand-gold) 10%, var(--muted))" }}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: barColor }}
        />
      </div>
      <span className="text-sm text-muted-foreground w-8 tabular-nums shrink-0">{pct}%</span>
    </div>
  );
}

/* ─── Review card ───────────────────────────────────────────────────────── */
function ReviewCard({ review, active }: { review: (typeof REVIEWS)[0]; active: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-500 shadow-sm backdrop-blur-sm",
        active ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none absolute inset-0"
      )}
      style={{
        background: "linear-gradient(145deg, color-mix(in oklch, var(--primary) 8%, var(--card)) 0%, color-mix(in oklch, var(--accent) 4%, var(--card)) 100%)",
        border: "1px solid color-mix(in oklch, var(--brand-gold) 20%, transparent)",
        boxShadow: "0 5px 10px -5px color-mix(in oklch, var(--brand-gold) 5%, transparent)"
      }}
    >
      {/* Quote icon */}
      <Quote
        size={28}
        strokeWidth={1.5}
        style={{ color: "var(--brand-gold-bright)", opacity: 0.7 }}
      />

      {/* Review text */}
      <blockquote className="text-base sm:text-lg font-medium italic leading-relaxed text-foreground">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-center justify-between flex-wrap gap-3 mt-auto">
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--brand-gold-bright)" }}
          >
            — {review.author}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{review.role}</p>
        </div>
        <Stars count={review.stars} size={13} />
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVIEWS SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = REVIEWS.filter((r) => r.category.includes(activeTab));
  const safeIdx = Math.min(activeIdx, filtered.length - 1);
  const current = filtered[safeIdx] ?? filtered[0];

  useEffect(() => {
    if (filtered.length <= 1) return;
    const t = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % filtered.length);
    }, 5000);
    return () => clearInterval(t);
  }, [filtered.length]);
  const handleTab = (id: string) => {
    setActiveTab(id);
    setActiveIdx(0);
  };

  const handleDot = (i: number) => setActiveIdx(i);

  return (
    <section
      className="relative overflow-hidden bg-background py-10 sm:py-12 px-4 sm:px-6"
      aria-label="Reader reviews"
    >
      {/* ── Ambient glow orbs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 20%, transparent) 0%, transparent 65%)",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 18%, transparent) 0%, transparent 65%)",
          opacity: 0.45,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] flex flex-col items-center gap-10 sm:gap-14">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-sm font-bold uppercase tracking-[0.12em]"
            style={{
              borderColor: "color-mix(in oklch, var(--brand-gold) 30%, transparent)",
              background: "color-mix(in oklch, var(--brand-gold) 8%, transparent)",
              color: "var(--brand-gold-bright)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand-gold-bright)" }}
            />
            Verified Reader Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
            What parents and teachers are{" "}
            <span
              className="italic text-gradient-brand pr-2"
              style={{ filter: "drop-shadow(0 0 18px color-mix(in oklch, var(--brand-ember) 35%, transparent))" }}
            >
              actually saying
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
            Real voices from the classrooms and living rooms of people who picked up
            this book and changed how they show up for the children in their lives.
          </p>
        </div>

        {/* ── Rating summary card ── */}
        <div
          className="w-full max-w-2xl glass rounded-2xl p-6 sm:p-8 shadow-2xl"
          style={{
            border: "1px solid color-mix(in oklch, var(--brand-gold-bright) 18%, transparent)",
            boxShadow: "0 10px 20px -10px color-mix(in oklch, var(--brand-gold) 5%, transparent)"
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Big score */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <span
                className="text-5xl font-black leading-none tabular-nums"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px color-mix(in oklch, var(--brand-gold) 40%, transparent))",
                }}
              >
                {RATING_SUMMARY.average}
              </span>
              <Stars count={5} size={18} />
              <span className="text-sm text-muted-foreground mt-0.5">
                {RATING_SUMMARY.total} reviews
              </span>
            </div>

            {/* Divider — vertical on desktop */}
            <div
              className="hidden sm:block self-stretch w-px shrink-0 mx-2"
              style={{
                background:
                  "linear-gradient(180deg, transparent, color-mix(in oklch, var(--brand-gold) 30%, transparent), transparent)",
              }}
            />
            <div
              className="block sm:hidden w-24 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklch, var(--brand-gold) 30%, transparent), transparent)",
              }}
            />

            {/* Bars */}
            <div className="flex-1 w-full flex flex-col gap-2.5 justify-center">
              {RATING_SUMMARY.breakdown.map((row) => (
                <RatingBar key={row.stars} stars={row.stars} pct={row.pct} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Review carousel ── */}
        <div className="w-full">
          {filtered.length === 0 ? (
            <div
              className="glass rounded-2xl p-10 text-center text-muted-foreground"
              style={{
                border: "1px solid color-mix(in oklch, var(--border) 40%, transparent)",
              }}
            >
              No reviews in this category yet.
            </div>
          ) : (
            <>
              {/* Card wrapper — relative so inactive cards can absolute-position */}
              <div className="relative min-h-[260px] sm:min-h-[220px]">
                {filtered.map((review, i) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    active={i === safeIdx}
                  />
                ))}
              </div>

              {/* Dot navigation */}
              {filtered.length > 1 && (
                <div
                  className="flex items-center justify-center gap-2 mt-6"
                  role="group"
                  aria-label="Review navigation"
                >
                  {filtered.map((_, i) => {
                    const isActive = i === safeIdx;
                    return (
                      <button
                        key={i}
                        onClick={() => handleDot(i)}
                        aria-label={`Go to review ${i + 1}`}
                        aria-pressed={isActive}
                        className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                          width: isActive ? "20px" : "8px",
                          height: "8px",
                          background: isActive
                            ? "var(--gradient-brand)"
                            : "color-mix(in oklch, var(--brand-gold) 25%, var(--muted))",
                          boxShadow: isActive
                            ? "0 0 8px color-mix(in oklch, var(--brand-gold) 40%, transparent)"
                            : "none",
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
}
