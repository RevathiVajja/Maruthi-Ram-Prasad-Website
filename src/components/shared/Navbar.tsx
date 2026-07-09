"use client"
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useBuyModal } from "./BuyModalContext";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About The book", href: "/how-to-raise-a-genius-child" },
    { label: "Know Your Author", href: "/about-the-author" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const dark = stored ? stored === "dark" : prefersDark;
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, []);

    const toggle = useCallback(() => {
        setIsDark((prev) => {
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            document.documentElement.classList.toggle("dark", next);
            return next;
        });
    }, []);

    return { isDark, toggle };
}

function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
    const { isDark, toggle } = useTheme();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    const { open } = useBuyModal();

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 8);

            if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* Floating pill navbar — sits on top of the page's void/glow background */}
            <div className={[
                "sticky top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-3 pt-2 sm:pt-3 pointer-events-none transition-transform duration-300 ease-in-out",
                hidden ? "-translate-y-full" : "translate-y-0"
            ].join(" ")}
                style={{
                    background: "linear-gradient(to right, rgba(231, 98, 63, 0.10), rgba(230, 207, 195, 0.10))"
                }}>
                <header
                    className={[
                        "pointer-events-auto w-full max-w-full rounded-md",
                        "glass transition-shadow duration-300",
                        scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.45)]" : "shadow-[0_1px_6px_rgba(0,0,0,0.25)]",
                    ].join(" ")}
                >
                    <nav
                        className="flex items-center h-16 sm:h-18 pl-3 pr-2 sm:pl-4 sm:pr-3"
                        aria-label="Main navigation"
                    >
                        {/* Left: logo */}
                        <div className="flex-1 flex items-center min-w-0">
                            <Link
                                href="/"
                                className="flex items-center gap-1.5 shrink-0 group"
                                aria-label="Genius Parenting - Home"
                            >
                                <span className="relative flex lg:h-20 lg:w-20 h-16 w-16 sm:h-16 sm:w-16 shrink-0 transition-transform duration-200 group-hover:scale-105">
                                    <Image
                                        src="/logos.png"
                                        alt="Genius Parenting logo"
                                        className="object-contain"
                                        priority
                                        width={100}
                                        height={100}
                                    />
                                </span>
                                <span className="flex flex-col leading-[1.2] min-w-0">
                                    <span
                                        className="font-bold text-[1.4rem] tracking-wide truncate"
                                        style={{
                                            backgroundImage: "var(--gradient-brand)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                        }}
                                    >
                                        Mybookzz
                                    </span>
                                    <span className="text-muted-foreground text-[0.9rem] font-medium truncate tracking-wide">
                                        Read Today Lead Tomorrow
                                    </span>
                                </span>
                            </Link>
                        </div>

                        {/* Center: links (true-centered via flex-1 siblings) */}
                        <ul className="hidden lg:flex items-center gap-1 shrink-0 ml-30" role="list">
                            {NAV_LINKS.map(({ label, href }) => {
                                const active = isActive(pathname, href);
                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            aria-current={active ? "page" : undefined}
                                            className={[
                                                "relative px-5 py-1.5 text-md font-medium rounded-full transition-colors duration-150",
                                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60",
                                                active
                                                    ? "text-foreground"
                                                    : "text-muted-foreground hover:text-foreground",
                                            ].join(" ")}
                                            style={
                                                active
                                                    ? {
                                                        backgroundImage:
                                                            "linear-gradient(135deg, color-mix(in oklch, var(--brand-gold) 16%, transparent), color-mix(in oklch, var(--brand-ember) 10%, transparent))",
                                                    }
                                                    : undefined
                                            }
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Right: theme toggle + CTA + mobile trigger */}
                        <div className="flex-1 flex items-center justify-end lg:gap-4 sm:gap-2 min-w-0">
                            <button
                                id="theme-toggle"
                                onClick={toggle}
                                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                                className={[
                                    "hidden sm:flex items-center justify-center h-9 w-9 rounded-full shrink-0",
                                    "border border-border text-muted-foreground hover:text-foreground",
                                    "hover:bg-[var(--brand-gold)]/10 transition-all duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60",
                                ].join(" ")}
                            >
                                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
                            </button>

                            <Button
                                id="buy-now-btn"
                                variant={"brand"}
                                size={"xl"}
                                className="hidden md:inline-flex items-center gap-2"
                                onClick={() => open()}
                            >
                                Buy Now <ArrowRight size={15} strokeWidth={2.5} />
                            </Button>

                            <button
                                id="mobile-menu-toggle"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                                aria-expanded={mobileOpen}
                                className={[
                                    "md:hidden flex items-center justify-center h-9 w-9 rounded-full shrink-0",
                                    "text-foreground hover:bg-[var(--brand-gold)]/10 transition-all duration-200",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60",
                                ].join(" ")}
                            >
                                <Menu size={21} />
                            </button>
                        </div>
                    </nav>
                </header>
            </div>

            {/* ---- Mobile drawer: same structure/behavior as before, restyled to brand ---- */}
            <div
                id="mobile-menu-backdrop"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
                className={[
                    "fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]",
                    "transition-opacity duration-300",
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
            />

            <aside
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={[
                    "fixed inset-y-0 left-0 z-[70] w-[85vw] max-w-sm",
                    "bg-background flex flex-col shadow-2xl",
                    "transition-transform duration-300 ease-in-out",
                    mobileOpen ? "translate-x-0" : "-translate-x-full",
                ].join(" ")}
            >
                <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 shrink-0 group"
                        aria-label="Genius Parenting - Home"
                    >
                        <span className="relative flex lg:h-18 lg:w-18 h-12 w-12 sm:h-12 sm:w-12 shrink-0 transition-transform duration-200 group-hover:scale-105">
                            <Image
                                src="/logos.png"
                                alt="Genius Parenting logo"
                                className="object-contain"
                                priority
                                width={100}
                                height={100}
                            />
                        </span>
                        <span className="flex flex-col leading-[1.15] min-w-0">
                            <span
                                className="font-bold text-xl tracking-wide"
                                style={{
                                    backgroundImage: "var(--gradient-brand)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Mybookzz
                            </span>
                            <span className="text-muted-foreground text-[0.90rem]">
                                Read Today Lead Tomorrow
                            </span>
                        </span>
                    </Link>

                    <button
                        id="mobile-menu-close"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="h-9 w-9 flex items-center justify-center rounded-full text-foreground/60 hover:text-foreground hover:bg-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-2" aria-label="Mobile navigation links">
                    <ul role="list">
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = isActive(pathname, href);
                            return (
                                <li key={href} className="border-b border-border/60">
                                    <Link
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        aria-current={active ? "page" : undefined}
                                        className={[
                                            "flex items-center justify-between px-5 py-4 text-base font-medium transition-colors duration-150",
                                            "focus-visible:outline-none focus-visible:bg-[var(--brand-gold)]/5",
                                            active ? "text-foreground" : "text-foreground/80 hover:text-foreground",
                                            "hover:bg-[var(--brand-gold)]/5",
                                        ].join(" ")}
                                    >
                                        {label}
                                        {active && (
                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{ backgroundImage: "var(--gradient-brand)" }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="px-5 pb-8 pt-4 flex flex-col gap-3 border-t border-border">
                    <button
                        onClick={toggle}
                        id="mobile-theme-toggle"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sm font-medium text-foreground/80 hover:bg-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60"
                    >
                        {isDark ? (
                            <>
                                <Sun size={18} className="text-[var(--brand-gold)]" />
                                <span>Switch to light mode</span>
                            </>
                        ) : (
                            <>
                                <Moon size={18} className="text-[var(--brand-crimson)]" />
                                <span>Switch to dark mode</span>
                            </>
                        )}
                    </button>

                    <Button
                        onClick={() => {
                            open();
                            setMobileOpen(false);
                        }}
                        size={"lg"}
                        id="mobile-buy-now-btn"
                        className="flex items-center justify-center gap-2 text-sm font-bold rounded-full text-[#1A0A0C] active:scale-[0.98] transition-all duration-200"
                        style={{ backgroundImage: "linear-gradient(135deg, #FBAD38, #EE6627)" }}
                    >
                        Buy now
                    </Button>
                </div>
            </aside>
        </>
    );
}
