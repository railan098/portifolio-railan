import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ed257a6-12fd-44b4-a0f9-369685edcd0f/b44e6a038c8052aa42917a6903280f69.jpg" 
              alt="Alves Dev Logo" 
              className="w-10 h-10 rounded-full border-2 border-blue-500/50"
            />
            <span className="text-xl font-bold gradient-text">Alves Protect</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-mono">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: '#00dfd8' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item === 'Início' ? 'hero' : item.toLowerCase())}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {`<${item}>`}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Início' ? 'hero' : item.toLowerCase())}
                className="block w-full text-left py-3 text-white hover:text-blue-400 transition-colors duration-300 font-mono"
              >
                {`<${item}>`}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;