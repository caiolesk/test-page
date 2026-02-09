
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { APP_INFO } from '../constants';

export const WhatsappButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${APP_INFO.whatsapp}?text=${encodeURIComponent(APP_INFO.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center space-x-2"
      aria-label="Falar no WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-semibold px-0 group-hover:px-2">
        Agendar agora
      </span>
      <MessageCircle size={28} />
    </a>
  );
};
