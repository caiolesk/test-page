
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { WhatsappButton } from './components/WhatsappButton';

/**
 * Main App Component
 * Colors Palette:
 * Primary Background: #F2EBDF
 * Secondary Background: #DECEBB
 * Accent/Details: #D3C5B6
 */
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
