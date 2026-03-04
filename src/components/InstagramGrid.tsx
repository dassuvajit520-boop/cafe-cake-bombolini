import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=600&auto=format&fit=crop"
];

export default function InstagramGrid() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-brown-dark text-white rounded-full flex items-center justify-center mb-6 shadow-lg"
          >
            <Instagram size={24} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown-dark mb-4"
          >
            Follow our <span className="italic text-caramel">Journey</span>
          </motion.h2>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brown-dark/60 text-sm font-medium hover:text-caramel transition-colors"
          >
            @mekruvs.bomboloni
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={src} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brown-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Instagram size={32} className="text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
