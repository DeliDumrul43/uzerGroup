import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next"; // Import translation hook

function Footer() {
  const { t } = useTranslation(); // Init hook
  const linkStyles = "font-sans text-sm text-gray-300 hover:text-brand-gold transition-colors duration-300 cursor-pointer";

  return (
    <footer className="w-full bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="font-sans text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} UZERSGROUP. Tüm Hakları Saklıdır.
        </p>

        <div className="flex items-center gap-6">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            {t('nav.about')}
          </Link>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            {t('nav.services')}
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            {t('nav.projects')}
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            {t('nav.contact')}
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;