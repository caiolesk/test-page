
import React from 'react';
import { APP_INFO } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-0">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#DECEBB]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#D3C5B6]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-[#D3C5B6] font-semibold tracking-[0.2em] uppercase mb-4">Psicóloga Clínica</h2>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-6 leading-tight">
              Cuidando da sua <br />
              <span className="italic text-[#D3C5B6]">saúde mental</span> com acolhimento.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
              Um espaço seguro e profissional para você explorar suas emoções, 
              superar desafios e construir uma vida com mais sentido e equilíbrio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contato" 
                className="bg-[#D3C5B6] text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Começar Terapia
              </a>
              <a 
                href="#sobre" 
                className="border-2 border-[#D3C5B6] text-[#D3C5B6] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#D3C5B6] hover:text-white transition-all duration-300 text-center"
              >
                Conhecer Evelyn
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Psicóloga Evelyn Cavallari"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white text-sm font-medium uppercase tracking-widest text-center">CRP {APP_INFO.crp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
