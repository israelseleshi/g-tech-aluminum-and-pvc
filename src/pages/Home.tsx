import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Dawit Tekle",
    role: "Project Manager, Abyssinia Properties",
    content: "G-Tech's aluminum systems redefined our approach to facade engineering. Their precision and technical support are unmatched in Ethiopia.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5
  },
  {
    name: "Helen Gebre",
    role: "Lead Architect, Studio Vision",
    content: "The thermal performance of their PVC profiles allowed us to achieve LEED certification for our latest commercial development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    rating: 5
  },
  {
    name: "Samuel Ayele",
    role: "CEO, Horizon Mixed Use",
    content: "From the initial consultation to the final installation, G-Tech demonstrated a level of professionalism that sets a new industry standard.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    rating: 5
  },
  {
    name: "Amanuel Kebede",
    role: "Technical Director, Ethio-Build",
    content: "Their curtain wall systems are engineered for the specific wind load requirements of the Addis skyline. Truly world-class.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    rating: 5
  },
  {
    name: "Selam Haile",
    role: "Structural Engineer, Urban Dynamics",
    content: "The precision of their custom extrusions made the installation process seamless. G-Tech is our go-to for complex profiles.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    rating: 5
  },
  {
    name: "Yonas Biru",
    role: "Facility Manager, National Bank Expansion",
    content: "Low maintenance and high durability. Their PVC window systems have significantly reduced our building's energy consumption.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    rating: 5
  },
  {
    name: "Makeda Tadesse",
    role: "Interior Designer, Luxury Living ET",
    content: "The aesthetic finish of their aluminum profiles is exceptional. They offer a range of colors that perfectly complement our designs.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    rating: 5
  },
  {
    name: "Elias Zewde",
    role: "Contractor, Global Construction",
    content: "On-time delivery and impeccable service. G-Tech's logistics team ensures our projects stay on schedule.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    rating: 5
  },
  {
    name: "Rahel Negash",
    role: "Sustainability Consultant, Green Addis",
    content: "Their commitment to using energy-efficient materials is leading the way for sustainable construction in Ethiopia.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    rating: 5
  },
  {
    name: "Daniel Moges",
    role: "Architect, Skyline Designs",
    content: "The structural glazing solutions provided by G-Tech allowed us to push the boundaries of modern office design.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
    rating: 5
  },
  {
    name: "Tigist Alemu",
    role: "Real Estate Developer, Premier Homes",
    content: "Client feedback on the window systems has been overwhelmingly positive. Durability meets luxury.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200",
    rating: 5
  },
  {
    name: "Binyam Tesfaye",
    role: "Operations Manager, Industrial Park",
    content: "For large-scale industrial projects, G-Tech's production capacity and quality control are essential for success.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200",
    rating: 5
  },
  {
    name: "Solomon Kassa",
    role: "Technical Lead, Kassa Engineering",
    content: "We've audited their manufacturing facility and the standards they maintain for aluminum extrusion are top-tier.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    rating: 5
  }
];

const STAGGER = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const CARD_VARIANT = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

