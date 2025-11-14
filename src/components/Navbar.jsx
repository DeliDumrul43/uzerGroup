import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

import uzersLogo from "../assets/images/logo.png";

function Navbar({ onLinkSetActive }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation("global");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. UPDATED LINK STYLES
  // Using font-sans (Montserrat), white text, and brand-gold on hover
  const linkStyles = "font-sans text-white hover:text-brand-gold font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer";

  const closeMenuAndScroll = (target) => {
    setIsMobileMenuOpen(false);
    onLinkSetActive(target);
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
      `}
    >
      {/* --- Main Nav Container --- */}
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* 3. LOGO (Updated) */}
        <div className="flex-shrink-0">
          <Link
            to="home" // This should link to the ID of your 'Leading' section
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => onLinkSetActive('home')}
            className="flex items-center cursor-pointer"
          >
            {/* Removed the old beige circle wrapper */}
            <img 
              src={uzersLogo} 
              alt="UZERSGROUP Logo" 
              className="h-10 w-auto" // Adjusted height for a wide logo
            />
          </Link>
        </div>

        {/* 4. DESKTOP LINKS (Updated) */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('about')}>
            {t("Hakkımızda")} {/* About Us */}
          </Link>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('services')}>
            {t("Hizmetler")} {/* Services (NEW) */}
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('projects')}>
            {t("Projeler")} {/* Projects (NEW) */}
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('contact')}>
            {t("İletişim")} {/* Contact */}
          </Link>
        </div>

        {/* 5. HAMBURGER MENU BUTTON (Updated) */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2" // Simplified styling
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* --- 6. MOBILE MENU PANEL (Updated) --- */}
      {isMobileMenuOpen && (
        <div 
          className="
            md:hidden absolute top-full left-0 w-full 
            bg-black/95 backdrop-blur-xl shadow-lg
          "
        >
          <div className="flex flex-col items-center gap-2 p-4">
            <Link onClick={() => closeMenuAndScroll('about')} to="about" spy={true} smooth={true} offset={-70} duration={500} className="w-full text-center py-3 rounded-lg text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-brand-gold hover:text-black">
              {t("Hakkımızda")}
            </Link>
            <Link onClick={() => closeMenuAndScroll('services')} to="services" spy={true} smooth={true} offset={-70} duration={500} className="w-full text-center py-3 rounded-lg text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-brand-gold hover:text-black">
              {t("Hizmetler")}
            </Link>
            <Link onClick={() => closeMenuAndScroll('projects')} to="projects" spy={true} smooth={true} offset={-70} duration={500} className="w-full text-center py-3 rounded-lg text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-brand-gold hover:text-black">
              {t("Projeler")}
            </Link>
            <Link onClick={() => closeMenuAndScroll('contact')} to="contact" spy={true} smooth={true} offset={-70} duration={500} className="w-full text-center py-3 rounded-lg text-white font-medium uppercase tracking-wide transition-all duration-300 hover:bg-brand-gold hover:text-black">
              {t("İletişim")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;