import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Star, MapPin, Phone, Clock, Facebook, Instagram, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-bocamar-bg/90 backdrop-blur-md border-b border-bocamar-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <span className="font-cormorant text-3xl font-semibold text-bocamar-gold tracking-widest">BOCAMAR</span>
          <span className="font-cinzel text-[10px] text-bocamar-cream tracking-[0.2em] mt-1">RESTAURANTE MARISQUERÍA</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Inicio', 'Nosotros', 'La Carta', 'Reseñas', 'Visítanos'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-lato text-sm text-bocamar-cream hover:text-bocamar-gold transition-colors uppercase tracking-wider">
              {item}
            </a>
          ))}
          <a href="tel:+34985271611" className="bg-bocamar-gold text-bocamar-bg font-cinzel font-semibold px-6 py-2 rounded hover:bg-bocamar-gold-light hover:scale-105 transition-all shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            RESERVAR MESA
          </a>
        </div>

        <button className="md:hidden text-bocamar-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bocamar-surface border-b border-bocamar-border flex flex-col items-center py-6 space-y-6 shadow-2xl">
          {['Inicio', 'Nosotros', 'La Carta', 'Reseñas', 'Visítanos'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="font-lato text-lg text-bocamar-cream hover:text-bocamar-gold transition-colors uppercase tracking-wider">
              {item}
            </a>
          ))}
          <a href="tel:+34985271611" className="bg-bocamar-gold text-bocamar-bg font-cinzel font-semibold px-8 py-3 rounded hover:bg-bocamar-gold-light transition-all">
            RESERVAR MESA
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773949337/Gemini_Generated_Image_72xaqp72xaqp72xa_iyvoi1.png" alt="Mar Cantábrico" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-bocamar-bg/40 via-bocamar-bg/60 to-bocamar-bg"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center fade-in-up">
        <span className="font-cinzel text-bocamar-gold tracking-[0.3em] text-sm mb-6 block">OVIEDO · ASTURIAS · DESDE 1980</span>
        <h1 className="font-cormorant text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-white mb-8">
          El sabor del<br/>Cantábrico<br/>en tu mesa
        </h1>
        <p className="font-lato text-bocamar-cream text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Pescados y mariscos de lonja. Una experiencia gastronómica única en el corazón de Oviedo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a href="tel:+34985271611" className="bg-bocamar-gold text-bocamar-bg font-cinzel font-semibold px-8 py-4 rounded hover:bg-bocamar-gold-light hover:scale-105 transition-all shadow-[0_0_20px_rgba(201,168,76,0.4)] w-full sm:w-auto">
            RESERVAR MESA
          </a>
          <a href="#la-carta" className="border border-bocamar-cream text-bocamar-cream font-cinzel font-semibold px-8 py-4 rounded hover:bg-bocamar-cream hover:text-bocamar-bg transition-all w-full sm:w-auto">
            VER LA CARTA
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-bocamar-gold">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const Separator = () => (
  <div className="flex items-center justify-center py-16 opacity-50">
    <div className="h-[1px] w-24 bg-bocamar-gold"></div>
    <div className="w-2 h-2 rotate-45 bg-bocamar-gold mx-4"></div>
    <div className="h-[1px] w-24 bg-bocamar-gold"></div>
  </div>
);

