import React, { useRef, useEffect } from 'react';
import FeatureCard from './features/FeatureCard';
import FeatureSectionHeader from './features/FeatureSectionHeader';
import FeatureCTA from './features/FeatureCTA';

const FeatureShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToPlans = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className="py-12 bg-dark-700 opacity-0 transform translate-y-4 transition-all duration-700" 
      id="funcionalidades"
    >
      <div className="container mx-auto px-4">
        <FeatureSectionHeader 
          title="Funcionalidades poderosas"
          description="Tudo o que você precisa para uma gestão financeira completa em uma plataforma intuitiva e eficiente."
          highlightedWord="poderosas"
        />

        <div className="space-y-16 max-w-5xl mx-auto">
          <FeatureCard 
            title="Dashboard personalizado para suas necessidades"
            points={[
              {
                title: "Visão geral financeira em tempo real",
                description: "Acompanhe entradas, saídas e saldo atual com atualização em tempo real"
              },
              {
                title: "Gráficos personalizáveis",
                description: "Visualize seus dados através de gráficos comparativos por períodos e categorias"
              },
              {
                title: "Metas financeiras",
                description: "Defina objetivos financeiros e acompanhe seu progresso de forma visual"
              }
            ]}
            image={<video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-full w-full object-cover rounded-2xl shadow-lg"
              style={{ pointerEvents: 'none' }}
            >
              <source src="/grafico1.webm" type="video/webm" />
              <source src="/grafico1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>}
          />

          <FeatureCard 
            title="Controle total de assinaturas e serviços recorrentes"
            points={[
              {
                title: "Monitore múltiplas assinaturas",
                description: "Registre valores, periodicidade e plataforma com suporte a múltiplas moedas"
              },
              {
                title: "Alertas de renovação",
                description: "Seja notificado antes de qualquer cobrança para evitar gastos indesejados"
              },
              {
                title: "Relatórios categorizados",
                description: "Analise seus gastos recorrentes por categoria, identificando oportunidades de economia"
              }
            ]}
            image={<video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="h-full w-full object-cover rounded-2xl shadow-lg"
              style={{ pointerEvents: 'none' }}
            >
              <source src="/grafico2.webm" type="video/webm" />
              <source src="/grafico2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>}
            imagePosition="left"
          />

          <FeatureCard 
            title="Colaboração simplificada para equipes e famílias"
            points={[
              {
                title: "Múltiplos workspaces",
                description: "Mantenha finanças pessoais e empresariais separadas com espaços dedicados"
              },
              {
                title: "Convites para membros",
                description: "Adicione membros da família ou equipe com diferentes níveis de acesso"
              },
              {
                title: "Rastreamento de atividades",
                description: "Monitore todas as ações por usuário com histórico completo de alterações"
              }
            ]}
            image={
              <img
                src="/colaboracao.jpg"
                alt="Colaboração"
                className="h-full w-full object-cover rounded-2xl shadow-lg"
              />
            }
          />
        </div>

        <FeatureCTA label="Quero utilizar" onClick={() => window.open('https://tally.so/r/np56xB', '_blank')} />
      </div>
    </div>
  );
};

export default FeatureShowcase;
