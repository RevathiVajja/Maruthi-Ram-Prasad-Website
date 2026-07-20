"use client";

import { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Send, CheckCircle2, Mail, MessageSquareText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextInputField } from "@/components/ui/Input";
import { PhoneInputField } from "@/components/ui/PhoneInputField";
import { cn } from "@/lib/utils";

/* ─── Validation ─────────────────────────────────────────────────────────── */
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(60, "Name is too long")
        .required("Name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string()
        .min(6, "Enter a valid phone number")
        .required("Phone number is required"),
    message: Yup.string()
        .min(5, "Please write at least 5 characters")
        .max(200, "Message is too long (max 200 characters)")
        .required("Tell us what's on your mind"),
});

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

/* ─── Left panel info items ──────────────────────────────────────────────── */
const INFO_ITEMS = [
    {
        icon: BookOpen,
        title: "Book enquiries",
        desc: "Questions about bulk orders, school/institution copies, or gifting packs.",
    },
    {
        icon: MessageSquareText,
        title: "Speaking & workshops",
        desc: "Invite Maruthi Ram Prasad to your school, parenting event, or corporate session.",
    },
    {
        icon: Mail,
        title: "Media & press",
        desc: "Interviews, features, and collaboration requests.",
    },
];

/* ─── Animated gradient border SVG ──────────────────────────────────────── */
function AnimatedBorder() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
            style={{ borderRadius: "inherit" }}
        >
            <rect
                x="0.75"
                y="0.75"
                width="calc(100% - 1.5px)"
                height="calc(100% - 1.5px)"
                rx="15.5"
                fill="none"
                stroke="url(#contactGradStroke)"
                strokeWidth="1.5"
                strokeDasharray="1200"
                strokeDashoffset="1200"
                style={{
                    animation:
                        "traceContactBorder 2s cubic-bezier(0.4,0,0.2,1) 0.4s forwards",
                }}
            />
            <defs>
                <linearGradient
                    id="contactGradStroke"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="var(--brand-gold-bright)" />
                    <stop offset="50%" stopColor="var(--brand-ember)" />
                    <stop offset="100%" stopColor="var(--brand-crimson-light)" />
                </linearGradient>
            </defs>
            <style>{`
        @keyframes traceContactBorder {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
        </svg>
    );
}

/* ─── Formik-connected textarea ─────────────────────────────────────────── */
function MessageTextarea() {
    const [field, meta] = useField<string>("message");
    const hasError = meta.touched && !!meta.error;

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Your thoughts
                <span className="ml-0.5 text-destructive">*</span>
            </label>

            <textarea
                id="message"
                {...field}
                rows={4}
                placeholder="Share what's on your mind — a question, an idea, or just a hello."
                className={cn(
                    "w-full rounded-lg border px-3 py-3 text-md text-foreground outline-none transition-all placeholder:text-muted-foreground resize-none leading-relaxed",
                    "bg-background border-input focus:border-ring focus:ring-2 focus:ring-ring/30",
                    hasError && "border-destructive focus:border-destructive focus:ring-destructive/30"
                )}
            />

            <div className="flex items-center justify-between">
                {hasError ? (
                    <p className="text-xs text-destructive font-medium">{meta.error}</p>
                ) : (
                    <span />
                )}
                <p className="text-xs text-muted-foreground ml-auto">
                    {field.value?.length ?? 0} / 200
                </p>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONTACT SECTION
   ═══════════════════════════════════════════════════════════════════════════ */
export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (
        values: typeof initialValues,
        {
            setSubmitting,
            resetForm,
        }: {
            setSubmitting: (v: boolean) => void;
            resetForm: () => void;
        }
    ) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                throw new Error("Request failed");
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
        <section
            className="relative overflow-hidden bg-background py-10 sm:py-14 px-4 sm:px-6"
            aria-label="Contact"
            id="contact"
        >
            {/* ── Ambient glow orbs ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-48 -left-24 h-[36rem] w-[36rem] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, color-mix(in oklch, var(--brand-crimson) 22%, transparent) 0%, transparent 65%)",
                    opacity: 0.55,
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, color-mix(in oklch, var(--brand-gold) 18%, transparent) 0%, transparent 65%)",
                    opacity: 0.45,
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1000px]">

                {/* ── Section header ── */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <span
                        className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em]"
                        style={{
                            borderColor:
                                "color-mix(in oklch, var(--brand-gold) 30%, transparent)",
                            background:
                                "color-mix(in oklch, var(--brand-gold) 8%, transparent)",
                            color: "var(--brand-gold-bright)",
                        }}
                    >
                        <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--brand-gold-bright)" }}
                        />
                        Get in touch
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        Let&apos;s start a{" "}
                        <span
                            className="text-gradient-brand italic pr-2"
                            style={{
                                filter:
                                    "drop-shadow(0 0 18px color-mix(in oklch, var(--brand-ember) 35%, transparent))",
                            }}
                        >
                            conversation
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                        Whether you have a question about the book, a school programme, or
                        just want to share what&apos;s on your mind — we&apos;d love to
                        hear from you.
                    </p>
                </div>

                {/* ── Two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-10 lg:gap-14 items-start">

                    {/* ══ LEFT: info panel ══ */}
                    <div className="flex flex-col gap-8 mt-2 hidden md:flex">
                        {INFO_ITEMS.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                                    style={{
                                        background:
                                            "color-mix(in oklch, var(--brand-gold) 10%, var(--muted))",
                                        border:
                                            "1px solid color-mix(in oklch, var(--brand-gold-bright) 22%, transparent)",
                                        color: "var(--brand-gold-bright)",
                                    }}
                                >
                                    <Icon size={24} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-foreground leading-snug">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-md text-muted-foreground leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ══ RIGHT: form card ══ */}
                    <div
                        className="relative rounded-2xl"
                        style={{
                            background:
                                "color-mix(in oklch, var(--card) 88%, var(--brand-crimson) 4%)",
                        }}
                    >
                        {/* Signature traced border animation */}
                        <AnimatedBorder />

                        <div className="relative p-6 sm:p-8">
                            {status === "success" ? (
                                /* ── Success state ── */
                                <div
                                    className="flex flex-col items-center gap-5 py-12 text-center"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <div
                                        className="flex h-16 w-16 items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                "color-mix(in oklch, var(--brand-gold) 10%, var(--muted))",
                                            border:
                                                "1.5px solid color-mix(in oklch, var(--brand-gold) 30%, transparent)",
                                        }}
                                    >
                                        <CheckCircle2
                                            size={32}
                                            strokeWidth={1.5}
                                            style={{ color: "var(--brand-gold-bright)" }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">
                                            Message sent!
                                        </p>
                                        <p className="mt-2 text-lg text-muted-foreground max-w-xs">
                                            Thank you for reaching out.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* ── Form ── */
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form
                                            noValidate
                                            className="flex flex-col gap-5"
                                            aria-label="Contact form"
                                        >
                                            {/* Name */}
                                            <TextInputField
                                                name="name"
                                                label="Your name"
                                                placeholder="e.g. Priya Mehta"
                                                autoComplete="name"
                                                required
                                            />

                                            {/* Email */}
                                            <TextInputField
                                                name="email"
                                                type="email"
                                                label="Email address"
                                                placeholder="you@example.com"
                                                autoComplete="email"
                                                required
                                            />

                                            {/* Phone */}
                                            <PhoneInputField
                                                name="phone"
                                                label="Mobile number"
                                                placeholder="98765 43210"
                                                defaultCountryCode="IN"
                                                required
                                            />

                                            {/* Message / thoughts */}
                                            <MessageTextarea />

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
                                                    Something went wrong — please try again.
                                                </p>
                                            )}

                                            {/* Submit */}
                                            <Button
                                                type="submit"
                                                variant="brand"
                                                size="lg"
                                                disabled={isSubmitting}
                                                className="w-full rounded-xl tracking-wide py-6 mt-1"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span
                                                            className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                                            aria-hidden="true"
                                                        />
                                                        Sending…
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={15} strokeWidth={2.5} />
                                                        Send message
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-center text-sm text-muted-foreground">
                                                Your information is private and never shared.
                                            </p>
                                        </Form>
                                    )}
                                </Formik>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}