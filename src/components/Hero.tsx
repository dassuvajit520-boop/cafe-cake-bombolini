import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-hero-bg overflow-hidden pt-24 pb-12 px-6 md:px-12 lg:px-24">
      {/* Background blur elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brown-dark/5 text-brown-dark text-xs font-semibold tracking-wider uppercase mb-6">
            Mekruvs Bomboloni
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-serif text-brown-dark mb-6 tracking-tight">
            Sweet <br />
            Moments <br />
            Start Here
          </h1>
          <p className="text-brown-dark/70 text-lg md:text-xl mb-10 max-w-md font-light leading-relaxed">
            Experience the softest, most decadent Italian bomboloni, freshly made to melt in your mouth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-brown-dark text-white font-medium text-sm shadow-lg shadow-brown-dark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-brown-dark font-medium text-sm border border-brown-dark/20 hover:bg-brown-dark/5 transition-all">
              View Menu
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center"
        >
          {/* Decorative circle behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 rounded-full blur-2xl" />
          
          <HeroImage />
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-white/50"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
              ✨
            </div>
            <div>
              <p className="text-xs text-brown-dark/60 font-medium uppercase tracking-wider">Freshly Baked</p>
              <p className="text-brown-dark font-serif font-bold text-lg">Every Morning</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
