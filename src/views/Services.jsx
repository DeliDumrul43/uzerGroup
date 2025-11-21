// src/views/Services.jsx (veya src/components/Services.js)

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next"; // Çeviri hook'u eklendi
import { 
  BiBuildingHouse 
} from "react-icons/bi";
import { 
  FaChair, FaRegBuilding, FaCube, FaLightbulb, FaTools, 
  FaCity, FaShip, FaClipboardList, FaUsers, FaChalkboardTeacher 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Services({ id }) {
  const { t } = useTranslation(); // Hook başlatıldı
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // 1. Verileri bileşen içine taşıdık ki 't' fonksiyonuna erişebilsinler
  // Böylece dil değiştiğinde içerik otomatik güncellenir.
  const servicesData = [
    {
      id: 1,
      icon: <BiBuildingHouse size={32} />,
      title: t('services.items.s1.title'),
      description: t('services.items.s1.desc'),
    },
    {
      id: 2,
      icon: <FaChair size={32} />,
      title: t('services.items.s2.title'),
      description: t('services.items.s2.desc'),
    },
    {
      id: 3,
      icon: <FaRegBuilding size={32} />,
      title: t('services.items.s3.title'),
      description: t('services.items.s3.desc'),
    },
    {
      id: 4,
      icon: <FaCube size={32} />,
      title: t('services.items.s4.title'),
      description: t('services.items.s4.desc'),
    },
    {
      id: 5,
      icon: <FaLightbulb size={32} />,
      title: t('services.items.s5.title'),
      description: t('services.items.s5.desc'),
    },
    {
      id: 6,
      icon: <FaTools size={32} />,
      title: t('services.items.s6.title'),
      description: t('services.items.s6.desc'),
    },
    {
      id: 7,
      icon: <FaCity size={32} />,
      title: t('services.items.s7.title'),
      description: t('services.items.s7.desc'),
    },
    {
      id: 8,
      icon: <FaLightbulb size={32} />,
      title: t('services.items.s8.title'),
      description: t('services.items.s8.desc'),
    },
    {
      id: 9,
      icon: <FaShip size={32} />,
      title: t('services.items.s9.title'),
      description: t('services.items.s9.desc'),
    },
    {
      id: 10,
      icon: <FaClipboardList size={32} />,
      title: t('services.items.s10.title'),
      description: t('services.items.s10.desc'),
    },
    {
      id: 11,
      icon: <FaUsers size={32} />,
      title: t('services.items.s11.title'),
      description: t('services.items.s11.desc'),
    },
    {
      id: 12,
      icon: <FaChalkboardTeacher size={32} />,
      title: t('services.items.s12.title'),
      description: t('services.items.s12.desc'),
    },
  ];

  useGSAP(() => {
    // Başlık animasyonu
    gsap.from(".services-text-reveal", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Kart animasyonu
    gsap.from(".service-card", {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1, 
      immediateRender: false, 
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="w-full bg-white py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- BÖLÜM BAŞLIĞI (Çevirili) --- */}
        <div className="text-center mb-16">
          <p className="services-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            {t('services.header')}
          </p>
          <h2 className="services-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">
            {t('services.title')}
          </h2>
          <p className="services-text-reveal font-sans text-base text-gray-700 max-w-3xl mx-auto mb-4">
            {t('services.intro1')}
          </p>
          <p className="services-text-reveal font-sans text-base text-gray-700 max-w-3xl mx-auto">
            {t('services.intro2')}
          </p>
        </div>

        {/* --- HİZMETLER GRIDI --- */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="service-card bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex justify-center text-brand-gold mb-4">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-black mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-gray-700 text-sm">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;