const About = () => {
  return (
    <section id="nosotros" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] rounded-t-full overflow-hidden border border-bocamar-border fade-in-up">
          <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773948278/Ya_estamos_de_vuelta_bocamar_oviedorestaurantes_restaurantesoviedo_asturiasrestaurantes_y4ejl3.jpg" alt="Interior del restaurante" className="w-full h-full object-cover object-[50%_80%]" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-bocamar-bg/20"></div>
        </div>
        
        <div className="fade-in-up">
          <span className="font-cinzel text-bocamar-gold tracking-[0.2em] text-sm mb-4 block">NUESTRA HISTORIA</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-8 leading-tight">
            Un clásico de Oviedo<br/>desde hace décadas
          </h2>
          
          <div className="font-lato text-bocamar-cream space-y-6 text-lg font-light leading-relaxed mb-12">
            <p>
              En el corazón de la capital asturiana, en la Calle Marqués de Pidal, el Restaurante Marisquería Bocamar lleva décadas siendo referencia para quienes saben que el mejor marisco del Cantábrico no tiene por qué estar en el puerto.
            </p>
            <p>
              Trabajamos cada día con producto fresco de lonja: gamba roja, bogavante del Cantábrico, percebes, zamburiñas, lubina salvaje... Todo seleccionado con la misma exigencia de siempre. Porque la cocina más honesta es la que deja hablar al producto.
            </p>
            <p>
              Tanto si buscas una ocasión especial como el vermú del domingo, en Bocamar encontrarás el mismo trato de siempre: profesional, cercano y sin pretensiones innecesarias.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: '🐟', title: 'Producto de lonja', desc: 'Fresco cada día del Cantábrico' },
              { icon: '🍷', title: 'Bodega seleccionada', desc: 'Albariños, Ribeiras y grandes reservas' },
              { icon: '⭐', title: 'Referencia en Oviedo', desc: 'Más de 810 valoraciones de clientes' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-cinzel text-bocamar-gold font-semibold">{item.title}</h4>
                  <p className="font-lato text-bocamar-muted text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const menuData = {
  "Entrantes": [
    "Ensalada «Bocamar» / Ensalada E.S.P.", "Bocartes con Jamón", "Vieras Gratinadas", "Jamón de Bellota 100% Pata Negra", "Pastel de Cabracho", "Fritos de Pixín", "Fritos de Merluza", "Calamares Fritos o a la Plancha", "Anchoas del Cantábrico", "Paella de Marisco (mín. 2 raciones)", "Arroz con Almejas (mín. 2 raciones)", "Arroz con Bogavante S/P", "Sopa de Marisco"
  ],
  "Mariscos": [
    "Almejas de Carril S/P", "Almejas Marinera / Plancha / Sartén", "Nécoras", "Bogavante del Cantábrico", "Centollo del Cantábrico", "Percebes S/P", "Zamburiñas", "Langosta", "Navajas", "Gamba Roja", "Langostinos Tigre de Huelva", "Gamba de Huelva", "Quisquilla S/P", "Ostras de Arcade S.K.", "Parrillada de Marisco (mín. 2 raciones)"
  ],
  "Pescados": [
    "Pixín-Rape con refrito de ajo y champiñones", "Rodaballo Salvaje a la Plancha o al Horno", "Brocheta de Pixín con Langostinos y Verduras a la plancha", "Merluza en salsa de Oricios al aroma de Manzana", "Lubina del Cantábrico al Horno o a la Sal (mín. 2 raciones)", "Besugo al Horno (mín. 2 raciones) S/P", "Besugo a la Espalda / Plancha (mín. 2 raciones) S/P", "Virrey (mín. 2 raciones) S/P", "Lubina del Cantábrico", "Lenguado", "Mero", "Merluza Especial «Bocamar»"
  ],
  "Carnes": [
    "Solomillo con Guarnición", "Huevos Especiales", "Callos Caseros"
  ],
  "Postres": [
    "Arroz con Leche", "Compota de Manzana", "Coulant de Chocolate", "Frixuelos Rellenos / Frixuelos", "Sorbetes al Cava", "Helados", "Tartas Variadas S/P", "Fruta del Tiempo"
  ],
  "Vinos": [
    "Blancos: Enate Chardonnay · Guitian Godello · Siete Vidas (D.O. Cangas)",
    "Albariños: Mar de Frades · Fillaboa · Terras Gauda · Do Ferreiro · Paco y Lola",
    "Rueda: José Pariente · Belondrade · Marqués de Riscal Limousin",
    "Ribera: Pago de Carraovejas · Valbuena 5º · Emilio Moro · Pesquera Reserva",
    "Rioja Reserva: Roda I · Gran Reserva 904 · Viña Tondonia · Muga S.E.",
    "Cavas y Champagnes: Veuve Cliquot · Moët Chandon · Gramona Imperial · Raventós"
  ]
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("Mariscos");
  const tabs = [
    { id: "Mariscos", icon: "🦐" },
    { id: "Pescados", icon: "🐟" },
    { id: "Entrantes", icon: "🍽️" },
    { id: "Carnes", icon: "🥩" },
    { id: "Postres", icon: "🍮" },
    { id: "Vinos", icon: "🍷" }
  ];

  return (
    <section id="la-carta" className="py-24 px-6 bg-bocamar-surface relative">
      <div className="max-w-5xl mx-auto fade-in-up">
        <div className="text-center mb-16">
          <span className="font-cinzel text-bocamar-gold tracking-[0.2em] text-sm mb-4 block">NUESTRA PROPUESTA</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white">La Carta</h2>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-cinzel px-6 py-3 rounded border transition-all ${
                activeTab === tab.id 
                  ? 'bg-bocamar-gold text-bocamar-bg border-bocamar-gold' 
                  : 'border-bocamar-border text-bocamar-cream hover:border-bocamar-gold hover:text-bocamar-gold'
              }`}
            >
              <span className="mr-2">{tab.icon}</span> {tab.id}
            </button>
          ))}
        </div>

        {/* Mobile Accordion & Content */}
        <div className="md:hidden flex flex-col gap-4 mb-8">
           {tabs.map(tab => (
            <div key={tab.id} className="border border-bocamar-border rounded overflow-hidden">
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? "" : tab.id)}
                className={`w-full text-left font-cinzel px-6 py-4 flex justify-between items-center ${
                  activeTab === tab.id ? 'bg-bocamar-gold text-bocamar-bg' : 'bg-bocamar-bg text-bocamar-cream'
                }`}
              >
                <span><span className="mr-2">{tab.icon}</span> {tab.id}</span>
                <ChevronDown className={`transition-transform ${activeTab === tab.id ? 'rotate-180' : ''}`} size={20} />
              </button>
              {activeTab === tab.id && (
                <div className="p-6 bg-bocamar-surface">
                  <ul className="space-y-4">
                    {menuData[tab.id as keyof typeof menuData].map((item, idx) => (
                      <li key={idx} className="font-lato text-bocamar-cream font-light border-b border-bocamar-border/50 pb-2 last:border-0">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Content */}
        <div className="hidden md:block bg-bocamar-bg border border-bocamar-border rounded-lg p-12 shadow-2xl">
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            {menuData[activeTab as keyof typeof menuData]?.map((item, idx) => (
              <div key={idx} className="font-lato text-bocamar-cream font-light border-b border-bocamar-border/50 pb-3 text-lg">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="tel:+34985271611" className="inline-block border border-bocamar-gold text-bocamar-gold font-cinzel font-semibold px-8 py-4 rounded hover:bg-bocamar-gold hover:text-bocamar-bg transition-all">
            LLAMA PARA RESERVAR TU MESA → 985 271 611
          </a>
        </div>
      </div>
    </section>
  );
};

const reviews = [
  [
    { name: "Jorge Moreno", text: "Creo que es, con otro más, uno de los mejores restaurantes de Oviedo para comer pescado o marisco. Sin dudarlo, de mis favoritos. Tanto por el trato como por la calidad del producto, siempre es un placer." },
    { name: "Carla Posada Martínez", text: "El mejor sitio de Oviedo para comer pescado y marisco. Calidad garantizada, merece la pena pagarlo. Buena presentación, protocolo y limpieza. El trato que recibimos fue impecable." },
    { name: "Alberto González Rodríguez", text: "¡El mejor pescado y marisco de Oviedo sin duda en el Bocamar! Hemos quedado gratamente sorprendidos. La sopa de marisco está increíble, también la lubina del Cantábrico." }
  ],
  [
    { name: "Maikel Ruipérez Serna", text: "Oviedo no tiene mar. Pero los mejores pescados y mariscos de Asturias los he probado en este restaurante. 100% recomendable. Para la calidad que tiene el producto, el precio está más que bien." },
    { name: "Maria Diz", text: "Un sitio precioso, la atención magnífica y la comida exquisita. Pedimos arroz de bogavante, nécoras, zamburiñas, fritos de pixín, bocartes y de postre milhojas con helado de turrón. Para repetir." },
    { name: "Ander Duque", text: "Una maravilla de lugar. Calidad y servicio de diez. Prefiero pagar un poco más por una velada para recordar. Producto insuperable, ambiente y atención. Ojalá más sitios así." }
  ],
  [
    { name: "Adolfo González Boto", text: "Producto espectacular. Súper amabilidad por parte del personal de sala. Atención exquisita por parte del Señor Fran." },
    { name: "Javier Paricio Alonso", text: "El mejor arroz con almejas que me he comido en la vida. Soy de Zaragoza pero si viviese en Oviedo iría a comer todos los días. Todos los platos de una gran calidad." },
    { name: "Tamara Castrillo", text: "El pescado fresquísimo, bien preparado y el servicio excelente. Da gusto encontrar restaurantes de toda la vida que siguen manteniendo un alto estándar de calidad y servicio." }
  ],
  [
    { name: "Pako Natek", text: "Magnífico. Nos han tratado muy bien y la cena ha sido de muchísima calidad. Lo recomiendo para cualquier ocasión especial." },
    { name: "noelia medio", text: "Pescados y mariscos de primera calidad. Servicio impecable. En el centro de Oviedo. Acogedor y elegante. Lo recomiendo sin dudar." },
    { name: "Alfredo Vallina", text: "Fantástica cena que no dejó indiferente a ninguno de los comensales y servicio extraordinario a cargo de Arturo. No sería justo olvidarse del buen hacer de la cocina. ¡Gracias!" }
  ],
  [
    { name: "C.F.", text: "Cocina excelente. Producto inmejorable. Variedad de pescados frescos del día y de mariscos. Servicio muy profesional, respetuoso y amable, cuidando siempre los detalles. Todo impecable." },
    { name: "Adrián Arévalo Pérez", text: "Marisquería muy buena en Oviedo. Comimos Gamba Roja, Calamar a la plancha y luego Pixín con ajitos y Merluza. ¡Todo buenísimo! Muy recomendada." },
    { name: "Arturo Llaneza", text: "Mejor sitio de Oviedo. Un clásico." }
  ]
];

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) setCurrentPage((prev) => (prev + 1) % reviews.length);
    else if (diff < -50) setCurrentPage((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsPaused(false);
  };

  return (
    <section id="reseñas" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16 fade-in-up">
        <span className="font-cinzel text-bocamar-gold tracking-[0.2em] text-sm mb-4 block">LO QUE DICEN NUESTROS CLIENTES</span>
        <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-4">Más de 810 opiniones. Una sola verdad.</h2>
        <p className="font-lato text-bocamar-cream text-lg">⭐⭐⭐⭐⭐ · 4,2 sobre 5 en Google</p>
      </div>

      <div 
        className="relative fade-in-up"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
          {reviews.map((page, pageIdx) => (
            <div key={pageIdx} className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6 px-2">
              {page.map((review, idx) => (
                <div key={idx} className="bg-bocamar-surface border-l-[3px] border-bocamar-gold p-8 relative shadow-xl">
                  <div className="absolute top-4 right-4 text-bocamar-gold opacity-10 font-cormorant text-8xl leading-none">"</div>
                  <div className="flex text-bocamar-gold mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-lato text-bocamar-cream italic font-light leading-relaxed mb-6 relative z-10">
                    "{review.text}"
                  </p>
                  <p className="font-cinzel text-bocamar-gold text-sm tracking-wider">{review.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-12 gap-4">
          <button onClick={() => setCurrentPage((prev) => (prev - 1 + reviews.length) % reviews.length)} className="text-bocamar-gold hover:text-bocamar-cream transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentPage(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${currentPage === idx ? 'bg-bocamar-gold scale-125' : 'bg-bocamar-border hover:bg-bocamar-gold-light'}`}
              />
            ))}
          </div>
          <button onClick={() => setCurrentPage((prev) => (prev + 1) % reviews.length)} className="text-bocamar-gold hover:text-bocamar-cream transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 fade-in-up">
        <a href="https://www.google.com/maps/place/Restaurante+Marisquer%C3%ADa+Bocamar/@43.3646039,-5.8559943,17z/data=!4m8!3m7!1s0xd368cfce6b9efff:0x83e2c89fd82ced7e!8m2!3d43.3646!4d-5.8534194!9m1!1b1!16s%2Fg%2F1td9g148?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-bocamar-gold text-bocamar-gold font-cinzel font-semibold px-6 py-3 rounded hover:bg-bocamar-gold hover:text-bocamar-bg transition-all">
          <Star size={18} /> Deja tu reseña en Google Maps
        </a>
        <a href="https://www.tripadvisor.es/UserReviewEdit-g187452-d1001941-Bocamar-Oviedo_Asturias.html" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-bocamar-cream text-bocamar-cream font-cinzel font-semibold px-6 py-3 rounded hover:bg-bocamar-cream hover:text-bocamar-bg transition-all">
          <span>🍴</span> Deja tu reseña en TripAdvisor
        </a>
      </div>
    </section>
  );
};

