
import React, { useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const sectionRef = useRef(null);
  const [isAnnual, setIsAnnual] = useState(false);

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

  const plans = [
    {
      name: "Solo",
      price: 19,
      annualPrice: 15,
      description: "Ideal para profissionais autônomos e uso pessoal",
      features: [
        "1 workspace",
        "Até 2 membros",
        "Entradas e saídas ilimitadas",
        "Assinaturas ilimitadas",
        "Dashboard básico",
        "Suporte por e-mail"
      ],
      highlighted: false,
      ctaText: "Assinar agora"
    },
    {
      name: "Pro",
      price: 80,
      annualPrice: 64,
      description: "Perfeito para pequenas empresas e equipes",
      features: [
        "Tudo do Solo +",
        "Alertas personalizados",
        "Assistente financeiro com IA",
        "Exportação PDF",
        "Integrações automáticas",
        "Membros ilimitados",
        "Metas financeiras",
        "Múltiplas moedas",
        "Suporte prioritário",
        "Workspaces ilimitados"
      ],
      highlighted: true,
      ctaText: "Assinar agora"
    },
    {
      name: "Growth",
      price: 297,
      annualPrice: 237,
      description: "Para empresas em crescimento que precisam de recursos avançados",
      features: [
        "Tudo do Pro +",
        "Gestão de múltiplas moedas",
        "Fluxo de caixa projetado",
        "Relatórios personalizados",
        "Dashboard white-label",
        "Controle avançado de permissões"
      ],
      highlighted: false,
      ctaText: "Assinar agora"
    }
  ];

  return (
    <div ref={sectionRef} className="py-12 bg-dark-700 opacity-0 transform translate-y-4 transition-all duration-700" id="planos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todas as <span className="text-gradient">necessidades</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades financeiras e comece a gerenciar seu dinheiro de forma inteligente.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="font-medium text-white">Mensal</span>
          <button
            className={`relative w-9 h-5 flex items-center rounded-full transition-colors duration-300 focus:outline-none border border-mint-500/40 ${isAnnual ? 'bg-mint-500/30' : 'bg-gray-400/20'}`}
            onClick={() => setIsAnnual((v) => !v)}
            aria-label="Alternar plano mensal/anual"
          >
            <span
              className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 border border-mint-500/30 ${isAnnual ? 'translate-x-4' : ''}`}
            />
          </button>
          <span className="font-medium text-white">Anual</span>
          <span className="text-xs text-mint-500 ml-2">(Economize 20%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-dark-500/70 border ${plan.highlighted ? 'border-[oklch(69.6%_.17_162.48)]' : 'border-[oklch(69.6%_.17_162.48)]/10'} p-6 relative transform transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[oklch(69.6%_.17_162.48)] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
              )}
              <div className={`${plan.highlighted ? 'pt-4' : ''}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold">R${isAnnual ? plan.annualPrice : plan.price}</span>
                  <span className="text-gray-400 ml-1">/mês{isAnnual && <span className="text-xs"> (cobrado anualmente)</span>}</span>
                </div>
                <p className="text-[oklch(69.6%_.17_162.48)] text-sm mb-2 font-semibold">Preço por tempo limitado</p>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[oklch(69.6%_.17_162.48)] mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full group transition-all duration-300 ${plan.highlighted ? 'bg-[oklch(69.6%_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] hover:shadow-lg hover:shadow-[oklch(69.6%_.17_162.48)]/20' : 'bg-dark-400 hover:bg-dark-300'}`}
                  onClick={() => window.open('https://tally.so/r/np56xB', '_blank')}
                >
                  {plan.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
