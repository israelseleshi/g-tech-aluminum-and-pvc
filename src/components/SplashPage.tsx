import { motion } from 'motion/react';

interface SplashPageProps {
  onComplete: () => void;
  key?: string;
}

export function SplashPage({ onComplete }: SplashPageProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        // We'll use a timeout in the parent to trigger onComplete
      }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6"
    >
      <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 
          }}
          className="flex-shrink-0"
        >
          <img 
            src="/g-tech-logo.png" 
            alt="G-TECH Logo" 
            className="h-24 sm:h-28 md:h-36 lg:h-44 xl:h-52 w-auto object-contain"
          />
        </motion.div>

        {/* Text Container */}
        <div className="text-left space-y-2 sm:space-y-3 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5 
            }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-primary tracking-tight uppercase leading-tight"
          >
            G-TECH ALUMINUM <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">&</span>
            <br />
            PVC PRODUCTION PLC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.7 
            }}
            className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-accent tracking-tight uppercase"
          >
            Leading Ethiopian Industry Experience
          </motion.p>
        </div>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut",
            delay: 0.2
          }}
          className="absolute bottom-0 left-0 h-1 bg-accent/20"
        >
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
