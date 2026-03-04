import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown-dark flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-[2.5rem] p-10 md:p-12 text-center shadow-2xl shadow-brown-dark/5 border border-brown-dark/5 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-orange-200/10 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 bg-caramel/10 text-caramel rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={48} strokeWidth={1.5} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-serif font-bold text-brown-dark mb-4 leading-tight"
        >
          Thank You <br/>
          <span className="italic text-caramel">for your order!</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-brown-dark/60 font-light leading-relaxed mb-10"
        >
          Your freshly baked bomboloni are being prepared with love. We've sent a confirmation email with your order details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-brown-dark text-white font-medium text-lg shadow-xl shadow-brown-dark/20 hover:bg-caramel hover:shadow-caramel/20 transition-all duration-300"
          >
            Return to Menu
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
