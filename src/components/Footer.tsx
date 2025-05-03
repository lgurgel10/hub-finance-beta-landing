import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-700 border-t border-mint-500/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2 text-left">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md md:mx-0">
              Transformando a gestão financeira com uma plataforma completa e intuitiva para pessoas físicas e pequenas empresas.
            </p>
            <Button
              onClick={() => window.open('https://tally.so/r/np56xB', '_blank')}
              className="mt-6 bg-[oklch(.696_.17_162.48)] hover:bg-[oklch(59.6%_.145_163.225)] text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[oklch(.696_.17_162.48)]/20 px-6 py-4 text-base flex items-center"
            >
              Quero começar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#funcionalidades" className="text-gray-400 hover:text-mint-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-mint-400 transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-mint-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-mint-400 transition-colors">Sobre nós</a></li>
              <li><a href="https://tally.so/r/np56xB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mint-500/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500 text-left w-full md:w-auto">
            &copy; {new Date().getFullYear()} GranaHub. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-mint-400">Termos de Serviço</a>
            <a href="#" className="text-sm text-gray-500 hover:text-mint-400">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
