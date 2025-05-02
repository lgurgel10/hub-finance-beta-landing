
import React from 'react';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "O GranaHub revolucionou minha forma de gerenciar finanças. O sistema de assinaturas salvou muito dinheiro!",
      author: "Marcos Silva",
      role: "Empresário",
      company: "Tech Solutions"
    },
    {
      quote: "Finalmente encontrei um sistema que funciona tanto para minhas finanças pessoais quanto para meu negócio.",
      author: "Carolina Mendes",
      role: "Autônoma",
      company: "Designer Freelancer"
    },
    {
      quote: "A facilidade de colaboração com minha equipe financeira mudou completamente nossos processos internos.",
      author: "Rafael Costa",
      role: "CFO",
      company: "Startup Inova"
    }
  ];

  return (
    <div className="py-20 bg-dark-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-gradient">usuários dizem</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Descubra como o GranaHub está transformando a experiência de gestão financeira para pessoas e empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-dark-500/50 border border-mint-500/10 p-6 flex flex-col">
              <div className="flex-grow">
                <div className="mb-4 text-4xl text-mint-500/30">"</div>
                <p className="italic text-gray-300 mb-6">{testimonial.quote}</p>
              </div>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
