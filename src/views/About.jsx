import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next"; // Hook eklendi
import { FaDraftingCompass, FaHardHat, FaLightbulb, FaStar } from "react-icons/fa"; 
import { BiBuildingHouse } from "react-icons/bi";

import aboutImage from "../assets/images/about_img.jpg"; 

gsap.registerPlugin(ScrollTrigger);

function About({ id }) {
  const { t } = useTranslation(); // Hook başlatıldı
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "restart pause restart reset",
      },
    });

    tl.from(imageRef.current, {
      opacity: 0,
      x: 100, 
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.from(".about-text-reveal", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, 
    }, "-=0.8"); 

  }, { scope: sectionRef });

  return (
    <section id={id} ref={sectionRef} className="w-full min-h-screen bg-white py-24 px-4 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- LEFT COLUMN: STORY & TEXT --- */}
        <div className="text-left">
          <p className="about-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            {t('about.whoAreWe')}
          </p>
          <h2 className="about-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">
            {t('about.title')}
          </h2>

          <p className="about-text-reveal font-sans text-base text-gray-700 mb-8 leading-relaxed">
            {t('about.description')}
          </p>

          <div className="about-text-reveal flex items-start gap-4 mb-8">
            <div className="text-brand-gold mt-1"><BiBuildingHouse size={32} /></div>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-black">{t('about.missionTitle')}</h3>
              <p className="font-sans text-gray-700">
                {t('about.missionDesc')}
              </p>
            </div>
          </div>
          
          <h3 className="about-text-reveal font-serif text-2xl font-bold text-brand-black mb-6">{t('about.valuesTitle')}</h3>
          <div className="space-y-4">
            <div className="about-text-reveal flex items-center gap-3">
              <FaLightbulb className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>{t('about.values.innovation.title')}:</strong> {t('about.values.innovation.desc')}</p>
            </div>
            <div className="about-text-reveal flex items-center gap-3">
              <FaDraftingCompass className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>{t('about.values.precision.title')}:</strong> {t('about.values.precision.desc')}</p>
            </div>
             <div className="about-text-reveal flex items-center gap-3">
              <FaStar className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>{t('about.values.quality.title')}:</strong> {t('about.values.quality.desc')}</p>
            </div>
            <div className="about-text-reveal flex items-center gap-3">
              <FaHardHat className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>{t('about.values.reliability.title')}:</strong> {t('about.values.reliability.desc')}</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <div className="flex items-center justify-center">
          <img
            ref={imageRef}
            src={aboutImage}
            alt="UZERSGROUP About"
            className="rounded-lg w-full max-w-md shadow-2xl object-cover h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;