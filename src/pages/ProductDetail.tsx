import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Download, 
  ChevronRight,
  Maximize2,
  FileText,
  Shield,
  Zap,
  ArrowUpCircle,
  Plus,
  Maximize,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, ProductData } from '../data/productData';

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export function ProductDetail() {
  const { productId } = useParams();
  const [activeTabId, setActiveTabId] = useState(productId || 'lorenzoline-70t');
  const activeProduct = PRODUCTS[activeTabId] || Object.values(PRODUCTS)[0];
  const product = PRODUCTS[productId as string];
  const [activeVariant, setActiveVariant] = useState(0);

  useEffect(() => {
    if (productId && PRODUCTS[productId]) {
      setActiveTabId(productId);
    }
  }, [productId]);

  if (!product && !activeProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-primary tracking-tighter uppercase">Product Not Found</h2>
          <Link to="/solutions" className="btn-solid inline-block px-12 py-4">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const renderAluminumDesign = (p: ProductData) => {
    return (
      <div className="pt-12 bg-white pb-32">
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="border-t-4 border-primary pt-12 mb-24 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-[0.7] mb-8">
                {p.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="px-6 py-2 bg-accent text-white font-black uppercase tracking-widest text-xs">Series Specification 2024</span>
                <img src="/lorenzoline-logo.png" alt="Lorenzoline Logo" className="h-20 md:h-24 w-auto" />
              </div>
            </div>
            <div className="max-w-md space-y-8">
              <p className="text-2xl text-primary font-medium leading-tight tracking-tighter">{p.description}</p>
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-4 border-b border-border pb-4 group">
                    <ArrowRight size={16} className="text-accent group-hover:translate-x-2 transition-transform" />
                    <span className="text-sm font-black text-primary uppercase tracking-tighter">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="lg:col-span-2 aspect-video bg-surface">
              <img src={p.heroImage} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 gap-1">
              {Object.entries(p.specs).slice(0, 3).map(([key, value]) => (
                <div key={key} className="p-12 bg-primary text-white flex flex-col justify-between group hover:bg-accent transition-colors duration-500">
                  <span className="text-xs md:text-sm font-black uppercase tracking-tighter text-white group-hover:text-white">{key}</span>
                  <span className="text-4xl font-black uppercase tracking-tighter">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderGeneratorDetail = (p: ProductData) => {
    return (
      <div className="pt-12 bg-white pb-32">
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="border-t-4 border-primary pt-12 mb-24 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter uppercase leading-[0.85] mb-8 lg:max-w-3xl">
                {p.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="px-6 py-2 bg-accent text-white font-black uppercase tracking-widest text-xs">Industrial Power 2024</span>
                <img src="/gucbar-logo.png" alt="Gucbar Logo" className="h-10 w-auto" />
              </div>
            </div>
            <div className="max-w-md space-y-8">
              <p className="text-2xl text-primary font-medium leading-tight tracking-tighter">{p.description}</p>
              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-4 border-b border-border pb-4 group">
                    <ArrowRight size={16} className="text-accent group-hover:translate-x-2 transition-transform" />
                    <span className="text-sm font-black text-primary uppercase tracking-tighter">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div className="lg:col-span-2 aspect-video bg-surface flex items-center justify-center p-8">
              <img src={p.heroImage} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="grid grid-cols-1 gap-1">
              {Object.entries(p.specs).slice(0, 3).map(([key, value]) => (
                <div key={key} className="p-12 bg-primary text-white flex flex-col justify-between group hover:bg-accent transition-colors duration-500">
                  <span className="text-xs md:text-sm font-black uppercase tracking-tighter text-white group-hover:text-white">{key}</span>
                  <span className="text-4xl font-black uppercase tracking-tighter">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderElevatorDetail = (p: ProductData) => (
    <div className="bg-white min-h-screen">
      {/* Luxury Vertical Mobility Hero */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-1/2 h-full relative">
            <Suspense fallback={<div className="w-full h-full bg-primary/10 animate-pulse" />}>
              <img 
                src={p.variants && p.variants[0].options[activeVariant].image ? p.variants[0].options[activeVariant].image : p.heroImage} 
                className="w-full h-full object-contain p-12 md:p-24 transition-all duration-700" 
                alt={p.title}
                loading="lazy"
              />
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20 pointer-events-none" />
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div {...FADE_UP} className="max-w-4xl space-y-8">
            <div className="flex items-center gap-6">
              <span className="px-5 py-2 bg-accent text-white font-black uppercase tracking-widest text-[10px]">Elevator Systems</span>
              <img src="/kerner-asansor-logo.png" alt="Kernek Asansor" className="h-8 w-auto brightness-0 invert opacity-80" />
            </div>
            <h1 className="text-5xl md:text-[6rem] font-black text-white tracking-tighter uppercase leading-[0.8]">
              {p.title}
            </h1>
            <p className="text-xl text-white/50 font-medium max-w-2xl leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        </div>

        {/* Floating Quick Specs */}
        <div className="absolute bottom-12 left-12 right-12 max-w-screen-2xl mx-auto flex flex-wrap gap-12 text-white">
          {Object.entries(p.specs).slice(0, 4).map(([key, value], i) => (
            <motion.div 
              key={key} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="space-y-1"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{key}</span>
              <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customization & Design */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-primary tracking-tighter uppercase leading-none">Architectural<br/>Integration</h2>
              <p className="text-xl text-muted font-medium max-w-md italic border-l-4 border-accent pl-8">Precision motion meets architectural harmony. Engineered for the modern Addis skyline.</p>
            </div>
            
            {p.variants && (
              <div className="space-y-8 p-12 bg-surface border border-border shadow-none">
                <div className="flex items-center justify-between border-b border-border pb-8">
                  <h4 className="text-sm font-black uppercase tracking-widest text-primary">{p.variants[0].label}</h4>
                  <div className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest">Selection</div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {p.variants[0].options.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveVariant(i)}
                      className={`flex flex-col items-center gap-4 group transition-all ${activeVariant === i ? 'scale-105' : 'opacity-40 grayscale hover:opacity-100'}`}
                    >
                      <div className="w-full aspect-square bg-white border border-border transition-transform group-hover:scale-105 overflow-hidden">
                        <img src={opt.image} className="w-full h-full object-cover" alt={opt.name} />
                      </div>
                      <span className="text-[10px] font-black text-primary uppercase tracking-tight text-center">{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-fit">
            {p.features.map((f, i) => (
              <div key={i} className="p-10 bg-surface border border-border shadow-none hover:bg-primary hover:text-white transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                  <Plus className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <h5 className="text-lg font-black uppercase tracking-tight mb-4">{f}</h5>
                <p className="text-sm opacity-60 font-medium leading-relaxed">Integrated standard in high-performance {p.brand} systems.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Gallery */}
      <section className="py-32 border-t border-border">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h3 className="text-4xl font-black text-primary uppercase tracking-tighter">System Components</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {p.gallery.map((img, i) => (
              <div key={i} className="aspect-square bg-white overflow-hidden group relative">
                <img src={img} className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110" alt="Component" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="bg-bg min-h-screen">
      <Helmet>
        <title>{activeProduct?.title} | G-Tech Aluminum & PVC</title>
        <meta name="description" content={activeProduct?.description} />
        <meta property="og:title" content={`${activeProduct?.title} - ${activeProduct?.brand}`} />
        <meta property="og:description" content={activeProduct?.description} />
        <meta property="og:image" content={activeProduct?.heroImage} />
      </Helmet>
      {/* Breadcrumb Navigation - Now at the top with ample space and bigger text */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-36 pb-12">
        <nav className="flex items-center gap-3 text-sm font-black uppercase tracking-tighter text-muted/60">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} className="text-muted/40" />
          <Link to="/solutions" className="hover:text-accent transition-colors">Products</Link>
          <ChevronRight size={14} className="text-muted/40" />
          <span className="text-primary">{activeProduct?.typology}</span>
          <ChevronRight size={14} className="text-muted/40" />
          <span className="text-accent">{activeProduct?.title}</span>
        </nav>
      </div>

      {/* Category Tabs (Aluminum only) - Professional Architectural Design */}
    {activeProduct?.category === 'aluminum' && (
        <div className="sticky top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-y border-border">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex justify-center">
              <div className="flex gap-4 md:gap-12 overflow-x-auto no-scrollbar py-0">
                {Object.values(PRODUCTS)
                  .filter(p => p.category === 'aluminum' && p.id !== 'pvc-profiles')
                  .map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTabId(p.id)}
                    className={`relative py-6 px-4 flex items-center gap-3 transition-all duration-300 group`}
                  >
                    <span className={`text-sm md:text-base font-black uppercase tracking-tighter transition-colors duration-300 ${
                      activeTabId === p.id ? 'text-primary' : 'text-muted group-hover:text-primary'
                    }`}>
                      {p.typology}
                    </span>
                    {activeTabId === p.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs (Generators) - Same UX as Aluminum */}
      {activeProduct?.category === 'generators' && (
        <div className="sticky top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-y border-border">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex justify-start">
              <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar py-0">
                {Object.values(PRODUCTS).filter(p => p.category === 'generators').map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTabId(p.id)}
                    className={`relative py-6 px-4 flex items-center gap-3 transition-all duration-300 group text-left`}
                  >
                    <span className={`text-[11px] md:text-xs font-black uppercase tracking-tighter leading-tight transition-colors duration-300 max-w-[120px] ${
                      activeTabId === p.id ? 'text-primary' : 'text-muted group-hover:text-primary'
                    }`}>
                      {p.title}
                    </span>
                    {activeTabId === p.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs (Elevators) - High-end performance design */}
      {activeProduct?.category === 'elevators' && (
        <div className="sticky top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-y border-border">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex justify-center">
              <div className="flex gap-4 md:gap-12 overflow-x-auto no-scrollbar py-0">
                {Object.values(PRODUCTS).filter(p => p.category === 'elevators').map(p => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTabId(p.id)}
                    className={`relative py-6 px-4 flex items-center gap-3 transition-all duration-300 group`}
                  >
                    <span className={`text-sm md:text-base font-black uppercase tracking-tighter transition-colors duration-300 ${
                      activeTabId === p.id ? 'text-primary' : 'text-muted group-hover:text-primary'
                    }`}>
                      {p.typology}
                    </span>
                    {activeTabId === p.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTabId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeProduct?.category === 'aluminum' && (
            <div className="pt-12">
              {renderAluminumDesign(activeProduct)}
            </div>
          )}
          {activeProduct?.category === 'generators' && renderGeneratorDetail(activeProduct)}
          {activeProduct?.category === 'elevators' && renderElevatorDetail(activeProduct)}
        </motion.div>
      </AnimatePresence>

      {/* Universal Detail Shared Components (Comparison, Gallery) - for ALL products */}
      <div className="space-y-16 pb-16">
        {/* Engineering Advantages Shared Section (Only for Aluminum and Generators) */}
        {(activeProduct?.category === 'aluminum' || activeProduct?.category === 'generators') && (
          <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="space-y-12">
                <h2 className="text-5xl font-black text-primary tracking-tighter uppercase leading-none">Engineering<br/>Integrity</h2>
                <div className="space-y-0">
                  {activeProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-6 border-b border-border group">
                      <ArrowRight size={16} className="text-accent group-hover:translate-x-2 transition-transform" />
                      <span className="text-sm font-black text-primary uppercase tracking-tighter">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-12">
                {activeProduct.category === 'aluminum' && activeProduct.comparison && (
                  <div className="bg-primary rounded-none overflow-hidden shadow-2xl">
                    <div className="p-12 border-b border-white/10 flex justify-between items-center">
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter">System Comparison</h3>
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Plus className="text-white" />
                      </div>
                    </div>
                    <div className="overflow-x-auto p-12">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="text-white text-xs md:text-sm font-black uppercase tracking-widest border-b border-white/10">
                            {activeProduct.comparison.headers.map((h, i) => (
                              <th key={i} className="pb-8">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-white/80">
                          {activeProduct.comparison.rows.map((row, i) => (
                            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                              <td className="py-8 font-black uppercase text-sm">{row.name}</td>
                              {row.values.map((v, vi) => (
                                <td key={vi} className="py-8 text-sm font-medium">{v}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {activeProduct.gallery.slice(1, 3).map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-none overflow-hidden group relative bg-surface">
                      <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

