import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Scale, Activity, Globe, Clock, UserCheck, Share2, ShieldAlert, Mail, RefreshCw, MessageSquare } from 'lucide-react';
import { useDesignStore } from '../store/designStore';

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const SECTIONS = [
  {
    title: "Data Collection",
    content: "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.",
    icon: <Eye className="w-6 h-6" />
  },
  {
    title: "Use of Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect G-Tech and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Data Protection",
    content: "We work hard to protect G-Tech and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We restrict access to personal information to G-Tech employees, contractors, and agents who need to know that information in order to process it for us.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Cookies and Tracking",
    content: "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Third-Party Services",
    content: "We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Data Retention",
    content: "We will retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Your Data Rights",
    content: "Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the information we have on you. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "International Transfers",
    content: "Your information, including Personal Information, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
    icon: <Share2 className="w-6 h-6" />
  },
  {
    title: "Children's Privacy",
    content: "Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us.",
    icon: <ShieldAlert className="w-6 h-6" />
  },
  {
    title: "Marketing Communications",
    content: "We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "Policy Updates",
    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    title: "Contact Information",
    content: "If you have any questions about this Privacy Policy, please contact us via email at info@gtech-pvc.com or visit our main office in Addis Ababa, Ethiopia.",
    icon: <MessageSquare className="w-6 h-6" />
  }
];

const Variant1 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div {...FADE_UP} className="mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
        <p className="text-muted text-lg italic">Last Updated: March 2024</p>
      </motion.div>
      <div className="space-y-12">
        {SECTIONS.map((section, idx) => (
          <motion.div 
            key={idx} 
            {...FADE_UP} 
            transition={{ delay: idx * 0.1 }}
            className="border-l-2 border-accent pl-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              {section.icon} {section.title}
            </h2>
            <p className="text-muted leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Variant2 = () => (
  <div className="pt-32 pb-20 bg-surface">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <motion.div {...FADE_UP} className="sticky top-32">
            <Shield className="w-16 h-16 text-accent mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Standards</h1>
            <p className="text-muted">How we handle your data with transparency and care.</p>
          </motion.div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          {SECTIONS.map((section, idx) => (
            <motion.div 
              key={idx} 
              {...FADE_UP}
              className="bg-white p-8 shadow-sm border border-border"
            >
              <h2 className="text-xl font-bold text-primary mb-4">{section.title}</h2>
              <p className="text-muted leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Variant3 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div {...FADE_UP} className="text-center mb-20">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">Security & Trust</span>
        <h1 className="text-6xl font-bold text-primary mt-4 mb-6">Privacy Policy</h1>
        <div className="w-24 h-1 bg-accent mx-auto" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
        {SECTIONS.map((section, idx) => (
          <motion.div key={idx} {...FADE_UP} className="relative">
            <div className="absolute -left-4 -top-4 text-accent/10 font-bold text-8xl -z-10">0{idx + 1}</div>
            <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
            <p className="text-muted leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Variant4 = () => (
  <div className="pt-32 pb-20 bg-primary text-white">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div {...FADE_UP} className="mb-20 border-b border-white/20 pb-10">
        <h1 className="text-7xl font-bold mb-4 italic">Privacy.</h1>
        <p className="text-white/60 uppercase tracking-[0.3em]">Commitment to Transparency</p>
      </motion.div>
      <div className="space-y-20">
        {SECTIONS.map((section, idx) => (
          <motion.div key={idx} {...FADE_UP}>
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-6">{section.title}</h2>
            <p className="text-2xl font-light leading-relaxed text-white/80">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Variant5 = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-screen-2xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <motion.div {...FADE_UP} className="md:w-1/3 md:sticky md:top-32">
          <div className="bg-accent p-12 aspect-square flex flex-col justify-end">
            <h1 className="text-5xl font-bold text-white leading-tight">Your Data <br/> Your Rights.</h1>
          </div>
        </motion.div>
        <div className="md:w-2/3 space-y-12 py-12">
          {SECTIONS.map((section, idx) => (
            <motion.div key={idx} {...FADE_UP} className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-border pb-12">
              <div className="font-bold text-primary uppercase text-sm tracking-widest">{section.title}</div>
              <div className="md:col-span-2 text-muted leading-relaxed">{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export function Privacy() {
  const { legalVariant } = useDesignStore();
  
  // Force Design 5 for Privacy page
  return <Variant5 />;
}
