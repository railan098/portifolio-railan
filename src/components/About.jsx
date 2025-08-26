import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const About = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { icon: Calendar, number: 2, label: "Anos de Experiência" },
    { icon: Briefcase, number: 10, suffix: "+", label: "Projetos Entregues" },
    { icon: Award, number: 100, suffix: "%", label: "Clientes Satisfeitos" },
    { icon: Target, number: 1000, suffix: "s", label: "de linhas de código" }
  ];

  return (
    <section id="sobre" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            Sobre <span className="gradient-text">Nós</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Construindo o futuro da web com soluções inovadoras e tecnologia de ponta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8">
              <img 
                className="w-full h-80 object-cover rounded-xl mb-6 shadow-2xl" 
                alt="Desenvolvedor web trabalhando em um ambiente tecnológico"
               src="foto.jpg" />
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-white mb-2">Railan Alves</h4>
                <p className="gradient-text font-medium text-lg">Desenvolvedor Web</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Da Ideia ao Código, do Código à Solução.
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Com 2 anos de experiência, a Alves Protect é apaixonada por transformar ideias complexas em soluções digitais elegantes e funcionais. Nosso foco é o desenvolvimento web moderno, utilizando as tecnologias mais atuais do mercado.
              </p>
              <p>
                Nossa missão é criar produtos digitais que não apenas atendam, mas superem as expectativas, focando em performance, usabilidade e design inovador para impulsionar o sucesso do seu negócio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glass-effect rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">
                   {statsInView && <CountUp end={stat.number} duration={3} suffix={stat.suffix || ''} />}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;