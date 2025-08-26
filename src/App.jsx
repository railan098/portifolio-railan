import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Helmet>
        <title>Alves Dev - Soluções em Desenvolvimento Web e Software</title>
        <meta name="description" content="Especialista em Desenvolvimento Web. Criação de sites, landing pages, portfólios, aplicações web e apps. Transformando ideias em realidade digital." />
        <meta name="keywords" content="desenvolvimento web, criação de sites, aplicativos, software, landing page, portfolio, Alves Dev" />
        <meta property="og:title" content="Alves Dev - Soluções em Desenvolvimento Web e Software" />
        <meta property="og:description" content="Especialista em Desenvolvimento Web, transformando ideias em realidade digital." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://alvesprotect.com.br" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;