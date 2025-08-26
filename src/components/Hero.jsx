import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layers, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ed257a6-12fd-44b4-a0f9-369685edcd0f/b44e6a038c8052aa42917a6903280f69.jpg" 
                alt="Alves Dev - Desenvolvimento Web" 
                className="w-32 h-32 rounded-full pulse-glow floating-animation border-4 border-slate-700"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-mono"
          >
            <span className="gradient-text">Alves Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Desenvolvimento de <span className="text-blue-400 font-semibold">Sites</span>, <span className="text-teal-400 font-semibold">Aplicações Web</span> e <span className="text-purple-400 font-semibold">Software</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Transformando suas ideias em realidade digital com código de alta performance e design inovador.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5"/>
              Iniciar Projeto
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('serviços').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Ver Serviços
            </Button>
          </motion.div>
        </motion.div>
      </div>
       <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;