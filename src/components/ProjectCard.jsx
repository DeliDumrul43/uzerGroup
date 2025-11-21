import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import hook

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

function ProjectCard({ id }) {
  const { t } = useTranslation(); // Init hook
  const sectionRef = useRef(null);
  const gridRef = useRef(null); 
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Helper to create data using translations
  const createProjectData = (id, titleKey, categoryKey, img) => ({
    id,
    title: t(`projects.items.${titleKey}`),
    category: t(`projects.categories.${categoryKey}`),
    image: img,
    gallery: [img, img, img],
    description: t('projects.popupDesc'),
    location: "İstanbul, TR",
    year: "2024"
  });

  // Data is now defined INSIDE component so it re-renders on language change
  const projectsData = [
    createProjectData(1, "p1", "corporate", proj1),
    createProjectData(2, "p2", "corporate", proj2),
    createProjectData(3, "p3", "home", proj3),
    createProjectData(4, "p4", "renovation", proj4),
    createProjectData(5, "p5", "home", proj5),
    createProjectData(6, "p6", "fair", proj7),
    createProjectData(7, "p7", "building", proj6),
    createProjectData(8, "p8", "corporate", proj8),
    createProjectData(9, "p9", "corporate", proj9),
    createProjectData(10, "p10", "fair", proj10),
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  useGSAP(() => {
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

    gsap.from(".project-card", {
      opacity: 0,
      y: 30,
      scale: 0.98,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      immediateRender: false, 
      scrollTrigger: {
        trigger: gridRef.current, 
        start: "top 85%", 
        toggleActions: "play none none none",
      }
    });
  }, { scope: sectionRef });
  
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1));
  };

  return (
    <section id={id} ref={sectionRef} className="w-full bg-gray-100 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="projects-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            {t('projects.header')}
          </p>
          <h2 className="projects-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-4">
            {t('projects.title')}
          </h2>
          <p className="projects-text-reveal font-sans text-base text-gray-700 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} onClick={() => openModal(project)} className="project-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group cursor-pointer">
              <div className="overflow-hidden relative"> 
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-sans text-sm font-bold border border-white px-4 py-2 rounded-full">{t('projects.viewDetails')}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-sans text-sm font-semibold text-brand-gold uppercase tracking-wider">{project.category}</p>
                <h3 className="font-serif text-2xl font-bold text-brand-black mt-2 transition-colors duration-300 group-hover:text-brand-gold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm transition-all duration-300" onClick={closeModal}>
          <div className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            
            <div className="w-full md:w-3/5 relative bg-black h-[300px] md:h-auto flex items-center justify-center">
              <img src={selectedProject.gallery[currentSlide]} alt={selectedProject.title} className="w-full h-full object-cover"/>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all"><FaChevronLeft size={20} /></button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all"><FaChevronRight size={20} /></button>
            </div>

            <div className="w-full md:w-2/5 p-8 md:p-10 relative overflow-y-auto">
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-brand-black transition-colors"><FaTimes size={24} /></button>
              <span className="inline-block py-1 px-3 border border-brand-gold text-brand-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4">{selectedProject.category}</span>
              <h2 className="font-serif text-3xl font-bold text-brand-black mb-2">{selectedProject.title}</h2>
              <div className="flex gap-4 text-sm text-gray-500 mb-6 font-sans"><span>📍 {selectedProject.location}</span><span>🗓 {selectedProject.year}</span></div>
              <div className="h-px w-full bg-gray-200 mb-6"></div>
              <p className="font-sans text-gray-600 leading-relaxed mb-8">{selectedProject.description}</p>
              <div className="mt-auto">
                <button onClick={closeModal} className="w-full py-3 bg-brand-black text-white font-sans font-bold uppercase tracking-wide hover:bg-brand-gold transition-colors duration-300">{t('projects.close')}</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectCard;