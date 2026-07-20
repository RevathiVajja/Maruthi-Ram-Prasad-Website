"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";

const CERTIFICATES = [
    {
        src: "/images/certificate1.png",
        alt: "Certificate of Achievement — Maruthi Ram Prasad Pelluri",
        title: "Certified Life Skills And Value Education Trainer",
    },
    {
        src: "/images/certificate2.png",
        alt: "Certification — Maruthi Ram Prasad Pelluri",
        title: "International School Award 2019-22",
    },
    {
        src: "/images/certificate3.png",
        alt: "Accreditation Certificate — Maruthi Ram Prasad Pelluri",
        title: "Positive Parenting Coach",
    },
    {
        src: "/images/certificate4.png",
        alt: "Top 100 Global Educational Leaders — Maruthi Ram Prasad Pelluri",
        title: "Top 100 Global Educational Leaders",
    },
    {
        src: "/images/certificate5.png",
        alt: "International Educational Ambassador — Maruthi Ram Prasad Pelluri",
        title: "International Educational Ambassador",
    },
    {
        src: "/images/certificate6.png",
        alt: "Accredited Teacher Trainer — Maruthi Ram Prasad Pelluri",
        title: "Accredited Teacher Trainer",
    }
];

/* ── Certificate card ──────────────────────────────────────────────────── */
function CertCard({
    cert,
    index,
    isVisible,
}: {
    cert: (typeof CERTIFICATES)[0];
    index: number;
    isVisible: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <div
                className="flex flex-col gap-3 cursor-pointer group"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.55s ease ${0.15 + index * 0.12}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.12}s`,
                }}
                onClick={() => setLightboxOpen(true)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title}`}
                onKeyDown={(e) => e.key === "Enter" && setLightboxOpen(true)}
            >
                {/* Image frame */}
                <div
                    className="relative overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                        border: `1px solid ${hovered
                            ? "color-mix(in oklch, var(--brand-gold) 50%, transparent)"
                            : "color-mix(in oklch, var(--brand-gold) 20%, var(--border))"}`,
                        boxShadow: hovered
                            ? "0 2px 8px color-mix(in oklch, var(--brand-gold) 4%, transparent)"
                            : "0 1px 3px rgba(0,0,0,0.10)",
                        background: "var(--card)",
                    }}
                >
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                        <Image
                            src={cert.src}
                            alt={cert.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                            className="object-contain p-3 transition-transform duration-400"
                            style={{
                                transform: hovered ? "scale(1.03)" : "scale(1)",
                            }}
                            draggable={false}
                        />
                    </div>

                    {/* Hover overlay hint */}
                    <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-xl"
                        style={{
                            background: "color-mix(in oklch, var(--brand-gold) 8%, transparent)",
                            opacity: hovered ? 1 : 0,
                        }}
                    >
                        <span
                            className="text-xs font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                            style={{
                                background: "color-mix(in oklch, var(--card) 85%, transparent)",
                                border: "1px solid color-mix(in oklch, var(--brand-gold) 40%, transparent)",
                                color: "var(--brand-gold-bright)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            View Full
                        </span>
                    </div>
                </div>

                {/* Label */}
                <p
                    className="text-center text-sm font-semibold tracking-wide transition-colors duration-200"
                    style={{ color: hovered ? "var(--brand-gold-bright)" : "var(--muted-foreground)" }}
                >
                    {cert.title}
                </p>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[500] bg-black/75 backdrop-blur-sm"
                        style={{ animation: "cert-fadeIn 0.2s ease both" }}
                        onClick={() => setLightboxOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="fixed inset-0 z-[510] flex items-center justify-center p-4 pointer-events-none">
                        <div
                            className="relative w-full max-w-2xl rounded-2xl overflow-hidden pointer-events-auto"
                            style={{
                                background: "var(--card)",
                                border: "1px solid color-mix(in oklch, var(--brand-gold) 30%, transparent)",
                                boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
                                animation: "cert-slideUp 0.28s cubic-bezier(0.34,1.56,0.64,1) both",
                            }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setLightboxOpen(false)}
                                aria-label="Close certificate view"
                                className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150"
                                style={{
                                    background: "color-mix(in oklch, var(--card) 90%, transparent)",
                                    border: "1px solid var(--border)",
                                    color: "var(--muted-foreground)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
                                    (e.currentTarget as HTMLButtonElement).style.background = "var(--muted)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)";
                                    (e.currentTarget as HTMLButtonElement).style.background = "color-mix(in oklch, var(--card) 90%, transparent)";
                                }}
                            >
                                ✕
                            </button>

                            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    className="object-contain p-4"
                                    priority
                                    draggable={false}
                                />
                            </div>

                            <div
                                className="px-5 py-3 text-center border-t"
                                style={{ borderColor: "var(--border)" }}
                            >
                                <p className="text-sm font-semibold" style={{ color: "var(--brand-gold-bright)" }}>
                                    {cert.title}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

/* ─────────────────────────────────────────────────────────────────────────
   CERTIFICATES SECTION
   ───────────────────────────────────────────────────────────────────────── */
export default function CertificatesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden py-0 mb-6"
            aria-label="Author certifications"
        >
            <style>{`
                @keyframes cert-fadeIn  { from { opacity: 0; } to { opacity: 1; } }
                @keyframes cert-slideUp { from { opacity: 0; transform: translateY(28px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
            `}</style>

            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 14%, transparent) 0%, transparent 70%)",
                    filter: "blur(56px)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 -left-10 w-64 h-64 rounded-full"
                style={{
                    background: "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 16%, transparent) 0%, transparent 70%)",
                    filter: "blur(52px)",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

                {/* ── Section label ── */}
                <div
                    className="flex items-center gap-4 mb-10"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(14px)",
                        transition: "opacity 0.55s ease, transform 0.55s ease",
                    }}
                >
                    <div
                        className="h-px flex-1"
                        style={{
                            background: "linear-gradient(90deg, transparent, var(--brand-gold) 80%)",
                            opacity: 0.4,
                        }}
                    />
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Award size={18} style={{ color: "var(--brand-gold)" }} strokeWidth={1.8} />
                        <p
                            className="text-lg font-bold tracking-[0.25em] uppercase"
                            style={{ color: "var(--brand-gold-bright)" }}
                        >
                            Certifications
                        </p>
                    </div>
                    <div
                        className="h-px flex-1"
                        style={{
                            background: "linear-gradient(90deg, var(--brand-gold) 20%, transparent)",
                            opacity: 0.4,
                        }}
                    />
                </div>

                {/* ── Cards grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATES.map((cert, i) => (
                        <CertCard
                            key={cert.src}
                            cert={cert}
                            index={i}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
