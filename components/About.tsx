
import React from 'react';
import { APP_INFO } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white/40 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-[#D3C5B6] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?auto=format&fit=crop&q=80&w=600" 
                alt="Evelyn Cavallari" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-800">Olá, sou Evelyn Cavallari</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Minha missão como psicóloga é proporcionar um ambiente de escuta ativa e ética, onde você se sinta confortável para ser quem realmente é. Acredito que o processo terapêutico é uma jornada compartilhada de autoconhecimento e transformação.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Com registro no CRP sob o número {APP_INFO.crp}, atuo com foco em proporcionar ferramentas práticas e reflexivas para lidar com as demandas do cotidiano, ansiedade, depressão e conflitos interpessoais.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F2EBDF] p-4 rounded-2xl border border-[#DECEBB]">
                  <span className="block text-xl font-serif font-bold text-[#D3C5B6]">Atendimento</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Online e Presencial</span>
                </div>
                <div className="bg-[#DECEBB] p-4 rounded-2xl border border-[#D3C5B6]">
                  <span className="block text-xl font-serif font-bold text-white">Abordagem</span>
                  <span className="text-xs text-white/80 uppercase tracking-wider">Terapia Cognitiva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
