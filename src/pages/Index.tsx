import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CarWashSection from "@/components/CarWashSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FAQsSection from "@/components/FAQsSection";
import CommitmentSection from "@/components/CommitmentSection";
import WhatWeOffer from "@/components/WhatWeOffer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhatWeOffer />
        <CarWashSection />
        <CommitmentSection />
        <FAQsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
