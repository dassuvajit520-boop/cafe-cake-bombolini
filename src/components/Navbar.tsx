import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 lg:px-24 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-lg">
          M
        </div>
        <span className="font-serif text-2xl font-semibold tracking-tight text-brown-dark">Mekruvs</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brown-dark/80">
        <a href={getHref('#home')} className="hover:text-brown-dark transition-colors">Home</a>
        <a href={getHref('#menu')} className="hover:text-brown-dark transition-colors">Menu</a>
        <Link to="/story" className="hover:text-brown-dark transition-colors">Story</Link>
        <a href={getHref('#contact')} className="hover:text-brown-dark transition-colors">Contact</a>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2.5 rounded-full bg-white text-brown-dark font-medium text-sm shadow-sm hover:shadow-md transition-all border border-brown-dark/10">
          Order Now
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-brown-dark" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-cream shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t border-brown-dark/10"
        >
          <a href={getHref('#home')} className="text-brown-dark font-medium" onClick={() => setIsOpen(false)}>Home</a>
          <a href={getHref('#menu')} className="text-brown-dark font-medium" onClick={() => setIsOpen(false)}>Menu</a>
          <Link to="/story" className="text-brown-dark font-medium" onClick={() => setIsOpen(false)}>Story</Link>
          <a href={getHref('#contact')} className="text-brown-dark font-medium" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="mt-4 px-6 py-3 rounded-full bg-brown-dark text-white font-medium text-sm shadow-md">
            Order Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
