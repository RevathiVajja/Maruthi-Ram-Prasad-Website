import HeroSection from "@/components/AboutBook/HeroSection";
import MarqueeSection from "@/components/AboutBook/MarqueeSection";
import StatsSection from "@/components/AboutBook/StatsSection";
import ForSection from "@/components/AboutBook/ForSection";
import ChaptersSection from "@/components/AboutBook/ChaptersSection";
import KeyIdeasSection from "@/components/AboutBook/KeyIdeasSection";
import CtaSection from "@/components/AboutBook/CtaSection";
import { reviewsData } from "@/constents/reviews";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About the Book | How to Raise a Genius Child",
    description:
        "Discover How to Raise a Genius Child by Maruthi Ram Prasad Pelluri — a research-backed guide for parents and teachers to develop every child's remarkable potential.",
    openGraph: {
        title: "About the Book | How to Raise a Genius Child",
        description:
            "Discover How to Raise a Genius Child by Maruthi Ram Prasad Pelluri — a research-backed guide for parents and teachers to develop every child's remarkable potential.",
        images: [
            {
                url: "https://www.mybookzz.com/images/book-cover.png",
                width: 1200,
                height: 630,
                alt: "How to Raise a Genius Child cover",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About the Book | How to Raise a Genius Child",
        description: "Discover How to Raise a Genius Child by Maruthi Ram Prasad Pelluri — a research-backed guide for parents and teachers to develop every child's remarkable potential.",
        images: ["https://www.mybookzz.com/images/book-cover.png"],
    },
    alternates: {
        canonical: "/how-to-raise-a-genius-child",
    },
};

export default function AboutTheBookPage() {
    const bookSchema = {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "How to Raise a Genius Child",
        author: { "@type": "Person", name: "Maruthi Ram Prasad Pelluri" },
        isbn: "B0H339XT7H",
        publisher: { "@type": "Organization", name: "White Falcon Publishing" },
        inLanguage: "en",
        genre: "Parenting, Education",
        about: "A comprehensive guide for parents and teachers to develop a child's genius potential",
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Amazon" },
            url: "https://www.amazon.com/dp/B0H339XT7H?&tag=mybookstoream-21"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: reviewsData.length.toString()
        }
    };

    return (
        <main className="overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
            />
            <HeroSection />
            <MarqueeSection />
            <StatsSection />
            <ForSection />
            <ChaptersSection />
            <KeyIdeasSection />
            <CtaSection />
        </main>
    );
}
