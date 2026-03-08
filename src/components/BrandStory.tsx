import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-brown-dark/30" />
            <span className="text-brown-dark/60 text-sm font-semibold tracking-widest uppercase">Our Story</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown-dark mb-8 leading-tight">
            A Passion for <br />
            <span className="italic text-caramel">Perfect Pastries</span>
          </h2>
          
          <p className="text-brown-dark/70 text-lg leading-relaxed mb-8 font-light">
            Mekruvs started with a simple dream: to bring the authentic taste of Italian bomboloni to our streets. What began in a small home kitchen has blossomed into a beloved local brand.
          </p>
          
          <Link 
            to="/story"
            className="px-8 py-3 rounded-full border border-brown-dark text-brown-dark font-medium text-sm hover:bg-brown-dark hover:text-white transition-all duration-300"
          >
            Read More
          </Link>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brown-dark/10">
            <img 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop" 
              alt="Delicious chocolate dessert" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
