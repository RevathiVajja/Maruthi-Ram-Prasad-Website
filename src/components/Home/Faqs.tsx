"use client";

import { useState } from "react";
import { HelpCircle, Search, X, Plus, LayoutGrid, BookOpen, Heart, Users, Home, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/constents/faqs";
import { Button } from "../ui/button";
import { useBuyModal } from "../shared/BuyModalContext";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category =
    | "all"
    | "Identifying Giftedness"
    | "Learning & School"
    | "Emotional Well-being"
    | "Social Skills Development"
    | "Home Environment & Screen Time";

// ─── Category Config ──────────────────────────────────────────────────────────
const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
    all: <LayoutGrid size={15} />,
    "Identifying Giftedness": <Lightbulb size={15} />,
    "Learning & School": <BookOpen size={15} />,
    "Emotional Well-being": <Heart size={15} />,
    "Social Skills Development": <Users size={15} />,
    "Home Environment & Screen Time": <Home size={15} />,
};

const CATEGORY_LABELS: Record<Category, string> = {
    all: "All",
    "Identifying Giftedness": "Identifying Giftedness",
    "Learning & School": "Learning & School",
    "Emotional Well-being": "Emotional Well-being",
    "Social Skills Development": "Social Skills",
    "Home Environment & Screen Time": "Home & Screen Time",
};

const TABS: Category[] = [
    "all",
    "Identifying Giftedness",
    "Learning & School",
    "Emotional Well-being",
    "Social Skills Development",
    "Home Environment & Screen Time",
];

// ─── Tip label map ────────────────────────────────────────────────────────────
const TIP_LABELS: Record<string, string> = {
    key_reminder: "Key Reminder",
    what_to_do: "What to Do",
    note_for_teachers: "Note for Teachers",
    important: "Important",
    what_this_means: "What This Means",
    watch_for: "Watch For",
    strategy: "Strategy",
    growth_mindset: "Growth Mindset",
    approach: "Approach",
    research_finding: "Research Finding",
    from_the_book: "From the Book",
    remember: "Remember",
    for_teachers: "For Teachers",
    key_insight: "Key Insight",
    research_2026: "Research 2026",
    best_practice: "Best Practice",
    for_teachers_note: "For Teachers",
    model_it: "Model It",
    research_insight: "Research Insight",
    key_principle: "Key Principle",
    research_2025: "Research 2025",
    central_message: "Central Message",
};

