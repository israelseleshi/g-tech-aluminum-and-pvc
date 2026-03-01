import { motion } from 'motion/react';
import { ShieldAlert, Zap, Factory, Beaker } from 'lucide-react';

const STAGGER = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export function Engineering() {
  const processSteps = [
    { title: 'Raw Material Sourcing', desc: 'Importing premium PVC resins and chemicals, alongside high-grade aluminum billets.', icon: Beaker },
    { title: 'Extrusion & Molding', desc: 'Using advanced machinery to maintain high-capacity production with precision tolerances.', icon: Factory },
    { title: 'Fabrication & Assembly', desc: 'Precision cutting, welding, and assembly of profiles into finished window and door frames.', icon: Zap },
    { title: 'Quality Assurance', desc: 'Rigorous testing for structural integrity, water tightness, and wind resistance.', icon: ShieldAlert },
  ];

  return (
    <div className="bg-bg min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-8 md:pt-16 pb-16 md:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:mb-32 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Process</h1>
        </motion.div>

        {/* Manufacturing Process Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-48 border-t border-border pt-16 md:pt-24"
        >
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
                {/* Timeline Node */}
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

        {/* Durability Lab */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-48 border-t border-border pt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-primary">DURABILITY LAB</h2>
              <p className="text-xl text-muted mb-16 font-medium leading-relaxed">
                Our profiles undergo extreme stress testing to ensure they withstand Ethiopia's diverse climate zones, ranging from the intense sun of the lowlands to the heavy rains of the highlands.
              </p>
              <div className="space-y-12">
                <div className="border-b border-border pb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold tracking-tight text-primary">Thermal Stress Test</h4>
                    <span className="micro-label text-green-600">Passed</span>
                  </div>
                  <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-accent h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div className="border-b border-border pb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold tracking-tight text-primary">Wind Load Simulation</h4>
                    <span className="micro-label text-green-600">Passed</span>
                  </div>
                  <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 3D Simulation Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[60vh] bg-white rounded-3xl shadow-xl p-8 flex flex-col overflow-hidden border border-border"
            >
              <div className="flex justify-between items-center text-muted text-sm mb-8 pb-4 border-b border-border">
                <span className="micro-label">Simulation Viewport</span>
                <span className="text-accent flex items-center gap-3 micro-label"><span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Live</span>
              </div>
              <div className="flex-grow relative flex items-center justify-center">
                {/* Simulated 3D object under stress */}
                <motion.div 
                  animate={{ 
                    rotateX: [0, 2, -2, 0],
                    rotateY: [0, -2, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-48 h-64 border-2 border-primary/20 rounded-lg relative bg-surface"
                >
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-accent/50 transform -translate-y-1/2"></div>
                </motion.div>
                
                {/* Overlay data */}
                <div className="absolute bottom-0 left-0 space-y-4 bg-white/80 backdrop-blur p-4 rounded-xl border border-border">
                  <p className="micro-label">Force: <span className="text-primary">2400 Pa</span></p>
                  <p className="micro-label">Deflection: <span className="text-primary">1.2mm</span></p>
                  <p className="micro-label">Status: <span className="text-green-600">Stable</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Material Science */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-primary"
          >
            MATERIAL SCIENCE
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-6 text-primary">
                <div className="w-12 h-[2px] bg-accent group-hover:w-24 transition-all duration-500"></div>
                Aluminum Alloy 6063
              </h3>
              <p className="text-xl text-muted font-medium leading-relaxed mb-12">
                We utilize architectural-grade 6063-T5 aluminum alloy. Known for its excellent extrudability, high corrosion resistance, and superior surface finish capabilities. It provides the optimal balance of strength and aesthetics for curtain walls and heavy-duty frames.
              </p>
              <ul className="space-y-6 text-lg font-medium">
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Tensile Strength</span> <span className="text-primary font-bold">186 MPa</span></li>
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Yield Strength</span> <span className="text-primary font-bold">145 MPa</span></li>
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Hardness</span> <span className="text-primary font-bold">60 HB</span></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-6 text-primary">
                <div className="w-12 h-[2px] bg-accent group-hover:w-24 transition-all duration-500"></div>
                U-PVC Formulation
              </h3>
              <p className="text-xl text-muted font-medium leading-relaxed mb-12">
                Our Unplasticized Polyvinyl Chloride (U-PVC) is specially formulated with UV stabilizers and impact modifiers tailored for high-altitude, high-UV environments like Addis Ababa. It prevents yellowing, cracking, and warping over decades of use.
              </p>
              <ul className="space-y-6 text-lg font-medium">
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Thermal Conductivity</span> <span className="text-primary font-bold">0.16 W/mK</span></li>
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Density</span> <span className="text-primary font-bold">1.4 g/cm³</span></li>
                <li className="flex justify-between border-b border-border pb-4"><span className="text-muted font-bold">Lifespan</span> <span className="text-primary font-bold">40+ Years</span></li>
              </ul>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
