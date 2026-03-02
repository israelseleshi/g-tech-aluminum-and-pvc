import { motion, useScroll, useTransform } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowRight, Calendar, ChevronRight, MapPin } from 'lucide-react';

const projectData = {
  1: {
    id: 1,
    title: 'BOLE TOWER COMPLEX',
    location: 'Bole, Addis Ababa',
    type: 'Curtain Wall & PLC',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
    category: 'Commercial',
    date: '2023',
    client: 'Abyssinia Properties',
    area: '12,500 sqm',
    description: 'A landmark mixed-use development featuring advanced thermal-break aluminum systems and high-performance structural glazing. The project required complex facade engineering to handle wind loads while maintaining aesthetic transparency. Our team implemented a bespoke curtain wall system that optimizes energy efficiency without compromising the architectural vision.',
    specs: ['Structural Glazing', 'Energy Efficient PVC', 'Custom Profiles', 'Wind Load Optimized', 'Thermal Break Technology', 'Acoustic Insulation'],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000'
    ]
  },
  2: {
    id: 2,
    title: 'KOLFE RESIDENTIAL',
    location: 'Kolfe Keranio',
    type: 'Aluminum Windows',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000',
    category: 'Residential',
    date: '2022',
    client: 'Private Residence',
    area: '850 sqm',
    description: 'Luxury residential development showcasing premium slim-profile aluminum windows and high-insulation sliding doors. Focused on maximizing natural light and providing superior acoustic isolation in a busy neighborhood. The integration of high-performance PVC systems in secondary areas ensures a balanced approach to durability and cost-effectiveness.',
    specs: ['Slim Profiles', 'Acoustic Glass', 'Multi-point Locking', 'High Insulation', 'Powder Coated Finish', 'Weather Resistance'],
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000'
    ]
  },
  3: {
    id: 3,
    title: 'ADDIS TECH HUB',
    location: 'Kirkos',
    type: 'Structural Glazing',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
    category: 'Institutional',
    date: '2024',
    client: 'Tech Hub Ethiopia',
    area: '120,000 sq ft',
    description: 'State-of-the-art technology hub featuring extensive structural glazing systems. The building serves as a centerpiece for Ethiopia\'s growing tech ecosystem, demanding high levels of precision in every joint and profile. The facade features smart glass technology that adapts to external light conditions for optimal workspace comfort.',
    specs: ['Double-glazed systems', 'Seismic-resistant', 'Smart facades', 'UV Protection', 'Precision Fabrication', 'Modular Installation'],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000'
    ]
  },
  4: {
    id: 4,
    title: 'PIASSA PLAZA',
    location: 'Piassa',
    type: 'Facade Louvers',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000',
    category: 'Mixed Use',
    date: '2023',
    client: 'Piassa Commercial Center',
    area: '35,000 sq ft',
    description: 'Historic commercial plaza renovation featuring modern facade louver systems while preserving architectural heritage. The challenge was to introduce modern ventilation and solar control without disrupting the classical Piassa aesthetic. Our aluminum louver systems provided the perfect technical solution.',
    specs: ['Aluminum Louvers', 'Automated systems', 'Heritage-sensitive', 'Solar Control', 'Natural Ventilation', 'Custom Color Matching'],
    gallery: [
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1000',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000'
    ]
  }
};

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id as unknown as keyof typeof projectData] || projectData[1];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <div ref={containerRef} className="relative overflow-hidden bg-bg min-h-screen">
            {/* Breadcrumbs - Positioned below header, left-aligned, not overlapping title */}
            <div className="absolute top-32 left-6 md:left-12 z-30">
                <nav className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-white/60">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={12} className="text-white/40" />
                    <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                    <ChevronRight size={12} className="text-white/40" />
                    <span className="text-white">{project.title}</span>
                </nav>
            </div>

            <section className="relative h-screen overflow-hidden flex items-center justify-center text-center">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
                    <img src={project.image} className="w-full h-full object-cover blur-[2px]" />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-none" />
                </motion.div>
                <div className="relative z-10 max-w-5xl px-6 pt-20">
                    <motion.div {...FADE_UP}>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">{project.title}</h1>
                        <div className="flex flex-wrap justify-center gap-8 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-white/70" />
                                {project.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-white/70" />
                                {project.date}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-24 space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-primary tracking-tight">Project Overview</h2>
                            <p className="text-lg text-muted leading-snug font-medium">{project.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-tighter text-accent">Technical Execution</h3>
                                <ul className="space-y-2">
                                    {project.specs.map((spec, i) => (
                                        <li key={i} className="flex items-center gap-3 font-bold text-primary uppercase text-[11px] tracking-tighter">
                                            <ArrowRight size={14} className="text-accent" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-surface p-8 border border-border">
                                <h4 className="font-black text-primary uppercase tracking-tight text-sm mb-3">Engineering Standards</h4>
                                <p className="text-xs text-muted font-medium leading-snug">Adhering to ISO 9001:2015 and international structural facade guidelines for Ethiopia's high-altitude climate.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 bg-white border border-border p-10 shadow-2xl sticky top-32 h-fit space-y-8">
                        <div>
                            <h4 className="micro-label mb-2 text-[10px]">Architectural Client</h4>
                            <p className="text-2xl font-black text-primary uppercase">{project.client}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
                            <div>
                                <h4 className="micro-label mb-1 text-[10px]">Build Area</h4>
                                <p className="text-xl font-black text-primary">{project.area}</p>
                            </div>
                            <div>
                                <h4 className="micro-label mb-1 text-[10px]">Typology</h4>
                                <p className="text-xl font-black text-primary">{project.category}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="text-3xl font-bold text-primary tracking-tight">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.gallery.map((img, i) => (
                            <motion.div key={i} {...FADE_UP} className="overflow-hidden shadow-xl aspect-[4/3]">
                                <img src={img} className="w-full h-full object-cover blur-[1px] hover:blur-none hover:scale-110 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