export function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [heroSlide, setHeroSlide] = useState(0);

  const goPrevHeroSlide = () => {
    setHeroSlide((prev) => (prev - 1 + 3) % 3);
  };

  const goNextHeroSlide = () => {
    setHeroSlide((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const Pagination = () => (
    <div className="flex justify-center items-center gap-6 mt-16">
      <button 
        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
        disabled={currentPage === 0}
        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary hover:text-white transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${currentPage === i ? 'w-8 bg-accent' : 'bg-primary/20'}`}
          />
        ))}
      </div>
      <button 
        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
        disabled={currentPage === totalPages - 1}
        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary disabled:opacity-20 hover:bg-primary hover:text-white transition-all"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  const renderTestimonials = () => {
    return (
      <section className="section-padding bg-white border-t border-border overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-primary uppercase tracking-tighter text-center">Testimonials</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {[...Array(totalPages)].map((_, pageIdx) => (
                <div key={pageIdx} className={`min-w-full grid grid-cols-1 gap-8 px-4 ${itemsPerPage === 1 ? 'grid-cols-1' : itemsPerPage === 2 ? 'grid-cols-2' : 'md:grid-cols-3'}`}>
                  {testimonials.slice(pageIdx * itemsPerPage, (pageIdx + 1) * itemsPerPage).map((t, i) => (
                    <motion.div 
                      key={i}
                      className="p-12 bg-white border border-border hover:shadow-2xl transition-all flex flex-col justify-between h-full group"
                    >
                      <div>
                        <p className="text-xl text-primary font-bold leading-tight mb-12">"{t.content}"</p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-border pt-8">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-xs border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">{t.name[0]}</div>
                        <div>
                          <h4 className="font-black text-primary text-[10px] uppercase tracking-widest">{t.name}</h4>
                          <p className="text-[9px] text-muted font-bold uppercase">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
          
          <Pagination />
        </div>
      </section>
    );
  };

  const renderHero = () => {
    const slides = [
      {
        src: '/pictures-from-lorenzoline/Lorenzo_Products/alumunium-windows-and-doors.png',
        alt: 'Aluminum Systems',
        title: <>Aluminum <br />Systems</>,
        description: 'Precision-engineered aluminum frames and profiles for windows, doors, curtain walls, and custom architectural applications.'
      },
      {
        src: '/pictures-from-kernekasansor/Kernek_Products/elevator-3d-model.png',
        alt: 'Elevator Systems',
        title: <>Elevator <br />Systems</>,
        description: 'Advanced elevator solutions designed for safety, comfort, and efficient vertical transportation in modern buildings.'
      },
      {
        src: '/Yuchai 200kVA Industrial.png',
        alt: 'Power Generator',
        title: <>Power <br />Generation</>,
        description: 'Reliable industrial generator systems delivering dependable power for commercial and mission-critical facilities.'
      }
    ];

    return (
      <motion.section className="relative min-h-[calc(100vh-4rem)] bg-[#f4f5f7] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4f5f7] to-[#eceff3]" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 w-full pt-32 md:pt-44 pb-24 md:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 xl:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              <div className="relative w-full h-[46vh] sm:h-[54vh] lg:h-[70vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slides[heroSlide]?.src}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={slides[heroSlide]?.src}
                    alt={slides[heroSlide]?.alt}
                    className="w-full h-full object-contain drop-shadow-[0_30px_70px_rgba(15,23,42,0.25)]"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroSlide}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary leading-[0.92] tracking-tighter mb-6 uppercase">
                    {slides[heroSlide]?.title}
                  </motion.h1>

                  <motion.p className="text-muted text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                    {slides[heroSlide]?.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-3 mt-10">
                <button
                  type="button"
                  onClick={goPrevHeroSlide}
                  className="w-12 h-12 rounded-none border border-border bg-white/70 hover:bg-white flex items-center justify-center text-primary transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={goNextHeroSlide}
                  className="w-12 h-12 rounded-none border border-border bg-white/70 hover:bg-white flex items-center justify-center text-primary transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="bg-bg min-h-screen relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-surface to-white pointer-events-none -z-10" />
      
      {/* Hero Section */}
      {renderHero()}

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border bg-surface relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: 'Projects Completed', value: '1,500+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Expert Engineers', value: '45' },
              { label: 'Client Satisfaction', value: '99%' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface py-8 sm:py-12 md:py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-primary mb-2 sm:mb-4 tracking-tighter"
                >
                  {stat.value}
                </motion.div>
                <div className="micro-label text-[8px] sm:text-[10px] md:text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* The Core Three */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-padding border-t border-border bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4 sm:mb-6 text-primary uppercase">Our Core Divisions</h2>
              <p className="text-muted text-base sm:text-lg lg:text-xl font-medium leading-tight sm:leading-relaxed">Delivering high-performance materials for the Ethiopian finishing sector with uncompromising quality.</p>
            </div>
            <Link to="/solutions" className="btn-outline shrink-0 w-full sm:w-fit text-center">
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            variants={STAGGER}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          >
            {[
              { title: 'Aluminum Works', image: '/pictures-from-lorenzoline/Lorenzo_Products/alumunium-windows-and-doors.png', desc: 'Precision-engineered frames for windows, doors, and specialized architectural needs.' },
              { title: 'Elevator Systems', image: '/pictures-from-kernekasansor/Kernek_Products/elevator-3d-model.png', desc: 'Advanced elevator systems designed for safe, smooth, and efficient vertical transportation.' },
              { title: 'Power Generator', image: '/Yuchai 200kVA Industrial.png', desc: 'Heavy-duty power solutions featuring Gucbar generator systems.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={CARD_VARIANT}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  className="w-full aspect-[4/3] bg-transparent mb-4 relative overflow-hidden shadow-none border-none"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-primary">{item.title}</h3>
                <p className="text-muted mb-4 font-medium leading-relaxed">{item.desc}</p>
                <div className="flex items-center text-xs uppercase tracking-widest font-bold text-accent group-hover:text-primary transition-colors">
                  Learn More <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Project Spotlight */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="section-padding border-t border-border bg-surface relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="micro-label mb-4 sm:mb-6">Featured Project</div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 text-primary uppercase">Bole Tower Complex</h2>
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-xs sm:text-sm font-medium">
                <div className="flex border-b border-border pb-3 sm:pb-4">
                  <span className="w-24 sm:w-32 text-muted uppercase tracking-widest text-[10px] sm:text-xs font-bold">Location</span>
                  <span className="text-primary font-bold">Bole, Addis Ababa</span>
                </div>
                <div className="flex border-b border-border pb-3 sm:pb-4">
                  <span className="w-24 sm:w-32 text-muted uppercase tracking-widest text-[10px] sm:text-xs font-bold">Scope</span>
                  <span className="text-primary font-bold">Full Curtain Wall & PVC Windows</span>
                </div>
                <div className="flex border-b border-border pb-3 sm:pb-4">
                  <span className="w-24 sm:w-32 text-muted uppercase tracking-widest text-[10px] sm:text-xs font-bold">Scale</span>
                  <span className="text-primary font-bold">12 Stories, 45,000 sq ft</span>
                </div>
              </div>
              <p className="text-muted leading-tight sm:leading-relaxed mb-8 sm:mb-12 font-medium text-base sm:text-lg">
                A landmark project showcasing our end-to-end capabilities. From custom aluminum extrusion to on-site installation, G-Tech delivered a high-performance facade that defines the modern Addis skyline.
              </p>
              <Link to="/projects/1" className="btn-solid group w-full sm:w-fit text-center">
                View Case Study <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full overflow-hidden rounded-3xl shadow-2xl border border-border"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" 
                alt="Featured Project" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      {renderTestimonials()}
    </div>
  );
}
