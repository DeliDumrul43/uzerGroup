// src/views/Home.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Imports based on your folder structure:
import Navbar from '../components/Navbar';       // From components
import ProjectCard from '../components/ProjectCard'; // From components
import Leading from './Leading';               // From views
import About from './About';                 // From views
import Services from './Services';             // From views (the file we just created)
import Contact from './Contact';               // From views
import Footer from './Footer';                 // From views

// SEO DATA
const pageInfoData = {
  home: {
    title: "UZERSGROUP | Mimarlık & Renovasyon",
    description: "UZERSGROUP - Modern mimari, ev renovasyonu, fuar stand tasarımları ve kurumsal bina çözümleri."
  },
  about: {
    title: "Hakkımızda - UZERSGROUP",
    description: "Vizyonu gerçeğe dönüştüren mimari anlayışımız, misyonumuz ve değerlerimiz."
  },
  projects: { 
    title: "Projelerimiz - UZERSGROUP",
    description: "İlham veren ve tamamlanmış projelerimizi keşfedin: Konut, ofis, ve fuar standları."
  },
  services: { 
    title: "Hizmetlerimiz - UZERSGROUP",
    description: "Sunduğumuz hizmetler: Komple ev renovasyonu, fuar stand tasarımı, kurumsal bina dizaynı ve daha fazlası."
  },
  contact: {
    title: "İletişim - UZERSGROUP",
    description: "Proje fikirleriniz için bizimle iletişime geçin. UZERSGROUP mimarlık ekibi."
  }
};

function Home() {
  const [pageInfo, setPageInfo] = useState(pageInfoData.home);

  const handleSetActive = (sectionName) => {
    if (pageInfoData[sectionName]) {
      setPageInfo(pageInfoData[sectionName]);
    }
  };
  
  return (
    <>
      <Helmet>
          <title>{pageInfo.title}</title>
          <meta name="description" content={pageInfo.description} />
      </Helmet>

      <Navbar onLinkSetActive={handleSetActive} />    
      
      <Leading id="home" />
      <About id="about" />
      <Services id="services" /> 
      <ProjectCard id="projects" /> {/* <-- Note: Using ProjectCard component */}
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default Home;