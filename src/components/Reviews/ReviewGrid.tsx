"use client";

import { useState, useEffect } from "react";
import { Star, BadgeCheck, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { reviewsData, type ReviewData } from "@/constents/reviews";

/* ─── Types ─────────────────────────────────────────────────────────────── */
type FilterId = "all" | "parents" | "teachers" | "5star";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All reviews" },
  { id: "parents", label: "Parents" },
  { id: "teachers", label: "Teachers" },
  { id: "5star", label: "5-star only" },
];

/* ─── Initials avatar ────────────────────────────────────────────────────── */
function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 select-none"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in oklch, var(--brand-gold) 25%, var(--muted)), color-mix(in oklch, var(--brand-ember) 20%, var(--muted)))",
        color: "var(--brand-gold-bright)",
        border: "1.5px solid color-mix(in oklch, var(--brand-gold) 25%, transparent)",
      }}
    >
      {initials}
    </div>
  );
}

/* ─── Star row ───────────────────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-px" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < count ? "var(--brand-gold-bright)" : "none"}
          stroke="var(--brand-gold-bright)"
          strokeWidth={1.5}
          style={{ opacity: i < count ? 1 : 0.2 }}
        />
      ))}
    </span>
  );
}

/* ─── Single review card ─────────────────────────────────────────────────── */
function ReviewCard({ review, index }: { review: ReviewData; index: number }) {
  return (
    <article
      className="group relative flex flex-col gap-4 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background:
          "color-mix(in oklch, var(--card) 85%, var(--brand-crimson) 4%)",
        border:
          "1px solid color-mix(in oklch, var(--brand-gold-bright) 14%, transparent)",
        boxShadow:
          "0 1px 1px color-mix(in oklch, var(--brand-gold) 10%, transparent)",
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "color-mix(in oklch, var(--brand-gold-bright) 35%, transparent)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px color-mix(in oklch, var(--brand-gold) 12%, transparent), 0 1px 3px color-mix(in oklch, black 20%, transparent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "color-mix(in oklch, var(--brand-gold-bright) 14%, transparent)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px color-mix(in oklch, black 20%, transparent)";
      }}
    >
      {/* ── Header row: avatar + name + verified ── */}
      <header className="flex items-start gap-3">
        <Avatar initials={review.initials} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-md font-semibold text-foreground leading-tight">
              {review.name}
            </span>
            <span
              className="flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md"
              style={{
                background:
                  "color-mix(in oklch, #22c55e 10%, transparent)",
                color: "#22c55e",
                border: "0.5px solid color-mix(in oklch, #22c55e 30%, transparent)",
              }}
            >
              <BadgeCheck size={9} />
              Verified
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5 leading-tight">
            {review.role}
          </p>
          <div className="mt-1.5">
            <Stars count={review.rating} />
          </div>
        </div>
        <span className="text-[11px] text-muted-foreground shrink-0 mt-0.5">
          {review.date}
        </span>
      </header>

      {/* ── Review body ── */}
      <p className="text-md text-foreground/80 leading-relaxed flex-1">
        {review.text}
      </p>

      {/* ── Highlighted quote ── */}
      {review.highlight && (
        <blockquote
          className="text-sm italic leading-relaxed text-foreground/90 pl-3 py-0.5"
          style={{
            borderLeft:
              "2px solid color-mix(in oklch, var(--brand-ember) 70%, transparent)",
            background:
              "color-mix(in oklch, var(--brand-ember) 5%, transparent)",
            borderRadius: "0 6px 6px 0",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingRight: "12px",
          }}
        >
          {review.highlight}
        </blockquote>
      )}
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   REVIEW GRID
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ReviewGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, [activeFilter]);

  const filtered = reviewsData.filter((r) => {
    if (activeFilter === "parents") return r.tag === "parents";
    if (activeFilter === "teachers") return r.tag === "teachers";
    if (activeFilter === "5star") return r.rating === 5;
    return true;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-4">

      {/* ── Filter tabs ── */}
      <div
        className="flex flex-wrap gap-2 justify-center mb-8"
        role="tablist"
        aria-label="Filter reviews"
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(f.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                !isActive && "text-muted-foreground hover:text-foreground"
              )}
              style={
                isActive
                  ? {
                    background:
                      "color-mix(in oklch, var(--brand-gold) 12%, transparent)",
                    borderColor:
                      "color-mix(in oklch, var(--brand-gold-bright) 45%, transparent)",
                    color: "var(--brand-gold-bright)",
                    boxShadow:
                      "0 0 14px color-mix(in oklch, var(--brand-gold) 18%, transparent)",
                  }
                  : {
                    background: "transparent",
                    borderColor:
                      "color-mix(in oklch, var(--border) 70%, transparent)",
                  }
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ── Count row ── */}
      <div className="flex items-center justify-between mb-3 px-0.5">
        <p className="text-md font-medium text-foreground">
          Reader reviews
        </p>
        <p className="text-sm text-muted-foreground">
          Showing {filtered.length} review{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div
          className="rounded-2xl py-14 text-center text-sm text-muted-foreground"
          style={{
            border:
              "1px solid color-mix(in oklch, var(--border) 50%, transparent)",
          }}
        >
          No reviews in this category yet.
        </div>
      ) : (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-300",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          {filtered.map((review, i) => (
            <ReviewCard key={`${review.id}-${activeFilter}`} review={review} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}