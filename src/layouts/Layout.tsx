import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, LayoutGrid, Zap, ArrowUpCircle } from 'lucide-react';
import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useDesignStore } from '../store/designStore';

const logoUrl = '/g-tech-logo.png';

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

const NAV_LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/solutions', label: 'Products' },
  { path: '/projects', label: 'Projects' },
];

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { 
    projectVariant, 
    setProjectVariant, 
    projectListingVariant,
    setProjectListingVariant,
    legalVariant, 
    setLegalVariant, 
    footerVariant, 
    setFooterVariant,
    leadershipVariant,
    setLeadershipVariant
  } = useDesignStore();
  
  useDocumentTitle();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMobileMenu = () => {
    return (
      <motion.div
        initial={{ clipPath: "circle(0% at 90% 5%)" }}
        animate={{ clipPath: "circle(150% at 90% 5%)" }}
        exit={{ clipPath: "circle(0% at 90% 5%)" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-accent z-50 flex flex-col items-center justify-center p-12 text-white"
      >
        {/* Top X button removed - using the one in the main nav instead */}
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-7xl font-bold hover:italic transition-all">Home</Link>
          </motion.div>
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link to={link.path} onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-7xl font-bold hover:italic transition-all">{link.label}</Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + NAV_LINKS.length * 0.1 }}
          >
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-7xl font-bold hover:italic transition-all">Contact Us</Link>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderDesktopNav = () => {
    const isHomePage = location.pathname === "/";
    const isProjectDetailPage = location.pathname.startsWith('/projects/');
    const useWhiteText = (isHomePage || isProjectDetailPage) && !scrolled;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);

    const projectHighlights = [
      { id: 1, title: 'Bole Tower Complex', category: 'Commercial', path: '/projects/1' },
      { id: 2, title: 'Kolfe Residential', category: 'Residential', path: '/projects/2' },
      { id: 3, title: 'Addis Tech Hub', category: 'Institutional', path: '/projects/3' }
    ];

    const productTypologies = [
      { 
        id: 'aluminum', 
        label: 'Windows & Doors', 
        description: 'Aluminum Systems',
        path: '/solutions/lorenzoline-70t', 
        subItems: [
          { label: '70T Series', path: '/solutions/lorenzoline-70t' },
          { label: '50F Facades', path: '/solutions/lorenzoline-50f' },
          { label: 'Sliding Systems', path: '/solutions/lorenzoline-sliding' }
        ]
      },
      { 
        id: 'generators', 
        label: 'Power Generation', 
        description: 'Industrial Diesel Solutions',
        path: '/solutions/gucbir-perkins-100', 
        subItems: [
          { label: 'Perkins Series', path: '/solutions/gucbir-perkins-100' },
          { label: 'Portable Units', path: '/solutions/gucbir-portable-gjb7500' },
          { label: 'Cummins Series', path: '/solutions/gucbir-cummins-650' }
        ]
      },
      { 
        id: 'elevators', 
        label: 'Elevator Systems', 
        description: 'Advanced Elevator Systems',
        path: '/solutions/kernek-mrl-luxury', 
        subItems: [
          { label: 'MRL Passenger', path: '/solutions/kernek-mrl-luxury' },
          { label: 'Panoramic Lifts', path: '/solutions/kernek-panoramic' },
          { label: 'Luxury Cabins', path: '/solutions' }
        ]
      },
    ];

    return (
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center flex-shrink gap-4 min-w-0">
          <Link to="/" className="flex items-center gap-4 min-w-0">
            <img src={logoUrl} alt="G-TECH" className="h-16 lg:h-20 w-auto flex-shrink-0" />
            <div className="hidden xl:flex flex-col min-w-0">
              <span className={`text-lg lg:text-xl font-black tracking-tighter truncate ${useWhiteText ? 'text-white' : 'text-primary'}`}>G-TECH ALUMINUM & PVC PRODUCTION PLC</span>
              <span className={`text-[10px] lg:text-[12px] font-bold tracking-tight mt-0 truncate ${useWhiteText ? 'text-white/80' : 'text-accent'}`}>Leading Ethiopian Industry Experience</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
          <Link 
            to="/" 
            className={`nav-link tracking-tighter ${isHomePage ? "text-orange-500 font-bold" : (useWhiteText ? "text-white/90 hover:text-orange-500 font-medium" : "text-primary hover:text-orange-500 font-medium")}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link tracking-tighter ${location.pathname === '/about' ? "text-orange-500 font-bold" : (useWhiteText ? "text-white/90 hover:text-orange-500 font-medium" : "text-primary hover:text-orange-500 font-medium")}`}
          >
            About Us
          </Link>

          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link 
              to="/solutions" 
              className={`nav-link flex items-center gap-1 tracking-tighter ${location.pathname.startsWith('/solutions') ? "text-orange-500 font-bold" : (useWhiteText ? "text-white/90 hover:text-orange-500 font-medium" : "text-primary hover:text-orange-500 font-medium")}`}
              onClick={(e) => {
                if ('ontouchstart' in window) {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Products <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white shadow-2xl border border-border overflow-hidden p-8 z-[110] rounded-none"
                >
                  <div className="grid grid-cols-3 gap-8">
                    {productTypologies.map((type) => (
                      <div key={type.id} className="space-y-6 text-left">
                        <Link 
                          to={type.path} 
                          className="flex flex-col items-start gap-2 group/item"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div>
                            <span className="block text-sm font-black text-primary uppercase tracking-tight font-bold">{type.label}</span>
                            <span className="text-[10px] text-muted font-bold uppercase tracking-tighter">{type.description}</span>
                          </div>
                        </Link>
                        <div className="flex flex-col gap-2">
                          {type.subItems.map(sub => (
                            <Link 
                              key={sub.label} 
                              to={sub.path} 
                              className="text-[11px] font-bold text-muted hover:text-accent transition-colors uppercase tracking-tight"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-tighter">Industrial Grade Solutions</p>
                    <Link 
                      to="/solutions" 
                      className="text-[10px] font-black uppercase tracking-tighter text-accent flex items-center gap-2 hover:gap-3 transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      View Full Catalog <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative group"
            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
          >
            <Link 
              to="/projects" 
              className={`nav-link flex items-center gap-1 tracking-tighter ${location.pathname.startsWith('/projects') ? "text-orange-500 font-bold" : (useWhiteText ? "text-white/90 hover:text-orange-500 font-medium" : "text-primary hover:text-orange-500 font-medium")}`}
              onClick={(e) => {
                if ('ontouchstart' in window) {
                  e.preventDefault();
                  setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
                }
              }}
            >
              Projects <ChevronDown size={14} className={`transition-transform duration-300 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            
            <AnimatePresence>
              {isProjectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white shadow-2xl border border-border overflow-hidden p-6 z-[110] rounded-none"
                >
                  <div className="space-y-6 text-left">
                    <p className="text-[10px] font-black text-muted uppercase tracking-widest border-b border-border pb-3">Project Highlights</p>
                    <div className="flex flex-col gap-4">
                      {projectHighlights.map((project) => (
                        <Link 
                          key={project.id} 
                          to={project.path} 
                          className="group/proj flex flex-col gap-1"
                          onClick={() => setIsProjectsDropdownOpen(false)}
                        >
                          <span className="text-[11px] font-black text-primary uppercase tracking-tight group-hover/proj:text-accent transition-colors">{project.title}</span>
                          <span className="text-[9px] text-muted font-bold uppercase tracking-tighter">{project.category}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-4 mt-2 border-t border-border">
                      <Link 
                        to="/projects" 
                        className="text-[10px] font-black uppercase tracking-tighter text-accent flex items-center gap-2 hover:gap-3 transition-all"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        All Portfolio <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/contact-us" className="btn-solid py-3 px-6 ml-4">Contact Us</Link>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const FooterContent = ({ variant }: { variant: number }) => {
      // Desktop & Tablet View (Base)
      const DesktopFooter = (
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-px bg-transparent overflow-hidden mb-12">
            <div className="p-12 pl-0 bg-transparent space-y-8">
              <div className="flex items-center gap-6">
                <img src={logoUrl} alt="G-TECH" className="h-16 w-auto" />
                <div className="flex flex-col">
                  <p className="text-lg font-black uppercase text-primary leading-tight tracking-tighter">G-TECH ALUMINUM & PVC PRODUCTION PLC</p>
                  <p className="text-sm font-bold tracking-tight text-accent mt-1">Leading Ethiopian Industry Experience</p>
                </div>
              </div>
              <p className="text-base font-bold leading-relaxed tracking-tighter">High-performance Aluminum and PVC systems for modern building envelopes.</p>
            </div>
            <div className="p-12 bg-transparent flex flex-col">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-accent mb-8">Navigation</h4>
              <div className="flex flex-col gap-4 text-base font-bold tracking-tighter">
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                {NAV_LINKS.map(link => <Link key={link.path} to={link.path} className="hover:text-accent transition-colors">{link.label}</Link>)}
                <Link to="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link>
              </div>
            </div>
            <div className="p-12 bg-transparent flex flex-col">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-accent mb-8">Main Office</h4>
              <p className="text-base font-bold leading-relaxed tracking-tighter">Bole Kebele 42/50<br/>Addis Ababa, Ethiopia</p>
            </div>
            <div className="p-12 bg-transparent flex flex-col">
              <h4 className="text-[12px] font-black uppercase tracking-widest text-accent mb-8">Contact</h4>
              <p className="text-base font-bold tracking-tighter leading-relaxed">info@gtech-pvc.com<br/>+251 116 47 94 59</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-[13px] font-black uppercase tracking-widest text-primary border-t border-border pt-12">
            <span className="tracking-tighter text-sm"> © 2026 G-TECH ALUMINUM & PVC PRODUCTION PLC</span>
            <div className="flex items-center gap-3">
              <span className="opacity-100 text-xs">Developed by</span>
              <div className="relative group/nano">
                <a href="https://nanocomputingict.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/nano-computing-ict-solutions-logo.png" alt="Nano Computing" className="h-10 w-auto transition-all cursor-pointer hover:scale-110" />
                </a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-6 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-tighter whitespace-nowrap opacity-0 group-hover/nano:opacity-100 transition-opacity pointer-events-none rounded-none shadow-2xl z-50 text-center">
                  <span className="block mb-1 normal-case tracking-tight">nano computing ICT solutions</span>
                  <span className="block normal-case tracking-tighter">Your Integrated Safety Partner</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary" />
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <Link to="/privacy" className="text-primary hover:text-accent transition-colors text-sm tracking-tighter">Privacy</Link>
              <Link to="/terms" className="text-primary hover:text-accent transition-colors text-sm tracking-tighter">Terms</Link>
            </div>
          </div>
        </div>
      );

      // Mobile Variants
      const MobileFooter = () => {
        switch (variant) {
          case 1: // Minimal Stack
            return (
              <div className="md:hidden space-y-12 px-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <img src={logoUrl} alt="G-TECH" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary tracking-tight">G-TECH ALUMINUM & PVC PRODUCTION PLC</span>
                  <span className="text-[10px] font-bold tracking-tight text-accent mt-0">Leading Ethiopian Industry Experience</span>
                </div>
                  </div>
                  <p className="text-sm font-bold text-muted leading-relaxed">High-performance Aluminum and PVC systems for modern building envelopes.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent">Menu</h4>
                    <div className="flex flex-col gap-3 text-sm font-bold">
                      <Link to="/">Home</Link>
                      {NAV_LINKS.map(link => <Link key={link.path} to={link.path}>{link.label}</Link>)}
                      <Link to="/inquiry">Contact Us</Link>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent">Legal</h4>
                    <div className="flex flex-col gap-3 text-sm font-bold">
                      <Link to="/privacy">Privacy</Link>
                      <Link to="/terms">Terms</Link>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-border flex flex-col items-center gap-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary"> © 2026 G-TECH ALUMINUM & PVC PRODUCTION PLC</p>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                     <span className="opacity-100">Developed by</span>
                     <a href="https://nanocomputingict.com/" target="_blank" rel="noopener noreferrer">
                       <img src="/nano-computing-ict-solutions-logo.png" alt="Nano Computing" className="h-5 w-auto" />
                     </a>
                   </div>
                </div>
              </div>
            );
          default:
            return (
              <div className="md:hidden space-y-12 px-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <img src={logoUrl} alt="G-TECH" className="h-10 w-auto" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary tracking-tight">G-TECH ALUMINUM & PVC PRODUCTION PLC</span>
                  <span className="text-[10px] font-bold tracking-tight text-accent mt-0">Leading Ethiopian Industry Experience</span>
                </div>
                  </div>
                  <p className="text-sm font-bold text-muted leading-relaxed">High-performance Aluminum and PVC systems for modern building envelopes.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent">Menu</h4>
                    <div className="flex flex-col gap-3 text-sm font-bold">
                      <Link to="/">Home</Link>
                      {NAV_LINKS.map(link => <Link key={link.path} to={link.path}>{link.label}</Link>)}
                      <Link to="/inquiry">Contact Us</Link>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-accent">Legal</h4>
                    <div className="flex flex-col gap-3 text-sm font-bold">
                      <Link to="/privacy">Privacy</Link>
                      <Link to="/terms">Terms</Link>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-border flex flex-col items-center gap-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary"> © 2026 G-TECH ALUMINUM & PVC PRODUCTION PLC</p>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                     <span className="opacity-100">Developed by</span>
                     <a href="https://nanocomputingict.com/" target="_blank" rel="noopener noreferrer">
                       <img src="/nano-computing-ict-solutions-logo.png" alt="Nano Computing" className="h-5 w-auto" />
                     </a>
                   </div>
                </div>
              </div>
            );
        }
      };

      return (
        <>
          {DesktopFooter}
          <MobileFooter />
        </>
      );
    };

    return (
      <footer className="bg-bg text-primary pt-16 pb-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <FooterContent variant={footerVariant} />
        </div>
      </footer>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg font-sans text-text">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <div className={`md:block hidden transition-colors duration-500 ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-primary'}`}>
            {renderDesktopNav()}
          </div>
          <div className="md:hidden flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-left">
              <img src={logoUrl} alt="G-TECH" className="h-10 w-auto transition-all duration-500" />
              <div className="flex flex-col">
                <span className={`text-xs font-black tracking-tight transition-all duration-500 ${!scrolled && (location.pathname === '/' || location.pathname.startsWith('/projects/')) ? 'text-white' : 'text-white md:text-primary'}`}>G-TECH ALUMINUM & PVC PRODUCTION PLC</span>
                <span className={`text-[10px] font-bold tracking-tight transition-all duration-500 ${!scrolled && (location.pathname === '/' || location.pathname.startsWith('/projects/')) ? 'text-white/80' : 'text-accent md:text-accent'}`}>Leading Ethiopian Industry Experience</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-500 ${!scrolled && (location.pathname === '/' || location.pathname.startsWith('/projects/')) ? 'text-white' : 'text-white md:text-primary'} hover:text-accent`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && renderMobileMenu()}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Legal Design Selector */}
      {(location.pathname === '/privacy' || location.pathname === '/terms') && (
        <div className="fixed bottom-4 left-4 z-[100] bg-white shadow-2xl p-4 rounded-2xl border border-border flex flex-col gap-3">
          <p className="text-[10px] font-bold text-muted uppercase tracking-widest text-center border-b pb-2">Legal Design Select</p>
          <div className="flex gap-4 items-center">
            <select 
              value={legalVariant} 
              onChange={(e) => setLegalVariant(Number(e.target.value))} 
              className="text-xs p-2 bg-transparent border rounded font-bold"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>Design {num}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Leadership Design Selector Removed */}
      {/* Hero Design Selector Removed */}
      
      {/* Footer Design Selector Removed */}


      {/* Footer */}
      {renderFooter()}
    </div>
  );
}
