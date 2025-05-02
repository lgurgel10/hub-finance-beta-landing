
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeatureShowcase from '@/components/FeatureShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  // Função para adicionar efeito de fade-in quando a página carrega
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fade-in');
        } else {
          section.classList.remove('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Triggar uma vez quando a página carrega
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-700 text-white">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeatureShowcase />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        {/* O SignupForm está oculto aqui mas acessível via ID para scrolling */}
        <div className="hidden">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
