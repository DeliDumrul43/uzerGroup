// src/components/ProjectCard.js

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// (Your image imports are here...)
import proj1 from "../assets/images/projects/p1.jpg";
import proj2 from "../assets/images/projects/p2.jpg";
import proj3 from "../assets/images/projects/p3.jpg";
import proj4 from "../assets/images/projects/p4.jpg";
import proj5 from "../assets/images/projects/p5.jpg";
import proj6 from "../assets/images/projects/p6.jpg";
import proj7 from "../assets/images/projects/p7.jpg";
import proj8 from "../assets/images/projects/p8.jpg";
import proj9 from "../assets/images/projects/p9.jpg";
import proj10 from "../assets/images/projects/p10.jpg";


gsap.registerPlugin(ScrollTrigger);

// (Your projectsData array is here...)
const projectsData = [
  { id: 1, title: "Modern Stand Tasarımı", category: "Kurumsal Stand", image: proj1 },
  { id: 2, title: "Modern Stand Tasarımı", category: "Kurumsal Stand", image: proj2 },
  { id: 3, title: "Minimalist Banyo", category: "Ev Tasarımı", image: proj3 },
  { id: 4, title: "Kurumsal Ofis", category: "Renovasyon", image: proj4 },
  { id: 5, title: "Oturma Odası", category: "Ev Renovasyonu", image: proj5 },
  { id: 6, title: "Modern Stand Tasarımı", category: "Fuar Standları", image: proj7 },
  { id: 7, title: "Kurumsal Ofis", category: "Kurumsal Bina", image: proj6 },
  { id: 8, title: "Modern Stand Tasarımı", category: "Kurumsal Stand", image: proj8 },
  { id: 9, title: "Modern Stand Tasarımı", category: "Kurumsal Stand", image: proj9 },
  { id: 10, title: "Modern Stand Tasarımı", category: "Fuar Standları", image: proj10 },
];


function ProjectCard({ id }) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null); 

  useGSAP(() => {
    
    // Header animation (unchanged)
    gsap.from(".projects-text-reveal", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // --- 1. SMOOTHER CARD ANIMATION ---
    gsap.from(".project-card", {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.8,    // <-- Increased from 0.4 for a smoother feel
      ease: "power3.out",
      stagger: 0.2,     // <-- Increased from 0.1, so cards flow in
      
      immediateRender: false, // <-- This is the important fix

      scrollTrigger: {
        trigger: gridRef.current, 
        start: "top 85%", 
        toggleActions: "play none none none",
      }
    });
    // --- END OF ANIMATION ---

  }, { scope: sectionRef });

  return (
    <section 
      id={id}
      ref={sectionRef}
      className="w-full bg-gray-100 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <p className="projects-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            Projelerimiz
          </p>
          <h2 className="projects-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-4">
            İlham Veren Mekanlar
          </h2>
          <p className="projects-text-reveal font-sans text-base text-gray-700 max-w-2xl mx-auto">
            Tamamladığımız her proje, estetik ve fonksiyonelliği bir araya getirme tutkumuzun bir yansımasıdır. Konuttan ticariye, her alanda bıraktığımız izleri keşfedin.
          </p>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              // The `group` class is what makes the image hover work
              className="project-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <img
                src={project.image}
                alt={project.title}
                // --- 2. ENHANCED HOVER EFFECT FOR IMAGE ---
                className="
                  w-full h-64 object-cover 
                  transition-transform duration-500 ease-in-out 
                  group-hover:scale-110
                " 
              />
              <div className="p-6">
                <p className="font-sans text-sm font-semibold text-brand-gold uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="
                  font-serif text-2xl font-bold text-brand-black mt-2 
                  transition-colors duration-300 
                  group-hover:text-brand-gold
                ">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProjectCard;