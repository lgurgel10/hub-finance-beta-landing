
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeatureShowcase = () => {
  const sectionRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = { 
      threshold: 0.1,
      rootMargin: '-50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        } else {
          entry.target.classList.remove('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const elements = [sectionRef.current, feature1Ref.current, feature2Ref.current, feature3Ref.current];
    
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToPlans = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={sectionRef} className="py-24 bg-dark-700 opacity-0 transform translate-y-4 transition-all duration-700" id="funcionalidades">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades <span className="text-gradient">poderosas</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tudo o que você precisa para uma gestão financeira completa em uma plataforma intuitiva e eficiente.
          </p>
        </div>

        <div className="space-y-24">
          {/* Dashboard Feature */}
          <div ref={feature1Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-4 transition-all duration-700">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dashboard personalizado para suas necessidades</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Visão geral financeira em tempo real</p>
                    <p className="text-gray-400 text-sm">Acompanhe entradas, saídas e saldo atual com atualização em tempo real</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Gráficos personalizáveis</p>
                    <p className="text-gray-400 text-sm">Visualize seus dados através de gráficos comparativos por períodos e categorias</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Metas financeiras</p>
                    <p className="text-gray-400 text-sm">Defina objetivos financeiros e acompanhe seu progresso de forma visual</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[oklch(69.6%_.17_162.48)] to-[oklch(72.3%_.219_149.579)] opacity-30 blur-sm"></div>
              <div className="relative bg-dark-600 border border-[oklch(69.6%_.17_162.48)]/30 rounded-xl p-1 overflow-hidden">
                <div className="bg-dark-500 rounded-lg p-4 h-[340px] overflow-hidden">
                  <div className="h-full w-full bg-dark-400 rounded-md flex items-center justify-center">
                    <p className="text-[oklch(69.6%_.17_162.48)]">Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assinaturas Feature */}
          <div ref={feature2Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-4 transition-all duration-700">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[oklch(69.6%_.17_162.48)] to-[oklch(72.3%_.219_149.579)] opacity-30 blur-sm"></div>
              <div className="relative bg-dark-600 border border-[oklch(69.6%_.17_162.48)]/30 rounded-xl p-1 overflow-hidden">
                <div className="bg-dark-500 rounded-lg p-4 h-[340px] overflow-hidden">
                  <div className="h-full w-full bg-dark-400 rounded-md flex items-center justify-center">
                    <p className="text-[oklch(69.6%_.17_162.48)]">Gestão de Assinaturas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Controle total de assinaturas e serviços recorrentes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Monitore múltiplas assinaturas</p>
                    <p className="text-gray-400 text-sm">Registre valores, periodicidade e plataforma com suporte a múltiplas moedas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Alertas de renovação</p>
                    <p className="text-gray-400 text-sm">Seja notificado antes de qualquer cobrança para evitar gastos indesejados</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Relatórios categorizados</p>
                    <p className="text-gray-400 text-sm">Analise seus gastos recorrentes por categoria, identificando oportunidades de economia</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Colaboração Feature */}
          <div ref={feature3Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-4 transition-all duration-700">
            <div>
              <h3 className="text-2xl font-bold mb-4">Colaboração simplificada para equipes e famílias</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Múltiplos workspaces</p>
                    <p className="text-gray-400 text-sm">Mantenha finanças pessoais e empresariais separadas com espaços dedicados</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Convites para membros</p>
                    <p className="text-gray-400 text-sm">Adicione membros da família ou equipe com diferentes níveis de acesso</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[oklch(69.6%_.17_162.48)]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[oklch(69.6%_.17_162.48)]"></div>
                  </div>
                  <div>
                    <p className="font-medium">Rastreamento de atividades</p>
                    <p className="text-gray-400 text-sm">Monitore todas as ações por usuário com histórico completo de alterações</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[oklch(69.6%_.17_162.48)] to-[oklch(72.3%_.219_149.579)] opacity-30 blur-sm"></div>
              <div className="relative bg-dark-600 border border-[oklch(69.6%_.17_162.48)]/30 rounded-xl p-1 overflow-hidden">
                <div className="bg-dark-500 rounded-lg p-4 h-[340px] overflow-hidden">
                  <div className="h-full w-full bg-dark-400 rounded-md flex items-center justify-center">
                    <p className="text-[oklch(69.6%_.17_162.48)]">Colaboração</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            onClick={scrollToPlans}
            className="bg-[oklch(.696_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[oklch(.696_.17_162.48)]/20 px-6 py-6 text-lg"
          >
            Ver planos e preços
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
