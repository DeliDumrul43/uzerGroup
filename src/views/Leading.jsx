import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import uzersLogo from "../assets/images/logo.png"; // Or .jpg

gsap.registerPlugin(ScrollTrigger);

function Leading({ id }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      // 1. Made the default ease "smoother"
      defaults: { ease: "power3.out" },
    });

    // Animate the "blueprint" lines
    tl.from("#line-top", {
        x: "-100%", 
        opacity: 0,
        duration: 1.5,
      }, "<")
      .from("#line-right", {
        y: "-100%",
        opacity: 0,
        duration: 1.5,
      }, "<")
      .from("#line-bottom", {
        x: "100%",
        opacity: 0,
        duration: 1.5,
      }, "<")
      .from("#line-left", {
        y: "100%",
        opacity: 0,
        duration: 1.5,
      }, "<")
      
      // 2. Slightly increased durations for a smoother flow
      .from("#hero-logo", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5, // was 1.2
      }, "-=1")
      .from("#hero-title", {
        opacity: 0,
        y: 40,
        duration: 1.2, // was 1
      }, "-=1.0") // Adjusted overlap
       .from("#hero-subtitle", { 
        opacity: 0,
        y: 40,
        duration: 1.2, // was 1
      }, "-=0.9") // Adjusted overlap
      .from("#hero-button", {
        opacity: 0,
        y: 30,
        duration: 1, // was 0.8
      }, "-=0.8"); // Adjusted overlap
      
     tl.play(); 

    ScrollTrigger.create({
      trigger: "#aboutSection", 
      start: "top bottom",
      onLeaveBack: () => {
        tl.restart();
      }
    });

    // Parallax effect (unchanged, it's great)
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

    return () => {
      window.removeEventListener("mousemove", parallaxHandler);
    };
  }, []); 

  return (
    <>
      <div
        id={id} 
        ref={container}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black p-4 font-serif"
      >

        {/* --- Blueprint lines (unchanged) --- */}
        <div
          id="line-top"
          className="absolute top-10 left-10 w-1/4 h-px bg-gray-700 z-0"
        ></div>
        <div
          id="line-right"
          className="absolute top-10 right-10 w-px h-1/4 bg-gray-700 z-0"
        ></div>
        <div
          id="line-bottom"
          className="absolute bottom-10 right-10 w-1/4 h-px bg-gray-700 z-0"
        ></div>
        <div
          id="line-left"
          className="absolute bottom-10 left-10 w-px h-1/4 bg-gray-700 z-0"
        ></div>

        {/* --- Center Content (Hover effects added) --- */}
        <div className="z-10 flex flex-col items-center text-center">
          <div id="hero-logo" className="mb-6">
            <img
              src={uzersLogo}
              alt="UZERSGROUP Logo"
              className="w-full max-w-sm"
            />
          </div>
          
          <h1
            id="hero-title"
            // 3. ADDED HOVER EFFECT
            className="
              text-6xl md:text-8xl font-bold text-white mb-4
              transition-colors duration-300 hover:text-brand-gold
            "
          >
            UZERSGROUP
          </h1>
          
          <p
            id="hero-subtitle"
            // 4. UPDATED to brand-gold & ADDED HOVER EFFECT
            className="
              text-2xl md:text-3xl text-brand-gold mb-10
              transition-colors duration-300 hover:text-white
            "
          >
            Architecture & Renovation
          </p>

          <button
            id="hero-button"
            // 5. UPDATED to brand-gold
            className="
              px-8 py-3 bg-brand-gold text-black text-lg font-sans font-semibold 
              tracking-wide uppercase transition-transform duration-300 
              hover:bg-white hover:scale-105
            "
          >
            Vıew Our Work
          </button>
        </div>
      </div>
    </>
  );
}

export default Leading;