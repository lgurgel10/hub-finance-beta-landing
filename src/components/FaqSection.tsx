
import React, { useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
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

  const faqs = [
    {
      question: "Posso usar para negócios e finanças pessoais?",
      answer: "Sim, o GranaHub foi projetado para atender tanto necessidades pessoais quanto empresariais. Com nosso sistema de múltiplos workspaces, você pode facilmente separar suas finanças pessoais das empresariais, mantendo tudo organizado em um único lugar."
    },
    {
      question: "É difícil configurar?",
      answer: "Não, o GranaHub foi desenvolvido pensando na facilidade de uso. Oferecemos um processo de onboarding guiado que ajudará você a configurar sua conta em minutos. Além disso, disponibilizamos tutoriais e documentação detalhada para ajudá-lo a aproveitar ao máximo todas as funcionalidades."
    },
    {
      question: "Posso cadastrar gastos antigos?",
      answer: "Sim, o GranaHub permite que você importe dados históricos facilmente. Você pode inserir transações manualmente ou importar através de planilhas. Nos planos Pro e Growth, também oferecemos integração bancária automática para facilitar ainda mais esse processo."
    },
    {
      question: "Como funciona a integração automática?",
      answer: "Nos planos Pro e Growth, oferecemos integrações com os principais bancos e plataformas de pagamento como Stripe e Asaas. Essas integrações permitem sincronização automática de transações, facilitando o acompanhamento de suas finanças sem a necessidade de inserção manual de dados."
    },
    {
      question: "Posso exportar meus dados?",
      answer: "Sim, o GranaHub permite exportar seus dados financeiros em diversos formatos como CSV, Excel e PDF. Isso facilita o compartilhamento de informações com contadores ou para análises em outras ferramentas."
    },
    {
      question: "O GranaHub é seguro?",
      answer: "Absolutamente. A segurança dos seus dados é nossa prioridade. Utilizamos criptografia de ponta a ponta, autenticação em dois fatores e seguimos os mais rigorosos padrões de segurança da indústria para garantir que suas informações financeiras estejam sempre protegidas."
    }
  ];

  return (
    <div ref={sectionRef} className="py-12 bg-dark-700 opacity-0 transform translate-y-4 transition-all duration-700" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o GranaHub e descubra como podemos ajudá-lo a transformar sua gestão financeira.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-mint-500/10">
                <AccordionTrigger className="text-left hover:text-mint-400">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
