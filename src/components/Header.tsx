
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToForm = () => {
    const form = document.getElementById('signup-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-dark-500/80 border-b border-mint-500/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-6">
          <a href="#funcionalidades" className="text-gray-300 hover:text-mint-400 transition-colors">
            Funcionalidades
          </a>
          <a href="#planos" className="text-gray-300 hover:text-mint-400 transition-colors">
            Planos
          </a>
          <a href="#faq" className="text-gray-300 hover:text-mint-400 transition-colors">
            FAQ
          </a>
        </div>
        <Button onClick={scrollToForm} className="bg-mint-500 hover:bg-mint-600 text-white">
          Acesse agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
