// src/views/Services.jsx (veya src/components/Services.js)

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  BiBuildingHouse 
} from "react-icons/bi";
import { 
  FaChair, FaRegBuilding, FaCube, FaLightbulb, FaTools, 
  FaCity, FaShip, FaClipboardList, FaUsers, FaChalkboardTeacher 
  // --- HATA DÜZELTİLDİ: FaLamp kaldırıldı, FaLightbulb zaten vardı ---
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// 1. Hizmet verilerinizi bir array'e dönüştürdük
const servicesData = [
  {
    id: 1,
    icon: <BiBuildingHouse size={32} />,
    title: "Mimari Proje",
    description: "Konut ve ticari binalar için mimari proje, üretim ve uygulama kontrollüğü.",
  },
  {
    id: 2,
    icon: <FaChair size={32} />,
    title: "İç Mekan Düzenlemesi",
    description: "Ofis, mağaza ve konutlar için iç mekan projeleri, üretim ve uygulama.",
  },
  {
    id: 3,
    icon: <FaRegBuilding size={32} />,
    title: "Kurumsal Kimlik Tasarımı",
    description: "Kurumsal firmalar için mekan düzenlemesi ile ilgili kimlik tasarımı ve uygulaması.",
  },
  {
    id: 4,
    icon: <FaCube size={32} />,
    title: "Fuar Stand Tasarımı",
    description: "Fuar stantları için mimari proje, üretim ve uygulama kontrollüğü hizmetleri.",
  },
  {
    id: 5,
    icon: <FaLightbulb size={32} />,
    title: "Konsept Proje Hizmetleri",
    description: "Mimari & İç Mimari konsept proje, uygulama, kontrolörlük ve koordinasyon.",
  },
  {
    id: 6,
    icon: <FaTools size={32} />,
    title: "Restorasyon",
    description: "Restorasyon proje, uygulama, danışmanlık, kontrolörlük ve koordinasyon.",
  },
  {
    id: 7,
    icon: <FaCity size={32} />,
    title: "Kentsel Tasarım",
    description: "Kentsel tasarım proje, uygulama, danışmanlık ve koordinasyon hizmetleri.",
  },
  {
    id: 8,
    // --- HATA DÜZELTİLDİ: FaLamp -> FaLightbulb olarak değiştirildi ---
    icon: <FaLightbulb size={32} />,
    title: "Ürün Tasarımı",
    description: "Mobilya, aydınlatma ve özel ürün tasarımı ve uygulama hizmetleri.",
  },
  {
    id: 9,
    icon: <FaShip size={32} />,
    title: "Tekne & Yat Tasarımı",
    description: "Tekne iç mekân konsept proje, uygulama ve danışmanlık hizmetleri.",
  },
  {
    id: 10,
    icon: <FaClipboardList size={32} />,
    title: "Proje Yönetimi",
    description: "Mimari projeler için profesyonel proje yönetimi ve danışmanlık hizmetleri.",
  },
  {
    id: 11,
    icon: <FaUsers size={32} />,
    title: "Fuar Organizasyon",
    description: "Fuar hostesi, catering ve tam kapsamlı organizasyon hizmetleri.",
  },
  {
    id: 12,
    icon: <FaChalkboardTeacher size={32} />,
    title: "Danışmanlık ve Eğitim",
    description: "Mimari & İç Mimari konseptleri üzerine danışmanlık ve eğitim hizmetleri.",
  },
];

function Services({ id }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // 2. Başlık ve metin animasyonu
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

    // 3. Servis kartları için stagger animasyonu
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
      id={id} // ID: "services" olmalı
      ref={sectionRef}
      className="w-full bg-white py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- BÖLÜM BAŞLIĞI --- */}
        <div className="text-center mb-16">
          <p className="services-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            Hizmetlerimiz
          </p>
          <h2 className="services-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Uzmanlık Alanlarımız
          </h2>
          <p className="services-text-reveal font-sans text-base text-gray-700 max-w-3xl mx-auto mb-4">
            Uzer’s Grup %100 Türk sermayeli bir firma olarak 2015 yılında kurulmuştur.
          </p>
          <p className="services-text-reveal font-sans text-base text-gray-700 max-w-3xl mx-auto">
            Gayrimenkul, Mimarlık, Reklam, Fuar Organizasyon, Prodüksiyon, Medya, Danışmanlık ve Digital Signage sektörünün lider firması konumunda, projelerine hızla devam etmektedir.
          </p>
        </div>

        {/* --- 6. HİZMETLER GRIDI --- */}
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