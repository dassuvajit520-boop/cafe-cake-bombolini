import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-hero-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-cream/50 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-brown-dark/30" />
            <span className="text-brown-dark/60 text-sm font-semibold tracking-widest uppercase">Visit Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown-dark mb-12 leading-tight">
            Drop by for a <br />
            <span className="italic text-caramel">Sweet Treat</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-caramel shadow-sm shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brown-dark text-lg mb-1">Location</h4>
                <p className="text-brown-dark/70 text-sm font-light leading-relaxed">
                  123 Sweet Street,<br />
                  Dessert District,<br />
                  City, State 12345
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-caramel shadow-sm shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brown-dark text-lg mb-1">Hours</h4>
                <p className="text-brown-dark/70 text-sm font-light leading-relaxed">
                  Mon - Fri: 8am - 8pm<br />
                  Sat - Sun: 9am - 9pm
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-caramel shadow-sm shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brown-dark text-lg mb-1">Phone</h4>
                <p className="text-brown-dark/70 text-sm font-light leading-relaxed">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-caramel shadow-sm shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brown-dark text-lg mb-1">Email</h4>
                <p className="text-brown-dark/70 text-sm font-light leading-relaxed">
                  hello@mekruvs.com
                </p>
              </div>
            </div>
          </div>
          
          <button className="mt-12 px-8 py-4 rounded-full bg-brown-dark text-white font-medium text-sm shadow-lg shadow-brown-dark/20 hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
            Get Directions
          </button>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brown-dark/10 bg-white p-2"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 relative">
            {/* Fake map image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Map location" 
              className="w-full h-full object-cover opacity-80 grayscale"
              referrerPolicy="no-referrer"
            />
            
            {/* Map Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center relative z-10 animate-bounce">
                <div className="w-12 h-12 bg-caramel rounded-full flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
              </div>
              <div className="w-8 h-2 bg-black/20 rounded-full blur-sm mt-2" />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
