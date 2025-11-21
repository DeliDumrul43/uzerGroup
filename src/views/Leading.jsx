import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next"; // Import translation hook

import uzersLogo from "../assets/images/logo.png"; 

gsap.registerPlugin(ScrollTrigger);

function Leading({ id }) {
  const { t } = useTranslation(); // Init hook
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });

    tl.from("#line-top", { x: "-100%", opacity: 0, duration: 1.5 }, "<")
      .from("#line-right", { y: "-100%", opacity: 0, duration: 1.5 }, "<")
      .from("#line-bottom", { x: "100%", opacity: 0, duration: 1.5 }, "<")
      .from("#line-left", { y: "100%", opacity: 0, duration: 1.5 }, "<")
      .from("#hero-logo", { opacity: 0, scale: 0.5, duration: 1.5 }, "-=1")
      .from("#hero-title", { opacity: 0, y: 40, duration: 1.2 }, "-=1.0")
      .from("#hero-subtitle", { opacity: 0, y: 40, duration: 1.2 }, "-=0.9")
      .from("#hero-button", { opacity: 0, y: 30, duration: 1 }, "-=0.8");
      
     tl.play(); 

    ScrollTrigger.create({
      trigger: "#aboutSection", 
      start: "top bottom",
      onLeaveBack: () => tl.restart()
    });

    const parallaxHandler = (e) => {
      const { clientX, clientY } = e;
      if (!container.current) return;
      const { offsetWidth, offsetHeight } = container.current;
      const xPos = (clientX / offsetWidth - 0.5) * 2;
      const yPos = (clientY / offsetHeight - 0.5) * 2;

      gsap.to("#hero-logo", {
        x: xPos * 25,
        y: yPos * 25,
        rotation: xPos * 2,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", parallaxHandler);
    return () => window.removeEventListener("mousemove", parallaxHandler);
  }, []); 

  return (
    <div id={id} ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black p-4 font-serif">
      {/* Blueprint lines */}
      <div id="line-top" className="absolute top-10 left-10 w-1/4 h-px bg-gray-700 z-0"></div>
      <div id="line-right" className="absolute top-10 right-10 w-px h-1/4 bg-gray-700 z-0"></div>
      <div id="line-bottom" className="absolute bottom-10 right-10 w-1/4 h-px bg-gray-700 z-0"></div>
      <div id="line-left" className="absolute bottom-10 left-10 w-px h-1/4 bg-gray-700 z-0"></div>

      <div className="z-10 flex flex-col items-center text-center">
        <div id="hero-logo" className="mb-6">
          <img src={uzersLogo} alt="UZERSGROUP Logo" className="w-full max-w-sm" />
        </div>
        
        <h1 id="hero-title" className="text-6xl md:text-8xl font-bold text-white mb-4 transition-colors duration-300 hover:text-brand-gold">
          {t('hero.title')}
        </h1>
        
        <p id="hero-subtitle" className="text-2xl md:text-3xl text-brand-gold mb-10 transition-colors duration-300 hover:text-white">
          {t('hero.subtitle')}
        </p>

        <button id="hero-button" className="px-8 py-3 bg-brand-gold text-black text-lg font-sans font-semibold tracking-wide uppercase transition-transform duration-300 hover:bg-white hover:scale-105">
          {t('hero.button')}
        </button>
      </div>
    </div>
  );
}

export default Leading;