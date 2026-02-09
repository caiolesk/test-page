
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { APP_INFO, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F2EBDF]/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="group flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#D3C5B6] rounded-lg flex items-center justify-center text-white font-serif font-bold">E</div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-slate-800">
            {APP_INFO.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-slate-600 hover:text-[#D3C5B6] transition-colors uppercase tracking-[0.15em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${APP_INFO.whatsapp}?text=${encodeURIComponent(APP_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D3C5B6] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#c4b5a4] transition-all shadow-sm hover:shadow-md"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[60px] bg-[#F2EBDF]/98 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6 pb-20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-serif font-medium text-slate-800 hover:text-[#D3C5B6]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${APP_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D3C5B6] text-white px-10 py-4 rounded-xl text-center font-bold text-lg shadow-lg w-full max-w-xs"
          >
            Agendar Sessão
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
