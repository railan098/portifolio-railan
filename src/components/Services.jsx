import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layers, Server, ShoppingCart, Briefcase, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Desenvolvemos sites institucionais responsivos, modernos e otimizados para SEO."
    },
    {
      icon: Layers,
      title: "Landing Pages",
      description: "Páginas de aterrissagem de alta conversão para suas campanhas de marketing."
    },
    {
      icon: Briefcase,
      title: "Portfólios Digitais",
      description: "Mostre seu trabalho de forma profissional e impactante com um portfólio online."
    },
    {
      icon: Code,
      title: "Aplicações Web",
      description: "Sistemas web complexos e personalizados para atender às necessidades do seu negócio."
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento de Apps",
      description: "Criação de aplicativos móveis para iOS e Android, com foco em performance e UX."
    },
    {
      icon: Server,
      title: "Desenvolvimento de Software",
      description: "Soluções de software robustas e escaláveis para otimizar seus processos."
    }
  ];

  const handleServiceClick = (serviceName) => {
    toast({
      title: "🚀 Pronto para começar?",
      description: `Vamos conversar sobre seu projeto de ${serviceName}! Entre em contato para mais detalhes.`,
      duration: 4000,
    });
     document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="serviços" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços de desenvolvimento para transformar sua visão em um produto digital de sucesso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card glass-effect rounded-xl p-8 group flex flex-col"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-500/20 group-hover:to-teal-500/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-400 group-hover:text-teal-300 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <Button
                variant="link"
                className="w-full text-blue-400 hover:text-teal-300 mt-auto"
              >
                Saber Mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;