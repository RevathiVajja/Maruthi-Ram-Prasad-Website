import HeroSection from '@/components/Reviews/HeroSection';
import ReviewGrid from '@/components/Reviews/ReviewGrid';
import { reviewsData } from '@/constents/reviews';

export const metadata = {
    title: "Reader Reviews | How to Raise a Genius Child",
    description: "Read reviews from parents and teachers about How to Raise a Genius Child by Maruthi Ram Prasad Pelluri.",
    alternates: {
        canonical: "/reviews",
    },
};

export default function ReviewsPage() {
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        about: {
            "@type": "Book",
            name: "How to Raise a Genius Child"
        },
        review: reviewsData.map(review => ({
            "@type": "Review",
            author: { "@type": "Person", name: review.name },
            reviewRating: { "@type": "Rating", ratingValue: review.rating.toString(), bestRating: "5" },
            reviewBody: review.text,
            datePublished: review.date.includes("2026") ? "2026-06" : review.date // Best effort formatting
        }))
    };

    return (
        <main className="overflow-x-hidden font-sans text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <h2 className="sr-only">Reader reviews for How to Raise a Genius Child by Maruthi Ram Prasad Pelluri</h2>
            <HeroSection />
            <ReviewGrid />
        </main>
    );
}
