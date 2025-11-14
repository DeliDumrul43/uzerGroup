import { Link } from "react-scroll"; // Import Link for smooth scrolling

function Footer() {
  // 1. Reusable link styles for the footer
  const linkStyles = "font-sans text-sm text-gray-300 hover:text-brand-gold transition-colors duration-300 cursor-pointer";

  return (
    // 2. Changed background to black
    <footer className="w-full bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* --- LEFT SIDE: Copyright --- */}
        <p className="font-sans text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} UZERSGROUP. Tüm Hakları Saklıdır.
        </p>

        {/* --- 3. RIGHT SIDE: Navigation Links --- */}
        <div className="flex items-center gap-6">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            Hakkımızda
          </Link>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            Hizmetler
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            Projeler
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className={linkStyles}>
            İletişim
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;