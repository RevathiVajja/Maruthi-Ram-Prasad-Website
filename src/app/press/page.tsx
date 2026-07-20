import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Press & Media | Maruthi Ram Prasad Pelluri",
    description: "Media mentions, press kits, and awards for Maruthi Ram Prasad Pelluri, author of How to Raise a Genius Child.",
    alternates: {
        canonical: "/press",
    },
};

export default function PressPage() {
    return (
        <main className="overflow-x-hidden min-h-screen py-24 px-6 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-8 mt-10" style={{
                backgroundImage: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
            }}>
                Press & Media
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
                Welcome to the official press page for Maruthi Ram Prasad Pelluri. Here you will find recent media mentions, high-resolution author photos, and details about his speaking engagements and awards.
            </p>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Notable Awards & Recognitions</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="glass p-6 rounded-2xl border border-[color-mix(in_oklch,var(--brand-gold)_20%,transparent)]">
                        <h3 className="font-bold text-lg text-foreground mb-2">Indian Achievers' Award</h3>
                        <p className="text-muted-foreground text-sm">2024–25 for Outstanding Professional Achievement.</p>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-[color-mix(in_oklch,var(--brand-gold)_20%,transparent)]">
                        <h3 className="font-bold text-lg text-foreground mb-2">International School Award (ISA)</h3>
                        <p className="text-muted-foreground text-sm">Recognized by the British Council.</p>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-[color-mix(in_oklch,var(--brand-gold)_20%,transparent)]">
                        <h3 className="font-bold text-lg text-foreground mb-2">Top 100 Global Educational Leaders</h3>
                        <p className="text-muted-foreground text-sm">Recognised by MC STEM Eduversity.</p>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-[color-mix(in_oklch,var(--brand-gold)_20%,transparent)]">
                        <h3 className="font-bold text-lg text-foreground mb-2">Lifetime Fellow Member</h3>
                        <p className="text-muted-foreground text-sm">Eudoxia Research University, USA.</p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Media Mentions</h2>
                <div className="glass p-8 rounded-2xl border border-border text-center">
                    <p className="text-muted-foreground">
                        [Placeholder: Add links to articles, podcasts, or YouTube interviews here]
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Media Assets</h2>
                <div className="glass p-8 rounded-2xl border border-border flex flex-col items-start">
                    <p className="text-muted-foreground mb-6">
                        For press inquiries or to request a media kit containing high-resolution headshots and book cover images, please contact us.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200" style={{
                        background: "var(--brand-gold)",
                        color: "#1A0A0C"
                    }}>
                        Contact for Press Inquiries
                    </Link>
                </div>
            </section>
        </main>
    );
}
