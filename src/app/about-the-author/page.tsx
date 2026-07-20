import AuthorHeroSection from "@/components/AboutAuthor/AuthorHeroSection";
import AuthorBioSection from "@/components/AboutAuthor/AuthorBioSection";
import PhotoCarousel from "@/components/AboutAuthor/PhotoCarousel";
import CertificatesSection from "@/components/AboutAuthor/CertificatesSection";

export const metadata = {
    title: "About the Author | Maruthi Ram Prasad Pelluri",
    description: "Learn more about Maruthi Ram Prasad Pelluri, an author, educational consultant, and distinguished academician with over 30 years of experience.",
    alternates: {
        canonical: "/about-the-author",
    },
};

export default function AboutAuthor() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maruthi Ram Prasad Pelluri",
        jobTitle: "Author, Educational Consultant, School Director",
        description: "Distinguished academician with over 30 years of experience in teaching, training, and administration.",
        award: ["Indian Achievers Award 2024-25", "International School Award from British Council"],
        hasOccupation: { "@type": "Occupation", name: "Educational Consultant" },
        url: "https://www.mybookzz.com/about-the-author",
        sameAs: [
            "https://www.linkedin.com/in/maruthipelluri",
            "https://www.instagram.com/maruthi_ramprasad_pelluri",
            "https://www.facebook.com/share/1BV91CYb5h"
        ]
    };

    return (
        <main className="overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <AuthorHeroSection />
            <AuthorBioSection />
            <PhotoCarousel />
            <CertificatesSection />
        </main>
    );
}