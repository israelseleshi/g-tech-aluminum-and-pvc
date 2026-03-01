import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Layout as LayoutIcon, Maximize2, Layers, Search, Filter } from 'lucide-react';
import { useDesignStore } from '../store/designStore';

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
    <div className="bg-bg min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">Our Projects</h1>
          <p className="text-xl text-muted leading-relaxed">
            Discover how G-Tech is transforming Ethiopia's landscape through precision engineering and visionary architecture.
          </p>
        </motion.div>
      </motion.div>

      <div className="pb-32">
        <div className="space-y-24 md:space-y-48 max-w-screen-xl mx-auto px-6">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-3/5 relative group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} className="w-full h-full object-cover rounded-none" alt={project.title} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/5 -z-10 group-hover:bg-accent/10 transition-colors" />
              </div>
              <div className="lg:w-2/5 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" />
                  <span className="text-xs font-black text-accent uppercase tracking-[0.3em]">0{i + 1}</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-primary leading-none uppercase tracking-tighter">{project.title}</h3>
                <p className="text-muted text-lg font-medium leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-border">
                  <div>
                    <span className="block text-[10px] font-black text-muted uppercase tracking-widest mb-1">System</span>
                    <span className="text-sm font-bold text-primary">{project.type}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-muted uppercase tracking-widest mb-1">Location</span>
                    <span className="text-sm font-bold text-primary">{project.location}</span>
                  </div>
                </div>
                <Link to={`/projects/${project.id}`} className="btn-solid rounded-none w-full justify-between px-10 group">
                  View Project Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

