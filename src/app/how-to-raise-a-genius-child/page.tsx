import HeroSection from "@/components/AboutBook/HeroSection";
import MarqueeSection from "@/components/AboutBook/MarqueeSection";
import StatsSection from "@/components/AboutBook/StatsSection";
import ForSection from "@/components/AboutBook/ForSection";
import ChaptersSection from "@/components/AboutBook/ChaptersSection";
import KeyIdeasSection from "@/components/AboutBook/KeyIdeasSection";
import CtaSection from "@/components/AboutBook/CtaSection";

export const metadata = {
    title: "About the Book | How to Raise a Genius Child",
    description:
        "Discover How to Raise a Genius Child by Maruthi Ram Prasad Pelluri — a research-backed guide for parents and teachers to develop every child's remarkable potential.",
};

export default function AboutTheBookPage() {
    return (
        <main className="overflow-x-hidden">
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
