
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToMore = () => {
    const section = document.getElementById('funcionalidades');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-mesh">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12 text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 md:text-5xl mx-auto">
              <span className="bg-gradient-to-r from-[oklch(72.3%_.219_149.579)] to-[oklch(69.6%_.17_162.48)] bg-clip-text text-transparent">Transforme</span> como você organiza sua grana
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Gerencie transações, acompanhe assinaturas e integre serviços de pagamento em um único lugar.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={scrollToMore} 
                className="bg-[oklch(.696_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[oklch(.696_.17_162.48)]/20 px-6 py-6 text-lg"
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(69.6%_.17_162.48)]/20 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
