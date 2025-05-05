
import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-dark-700/80">
      <div className="container mx-auto px-[49px] py-[29px]">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center justify-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <a href="#funcionalidades" className="text-gray-300 hover:text-mint-400 transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-gray-300 hover:text-mint-400 transition-colors">
              Planos
            </a>
            <a href="#faq" className="text-gray-300 hover:text-mint-400 transition-colors">
              FAQ
            </a>
            <a href="https://tally.so/r/np56xB" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mint-400 transition-colors">
              Contato
            </a>
          </nav>
          <button className="md:hidden text-gray-300 hover:text-mint-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-mint-500/10">
            <div className="flex flex-col space-y-4">
              <a href="#funcionalidades" className="text-gray-300 hover:text-mint-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Funcionalidades
              </a>
              <a href="#planos" className="text-gray-300 hover:text-mint-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Planos
              </a>
              <a href="#faq" className="text-gray-300 hover:text-mint-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
              <a href="https://tally.so/r/np56xB" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-mint-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
