import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Layout as LayoutIcon, Maximize2, Layers, Search, Filter, Settings, Box, MousePointer2, Move, Sparkles } from 'lucide-react';
import { useDesignStore } from '../store/designStore';
import { useRef } from 'react';

const Separator = () => (
  <div className="w-full flex justify-center py-24">
    <div 
      className="h-[2px] w-4/5 max-w-4xl"
      style={{ 
        background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
        opacity: 0.3
      }}
    />
  </div>
);

const ProjectSection = ({ project, index }: { project: any, index: number }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const isEven = index % 2 === 1;

  return (
    <div ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <motion.div 
        className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
      >
        {/* Image Container */}
        <div className="lg:w-3/5 relative group">
          <motion.div 
            style={{ 
              scale: scaleImage
            }}
            className="relative aspect-[16/10] overflow-hidden shadow-2xl"
          >
            <img 
              src={project.image} 
              className="w-full h-full object-cover" 
              alt={project.title} 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          
          {/* Decorative background element */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
            className={`absolute -bottom-12 ${isEven ? '-left-12' : '-right-12'} w-64 h-64 bg-accent/5 -z-10 rounded-full blur-3xl`}
          />
        </div>

        {/* Content Container */}
        <div className="lg:w-2/5 space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs font-black text-accent uppercase tracking-[0.3em]">Project 0{index + 1}</span>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none uppercase tracking-tighter"
          >
            {project.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg font-medium leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-8 py-8 border-y border-border"
          >
            <div>
              <span className="block text-[10px] font-black text-muted uppercase tracking-widest mb-1">System</span>
              <span className="text-sm font-bold text-primary">{project.type}</span>
            </div>
            <div>
              <span className="block text-[10px] font-black text-muted uppercase tracking-widest mb-1">Location</span>
              <span className="text-sm font-bold text-primary">{project.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to={`/projects/${project.id}`} className="btn-solid rounded-none w-full justify-between px-10 group bg-primary hover:bg-accent transition-colors duration-500">
              View Project Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: 'BOLE TOWER COMPLEX',
    location: 'Bole, Addis Ababa',
    type: 'Curtain Wall & PVC',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000',
    category: 'Commercial',
    description: 'A landmark multi-use development featuring advanced thermal break systems and structural glazing.'
  },
  {
    id: 2,
    title: 'KOLFE RESIDENTIAL',
    location: 'Kolfe Keranio',
    type: 'Aluminum Windows',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000',
    category: 'Residential',
    description: 'Modern residential complex utilizing high-performance aluminum sliding systems for maximum natural light.'
  },
  {
    id: 3,
    title: 'ADDIS TECH HUB',
    location: 'Kirkos',
    type: 'Structural Glazing',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000',
    category: 'Institutional',
    description: 'Innovative technology center with custom-engineered glass facades and integrated shading solutions.'
  },
  {
    id: 4,
    title: 'PIASSA PLAZA',
    location: 'Piassa',
    type: 'Facade Louvers',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000',
    category: 'Mixed Use',
    description: 'Urban revitalization project featuring decorative and functional aluminum louver systems.'
  }
];

export function Projects() {
  return (
    <div className="bg-bg min-h-screen pt-12 md:pt-16">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-surface to-white pointer-events-none -z-10" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl mx-auto px-4 md:px-12 pt-8 md:pt-16 pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16 max-w-4xl pt-12 md:pt-24"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-primary uppercase leading-[0.8] mb-4">Projects</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted font-medium leading-tight">
            Discover how G-Tech is transforming Ethiopia's landscape through precision engineering and visionary architecture.
          </p>
        </motion.div>
      </motion.div>

      <div className="pb-32">
        <div className="max-w-screen-xl mx-auto px-6">
          {projects.map((project, i) => (
            <div key={project.id}>
              <ProjectSection 
                project={project} 
                index={i} 
              />
              {i < projects.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
