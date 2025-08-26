import React from 'react';
import { motion } from 'framer-motion';
import { Code, MessageSquare, Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageSquare,
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=5566984216228&text&type=phone_number&app_absent=0",
      color: "hover:text-green-400"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/railan098",
      color: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/alves_raylan17/#",
      color: "hover:text-pink-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/railan-alves-da-silva-612384302",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#serviços" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    "Criação de Sites",
    "Landing Pages",
    "Aplicações Web",
    "Desenvolvimento de Apps",
    "Software Sob Medida"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/30 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/0ed257a6-12fd-44b4-a0f9-369685edcd0f/b44e6a038c8052aa42917a6903280f69.jpg" 
                alt="Alves Dev Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold gradient-text">Alves Dev</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvendo soluções digitais inovadoras para impulsionar seu negócio no mundo online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-white mb-6">Navegação</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-white mb-6">Serviços</p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center">
                   <Code className="w-4 h-4 mr-2 text-teal-400" />
                   <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-semibold text-white mb-6">Contato</p>
            <div className="space-y-4">
              <a href="mailto:contato@alvesprotect.com.br" className="flex items-start space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <span>contato@alvesprotect.com.br</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>Rio Verde - GO, Brasil</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} Alves Dev. Criado com React, TailwindCSS e muito café.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;