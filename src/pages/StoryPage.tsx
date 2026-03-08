import { motion } from 'motion/react';
import { Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown-dark selection:bg-caramel selection:text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brown-dark/60 hover:text-caramel transition-colors mb-12 font-medium text-sm">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brown-dark/5 text-brown-dark text-xs font-semibold tracking-wider uppercase mb-6">
            The Mekruvs Journey
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brown-dark mb-6 leading-tight">
            A Story of <br />
            <span className="italic text-caramel">Passion & Pastry</span>
          </h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brown-dark/10 mb-20 relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop" 
            alt="Baker kneading dough" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-20">
          
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-brown mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-brown-dark mb-6">It Started With a Memory</h2>
            <p className="text-brown-dark/80 font-light leading-relaxed mb-6">
              Our story didn't begin in a commercial kitchen, but in a small home oven with a simple desire: to recreate the unforgettable taste of a true Italian bomboloni. We learned early on that the best food isn't just made with ingredients—it's made with time, patience, and love.
            </p>
            <p className="text-brown-dark/80 font-light leading-relaxed">
              The bomboloni isn't just a pastry; it's a symbol of celebration, warmth, and togetherness. We wanted to bring that exact feeling to your table.
            </p>
          </motion.div>

          {/* Quote Break */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-16 text-center relative shadow-xl shadow-brown-dark/5"
          >
            <Quote size={48} className="text-caramel/20 absolute top-8 left-8" />
            <h3 className="text-2xl md:text-3xl font-serif italic text-brown-dark leading-relaxed relative z-10">
              "We don't just bake pastries. We craft moments of joy that transport you to a sunny afternoon in Tuscany with every single bite."
            </h3>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-brown mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-brown-dark mb-6">The Art of the Dough</h2>
            <p className="text-brown-dark/80 font-light leading-relaxed mb-6">
              What makes a Mekruvs bomboloni so special? It's our uncompromising dedication to the process. While modern bakeries rush their dough, we believe in the magic of a slow, 24-hour cold fermentation. This long resting period allows the yeast to develop complex flavors and creates that signature airy, cloud-like texture that melts in your mouth.
            </p>
            <p className="text-brown-dark/80 font-light leading-relaxed">
              Every morning at 4:00 AM, our bakers begin the delicate process of shaping, frying to a perfect golden brown, and generously dusting each piece with fine sugar.
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
                alt="Baking ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop" 
                alt="Finished bomboloni" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-brown mx-auto pb-20"
          >
            <h2 className="text-3xl font-serif font-bold text-brown-dark mb-6">Premium Fillings</h2>
            <p className="text-brown-dark/80 font-light leading-relaxed mb-6">
              A great bomboloni needs a great filling. We source the finest ingredients from around the world—Madagascar vanilla beans for our classic custard, premium hazelnuts for our Nutella Heaven, and fresh, locally sourced berries for our fruit jams.
            </p>
            <p className="text-brown-dark/80 font-light leading-relaxed">
              Our signature "Bombarrys" creation is the culmination of months of recipe testing, resulting in a secret Italian cream filling that perfectly balances sweetness and richness. We invite you to taste the difference that true passion makes.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
