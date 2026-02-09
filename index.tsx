
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log('Iniciando Evelyn Cavallari Website...');

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Não foi possível encontrar o elemento #root");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React montado com sucesso.');
  } catch (error) {
    console.error('Erro ao renderizar App:', error);
  }
};

// Garante que o DOM está carregado antes de tentar montar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
