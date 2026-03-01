import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const FADE_UP = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export function Inquiry() {
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
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Get In Touch</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-24">
          {/* The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 shadow-xl border border-border"
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block mb-4 text-muted text-[11px] uppercase tracking-[0.05em] font-medium">Name</label>
                  <input type="text" className="input-field" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block mb-4 text-muted text-[11px] uppercase tracking-[0.05em] font-medium">Contact Number</label>
                  <input type="tel" className="input-field" placeholder="+251..." />
                </div>
              </div>
              
              <div>
                <label className="block mb-4 text-muted text-[11px] uppercase tracking-[0.05em] font-medium">Email Address</label>
                <input type="email" className="input-field" placeholder="engineering@company.com" />
              </div>
              
              <div>
                <label className="block mb-4 text-muted text-[11px] uppercase tracking-[0.05em] font-medium">Message</label>
                <textarea 
                  className="input-field min-h-[150px] resize-y" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="btn-solid w-full md:w-auto px-12 py-5 text-sm"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-12 lg:space-y-16 pt-16 mt-16 border-t border-border lg:pt-0 lg:mt-0 lg:border-t-0 lg:border-l lg:pl-16"
          >
            <motion.div>
              <h3 className="text-3xl font-bold tracking-tight mb-12 text-primary">CONTACT INFORMATION</h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="text-accent shrink-0 mt-1">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <strong className="block font-bold text-primary mb-2 tracking-tight text-xl">Main Office & Factory</strong>
                    <span className="text-muted text-lg font-medium leading-relaxed">Bole (Kebele 42/50)<br/>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-accent shrink-0 mt-1">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <strong className="block font-bold text-primary mb-2 tracking-tight text-xl">Branch Facility</strong>
                    <span className="text-muted text-lg font-medium leading-relaxed">Kolfe Keranio (Kebele 39)<br/>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-accent shrink-0 mt-1">
                    <Phone size={24} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col text-lg text-muted font-medium space-y-2">
                    <strong className="block font-bold text-primary mb-2 tracking-tight text-xl">Direct Lines</strong>
                    <a href="tel:+251116479459" className="hover:text-primary transition-colors">+251 116 47 94 59</a>
                    <a href="tel:+251116450373" className="hover:text-primary transition-colors">+251 116 45 03 73</a>
                    <a href="tel:+251911673101" className="font-bold text-primary mt-4 hover:text-accent transition-colors">Mobile: +251 911 67 31 01</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-accent shrink-0 mt-1">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <strong className="block font-bold text-primary mb-2 tracking-tight text-xl">Email</strong>
                    <a href="mailto:info@gtech-pvc.com" className="text-lg text-muted font-medium hover:text-primary transition-colors">info@gtech-pvc.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map - Moved to bottom, full width with container padding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4954634812716!2d38.83100230000001!3d9.018485300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9aaf80ab09dd%3A0x34c974097261b55d!2sG-Tech%20PVC%20Production%20PLC!5e0!3m2!1sen!2set!4v1772276158600!5m2!1sen!2set" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '2rem' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl border border-border"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
