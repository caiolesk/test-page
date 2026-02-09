
import React from 'react';
import { Heart, Brain, Users, Zap, ShieldCheck, Sun, LucideIcon } from 'lucide-react';

interface Specialty {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const specialties: Specialty[] = [
  {
    Icon: Heart,
    title: 'Ansiedade e Estresse',
    description: 'Aprenda a manejar os sintomas físicos e emocionais da ansiedade, recuperando o controle da sua rotina.'
  },
  {
    Icon: Sun,
    title: 'Depressão',
    description: 'Suporte especializado para atravessar momentos de apatia, tristeza profunda e falta de perspectiva.'
  },
  {
    Icon: ShieldCheck,
    title: 'Autoestima',
    description: 'Trabalho focado no fortalecimento do autocuidado e na reconstrução da imagem pessoal.'
  },
  {
    Icon: Users,
    title: 'Relacionamentos',
    description: 'Aprimore a comunicação interpessoal e compreenda padrões afetivos em seus vínculos.'
  },
  {
    Icon: Brain,
    title: 'Autoconhecimento',
    description: 'Uma imersão profunda para entender suas escolhas, traumas e desejos fundamentais.'
  },
  {
    Icon: Zap,
    title: 'Burnout',
    description: 'Acolhimento para o esgotamento profissional e reequilíbrio entre vida pessoal e trabalho.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 bg-[#F2EBDF] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Especialidades</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Áreas de atuação focadas no seu bem-estar emocional e desenvolvimento pessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-[#F2EBDF] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D3C5B6] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#D3C5B6] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
