
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Acolhimento Inicial e Escuta Ética',
  'Identificação de Padrões de Comportamento',
  'Desenvolvimento de Estratégias de Enfrentamento',
  'Acompanhamento Contínuo e Evolutivo'
];

const Approach: React.FC = () => {
  return (
    <section id="abordagem" className="py-24 bg-[#DECEBB] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-[#D3C5B6] absolute inset-0 -m-4 rounded-[3rem] opacity-20 rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800" 
              alt="Processo Terapêutico" 
              className="relative z-10 rounded-[3rem] shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">Como funciona o processo?</h2>
            <p className="text-slate-700 text-lg mb-8 leading-relaxed">
              A terapia não é apenas sobre falar; é sobre ser ouvido de uma forma que permita a você ouvir a si mesmo. Minha abordagem baseia-se na transparência e no respeito ao seu tempo.
            </p>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-[#F2EBDF]/50 p-4 rounded-2xl">
                  <CheckCircle2 className="text-[#D3C5B6] flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/20">
              <p className="italic text-slate-800">
                "O autoconhecimento é o primeiro passo para a liberdade emocional."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
