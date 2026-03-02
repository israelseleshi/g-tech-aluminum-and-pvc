import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize, Layers, Shield, Zap, ArrowUpCircle, Factory, Beaker, ShieldAlert } from 'lucide-react';
import { useDesignStore } from '../store/designStore';

const STAGGER = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const CARD_VARIANT = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export function Solutions() {
  const partners = [
    {
      id: 'lorenzoline-70t',
      brand: 'LORENZOLINE',
      title: 'Windows & Doors Aluminum Systems',
      description: 'World-class aluminum profile systems for architectural windows and doors. Engineered for thermal efficiency and structural integrity.',
      category: 'Windows & Doors',
      icon: <img src="/lorenzoline-logo.png" alt="LORENZOLINE Logo" className="h-20 w-auto object-contain" />,
      image: '/pictures-from-lorenzoline/Lorenzo_Products/alumunium-windows-and-doors.png',
      specs: ['Thermal Break Technology', 'Multi-Point Locking', 'Acoustic Insulation']
    },
    {
      id: 'gucbir-perkins-100',
      brand: 'GUCBAR',
      title: 'Industrial Power Generation',
      description: 'Heavy-duty power solutions featuring Gucbar generator systems. Reliable performance for commercial and industrial applications.',
      category: 'Generators',
      icon: <img src="/gucbar-logo.png" alt="GUCBAR Logo" className="h-12 w-auto object-contain" />,
      image: '/Perkins 110kVA Industrial.png',
      specs: ['High Efficiency', 'Continuous Duty', 'Weatherproof Enclosures']
    },
    {
      id: 'kernek-mrl-luxury',
      brand: 'KERNEK ASANSOR',
      title: 'Elevator Systems',
      description: 'Advanced elevator systems from Kernek Asansor. Precision engineering for safe, smooth, and efficient vertical transportation.',
      category: 'Elevators',
      icon: <img src="/kerner-asansor-logo.png" alt="KERNEK ASANSOR Logo" className="h-12 w-auto object-contain" />,
      image: '/pictures-from-kernekasansor/Kernek_Products/elevator-3d-model.png',
      specs: ['Machine Room-Less (MRL)', 'Smart Control Systems', 'Premium Cabin Finishes']
    }
  ];

  const processSteps = [
    { title: 'Raw Material Sourcing', desc: 'Importing premium PVC resins and chemicals, alongside high-grade aluminum billets.', icon: Beaker },
    { title: 'Extrusion & Molding', desc: 'Using advanced machinery to maintain high-capacity production with precision tolerances.', icon: Factory },
    { title: 'Fabrication & Assembly', desc: 'Precision cutting, welding, and assembly of profiles into finished window and door frames.', icon: Zap },
    { title: 'Quality Assurance', desc: 'Rigorous testing for structural integrity, water tightness, and wind resistance.', icon: ShieldAlert },
  ];

  const renderContent = () => {
    return (
      <motion.div variants={STAGGER} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="space-y-12 md:space-y-16">
        {partners.map((item, index) => (
          <motion.div key={item.id} variants={CARD_VARIANT} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                {item.icon}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 tracking-tighter">{item.title}</h2>
              <p className="text-base md:text-lg text-muted mb-4 md:mb-6 leading-tight font-medium tracking-tight">{item.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                {item.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-tighter">{spec}</span>
                  </div>
                ))}
              </div>
              <Link to={`/solutions/${item.id}`} className="btn-solid group w-full sm:w-fit text-center flex justify-center items-center">
                View products <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className={`relative aspect-[4/3] overflow-hidden shadow-none ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <img src={item.image} alt={item.brand} className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="bg-bg min-h-screen pt-12 md:pt-16">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-surface to-white pointer-events-none -z-10" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl mx-auto px-4 md:px-12 pt-8 md:pt-16 pb-12 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 max-w-4xl pt-12 md:pt-24"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.8] mb-4">Products</h1>
          <p className="text-lg md:text-xl text-muted font-medium leading-tight">Explore our world-class architectural systems and industrial power solutions.</p>
        </motion.div>

        <motion.div
          variants={STAGGER}
          initial="initial"
          animate="animate"
          className="mb-32"
        >
          {renderContent()}
        </motion.div>

        {/* Manufacturing Process Timeline (Migrated from Engineering) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 md:mt-48 border-t border-border pt-16 md:pt-24 bg-surface/50 -mx-4 md:-mx-12 px-4 md:px-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 md:mb-24 text-primary"
          >
            THE PROCESS
          </motion.h2>
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex gap-6 md:gap-12 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full shrink-0 mt-3 md:mt-4 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                  {index !== processSteps.length - 1 && (
                    <div className="w-[2px] h-full bg-border my-4"></div>
                  )}
                </div>
                
                <div className="max-w-3xl pb-16 md:pb-32">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                    <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-border group-hover:text-primary/20 transition-colors">0{index + 1}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-primary">{step.title}</h3>
                  </div>
                  <p className="text-lg md:text-xl text-muted font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
