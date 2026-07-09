import HeroSection from '@/components/Reviews/HeroSection';
import ReviewGrid from '@/components/Reviews/ReviewGrid';

export const metadata = {
    title: "Reader Reviews | How to Raise a Genius Child",
    description: "Read reviews from parents and teachers about How to Raise a Genius Child by Maruthi Ram Prasad Pelluri.",
};

export default function ReviewsPage() {
    return (
        <main className="overflow-x-hidden font-sans text-foreground">
            <h2 className="sr-only">Reader reviews for How to Raise a Genius Child by Maruthi Ram Prasad Pelluri</h2>
            <HeroSection />
            <ReviewGrid />
        </main>
    );
}
