import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Target, Globe, Clock, CheckCircle, ArrowRight, Shield, Zap, Heart, Star, Activity, Sparkles, Building2, Layers, Linkedin, Mail, Quote } from 'lucide-react';
import { useDesignStore } from '../store/designStore';

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export function About() {
  const containerRef = useRef(null);
  const { leadershipVariant } = useDesignStore();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const stats = [
    { label: 'Efficiency', value: '99%' },
    { label: 'Durability', value: '50yr+' },
    { label: 'Clients', value: '500+' },
    { label: 'Experts', value: '200' }
  ];
  const standards = ['ISO 9001:2015 Quality Management', 'European Quality Directives', 'African Union Building Codes'];

  const values = [
    { title: 'Artisanship', desc: 'We treat manufacturing as a fine art, where every millimeter counts towards perfection.' },
    { title: 'Responsibility', desc: 'Sustainable practices aren\'t just a policy; they\'re our duty to Ethiopia\'s environment.' },
    { title: 'Precision', desc: 'Total alignment between design and execution, ensuring structural perfection every time.' }
  ];

  const leaders = [
    { 
      name: 'Amanuel Kebede', 
      role: 'Chief Executive Officer', 
      desc: 'A visionary leader in Ethiopia\'s industrial sector with over 20 years of manufacturing expertise.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      name: 'Selam Haile', 
      role: 'Operations Director', 
      desc: 'Expert in streamlining large-scale production facilities and regional supply chain management.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      name: 'Dawit Solomon', 
      role: 'Technical Director', 
      desc: 'Specialist in European aluminum engineering standards and high-performance facade systems.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' 
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg min-h-screen relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-surface to-white pointer-events-none -z-10" />
      
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-bg to-bg z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000')] bg-cover bg-center opacity-30 grayscale" />
        </motion.div>

        <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8">
              Est. 2010
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary mb-6 md:mb-8 leading-[1] md:leading-[0.9]">
              Engineering <br />
              <span className="text-accent italic">Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted max-w-2xl mx-auto font-medium leading-relaxed">
              Crafting the structural integrity and aesthetic excellence of Ethiopia's modern architectural skyline.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-32 md:space-y-48 pb-32">
        
        {/* Section 1: Our Narrative */}
        <section className="section-padding bg-surface/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div {...FADE_UP}>
                <h2 className="text-sm font-bold text-accent uppercase mb-6">Our Narrative</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
                  A Decade of <br />Structural <br />Innovation.
                </h3>
                <div className="w-16 h-1 bg-accent mb-8" />
              </motion.div>
            </div>
            <div className="lg:col-span-7">
              <motion.div {...FADE_UP} className="space-y-8">
                <p className="text-xl md:text-2xl text-primary font-medium leading-snug">
                  G-Tech emerged as a response to a challenge: How to bridge the gap between global engineering standards and Ethiopian architectural ambitions?
                </p>
                <div className="h-[1px] bg-border w-full" />
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  Founded in 2010, we recognized that the future of Addis Ababa's skyline required more than just materials; it required precision, thermal intelligence, and uncompromising durability. We've evolved into a multi-disciplinary powerhouse serving the nation's most prestigious developments.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-8">
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">14+</p>
                    <p className="text-xs md:text-sm font-bold text-muted uppercase">Years of Craft</p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
                    <p className="text-xs md:text-sm font-bold text-muted uppercase">Iconic Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Combined Philosophy & Purpose Section */}
        <section className="relative">
          <motion.div 
            {...FADE_UP}
            className="bg-primary rounded-[2rem] md:rounded-[3rem] overflow-hidden text-white shadow-2xl relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column: Philosophy */}
              <div className="p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
                <h2 className="text-sm font-bold text-white uppercase mb-8 tracking-widest">The G-Tech Philosophy</h2>
                <div className="space-y-12 md:space-y-16">
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight">Unyielding Integrity</h4>
                    </div>
                    <p className="text-blue-100/70 leading-relaxed text-base md:text-lg">
                      Every profile we produce is a promise. We adhere to international safety and quality standards (ISO 9001) because the buildings we help create protect lives.
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight">Technological Agility</h4>
                    </div>
                    <p className="text-blue-100/70 leading-relaxed text-base md:text-lg">
                      We invest in the latest European manufacturing technology, ensuring that our clients benefit from the absolute edge of thermal insulation and structural strength.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Purpose (Mission & Vision) */}
              <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
                <h2 className="text-sm font-bold text-white uppercase mb-8 md:mb-12 tracking-widest text-left">Our Purpose</h2>
                
                <div className="space-y-10 md:space-y-12">
                  <div className="relative pl-8 md:pl-12 border-l-2 border-white/30 hover:border-white transition-colors py-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    <h4 className="text-[10px] md:text-xs font-bold uppercase text-white mb-3 tracking-widest">Our Mission</h4>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                      To bridge the gap between architectural imagination and structural reality.
                    </p>
                  </div>

                  <div className="relative pl-8 md:pl-12 border-l-2 border-white/10 hover:border-white transition-colors py-2">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase text-blue-300 mb-3 tracking-widest">Our Vision</h4>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight opacity-90">
                      East Africa's definitive authority in high-performance building envelopes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Leadership - Finalized Editorial Design */}
        <section>
          <motion.div {...FADE_UP} className="text-center mb-20">
            <h2 className="text-sm font-bold text-accent uppercase mb-4 tracking-tighter">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-tight">The Minds Behind the Craft.</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                {...FADE_UP}
                transition={{ delay: i * 0.1 }}
                className="space-y-10"
              >
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden transition-all duration-1000 shadow-2xl">
                    <img src={leader.img} className="w-full h-full object-cover" alt={leader.name} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-4xl font-black text-primary border-b-2 border-primary pb-4 tracking-tighter uppercase">{leader.name}</h4>
                  <p className="text-sm font-black text-accent uppercase tracking-tighter italic">{leader.role}</p>
                  <p className="text-lg text-muted font-medium leading-relaxed tracking-tight">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Standards - Design 2 (Minimalist Clean) */}
        <section className="py-20 border-y border-border bg-surface/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">Uncompromising Standards.</h2>
              <div className="space-y-4 inline-block lg:block text-left">
                {standards.map((s, i) => (
                  <p key={i} className="text-sm md:text-muted font-medium flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> {s}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</p>
                  <p className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: DNA - Design 5 (Minimalist Text Narrative Focus) */}
        <section className="max-w-4xl mx-auto py-12">
          <motion.div {...FADE_UP} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Built on Principles.</h3>
          </motion.div>
          <div className="space-y-24">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                {...FADE_UP} 
                transition={{ delay: i * 0.1 }}
                className="relative pl-24 group"
              >
                <span className="absolute left-0 top-0 text-8xl font-black text-primary/5 leading-none group-hover:text-accent/10 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="text-4xl font-bold text-primary mb-6">{v.title}</h4>
                <p className="text-2xl text-muted leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section>
          <motion.div 
            {...FADE_UP}
            className="relative bg-primary rounded-[3rem] p-12 md:p-24 text-center overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tight text-center">Ready to Build <br className="hidden md:block" />The Future?</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-white hover:text-primary transition-all shadow-xl"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}


