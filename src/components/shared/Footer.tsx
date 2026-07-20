"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TextInputField } from "../ui/Input";
import { getAmazonUrl } from "@/constents/amazonDomains";

const SOCIAL_LINKS = [
    { icon: FaFacebook, href: "https://www.facebook.com/share/1BV91CYb5h", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/maruthi_ramprasad_pelluri", label: "Instagram" },
    { icon: FaYoutube, href: "", label: "YouTube" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/maruthipelluri", label: "Linkedin" }
];

const BOOK_ASIN = "B0H339XT7H";

const AMAZON_COUNTRIES = [
    { label: "USA", code: "US" },
    { label: "UK", code: "GB" },
    { label: "Germany", code: "DE" },
    { label: "Brazil", code: "BR" },
    { label: "Canada", code: "CA" },
    { label: "Australia", code: "AU" },
    { label: "France", code: "FR" },
    { label: "Mexico", code: "MX" },
    { label: "Spain", code: "ES" },
    { label: "Italy", code: "IT" },
    { label: "India", code: "IN" },
    { label: "Japan", code: "JP" },
];

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(60, "Name is too long")
        .required("Name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
});

export default function FooterSection() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [unavailableLink, setUnavailableLink] = useState<string | null>(null);

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Failed to subscribe");
            }

            setStatus("success");
            resetForm();
        } catch {
            setStatus("error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <footer className="bg-background overflow-hidden" aria-label="Footer">
            {/* Content wrapper */}
            <div className="relative">

                {/* Ambient glow orbs — use brand tokens so they adapt */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 30%, transparent) 0%, transparent 65%)",
                        opacity: 0.5,
                    }}
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, color-mix(in oklch, var(--brand-ember) 20%, transparent) 0%, transparent 65%)",
                        opacity: 0.4,
                    }}
                />

                <div className="relative z-1 mx-auto max-w-[1100px] px-4 sm:px-6 pt-4 pb-8">
                    {/* ── Newsletter card ───────────────────────────────────────── */}
                    <div className="glass rounded-2xl p-7 sm:p-10 shadow-sm" style={{ border: "1px solid color-mix(in oklch, var(--brand-gold-bright) 25%, transparent)" }}>
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

                            {/* Left — copy + socials */}
                            <div>
                                {/* Badge */}
                                <span
                                    className="mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em]"
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
                                    Join the community
                                </span>

                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                    Stay{" "}
                                    <span className="text-gradient-brand">connected</span>
                                </h2>

                                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                                    Be the first to know about new books, live webinars,
                                    exclusive parenting insights, and upcoming speaking events.
                                </p>

                                {/* Gold divider */}
                                <div
                                    className="my-5 h-px w-24"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, var(--brand-gold), transparent)",
                                    }}
                                />

                                {/* Social icons */}
                                <div className="flex items-center gap-3">
                                    {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110",
                                                // light / dark both use CSS tokens
                                                "bg-muted/40 border border-border text-muted-foreground",
                                                "hover:border-[color-mix(in_oklch,var(--brand-gold)_35%,transparent)]",
                                                "hover:text-[var(--brand-gold-bright)]",
                                                "hover:[background:linear-gradient(135deg,color-mix(in_oklch,var(--brand-gold)_20%,transparent),color-mix(in_oklch,var(--brand-ember)_10%,transparent))]"
                                            )}
                                            onClick={(e) => {
                                                if (href === "") {
                                                    e.preventDefault();
                                                    setUnavailableLink(label);
                                                    setTimeout(() => setUnavailableLink(null), 2000);
                                                }
                                            }}
                                        >
                                            <Icon size={17} />
                                            {unavailableLink === label && (
                                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-[10px] text-background shadow-sm animate-in fade-in zoom-in duration-200 pointer-events-none">
                                                    Coming soon
                                                </span>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Right — form */}
                            <div>
                                {status === "success" ? (
                                    <div
                                        className="flex flex-col items-center gap-4 rounded-2xl py-10 px-6 text-center"
                                        style={{
                                            background: "color-mix(in oklch, var(--brand-gold) 6%, transparent)",
                                            border: "1px solid color-mix(in oklch, var(--brand-gold) 20%, transparent)",
                                        }}
                                    >
                                        <CheckCircle2
                                            size={40}
                                            strokeWidth={1.5}
                                            style={{ color: "var(--brand-gold)" }}
                                        />
                                        <div>
                                            <p className="text-xl font-semibold text-foreground">
                                                You&apos;re in!
                                            </p>
                                            <p className="mt-1 text-md text-muted-foreground max-w-xs">
                                                Watch your inbox for parenting insights and updates.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <Formik
                                        initialValues={{ name: "", email: "" }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form
                                                noValidate
                                                className="flex flex-col gap-4"
                                                aria-label="Newsletter subscription form"
                                            >
                                                {/* Name */}
                                                <TextInputField
                                                    name="name"
                                                    placeholder="Your name"
                                                    autoComplete="name"
                                                    required
                                                />

                                                {/* Email */}
                                                <TextInputField
                                                    name="email"
                                                    type="email"
                                                    placeholder="Your email address"
                                                    autoComplete="email"
                                                    required
                                                />

                                                {/* API error */}
                                                {status === "error" && (
                                                    <p
                                                        role="alert"
                                                        className="rounded-xl px-4 py-2.5 text-sm text-destructive"
                                                        style={{
                                                            background:
                                                                "color-mix(in oklch, var(--destructive) 8%, transparent)",
                                                            border:
                                                                "1px solid color-mix(in oklch, var(--destructive) 25%, transparent)",
                                                        }}
                                                    >
                                                        Something went wrong. Please try again.
                                                    </p>
                                                )}

                                                {/* Submit — uses the `brand` variant from your Button */}
                                                <Button
                                                    type="submit"
                                                    variant="brand"
                                                    size="lg"
                                                    disabled={isSubmitting}
                                                    className="w-full rounded-xl tracking-wide py-6 cursor-pointer"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <span
                                                                className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                                                aria-hidden="true"
                                                            />
                                                            Subscribing…
                                                        </>
                                                    ) : (
                                                        <>
                                                            Subscribe — it&apos;s free
                                                            <ArrowRight
                                                                size={15}
                                                                strokeWidth={2.5}
                                                                className="transition-transform duration-200 group-hover/button:translate-x-0.5"
                                                            />
                                                        </>
                                                    )}
                                                </Button>

                                                <p className="text-center text-sm text-muted-foreground">
                                                    No spam, ever. Unsubscribe any time.
                                                </p>
                                            </Form>
                                        )}
                                    </Formik>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ── Footer main grid ──────────────────────────────────────── */}
                    <div className="md:mt-10 mt-6 border-t md:pt-10 pt-6 pb-4" style={{ borderColor: "color-mix(in oklch, var(--brand-gold) 18%, transparent)" }}>
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">

                            {/* Col 1 — Brand */}
                            <div className="flex flex-col gap-5">
                                <Link href="/" className="flex items-center gap-2 group w-fit" aria-label="Mybookzz - Home">
                                    <span className="relative flex h-14 w-14 shrink-0 transition-transform duration-200 group-hover:scale-105">
                                        <img
                                            src="/logos.png"
                                            alt="Mybookzz logo"
                                            className="object-contain h-full w-full"
                                        />
                                    </span>
                                    <span className="flex flex-col leading-[1.2]">
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
                                        <span className="text-muted-foreground text-sm tracking-wide">
                                            Read Today • Lead Tomorrow
                                        </span>
                                    </span>
                                </Link>

                                <p className="text-md leading-relaxed text-muted-foreground max-w-[260px] ml-4">
                                    Inspiring parents and children with transformative stories that unlock the genius within every child.
                                </p>
                            </div>

                            {/* Col 2 — Quick Links */}
                            <div className="md:ml-16 mt-1 ml-0">
                                <p
                                    className="mb-4 text-sm font-bold uppercase tracking-[0.11em]"
                                    style={{ color: "var(--brand-gold-bright)" }}
                                >
                                    Quick links
                                </p>
                                <ul className="flex flex-col gap-2.5" role="list">
                                    {[
                                        { label: "Home", href: "/" },
                                        { label: "About The Book", href: "/how-to-raise-a-genius-child" },
                                        { label: "Know Your Author", href: "/about-the-author" },
                                        { label: "Reviews", href: "/reviews" },
                                    ].map(({ label, href }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground w-fit"
                                            >
                                                <span
                                                    className="h-1 w-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                                                    style={{ background: "var(--brand-gold)" }}
                                                />
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sm:col-span-2 lg:col-span-1">
                                <p
                                    className="mb-4 text-sm font-bold uppercase tracking-[0.11em]"
                                    style={{ color: "var(--brand-gold-bright)" }}
                                >
                                    Available on Amazon worldwide
                                </p>

                                {/* Country links — plain text style matching Quick Links, 2-col sub-grid */}
                                <div className="grid grid-cols-3 gap-x-3 gap-y-2.5 mb-5">
                                    {AMAZON_COUNTRIES.map(({ label, code }) => (
                                        <a
                                            key={code}
                                            href={getAmazonUrl(BOOK_ASIN, code)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground w-fit"
                                        >
                                            <span
                                                className="h-1 w-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                                                style={{ background: "var(--brand-gold)" }}
                                            />
                                            {label}
                                        </a>
                                    ))}
                                </div>

                                {/* Publisher */}
                                <p className="text-sm text-muted-foreground">
                                    Published by{" "}
                                    <a
                                        href="https://whitefalconpublishing.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold transition-colors duration-150 hover:underline"
                                        style={{ color: "var(--brand-gold-bright)" }}
                                    >
                                        White Falcon Publishing
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Bottom bar — stacked + centered on mobile, flex-row space-between on sm+ */}
                        <div
                            className="mt-5 pt-5 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left"
                            style={{ borderTop: "1px solid color-mix(in oklch, var(--brand-gold) 12%, transparent)" }}
                        >
                            <p className="text-md text-muted-foreground">
                                © {new Date().getFullYear()}{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        backgroundImage: "var(--gradient-brand)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Mybookzz.com
                                </span>{" "}
                                All rights reserved.
                            </p>
                            <p className="text-md text-muted-foreground/90">
                                Crafted with 💖 for every curious parent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}