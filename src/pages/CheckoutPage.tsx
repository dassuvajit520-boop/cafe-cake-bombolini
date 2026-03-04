import { motion } from 'motion/react';
import { ArrowLeft, Coffee, Plus, Check } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {
    name: "Jam Bomboloni",
    price: "₹109",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop"
  };

  const [upsellAdded, setUpsellAdded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const basePrice = parseInt(product.price.replace(/\D/g, '')) || 109;
  const upsellPrice = 99;
  const total = basePrice + (upsellAdded ? upsellPrice : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-brown-dark pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-brown-dark/60 hover:text-caramel transition-colors mb-8 font-medium text-sm">
          <ArrowLeft size={16} />
          Back to Menu
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-brown-dark mb-2">Checkout</h1>
              <p className="text-brown-dark/60 font-light">Please enter your details to complete your order.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-serif font-bold text-brown-dark border-b border-brown-dark/10 pb-2">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-brown-dark/60">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-brown-dark/10 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors" placeholder="Jane" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-brown-dark/60">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-brown-dark/10 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors" placeholder="Doe" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-brown-dark/60">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-brown-dark/10 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-brown-dark/60">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-brown-dark/10 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-brown-dark text-white font-medium text-lg shadow-xl shadow-brown-dark/20 hover:bg-caramel hover:shadow-caramel/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  `Place Order • ₹${total}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary & Upsell */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-brown-dark/5 border border-brown-dark/5">
              <h2 className="text-xl font-serif font-bold text-brown-dark mb-6">Order Summary</h2>
              
              {/* Main Product */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brown-dark/10">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-brown-dark text-lg">{product.name}</h3>
                  <p className="text-brown-dark/60 text-sm">Freshly baked</p>
                </div>
                <div className="font-serif font-bold text-caramel text-lg">
                  ₹{basePrice}
                </div>
              </div>

              {/* Upsell Section */}
              <div className={`rounded-2xl p-4 mb-6 border-2 transition-colors duration-300 ${upsellAdded ? 'border-caramel bg-caramel/5' : 'border-dashed border-brown-dark/20 bg-transparent'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${upsellAdded ? 'bg-caramel text-white' : 'bg-brown-dark/5 text-brown-dark/60'}`}>
                    <Coffee size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-brown-dark text-sm mb-1">Add a Classic Espresso?</h4>
                    <p className="text-brown-dark/60 text-xs leading-relaxed mb-3">
                      Perfectly complements the sweetness of your bomboloni. Freshly brewed.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setUpsellAdded(!upsellAdded)}
                      className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${upsellAdded ? 'bg-caramel text-white' : 'bg-brown-dark text-white hover:bg-caramel'}`}
                    >
                      {upsellAdded ? (
                        <><Check size={14} /> Added (+₹{upsellPrice})</>
                      ) : (
                        <><Plus size={14} /> Add for ₹{upsellPrice}</>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm text-brown-dark/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>Calculated at next step</span>
                </div>
                <div className="pt-4 mt-4 border-t border-brown-dark/10 flex justify-between items-center">
                  <span className="font-serif font-bold text-brown-dark text-lg">Total</span>
                  <span className="font-serif font-bold text-caramel text-2xl">₹{total}</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
