import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import uzersLogo from "../assets/images/logo.png"; 

function Navbar({ onLinkSetActive }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation(); // Use hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyles = "font-sans text-white hover:text-brand-gold font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer";

  const closeMenuAndScroll = (target) => {
    setIsMobileMenuOpen(false);
    onLinkSetActive(target);
  };

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Active language style
  const getLangStyle = (lng) => {
    return i18n.language === lng 
      ? "text-brand-gold font-bold underline" 
      : "text-gray-400 hover:text-white";
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link to="home" spy={true} smooth={true} duration={500} onSetActive={() => onLinkSetActive('home')} className="flex items-center cursor-pointer">
            <img src={uzersLogo} alt="UZERSGROUP Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('about')}>
            {t("nav.about")}
          </Link>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('services')}>
            {t("nav.services")}
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('projects')}>
            {t("nav.projects")}
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles} onSetActive={() => onLinkSetActive('contact')}>
            {t("nav.contact")}
          </Link>

          {/* LANGUAGE SWITCHER */}
          <div className="flex items-center gap-3 ml-4 border-l border-gray-600 pl-4">
            <button onClick={() => changeLanguage('tr')} className={`text-sm transition-colors ${getLangStyle('tr')}`}>TR</button>
            <button onClick={() => changeLanguage('en')} className={`text-sm transition-colors ${getLangStyle('en')}`}>EN</button>
            <button onClick={() => changeLanguage('de')} className={`text-sm transition-colors ${getLangStyle('de')}`}>DE</button>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex-shrink-0">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl shadow-lg">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link onClick={() => closeMenuAndScroll('about')} to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-white font-medium uppercase hover:text-brand-gold">{t("nav.about")}</Link>
            <Link onClick={() => closeMenuAndScroll('services')} to="services" spy={true} smooth={true} offset={-70} duration={500} className="text-white font-medium uppercase hover:text-brand-gold">{t("nav.services")}</Link>
            <Link onClick={() => closeMenuAndScroll('projects')} to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-white font-medium uppercase hover:text-brand-gold">{t("nav.projects")}</Link>
            <Link onClick={() => closeMenuAndScroll('contact')} to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-white font-medium uppercase hover:text-brand-gold">{t("nav.contact")}</Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700 w-full justify-center">
              <button onClick={() => changeLanguage('tr')} className={`text-sm ${getLangStyle('tr')}`}>TR</button>
              <button onClick={() => changeLanguage('en')} className={`text-sm ${getLangStyle('en')}`}>EN</button>
              <button onClick={() => changeLanguage('de')} className={`text-sm ${getLangStyle('de')}`}>DE</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;