import HeroSection from "@/components/Home/Hero";
import EmpowerSection from "@/components/Home/EmpowerSection";
import AboutAuthorSection from "@/components/Home/AboutAuthor";
import FaqsSection from "@/components/Home/Faqs";
import { faqs } from "@/constents/faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Mybookzz | How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential.",
  description: "How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential. || Author - Maruthi Ram Prasad Pelluri",
  openGraph: {
    title: "Home | Mybookzz | How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential.",
    description: "How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential. || Author - Maruthi Ram Prasad Pelluri",
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
    title: "Home | Mybookzz | How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential.",
    description: "How to raise a genius child - a research-backed guide for parents and teachers to develop every child's remarkable potential. || Author - Maruthi Ram Prasad Pelluri",
    images: ["https://www.mybookzz.com/images/book-cover.png"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <EmpowerSection />
      <AboutAuthorSection />
      <FaqsSection />
    </main>
  );
}
