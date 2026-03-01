import { motion } from 'motion/react';
import { Scale, FileText, CheckCircle2, AlertCircle, Gavel, UserX, ShieldAlert, Globe, Clock, CreditCard, ExternalLink, RefreshCw, MessageCircle, Info } from 'lucide-react';
import { useDesignStore } from '../store/designStore';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const TERMS = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using G-Tech PVC Production PLC's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Intellectual Property",
    content: "The content, features, and functionality of our services are owned by G-Tech PVC Production PLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
    icon: <Gavel className="w-6 h-6" />
  },
  {
    title: "Limitations of Liability",
    content: "In no event shall G-Tech PVC Production PLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.",
    icon: <AlertCircle className="w-6 h-6" />
  },
  {
    title: "User Conduct",
    content: "You agree not to use the website for any purpose that is unlawful or prohibited by these Terms. You may not use the website in any manner that could damage, disable, overburden, or impair any G-Tech server or network.",
    icon: <UserX className="w-6 h-6" />
  },
  {
    title: "Prohibited Activities",
    content: "You are specifically restricted from: publishing any website material in any other media; selling, sublicensing and/or otherwise commercializing any website material; publicly performing and/or showing any website material.",
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed and construed in accordance with the laws of Ethiopia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Service Availability",
    content: "We strive to ensure that our services are available 24/7, but we do not guarantee uninterrupted access. We reserve the right to withdraw or amend our service without notice for maintenance or updates.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Payment Terms",
    content: "For any commercial transactions, payments must be made in accordance with the specific project agreement. All prices are subject to change without prior notice unless otherwise specified in a formal quote.",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    title: "External Links",
    content: "Our website may contain links to third-party websites or services that are not owned or controlled by G-Tech. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.",
    icon: <ExternalLink className="w-6 h-6" />
  },
  {
    title: "Termination",
    content: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    title: "Modifications to Service",
    content: "We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that G-Tech shall not be liable to you or to any third party for any modification.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    title: "Indemnification",
    content: "You agree to defend, indemnify and hold harmless G-Tech and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt.",
    icon: <Gavel className="w-6 h-6" />
  },
  {
    title: "Feedback and Suggestions",
    content: "Any feedback, comments, ideas, improvements or suggestions provided by you to G-Tech with respect to the website shall remain the sole and exclusive property of G-Tech.",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "Entire Agreement",
    content: "These Terms constitute the entire agreement between you and G-Tech regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.",
    icon: <Info className="w-6 h-6" />
  }
];

const Variant1 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div {...FADE_UP} className="mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6">Terms of Service</h1>
        <p className="text-muted text-lg italic">Effective Date: March 2024</p>
      </motion.div>
      <div className="space-y-12">
        {TERMS.map((term, idx) => (
          <motion.div 
            key={idx} 
            {...FADE_UP} 
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {term.icon}
              </div>
              <h2 className="text-2xl font-bold text-primary">{term.title}</h2>
            </div>
            <p className="text-muted leading-relaxed pl-14">{term.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Variant2 = () => (
  <div className="pt-32 pb-20 bg-surface">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.div {...FADE_UP} className="lg:w-1/3">
          <div className="sticky top-32 space-y-6">
            <h1 className="text-6xl font-bold text-primary leading-none">Legal <br/> Agreement.</h1>
            <p className="text-muted text-lg">Please read these terms carefully before using our services.</p>
            <div className="h-1 w-20 bg-accent" />
          </div>
        </motion.div>
        <div className="lg:w-2/3 space-y-6">
          {TERMS.map((term, idx) => (
            <motion.div 
              key={idx} 
              {...FADE_UP}
              className="bg-white p-10 border border-border hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-bold text-primary mb-4 flex justify-between items-center">
                {term.title}
                <span className="text-[10px] text-accent uppercase tracking-widest">Section 0{idx + 1}</span>
              </h2>
              <p className="text-muted leading-relaxed">{term.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Variant3 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-screen-2xl mx-auto px-6">
      <motion.div {...FADE_UP} className="text-center mb-24">
        <h1 className="text-8xl font-black text-primary/5 uppercase tracking-tighter absolute left-0 right-0 -top-10 select-none">Terms & Conditions</h1>
        <h2 className="text-5xl font-bold text-primary relative z-10">Our Framework of Trust</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-12">
        {TERMS.map((term, idx) => (
          <motion.div key={idx} {...FADE_UP} className="space-y-6">
            <div className="text-accent font-mono text-sm tracking-widest uppercase">Rule #{idx + 1}</div>
            <h3 className="text-2xl font-bold text-primary">{term.title}</h3>
            <p className="text-muted leading-relaxed">{term.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Variant4 = () => (
  <div className="pt-32 pb-20 bg-accent text-white">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div {...FADE_UP}>
          <h1 className="text-7xl font-bold mb-8">The <br/> Fine <br/> Print.</h1>
          <p className="text-white/70 text-xl font-light">Transparency is the core of our business relationship.</p>
        </motion.div>
        <div className="space-y-16">
          {TERMS.map((term, idx) => (
            <motion.div key={idx} {...FADE_UP} className="border-b border-white/20 pb-8 last:border-0">
              <h2 className="text-2xl font-bold mb-4">{term.title}</h2>
              <p className="text-white/80 leading-relaxed font-light">{term.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Variant5 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div {...FADE_UP} className="flex justify-between items-end mb-20 border-b-2 border-primary pb-8">
        <h1 className="text-4xl font-bold text-primary uppercase tracking-[0.2em]">Terms of Service</h1>
        <span className="text-sm font-bold text-muted">V2.0.24</span>
      </motion.div>
      <div className="space-y-16">
        {TERMS.map((term, idx) => (
          <motion.div key={idx} {...FADE_UP} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <span className="text-accent font-bold text-6xl">0{idx + 1}.</span>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">{term.title}</h2>
              <p className="text-muted leading-relaxed text-lg">{term.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export function Terms() {
  const { legalVariant } = useDesignStore();
  
  // Force Design 2 for Terms page
  return <Variant2 />;
}
