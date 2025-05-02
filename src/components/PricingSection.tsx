
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Solo",
      price: "R$ 19",
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
      ctaText: "Começar teste grátis"
    },
    {
      name: "Pro",
      price: "R$ 80",
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
      ctaText: "Plano recomendado"
    },
    {
      name: "Growth",
      price: "R$ 297",
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
      ctaText: "Fale com nossa equipe"
    }
  ];

  const scrollToForm = () => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-dark-600" id="planos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todas as <span className="text-gradient">necessidades</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades financeiras e comece a gerenciar seu dinheiro de forma inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-dark-500/70 border ${plan.highlighted ? 'border-mint-500' : 'border-mint-500/10'} p-6 relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mint-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
              )}
              <div className={`${plan.highlighted ? 'pt-4' : ''}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/mês</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-mint-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToForm}
                  className={`w-full ${plan.highlighted ? 'bg-mint-500 hover:bg-mint-600' : 'bg-dark-400 hover:bg-dark-300'}`}
                >
                  {plan.ctaText}
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
