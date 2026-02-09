
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Approach from './components/Approach.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { WhatsappButton } from './components/WhatsappButton.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2EBDF] text-slate-800 selection:bg-[#D3C5B6] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default App;
