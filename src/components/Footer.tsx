import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
        
        {/* Brand */}
        <div className="flex flex-col items-start col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-lg">
              M
            </div>
            <span className="font-serif text-2xl font-semibold tracking-tight text-white">Mekruvs</span>
          </div>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
            Sweet moments start here. Handcrafted Italian bomboloni made fresh daily with love and the finest ingredients.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-caramel transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-caramel transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-caramel transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3 text-white/60 text-sm font-light">
            <a href="#home" className="hover:text-caramel transition-colors">Home</a>
            <a href="#menu" className="hover:text-caramel transition-colors">Menu</a>
            <a href="#story" className="hover:text-caramel transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-caramel transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start">
          <h4 className="font-serif font-bold text-lg mb-6">Legal</h4>
          <div className="flex flex-col gap-3 text-white/60 text-sm font-light">
            <a href="#" className="hover:text-caramel transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-caramel transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-caramel transition-colors">Allergen Info</a>
            <a href="#" className="hover:text-caramel transition-colors">Refund Policy</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start">
          <h4 className="font-serif font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-4">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="w-full flex items-center bg-white/10 rounded-full p-1 border border-white/20">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent text-white text-sm px-4 py-2 w-full focus:outline-none placeholder:text-white/40"
            />
            <button className="px-6 py-2 rounded-full bg-caramel text-white font-medium text-sm hover:bg-white hover:text-brown-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-light">
        <p>&copy; {new Date().getFullYear()} Mekruvs Bomboloni. All rights reserved.</p>
        <p>Designed with love for sweet moments.</p>
      </div>
    </footer>
  );
}
