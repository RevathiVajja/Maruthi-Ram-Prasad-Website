"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import { useBuyModal } from "./BuyModalContext";
import { getAmazonUrl } from "@/constents/amazonDomains";

// ── Amazon ASIN ────────────────────────────────────────────────────────────
const AMAZON_ASIN = "B0H339XT7H";

/** Fetches the visitor's country code once per session (cached in sessionStorage) */
async function fetchCountryCode(): Promise<string | null> {
    const cached = sessionStorage.getItem("geo_country");
    if (cached) return cached;
    try {
        const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) });
        const data = await res.json();
        const code: string = data.country_code ?? "US";
        sessionStorage.setItem("geo_country", code);
        return code;
    } catch {
        return null;
    }
}

const KEYFRAMES = `
@keyframes bm-fadeIn  { from{opacity:0}              to{opacity:1} }
@keyframes bm-slideUp { from{opacity:0;transform:translateY(32px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
`;

const OPTIONS = [
    {
        id: "amazon",
        logo: "/images/amazon-round.png",
        label: "Buy on Amazon",
        sub: "Paperback & Hardcover",
        color: "#FF9900",
        bg: "rgba(255,153,0,0.10)",
        border: "rgba(255,153,0,0.28)",
        href: "amazon-geo",
    },
    {
        id: "flipkart",
        logo: "/images/flipkart1.png",
        label: "Buy on Flipkart",
        sub: "Fast delivery across India",
        color: "#2874f0",
        bg: "rgba(40,116,240,0.10)",
        border: "rgba(40,116,240,0.28)",
        href: "https://dl.flipkart.com/dl/raise-genius-child-global-game-changer-parenting-family-dynamics-comprehensive-guide-parents-develop-remarkable-potential/p/itmc49ec33fff39e?pid=9798892226219&lid=LSTBOK9798892226219VQJIFK&marketplace=FLIPKART&q=how+to+raise+a+genius+child&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=a9d1eded-8e67-428f-ba3b-f3a23f0196b3.9798892226219.SEARCH&ppt=None&ppn=None&ssid=tqbtvygtsw0000001783418110911&qH=fa716001be765eeb&ov_redirect=true&ov_redirect=true&_refId=&_appId=CL",
    },
    {
        id: "kindle",
        logo: "/images/kindle-round1.png",
        label: "Read on Kindle",
        sub: "Opens in Kindle app",
        color: "#00A8E1",
        bg: "rgba(0,168,225,0.10)",
        border: "rgba(0,168,225,0.28)",
        href: "https://read.amazon.com/kp/kshare?asin=B0H1F7LTV6",
    },
    {
        id: "sample",
        logo: null,
        label: "Read Sample",
        sub: "Free preview — no sign-in needed",
        color: "#10b981",
        bg: "rgba(16,185,129,0.10)",
        border: "rgba(16,185,129,0.28)",
        href: "https://read.amazon.com/sample/B0H1F7LTV6?clientId=share",
    },
    {
        id: "buy-direct-from-author",
        logo: "/image.png",
        label: "Buy from Author (Only In India)",
        sub: "Get your signed copy",
        color: "#104eb9ff",
        bg: "rgba(16, 75, 185, 0.1)",
        border: "rgba(16, 69, 185, 0.28)",
        href: "https://escuela.in/supplies/",
    },
];

export default function BuyModal() {
    const { isOpen, close } = useBuyModal();
    const [amazonUrl, setAmazonUrl] = useState<string>("https://www.amazon.com/dp/" + AMAZON_ASIN);
    const prefetchedRef = useRef(false);

    /* Prefetch geo on first open */
    useEffect(() => {
        if (!isOpen || prefetchedRef.current) return;
        prefetchedRef.current = true;
        fetchCountryCode().then((code) => setAmazonUrl(getAmazonUrl(AMAZON_ASIN, code)));
    }, [isOpen]);

    /* Close on Escape key */
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, close]);

    /* Lock body scroll while open */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <style>{KEYFRAMES}</style>

            {/* ── Backdrop — clicking it closes the modal ── */}
            <div
                className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm cursor-pointer"
                style={{ animation: "bm-fadeIn .2s ease both" }}
                onClick={close}
                aria-hidden="true"
            />

            {/* ── Modal panel ── */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Get your copy"
                className="fixed inset-0 z-[510] flex items-center justify-center p-4 pointer-events-none"
            >
                <div
                    className="relative w-full max-w-md rounded-xl border shadow-2xl overflow-hidden pointer-events-auto"
                    style={{
                        background: "var(--card)",
                        borderColor: "color-mix(in oklch,var(--brand-gold) 22%,transparent)",
                        animation: "bm-slideUp .28s cubic-bezier(0.34,1.56,0.64,1) both",
                    }}
                >

                    {/* Close button */}
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 z-10"
                    >
                        <X size={16} />
                    </button>

                    {/* Header */}
                    <div className="px-7 pt-6 pb-4 text-center">
                        <div className="inline-flex items-center justify-center mb-3">
                            <Image
                                src="/images/book-cover.png"
                                alt="How to Raise a Genius Child"
                                width={64}
                                height={84}
                                className="object-contain rounded-lg shadow-md"
                                style={{
                                    filter: "drop-shadow(0 4px 12px color-mix(in oklch,var(--brand-ember) 40%,transparent))",
                                }}
                                priority
                            />
                        </div>
                        <h2 className="text-xl font-black tracking-tight text-foreground mb-1">
                            Get Your Copy
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Choose how you&apos;d like to read <em>How to Raise a Genius Child</em>
                        </p>
                    </div>

                    {/* Options */}
                    <div className="px-6 pb-7 flex flex-col gap-3">
                        {OPTIONS.map((opt) => {
                            const isAmazon = opt.id === "amazon";
                            const href = isAmazon ? amazonUrl : opt.href;

                            return (
                                <a
                                    key={opt.id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 rounded-2xl border p-3.5 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group"
                                    style={{
                                        background: opt.bg,
                                        borderColor: opt.border,
                                    }}
                                >
                                    {/* Logo bubble */}
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110 overflow-hidden bg-white"
                                        style={{ border: `1.5px solid ${opt.border}` }}
                                    >
                                        {opt.logo ? (
                                            <Image
                                                src={opt.logo}
                                                alt={opt.label}
                                                width={44}
                                                height={44}
                                                className="object-contain w-full h-full"
                                            />
                                        ) : (
                                            <FileText size={24} style={{ color: opt.color }} />
                                        )}
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-sm text-foreground leading-tight">{opt.label}</div>
                                        <div className="text-xs mt-0.5 text-muted-foreground">{opt.sub}</div>
                                    </div>

                                    {/* Arrow */}
                                    <ArrowRight
                                        size={16}
                                        className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                                        style={{ color: opt.color }}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
