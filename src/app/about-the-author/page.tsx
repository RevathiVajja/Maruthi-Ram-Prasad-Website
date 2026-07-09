import AuthorHeroSection from "@/components/AboutAuthor/AuthorHeroSection";
import AuthorBioSection from "@/components/AboutAuthor/AuthorBioSection";
import PhotoCarousel from "@/components/AboutAuthor/PhotoCarousel";
import CertificatesSection from "@/components/AboutAuthor/CertificatesSection";

export default function AboutAuthor() {
    return (
        <main className="overflow-x-hidden">
            <AuthorHeroSection />
            <AuthorBioSection />
            <PhotoCarousel />
            <CertificatesSection />
        </main>
    );
}