const Visit = () => {
  return (
    <section id="visítanos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="fade-in-up">
          <span className="font-cinzel text-bocamar-gold tracking-[0.2em] text-sm mb-4 block">ENCUÉNTRANOS</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-10 leading-tight">
            En el corazón<br/>de Oviedo
          </h2>
          
          <div className="space-y-8 font-lato text-bocamar-cream text-lg font-light">
            <div className="flex items-start gap-4">
              <MapPin className="text-bocamar-gold shrink-0 mt-1" size={24} />
              <div>
                <p>Calle Marqués de Pidal, 20</p>
                <p>33004 Oviedo, Asturias</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="text-bocamar-gold shrink-0 mt-1" size={24} />
              <div>
                <p><a href="tel:+34985271611" className="hover:text-bocamar-gold transition-colors">985 271 611</a></p>
                <p><a href="tel:+34985237092" className="hover:text-bocamar-gold transition-colors">985 237 092</a></p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-bocamar-gold shrink-0 mt-1" size={24} />
              <p>Lunes a Domingo · 8:00 — 23:00 h</p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-bocamar-border my-10"></div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/restaurantemarisqueriabocamar.oviedo" target="_blank" rel="noopener noreferrer" className="text-bocamar-gold hover:text-bocamar-cream hover:scale-110 transition-all">
              <Facebook size={28} />
            </a>
            <a href="https://instagram.com/bocamar/" target="_blank" rel="noopener noreferrer" className="text-bocamar-gold hover:text-bocamar-cream hover:scale-110 transition-all">
              <Instagram size={28} />
            </a>
          </div>
        </div>

        <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-bocamar-gold/30 shadow-2xl fade-in-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.0!2d-5.853474!3d43.364516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfce6b9efff%3A0x83e2c89fd82ced7e!2sBocamar!5e0!3m2!1ses!2ses!4v1" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" alt="Textura agua" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-bocamar-bg via-bocamar-bg/80 to-bocamar-bg"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto fade-in-up">
        <span className="font-cinzel text-bocamar-gold tracking-[0.2em] text-sm mb-6 block">¿LISTO PARA VIVIR LA EXPERIENCIA?</span>
        <h2 className="font-cormorant text-5xl md:text-7xl text-white mb-8 leading-tight">
          Reserva tu mesa<br/>ahora mismo
        </h2>
        <p className="font-lato text-bocamar-cream text-lg md:text-xl font-light mb-12">
          Llámanos y te aseguramos la mejor mesa.<br/>Para ocasiones especiales, grupos o simplemente porque hoy te lo mereces.
        </p>
        
        <a href="tel:+34985271611" className="inline-flex items-center justify-center gap-3 bg-bocamar-gold text-bocamar-bg font-cinzel font-bold text-xl px-10 py-5 rounded hover:bg-bocamar-gold-light hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.4)] mb-6">
          <Phone size={24} /> LLAMAR: 985 271 611
        </a>
        
        <p className="font-lato text-bocamar-muted text-sm">
          También puedes llamarnos al <a href="tel:+34985237092" className="text-bocamar-cream hover:text-bocamar-gold transition-colors">985 237 092</a>
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bocamar-surface pt-20 pb-10 px-6 border-t border-bocamar-border relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="font-cormorant text-4xl text-bocamar-gold tracking-widest mb-2">BOCAMAR</h2>
          <p className="font-cinzel text-xs text-bocamar-cream tracking-[0.2em]">RESTAURANTE MARISQUERÍA</p>
        </div>
        
        <div className="font-lato text-bocamar-cream font-light text-sm space-y-2 mb-10">
          <p>Calle Marqués de Pidal, 20 · 33004 Oviedo, Asturias</p>
          <p>Tel: <a href="tel:+34985271611" className="hover:text-bocamar-gold transition-colors">985 271 611</a> · <a href="tel:+34985237092" className="hover:text-bocamar-gold transition-colors">985 237 092</a></p>
        </div>
        
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://www.facebook.com/restaurantemarisqueriabocamar.oviedo" target="_blank" rel="noopener noreferrer" className="text-bocamar-gold hover:text-bocamar-cream transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com/bocamar/" target="_blank" rel="noopener noreferrer" className="text-bocamar-gold hover:text-bocamar-cream transition-colors">
            <Instagram size={24} />
          </a>
        </div>
        
        <div className="font-lato text-bocamar-muted text-xs mb-8">
          <a href="#" className="hover:text-bocamar-cream transition-colors">Aviso Legal</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-bocamar-cream transition-colors">Política de Privacidad</a>
        </div>
        
        <div className="h-[1px] w-full max-w-xs mx-auto bg-bocamar-border mb-8"></div>
        
        <p className="font-lato text-bocamar-muted text-xs">
          © 2025 Restaurante Marisquería Bocamar. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  useIntersectionObserver();

  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <MenuSection />
      <Separator />
      <Reviews />
      <Separator />
      <Visit />
      <CTA />
      <Footer />
    </div>
  );
}
