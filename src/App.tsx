import React, { useState, useEffect } from 'react';
import { Globe, Database, Zap, PhoneCall, RefreshCw, Shield, Menu, X, ChevronRight } from 'lucide-react';

// ... (servicios y otras constantes permanecen igual)

function App() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const userLanguage = navigator.language || (navigator as any).userLanguage;
    setLanguage(userLanguage.startsWith('es') ? 'es' : 'en');
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ... (función t y scrollToSection permanecen igual)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <header className="bg-gray-800 p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">W Support</h1>
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-300">{t('Home')}</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-blue-300">{t('Services')}</button>
            <button onClick={() => scrollToSection('experience')} className="text-white hover:text-blue-300">{t('Experience')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-300">{t('Contact Us')}</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
              <Globe className="mr-2" size={18} />
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button onClick={toggleMenu} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ... (menú móvil permanece igual) */}

      <main className="container mx-auto mt-10 px-4">
        <section id="home" className="text-center mb-16 animate-fade-in">
          <div className="relative bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="WordPress Support" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
              <h2 className="text-6xl font-bold mb-4 text-blue-300">W Support</h2>
              <p className="text-2xl text-gray-300 mb-8">{t('WordPress Support Services')}</p>
              <button onClick={() => scrollToSection('contact')} className="btn text-xl px-8 py-3">
                {t('Get Started')}
              </button>
            </div>
          </div>
        </section>

        {/* ... (el resto de las secciones permanecen igual) */}
      </main>

      <footer className="bg-gray-800 mt-16 py-6 text-center">
        <p>&copy; 2024 W Support. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
      </footer>
    </div>
  );
}

export default App;