
import React from 'react';
import { APP_INFO } from '../constants.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#DECEBB] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-800">{APP_INFO.name}</h2>
            <p className="text-[#D3C5B6] font-medium tracking-widest uppercase text-sm mt-1">Psicóloga Clínica</p>
            <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest">CRP {APP_INFO.crp}</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-slate-600 text-sm">
              &copy; {currentYear} {APP_INFO.name}. Todos os direitos reservados.
            </p>
            <div className="mt-4 flex space-x-4 text-xs text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-slate-800 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-400 italic">
          <p>Atendimento online autorizado pelo Conselho Federal de Psicologia (CFP).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
