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
            Sweet Moments <br />
            <span className="italic text-caramel">Delivered Here</span>
          </h2>
          
          <p className="text-brown-dark/70 text-lg leading-relaxed mb-6 font-light">
            The truly great moments start with a bite. Born out of love for authentic Italian pastries, Mekruvs brings you the softest, most pillowy bomboloni you've ever tasted.
          </p>
          <p className="text-brown-dark/70 text-lg leading-relaxed mb-8 font-light">
            Every morning, we craft our dough from scratch, filling each piece with rich, velvety creams and jams, ensuring every bite is a moment of pure bliss.
          </p>

          <div className="relative pl-6 border-l-2 border-caramel mb-10">
            <Quote size={24} className="text-caramel/40 absolute -top-2 -left-3" />
            <p className="text-brown-dark font-serif italic text-xl leading-relaxed">
              "Our secret ingredient isn't just the premium vanilla or the organic flour—it's the patience we put into letting the dough rise perfectly."
            </p>
            <span className="block mt-4 text-sm font-semibold text-brown-dark/60 uppercase tracking-wider">— The Head Baker</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10 w-full">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-caramel mb-1">100%</span>
              <span className="text-xs text-brown-dark/60 uppercase tracking-wider font-semibold">Natural</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-caramel mb-1">24h</span>
              <span className="text-xs text-brown-dark/60 uppercase tracking-wider font-semibold">Dough Rest</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-caramel mb-1">5am</span>
              <span className="text-xs text-brown-dark/60 uppercase tracking-wider font-semibold">Baked Daily</span>
            </div>
          </div>
          
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

          {/* Overlapping smaller image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-12 -left-8 md:-left-12 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-cream shadow-xl z-10 hidden sm:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" 
              alt="Baker kneading dough" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
