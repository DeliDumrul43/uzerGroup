// src/views/Home.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'; // Çeviri hook'unu import ettim


// Imports based on your folder structure:
import Navbar from '../components/Navbar';      
import ProjectCard from '../components/ProjectCard';
import Leading from './Leading';          
import About from './About';               
import Services from './Services';             
import Contact from './Contact';               
import Footer from './Footer';                 

function Home() {
  const { t } = useTranslation(); // Hook başlatıldı
  const [activeSection, setActiveSection] = useState('home');

  // Navbar'dan gelen bölüm adına göre state'i güncelliyoruz
  const handleSetActive = (sectionName) => {
    setActiveSection(sectionName);
  };
  
  return (
    <>
      <Helmet>
          {/* Başlık ve Açıklama artık i18n.js dosyasından 'meta' altından geliyor */}
          <title>{t(`meta.${activeSection}.title`)}</title>
          <meta name="description" content={t(`meta.${activeSection}.desc`)} />
      </Helmet>

      <Navbar onLinkSetActive={handleSetActive} />    
      
      <Leading id="home" />
      <About id="about" />
      <Services id="services" /> 
      <ProjectCard id="projects" /> 
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default Home;