// ─── FAQ Card ─────────────────────────────────────────────────────────────────
function FAQCard({
    item,
    isOpen,
    onToggle,
}: {
    item: (typeof faqs)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    const hasTip = item.tip?.content && item.tip.content.length > 0;
    const tipLabel = item.tip?.type ? (TIP_LABELS[item.tip.type] ?? "Tip") : "Tip";

    return (
        <div
            className={cn(
                "cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300",
                isOpen
                    ? "border-primary/40 shadow-lg shadow-primary/10"
                    : "border-border hover:border-primary/30"
            )}
            style={{
                background: isOpen
                    ? "color-mix(in oklch, var(--card) 85%, var(--primary) 5%)"
                    : "var(--card)",
            }}
        >
            {/* Trigger */}
            <button
                className="flex w-full items-start gap-4 px-5 py-5 text-left"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {/* Icon / Emoji box */}
                <div
                    className={cn(
                        "mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-xl transition-all duration-300",
                        isOpen
                            ? "bg-primary/15 shadow-inner"
                            : "bg-secondary"
                    )}
                >
                    {item.icon}
                </div>

                {/* Question + category pill */}
                <div className="min-w-0 flex-1">
                    <span className="block text-md lg:text-lg font-semibold leading-snug text-foreground sm:text-base">
                        {item.question}
                    </span>
                    <span
                        className={cn(
                            "mt-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs lg:text-xs font-bold uppercase tracking-wider",
                            "border-primary/20 bg-primary/8 text-primary"
                        )}
                        style={{ background: "color-mix(in oklch, var(--primary) 8%, transparent)" }}
                    >
                        <span
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />
                        {item.category}
                    </span>
                </div>

                {/* Toggle icon */}
                <div
                    className={cn(
                        "mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                        isOpen
                            ? "rotate-45 border-primary/40 bg-primary/15"
                            : "border-border bg-transparent"
                    )}
                >
                    <Plus size={16} className="text-primary" />
                </div>
            </button>

            {/* Expandable answer */}
            <div
                className="grid transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-6 pl-[4.5rem]">
                        {/* Main answer */}
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {item.answer}
                        </p>

                        {/* Bullet points */}
                        {item.bulletPoints.length > 0 && (
                            <ul className="mt-4 flex flex-col gap-2">
                                {item.bulletPoints.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2.5 text-lg leading-relaxed text-muted-foreground"
                                    >
                                        <span
                                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                            style={{ background: "var(--brand-gold)" }}
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Tip badge */}
                        {hasTip && (
                            <div
                                className="mt-4 rounded-xl border px-4 py-3 text-md leading-relaxed"
                                style={{
                                    background: "color-mix(in oklch, var(--brand-gold) 6%, transparent)",
                                    borderColor: "color-mix(in oklch, var(--brand-gold) 25%, transparent)",
                                    color: "var(--foreground)",
                                }}
                            >
                                <span
                                    className="mb-1 block text-md font-bold uppercase tracking-widest"
                                    style={{ color: "var(--brand-gold-bright)" }}
                                >
                                    💡 {tipLabel}
                                </span>
                                {item.tip.content}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FaqsSection() {
    const usebuymodal = useBuyModal();
    const [activeTab, setActiveTab] = useState<Category>("all");
    const [search, setSearch] = useState("");
    const [openId, setOpenId] = useState<number | null>(null);

    const filtered = faqs.filter((item) => {
        const matchCat = activeTab === "all" || item.category === activeTab;
        const q = search.toLowerCase();
        const matchSearch =
            !q ||
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q);
        return matchCat && matchSearch;
    });

    return (
        <section
            id="faqs"
            className="relative w-full overflow-hidden bg-background md:py-12 py-8 px-4 sm:px-6 lg:px-12"
            aria-label="Frequently Asked Questions"
        >
            {/* Ambient glow orbs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/4 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 20%, transparent) 0%, transparent 65%)",
                    filter: "blur(80px)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 15%, transparent) 0%, transparent 65%)",
                    filter: "blur(80px)",
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* ── Header ── */}
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        Frequently Asked Questions on{" "}
                        <span className="text-gradient-brand">Raising a Genius Child</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg lg:text-xl leading-relaxed text-muted-foreground sm:text-base">
                        Real challenges faced by parents and teachers — answered with research-backed strategies aligned with the book by Maruthi Ram Prasad Pelluri.
                    </p>
                </div>

                {/* ── Search ── */}
                <div className="relative mb-5">
                    <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                        <Search size={18} className="text-muted-foreground" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search questions…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={cn(
                            "w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-10",
                            "text-md text-foreground placeholder:text-muted-foreground",
                            "outline-none transition-all duration-200",
                            "focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                        )}
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute inset-y-0 right-3 flex items-center px-1 text-muted-foreground transition-colors hover:text-foreground"
                            aria-label="Clear search"
                        >
                            <X size={15} />
                        </button>
                    )}
                </div>

                {/* ── Category tabs ── */}
                <div className="mb-7 flex flex-wrap gap-2">
                    {TABS.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={cn(
                                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm lg:text-base font-semibold transition-all duration-200",
                                activeTab === cat
                                    ? "border-primary/50 text-primary shadow-sm"
                                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                            )}
                            style={
                                activeTab === cat
                                    ? { background: "color-mix(in oklch, var(--primary) 10%, var(--card))" }
                                    : { background: "var(--card)" }
                            }
                        >
                            {CATEGORY_ICONS[cat]}
                            {CATEGORY_LABELS[cat]}
                        </button>
                    ))}
                </div>

                {/* ── FAQ list ── */}
                <div className="flex flex-col gap-3">
                    {filtered.map((item) => (
                        <FAQCard
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() =>
                                setOpenId(openId === item.id ? null : item.id)
                            }
                        />
                    ))}
                </div>

                {/* ── No results ── */}
                {filtered.length === 0 && (
                    <div className="py-16 text-center">
                        <div className="inline-flex flex-col items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card">
                                <Search size={22} className="text-muted-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground">
                                No questions match your search
                            </p>
                            <button
                                onClick={() => setSearch("")}
                                className="text-sm font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
                            >
                                Clear search
                            </button>
                        </div>
                    </div>
                )}

                {/* ── CTA strip ── */}
                <div
                    className="mt-10 flex flex-col items-start gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center"
                    style={{
                        background: "color-mix(in oklch, var(--card) 80%, var(--primary) 4%)",
                        borderColor: "color-mix(in oklch, var(--primary) 20%, transparent)",
                    }}
                >
                    <div
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                        style={{
                            background: "color-mix(in oklch, var(--brand-gold) 12%, transparent)",
                            border: "1px solid color-mix(in oklch, var(--brand-gold) 25%, transparent)",
                        }}
                    >
                        📖
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold text-foreground">
                            Want deeper answers?
                        </p>
                        <p className="mt-0.5 text-md text-muted-foreground">
                            Every question above is explored in-depth in{" "}
                            <em>How to Raise a Genius Child</em> — with real-world examples, research-backed strategies, and actionable steps.
                        </p>
                    </div>
                    <Button
                        variant={'brand'}
                        className="text-md h-12 px-6"
                        size={'lg'}
                        onClick={() => {
                            usebuymodal.open();
                        }}
                    >
                        Get the Book
                    </Button>
                </div>
            </div>
        </section>
    );
}
