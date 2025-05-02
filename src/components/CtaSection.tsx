
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="py-20 bg-dark-500 opacity-0 transform translate-y-4 transition-all duration-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-mint-400 font-semibold mb-2 block">Comece Agora</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Uma nova maneira de gerenciar suas <span className="text-gradient">finanças</span> chegou
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            O GranaHub foi criado para quem busca praticidade e controle real do dinheiro.
          </p>
          <Button 
            onClick={scrollToTop} 
            className="bg-mint-500 hover:bg-mint-600 px-8 py-6 text-lg group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-mint-500/20"
          >
            Explorar o GranaHub
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
