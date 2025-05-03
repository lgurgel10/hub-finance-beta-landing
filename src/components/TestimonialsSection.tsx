import React, { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        } else {
          entry.target.classList.remove('animate-fade-in');
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

  const scrollToPlans = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [{
    quote: "O GranaHub revolucionou minha forma de gerenciar finanças. O sistema de assinaturas salvou muito dinheiro!",
    author: "Marcos Silva",
    role: "Empresário",
    company: "Tech Solutions"
  }, {
    quote: "Finalmente encontrei um sistema que funciona tanto para minhas finanças pessoais quanto para meu negócio.",
    author: "Carolina Mendes",
    role: "Autônoma",
    company: "Designer Freelancer"
  }, {
    quote: "A facilidade de colaboração com minha equipe financeira mudou completamente nossos processos internos.",
    author: "Rafael Costa",
    role: "CFO",
    company: "Startup Inova"
  }];

  return (
    <div ref={sectionRef} className="py-20 bg-dark-700 opacity-0 transform translate-y-4 transition-all duration-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Clientes que <span className="text-gradient">mudaram</span> suas vidas ao organizar suas finanças
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Veja como o GranaHub está ajudando pessoas reais a organizar, acompanhar e dominar sua vida financeira com clareza.</p>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="max-w-3xl mx-auto relative px-8">
          <Carousel className="relative">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="px-2">
                  <Card className="bg-dark-500/50 border border-mint-500/10 p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <div className="mb-4 text-4xl text-mint-500/30">"</div>
                      <p className="italic text-gray-300 mb-6">{testimonial.quote}</p>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-dark-700/80 border-mint-500/20 text-mint-500 hover:bg-mint-500/10" />
            <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-dark-700/80 border-mint-500/20 text-mint-500 hover:bg-mint-500/10" />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => {
              const section = document.getElementById('planos');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[oklch(.696_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[oklch(.696_.17_162.48)]/20 px-6 py-6 text-lg"
          >
            Ver planos disponíveis
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
