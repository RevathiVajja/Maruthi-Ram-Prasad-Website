import HeroSection from "@/components/Home/Hero";
import EmpowerSection from "@/components/Home/EmpowerSection";
import AboutAuthorSection from "@/components/Home/AboutAuthor";
import FaqsSection from "@/components/Home/Faqs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EmpowerSection />
      <AboutAuthorSection />
      <FaqsSection />
    </main>
  );
}
