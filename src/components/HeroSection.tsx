import React from 'react';
import { Button } from '@/components/ui/button';
import SignupForm from './SignupForm';
const HeroSection = () => {
  return <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-mesh">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 md:text-5xl">
              Controle financeiro <span className="text-gradient">Transforme</span> para você e seu negócio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">Gerencie transações, acompanhe assinaturas e integre serviços de pagamento em um único lugar.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#funcionalidades">
                <Button className="bg-dark-300 hover:bg-dark-200 text-white">
                  Saiba mais
                </Button>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-dark-700 bg-dark-300 flex items-center justify-center text-xs font-medium">
                    {i === 4 ? '+' : ''}
                  </div>)}
              </div>
              <p className="text-sm text-gray-400">Mais de <span className="text-mint-400 font-medium">3.000</span> pessoas já estão na lista de espera</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint-500/20 to-transparent"></div>
    </div>;
};
export default HeroSection;