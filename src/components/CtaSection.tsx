
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-dark-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar sua <span className="text-gradient">gestão financeira</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de usuários que já estão simplificando suas finanças com o GranaHub.
          </p>
          <Button onClick={scrollToForm} className="bg-mint-500 hover:bg-mint-600 px-8 py-6 text-lg">
            Quero começar agora
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            Vagas limitadas para o acesso beta. Seja um dos primeiros a experimentar!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
