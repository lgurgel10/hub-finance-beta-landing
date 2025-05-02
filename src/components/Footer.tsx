
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-700 border-t border-mint-500/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Transformando a gestão financeira com uma plataforma completa e intuitiva para pessoas físicas e pequenas empresas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#funcionalidades" className="text-gray-400 hover:text-mint-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-mint-400 transition-colors">Planos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-mint-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-mint-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-mint-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-mint-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mint-500/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
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
