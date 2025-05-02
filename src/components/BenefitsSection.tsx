
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { PieChart, BarChart, ListCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsSection = () => {
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

  const scrollToPlans = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      title: "Dashboard Completo",
      description: "Visualização gráfica intuitiva de receitas, despesas e fluxo de caixa em tempo real.",
      icon: <PieChart className="h-6 w-6 text-mint-400" />
    },
    {
      title: "Controle de Assinaturas",
      description: "Acompanhe todos os seus serviços recorrentes, com alertas de renovação e análise de gastos.",
      icon: <ListCheck className="h-6 w-6 text-mint-400" />
    },
    {
      title: "Relatórios Detalhados",
      description: "Exporte relatórios customizados por período, categoria ou tags com apenas alguns cliques.",
      icon: <BarChart className="h-6 w-6 text-mint-400" />
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-dark-600 opacity-0 transform translate-y-4 transition-all duration-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simplifique sua <span className="text-gradient">gestão financeira</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Desenvolvido para tornar o controle financeiro acessível e eficiente, seja para uso pessoal ou empresarial.
          </p>
          <Button 
            onClick={scrollToPlans} 
            className="bg-mint-500 hover:bg-mint-600 text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-mint-500/20"
          >
            Ver planos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-dark-500/50 border border-mint-500/10 p-6 hover:border-mint-500/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-12 w-12 rounded-lg bg-dark-400 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
