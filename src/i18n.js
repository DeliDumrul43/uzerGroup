import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      nav: {
        about: "Hakkımızda",
        services: "Hizmetler",
        projects: "Projeler",
        contact: "İletişim"
      },
      hero: {
        title: "UZERSGROUP",
        subtitle: "Mimarlık & Renovasyon",
        button: "Projelerimizi İnceleyin"
      },
      about: {
        whoAreWe: "Biz Kimiz?",
        title: "Vizyonu Gerçeğe Dönüştürmek",
        description: "UZERSGROUP olarak, mimari ve iç mimari alanlarında yenilikçi ve fonksiyonel çözümler sunuyoruz. Konut renovasyonlarından fuar standlarına, kurumsal bina tasarımlarından ticari mekanlara kadar her projeye, estetiği ve kullanıcı deneyimini merkeze alarak yaklaşıyoruz.",
        missionTitle: "Misyonumuz",
        missionDesc: "Müşterilerimizin hayallerini, sürdürülebilir, estetik ve fonksiyonel mekanlara dönüştürmek. Her çizgide kaliteyi ve yeniliği temsil ederek, yaşadığınız ve çalıştığınız alanlara kalıcı değer katmak.",
        valuesTitle: "Değerlerimiz",
        values: {
          innovation: { title: "Yenilik", desc: "Sektördeki en son trendleri takip ederek yaratıcı ve özgün tasarımlar sunarız." },
          precision: { title: "Hassasiyet", desc: "Planlamadan uygulamaya her aşamada detaylara önem verir, kusursuz sonuçlar hedefleriz." },
          quality: { title: "Kalite", desc: "Malzeme seçiminden işçiliğe kadar projenin her elementinde en yüksek standartları gözetiriz." },
          reliability: { title: "Güvenilirlik", desc: "Söz verdiğimiz zamanda ve bütçede, taahhütlerimize bağlı kalarak projeleri teslim ederiz." }
        }
      },
      projects: {
        header: "Projelerimiz",
        title: "İlham Veren Mekanlar",
        description: "Tamamladığımız her proje, estetik ve fonksiyonelliği bir araya getirme tutkumuzun bir yansımasıdır. Konuttan ticariye, her alanda bıraktığımız izleri keşfedin.",
        viewDetails: "İncele",
        close: "Projeyi Kapat",
        categories: {
          corporate: "Kurumsal Stand",
          home: "Ev Tasarımı",
          renovation: "Renovasyon",
          fair: "Fuar Standları",
          building: "Kurumsal Bina"
        },
        items: {
          p1: "Modern Stand Tasarımı",
          p2: "Fütüristik Sergi Alanı",
          p3: "Minimalist Banyo",
          p4: "Kurumsal Ofis",
          p5: "Oturma Odası",
          p6: "Teknoloji Fuarı",
          p7: "Genel Merkez Lobi",
          p8: "Ahşap Detaylı Stand",
          p9: "Lüks Mağaza",
          p10: "Kongre Merkezi"
        },
        popupDesc: "Bu proje için özel olarak tasarlanmış mimari detaylar, kullanılan lüks malzemeler ve fonksiyonel alan çözümleri ile estetik ve konforu bir araya getirdik."
      },
      services: {
        header: "Hizmetlerimiz",
        title: "Uzmanlık Alanlarımız",
        intro1: "Uzer’s Grup %100 Türk sermayeli bir firma olarak 2015 yılında kurulmuştur.",
        intro2: "Gayrimenkul, Mimarlık, Reklam ve Fuar sektörünün lider firması konumundadır.",
        items: {
          s1: { title: "Mimari Proje", desc: "Konut ve ticari binalar için mimari proje ve uygulama." },
          s2: { title: "İç Mekan Düzenlemesi", desc: "Ofis ve konutlar için iç mekan projeleri." },
          s3: { title: "Kurumsal Kimlik", desc: "Firmalar için mekan kimlik tasarımı." },
          s4: { title: "Fuar Stand Tasarımı", desc: "Özel tasarım fuar stantları ve uygulama." },
          s5: { title: "Konsept Proje", desc: "Mimari konsept geliştirme ve koordinasyon." },
          s6: { title: "Restorasyon", desc: "Tarihi bina restorasyonu ve danışmanlık." },
          s7: { title: "Kentsel Tasarım", desc: "Kentsel tasarım ve peyzaj projeleri." },
          s8: { title: "Ürün Tasarımı", desc: "Özel mobilya ve aydınlatma tasarımı." },
          s9: { title: "Tekne & Yat", desc: "Tekne iç mekan tasarımı ve uygulama." },
          s10: { title: "Proje Yönetimi", desc: "Profesyonel proje ve şantiye yönetimi." },
          s11: { title: "Fuar Organizasyon", desc: "Fuar hostesi ve catering hizmetleri." },
          s12: { title: "Danışmanlık & Eğitim", desc: "Mimari danışmanlık ve sektörel eğitimler." }
        }
      },
      contact: {
        header: "Projenizi Konuşalım",
        desc: "Hayalinizdeki mekanı gerçeğe dönüştürmek için buradayız.",
        email: "E-posta",
        phone: "Telefon",
        address: "Adres"
      },
      meta: {
        home: { 
          title: "UZERSGROUP | Mimarlık & Renovasyon", 
          desc: "UZERSGROUP - Modern mimari, ev renovasyonu, fuar stand tasarımları ve kurumsal bina çözümleri." 
        },
        about: { 
          title: "Hakkımızda - UZERSGROUP", 
          desc: "Vizyonu gerçeğe dönüştüren mimari anlayışımız, misyonumuz ve değerlerimiz." 
        },
        projects: { 
          title: "Projelerimiz - UZERSGROUP", 
          desc: "İlham veren ve tamamlanmış projelerimizi keşfedin: Konut, ofis, ve fuar standları." 
        },
        services: { 
          title: "Hizmetlerimiz - UZERSGROUP", 
          desc: "Sunduğumuz hizmetler: Komple ev renovasyonu, fuar stand tasarımı, kurumsal bina dizaynı ve daha fazlası." 
        },
        contact: { 
          title: "İletişim - UZERSGROUP", 
          desc: "Proje fikirleriniz için bizimle iletişime geçin. UZERSGROUP mimarlık ekibi." 
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: "About Us",
        services: "Services",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        title: "UZERSGROUP",
        subtitle: "Architecture & Renovation",
        button: "View Our Work"
      },
      about: {
        whoAreWe: "Who We Are?",
        title: "Turning Vision into Reality",
        description: "As UZERSGROUP, we offer innovative and functional solutions in architecture and interior design. From residential renovations to fair stands, corporate buildings to commercial spaces, we approach every project focusing on aesthetics and user experience.",
        missionTitle: "Our Mission",
        missionDesc: "To transform our clients' dreams into sustainable, aesthetic, and functional spaces. To add lasting value to the spaces you live and work in by representing quality and innovation in every line.",
        valuesTitle: "Our Values",
        values: {
          innovation: { title: "Innovation", desc: "We offer creative and original designs by following the latest trends in the sector." },
          precision: { title: "Precision", desc: "We pay attention to details at every stage from planning to implementation, aiming for perfect results." },
          quality: { title: "Quality", desc: "We observe the highest standards in every element of the project, from material selection to workmanship." },
          reliability: { title: "Reliability", desc: "We deliver projects on time and within budget, adhering to our commitments." }
        }
      },
      projects: {
        header: "Our Projects",
        title: "Inspiring Spaces",
        description: "Every project we complete is a reflection of our passion for combining aesthetics and functionality. Discover the traces we leave in every field, from residential to commercial.",
        viewDetails: "View Details",
        close: "Close Project",
        categories: {
          corporate: "Corporate Stand",
          home: "Home Design",
          renovation: "Renovation",
          fair: "Fair Stands",
          building: "Corporate Building"
        },
        items: {
          p1: "Modern Stand Design",
          p2: "Futuristic Exhibition Area",
          p3: "Minimalist Bathroom",
          p4: "Corporate Office",
          p5: "Living Room",
          p6: "Technology Fair",
          p7: "Headquarters Lobby",
          p8: "Wooden Detail Stand",
          p9: "Luxury Store",
          p10: "Congress Center"
        },
        popupDesc: "We combined aesthetics and comfort with architectural details designed specifically for this project, utilizing luxury materials and functional space solutions."
      },
      services: {
        header: "Our Services",
        title: "Our Expertise",
        intro1: "Uzer’s Group was established in 2015 as a 100% Turkish capital company.",
        intro2: "It is a leading company in Real Estate, Architecture, Advertising, and Fair Organization sectors.",
        items: {
          s1: { title: "Architectural Project", desc: "Design and implementation for residential and commercial buildings." },
          s2: { title: "Interior Design", desc: "Interior projects for offices, stores, and residences." },
          s3: { title: "Corporate Identity", desc: "Space identity design and implementation for companies." },
          s4: { title: "Fair Stand Design", desc: "Architectural design and production for fair stands." },
          s5: { title: "Concept Project", desc: "Architectural concept development and coordination." },
          s6: { title: "Restoration", desc: "Project design and consultancy for historical restoration." },
          s7: { title: "Urban Design", desc: "Urban design, application, and consultancy services." },
          s8: { title: "Product Design", desc: "Custom furniture, lighting, and product design." },
          s9: { title: "Yacht Design", desc: "Boat interior concept design and consultancy." },
          s10: { title: "Project Management", desc: "Professional project management and consultancy." },
          s11: { title: "Fair Organization", desc: "Fair hostess, catering, and organization services." },
          s12: { title: "Consultancy & Training", desc: "Architectural consultancy and training services." }
        }
      },
      contact: {
        header: "Let's Talk",
        desc: "We are here to turn your dream space into reality.",
        email: "Email",
        phone: "Phone",
        address: "Address"
      },
      meta: {
        home: { 
          title: "UZERSGROUP | Architecture & Renovation", 
          desc: "UZERSGROUP - Modern architecture, home renovation, fair stand designs and corporate building solutions." 
        },
        about: { 
          title: "About Us - UZERSGROUP", 
          desc: "Our architectural understanding transforming vision into reality, our mission and values." 
        },
        projects: { 
          title: "Our Projects - UZERSGROUP", 
          desc: "Discover our inspiring and completed projects: Residential, office, and fair stands." 
        },
        services: { 
          title: "Our Services - UZERSGROUP", 
          desc: "Services we offer: Complete home renovation, fair stand design, corporate building design and more." 
        },
        contact: { 
          title: "Contact - UZERSGROUP", 
          desc: "Contact us for your project ideas. UZERSGROUP architecture team." 
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über Uns",
        services: "Dienstleistungen",
        projects: "Projekte",
        contact: "Kontakt"
      },
      hero: {
        title: "UZERSGROUP",
        subtitle: "Architektur & Renovierung",
        button: "Unsere Arbeit Ansehen"
      },
      about: {
        whoAreWe: "Wer Wir Sind?",
        title: "Vision in Realität Verwandeln",
        description: "Als UZERSGROUP bieten wir innovative und funktionale Lösungen in Architektur und Innenarchitektur. Von Wohnungsrenovierungen bis hin zu Messeständen, von Firmengebäuden bis hin zu Geschäftsräumen nähern wir uns jedem Projekt mit Fokus auf Ästhetik und Benutzererfahrung.",
        missionTitle: "Unsere Mission",
        missionDesc: "Die Träume unserer Kunden in nachhaltige, ästhetische und funktionale Räume zu verwandeln. Den Räumen, in denen Sie leben und arbeiten, dauerhaften Wert zu verleihen, indem wir Qualität und Innovation in jeder Linie repräsentieren.",
        valuesTitle: "Unsere Werte",
        values: {
          innovation: { title: "Innovation", desc: "Wir bieten kreative und originelle Designs, indem wir den neuesten Trends in der Branche folgen." },
          precision: { title: "Präzision", desc: "Wir achten in jeder Phase von der Planung bis zur Umsetzung auf Details und streben nach perfekten Ergebnissen." },
          quality: { title: "Qualität", desc: "Wir beachten die höchsten Standards in jedem Element des Projekts, von der Materialauswahl bis zur Verarbeitung." },
          reliability: { title: "Zuverlässigkeit", desc: "Wir liefern Projekte pünktlich und innerhalb des Budgets und halten uns an unsere Verpflichtungen." }
        }
      },
      projects: {
        header: "Unsere Projekte",
        title: "Inspirierende Räume",
        description: "Jedes Projekt, das wir abschließen, spiegelt unsere Leidenschaft wider, Ästhetik und Funktionalität zu verbinden. Entdecken Sie unsere Spuren in jedem Bereich.",
        viewDetails: "Details Ansehen",
        close: "Projekt Schließen",
        categories: {
          corporate: "Firmenstand",
          home: "Wohndesign",
          renovation: "Renovierung",
          fair: "Messestände",
          building: "Firmengebäude"
        },
        items: {
          p1: "Modernes Standdesign",
          p2: "Futuristischer Ausstellungsbereich",
          p3: "Minimalistisches Badezimmer",
          p4: "Firmenbüro",
          p5: "Wohnzimmer",
          p6: "Technologiemesse",
          p7: "Hauptquartier Lobby",
          p8: "Stand mit Holzdetails",
          p9: "Luxusgeschäft",
          p10: "Kongresszentrum"
        },
        popupDesc: "Wir haben Ästhetik und Komfort mit speziell für dieses Projekt entworfenen architektonischen Details, luxuriösen Materialien und funktionalen Raumlösungen kombiniert."
      },
      services: {
        header: "Dienstleistungen",
        title: "Unsere Kompetenz",
        intro1: "Die Uzer's Group wurde 2015 als Unternehmen mit 100% türkischem Kapital gegründet.",
        intro2: "Es ist ein führendes Unternehmen in den Bereichen Immobilien, Architektur, Werbung und Messeorganisation.",
        items: {
          s1: { title: "Architekturprojekt", desc: "Entwurf und Umsetzung für Wohn- und Geschäftshäuser." },
          s2: { title: "Innenarchitektur", desc: "Innenraumprojekte für Büros, Geschäfte und Wohnungen." },
          s3: { title: "Corporate Identity", desc: "Raumidentitätsdesign und Umsetzung für Unternehmen." },
          s4: { title: "Messestand Design", desc: "Architektonischer Entwurf und Produktion für Messestände." },
          s5: { title: "Konzeptprojekt", desc: "Architektonische Konzeptentwicklung und Koordination." },
          s6: { title: "Restaurierung", desc: "Projektierung und Beratung für historische Restaurierung." },
          s7: { title: "Städtebau", desc: "Städtebau, Anwendung und Beratungsdienste." },
          s8: { title: "Produktdesign", desc: "Individuelles Möbel-, Beleuchtungs- und Produktdesign." },
          s9: { title: "Yachtdesign", desc: "Bootsinnenraumkonzept und Beratungsdienste." },
          s10: { title: "Projektmanagement", desc: "Professionelles Projektmanagement und Beratung." },
          s11: { title: "Messeorganisation", desc: "Messehostess, Catering und Organisationsdienste." },
          s12: { title: "Beratung & Schulung", desc: "Architektonische Beratung und Schulungsdienste." }
        }
      },
      contact: {
        header: "Lass uns reden",
        desc: "Wir sind hier, um Ihren Traumraum in die Realität umzusetzen.",
        email: "E-Mail",
        phone: "Telefon",
        address: "Adresse"
      },
      meta: {
        home: { 
          title: "UZERSGROUP | Architektur & Renovierung", 
          desc: "UZERSGROUP - Moderne Architektur, Hausrenovierung, Messestanddesign und Firmengebäudelösungen." 
        },
        about: { 
          title: "Über Uns - UZERSGROUP", 
          desc: "Unser architektonisches Verständnis, das Visionen in die Realität umsetzt, unsere Mission und Werte." 
        },
        projects: { 
          title: "Unsere Projekte - UZERSGROUP", 
          desc: "Entdecken Sie unsere inspirierenden und abgeschlossenen Projekte: Wohn-, Büro- und Messestände." 
        },
        services: { 
          title: "Dienstleistungen - UZERSGROUP", 
          desc: "Unsere Dienstleistungen: Komplette Hausrenovierung, Messestanddesign, Firmengebäudedesign und mehr." 
        },
        contact: { 
          title: "Kontakt - UZERSGROUP", 
          desc: "Kontaktieren Sie uns für Ihre Projektideen. UZERSGROUP Architekturteam." 
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;