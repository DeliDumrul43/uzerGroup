import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactImage from "../assets/images/logo.png"; // <-- IMPORTANT: Update this image path

gsap.registerPlugin(ScrollTrigger);

function Contact({ id }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "restart pause restart reset",
      },
    });

    // Animate text content
    tl.from(".contact-content-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate image
    tl.from(".contact-image-reveal", {
      opacity: 0,
      x: 50, // Slide in from the right
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8"); // Overlap animations

  }, { scope: sectionRef });

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      // 4. UPDATED STYLING: Changed to bg-black
      className="w-full bg-black min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* --- LEFT COLUMN: TEXT & INFO --- */}
        <div className="contact-content-container text-center md:text-left">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Projenizi Konuşalım
          </h2>
          <p className="font-sans text-lg text-gray-300 mb-10">
            Hayalinizdeki mekanı gerçeğe dönüştürmek için buradayız. Renovasyon, fuar standı veya yeni bir tasarım fikriniz mi var? Bizimle iletişime geçin.
          </p>
          
          {/* 5. UPDATED CONTACT INFO BLOCKS */}
          <div className="space-y-6">
            
            {/* Email */}
            <a
              href="mailto:info@uzersgroup.com" // <-- Update this email
              className="group flex items-center gap-4 transition-all duration-300"
            >
              <div className="text-brand-gold bg-gray-800 p-3 rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-brand-gold transition-colors">Email</h3>
                <p className="font-sans text-gray-400 group-hover:text-white transition-colors">info@uzersgroup.com</p> {/* <-- Update this */}
              </div>
            </a>
            
            {/* Phone */}
            <a
              href="tel:+905551234567" // <-- Update this phone number
              className="group flex items-center gap-4 transition-all duration-300"
            >
              <div className="text-brand-gold bg-gray-800 p-3 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-brand-gold transition-colors">Telefon</h3>
                <p className="font-sans text-gray-400 group-hover:text-white transition-colors">+90 555 123 4567</p> {/* <-- Update this */}
              </div>
            </a>

            {/* Address */}
            <div className="group flex items-center gap-4">
              <div className="text-brand-gold bg-gray-800 p-3 rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-white">Adres</h3>
                <p className="font-sans text-gray-400">İstanbul, Türkiye</p> {/* <-- Update this */}
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <div className="hidden md:block">
          <img 
            src={contactImage} // 6. Using new image
            alt="Modern mimari tasarım" // Updated alt text
            className="contact-image-reveal rounded-lg shadow-2xl object-cover w-full h-[600px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;