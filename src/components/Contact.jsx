import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "✅ Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato! Retornaremos em breve.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

  return (
    <section id="contato" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tem uma ideia ou um projeto? Vamos conversar sobre como podemos transformá-lo em realidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="contact-form space-y-6 flex-grow flex flex-col">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg" placeholder="Nome" />
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg" placeholder="Email" />
                </div>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg" placeholder="Assunto" />
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 rounded-lg resize-none flex-grow" placeholder="Sua mensagem..." />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <div className="flex items-center justify-center"><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Enviando...</div>
                  ) : (
                    <div className="flex items-center justify-center"><Send className="w-5 h-5 mr-2" />Enviar</div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações</h3>
              <div className="space-y-6">
                <a href="mailto:contato@alvesprotect.com.br" className="flex items-center space-x-4 group">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300 group-hover:text-white">contato@alvesprotect.com.br</span>
                </a>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">Rio Verde - GO, Brasil</span>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nossa Localização</h3>
              <div className="overflow-hidden rounded-lg border border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1878.0963731002983!2d-50.92395656694864!3d-17.812027450714076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1753230348054!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;