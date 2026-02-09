
import React from 'react';
import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { APP_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#F2EBDF] scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-[#D3C5B6] p-12 text-white">
              <h2 className="text-3xl font-serif font-bold mb-8">Vamos conversar?</h2>
              <p className="mb-12 text-white/90 leading-relaxed">
                Estou aqui para tirar suas dúvidas sobre o atendimento e agendamento de sessões.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs uppercase tracking-widest text-white/70">E-mail</p>
                    <p className="font-medium truncate">{APP_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">Instagram</p>
                    <a href={APP_INFO.instagram} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                      {APP_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/70">WhatsApp</p>
                    <p className="font-medium">Atendimento Online</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/20">
                <p className="text-sm italic">"A sua jornada para o equilíbrio começa com uma mensagem."</p>
              </div>
            </div>

            <div className="lg:col-span-3 p-12">
              <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-8">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-[#F2EBDF]/50 border border-[#DECEBB] rounded-xl focus:ring-2 focus:ring-[#D3C5B6] outline-none transition-all"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-[#F2EBDF]/50 border border-[#DECEBB] rounded-xl focus:ring-2 focus:ring-[#D3C5B6] outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 bg-[#F2EBDF]/50 border border-[#DECEBB] rounded-xl focus:ring-2 focus:ring-[#D3C5B6] outline-none transition-all"
                    placeholder="Como posso te ajudar?"
                    required
                  ></textarea>
                </div>
                <button className="bg-[#D3C5B6] text-white w-full py-4 rounded-xl font-bold text-lg hover:bg-[#c4b5a4] transition-all flex items-center justify-center space-x-2 shadow-lg">
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitação</span>
                </button>
                <p className="text-center text-xs text-slate-400">
                  Ao enviar, você concorda que seus dados serão usados apenas para retorno de contato profissional.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
