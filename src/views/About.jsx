import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 1. UPDATED ICONS for architecture/business
import { FaDraftingCompass, FaHardHat, FaLightbulb, FaStar } from "react-icons/fa"; 
import { BiBuildingHouse } from "react-icons/bi"; // A great icon for renovations/buildings

// 2. UPDATED IMAGE: Import a high-quality photo of a project, your office, or your team
import aboutImage from "../assets/images/about_img.jpg"; // <-- IMPORTANT: Update this image path

gsap.registerPlugin(ScrollTrigger);

function About({ id }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Your animation logic is great and has been kept.
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // Triggers animation when 70% from top hits
        toggleActions: "restart pause restart reset",
      },
    });

    tl.from(imageRef.current, {
      opacity: 0,
      x: 100, // Animate from the right
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.from(".about-text-reveal", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, // Reveals text line-by-line
    }, "-=0.8"); // Starts 0.8s before the image animation finishes

  }, { scope: sectionRef });

  return (
    <section 
      id={id} 
      ref={sectionRef}
      // 3. UPDATED STYLING: Clean white background for a professional look
      className="w-full min-h-screen bg-white py-24 px-4 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- LEFT COLUMN: STORY & TEXT --- */}
        <div className="text-left">
          <p className="about-text-reveal font-sans text-lg font-bold text-brand-gold mb-2">
            Biz Kimiz?
          </p>
          <h2 className="about-text-reveal font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Vizyonu Gerçeğe Dönüştürmek
          </h2>

          {/* --- 4. UPDATED TEXT --- */}
          <p className="about-text-reveal font-sans text-base text-gray-700 mb-8 leading-relaxed">
            **UZERSGROUP** olarak, mimari ve iç mimari alanlarında yenilikçi ve fonksiyonel çözümler sunuyoruz. Konut renovasyonlarından fuar standlarına, kurumsal bina tasarımlarından ticari mekanlara kadar her projeye, estetiği ve kullanıcı deneyimini merkeze alarak yaklaşıyoruz.
          </p>

          <div className="about-text-reveal flex items-start gap-4 mb-8">
            <div className="text-brand-gold mt-1"><BiBuildingHouse size={32} /></div>
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-black">Misyonumuz</h3>
              <p className="font-sans text-gray-700">
                Müşterilerimizin hayallerini, sürdürülebilir, estetik ve fonksiyonel mekanlara dönüştürmek. Her çizgide kaliteyi ve yeniliği temsil ederek, yaşadığınız ve çalıştığınız alanlara kalıcı değer katmak.
              </p>
            </div>
          </div>
          
          <h3 className="about-text-reveal font-serif text-2xl font-bold text-brand-black mb-6">Değerlerimiz</h3>
          <div className="space-y-4">
            <div className="about-text-reveal flex items-center gap-3">
              <FaLightbulb className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>Yenilik:</strong> Sektördeki en son trendleri takip ederek yaratıcı ve özgün tasarımlar sunarız.</p>
            </div>
            <div className="about-text-reveal flex items-center gap-3">
              <FaDraftingCompass className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>Hassasiyet:</strong> Planlamadan uygulamaya her aşamada detaylara önem verir, kusursuz sonuçlar hedefleriz.</p>
            </div>
             <div className="about-text-reveal flex items-center gap-3">
              <FaStar className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>Kalite:</strong> Malzeme seçiminden işçiliğe kadar projenin her elementinde en yüksek standartları gözetiriz.</p>
            </div>
            <div className="about-text-reveal flex items-center gap-3">
              <FaHardHat className="text-brand-gold" size={20} />
              <p className="font-sans text-gray-700"><strong>Güvenilirlik:</strong> Söz verdiğimiz zamanda ve bütçede, taahhütlerimize bağlı kalarak projeleri teslim ederiz.</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <div className="flex items-center justify-center">
          <img
            ref={imageRef}
            src={aboutImage} // 5. Using the new image import
            alt={"UZERSGROUP Ofis veya Proje Alanı"} // Updated alt text
            className="rounded-lg w-full max-w-md shadow-2xl object-cover h-[600px]" // Made image taller
          />
        </div>
      </div>
    </section>
  );
}

export default About;