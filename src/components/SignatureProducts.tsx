import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Info } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Jam Bomboloni",
    description: "A soft, sugar-dusted Italian bomboloni bursting with premium fruit jam.",
    price: "₹109",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
    tag: "Classic",
    ingredients: "Organic flour, free-range eggs, butter, sugar, yeast, premium mixed berry jam.",
    nutrition: { calories: 310, carbs: "45g", fat: "12g", protein: "5g" }
  },
  {
    id: 2,
    name: "Nutella Heaven",
    description: "Fluffy bomboloni filled with rich and creamy Nutella spread.",
    price: "₹119",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=600&auto=format&fit=crop",
    tag: "Best Seller",
    ingredients: "Organic flour, free-range eggs, butter, sugar, yeast, Nutella hazelnut spread.",
    nutrition: { calories: 390, carbs: "46g", fat: "18g", protein: "6g" }
  },
  {
    id: 3,
    name: "Bombarrys (5pc)",
    description: "Our signature handcrafted bomboloni made with love and secret Italian recipes.",
    price: "₹119",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    tag: "Our Creation",
    ingredients: "Organic flour, free-range eggs, butter, sugar, yeast, secret Italian cream filling.",
    nutrition: { calories: 450, carbs: "52g", fat: "22g", protein: "8g" }
  }
];

export default function SignatureProducts() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleOrder = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    navigate('/checkout', { state: { product } });
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-brown-dark mb-4"
          >
            Your Favorite <span className="italic text-caramel">Flavors</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brown-dark/60 text-sm md:text-base max-w-xl font-light"
          >
            Discover our handcrafted selection of premium bomboloni, made fresh daily with the finest ingredients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {products.map((product, index) => {
            const isExpanded = expandedId === product.id;
            
            return (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, layout: { duration: 0.4, type: "spring", bounce: 0.2 } }}
                onClick={() => !isExpanded && setExpandedId(product.id)}
                className={`group bg-[#f4ece4] rounded-[2rem] p-4 flex flex-col items-center relative overflow-hidden transition-shadow duration-300 ${isExpanded ? 'shadow-2xl z-20 cursor-default' : 'hover:shadow-xl hover:-translate-y-2 cursor-pointer'}`}
              >
                {/* Close Button (only when expanded) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(null);
                      }}
                      className="absolute top-6 right-6 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brown-dark z-30 shadow-sm hover:bg-white transition-colors"
                    >
                      <X size={16} />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Image Container */}
                <motion.div layout className={`w-full rounded-[1.5rem] overflow-hidden mb-4 relative ${isExpanded ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                  <div className={`absolute inset-0 transition-colors duration-300 z-10 ${isExpanded ? 'bg-transparent' : 'bg-black/5 group-hover:bg-black/20'}`} />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${isExpanded ? 'scale-100' : 'group-hover:scale-105'}`}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Tag */}
                  <motion.div layout className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brown-dark z-20 shadow-sm">
                    {product.tag}
                  </motion.div>

                  {/* Hover Order Button (only when NOT expanded) */}
                  {!isExpanded && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => handleOrder(e, product)}
                        className="px-6 py-3 bg-white text-brown-dark font-medium text-sm rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-brown-dark hover:text-white"
                      >
                        <ShoppingBag size={16} />
                        Order Now
                      </button>
                    </div>
                  )}
                </motion.div>

                {/* Content */}
                <motion.div layout className="w-full flex flex-col items-start px-2">
                  <motion.h3 layout className="text-2xl font-serif font-bold text-brown-dark mb-2">
                    {product.name}
                  </motion.h3>
                  <motion.p layout className={`text-brown-dark/70 text-sm font-light leading-relaxed mb-6 ${isExpanded ? '' : 'line-clamp-2'}`}>
                    {product.description}
                  </motion.p>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full flex flex-col gap-4 mb-6 overflow-hidden"
                      >
                        <div className="bg-white/50 rounded-2xl p-4 border border-brown-dark/5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-brown-dark mb-2 flex items-center gap-2">
                            <Info size={14} className="text-caramel" /> Ingredients
                          </h4>
                          <p className="text-sm font-light text-brown-dark/80 leading-relaxed">
                            {product.ingredients}
                          </p>
                        </div>
                        
                        <div className="bg-white/50 rounded-2xl p-4 border border-brown-dark/5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-brown-dark mb-3">Nutritional Info</h4>
                          <div className="grid grid-cols-4 gap-2 text-center">
                            <div className="flex flex-col">
                              <span className="text-lg font-serif font-bold text-caramel">{product.nutrition.calories}</span>
                              <span className="text-[10px] uppercase tracking-wider text-brown-dark/60 font-medium">Cal</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg font-serif font-bold text-caramel">{product.nutrition.carbs}</span>
                              <span className="text-[10px] uppercase tracking-wider text-brown-dark/60 font-medium">Carbs</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg font-serif font-bold text-caramel">{product.nutrition.fat}</span>
                              <span className="text-[10px] uppercase tracking-wider text-brown-dark/60 font-medium">Fat</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg font-serif font-bold text-caramel">{product.nutrition.protein}</span>
                              <span className="text-[10px] uppercase tracking-wider text-brown-dark/60 font-medium">Protein</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.div layout className="w-full flex items-center justify-between mt-auto pt-2 pb-2">
                    <span className="text-2xl font-serif font-bold text-[#c89f7a]">
                      {product.price}
                    </span>
                    <button 
                      onClick={(e) => handleOrder(e, product)}
                      className={`h-12 rounded-full bg-[#4a3320] text-white flex items-center justify-center hover:bg-[#c89f7a] transition-colors shadow-md duration-300 ${isExpanded ? 'px-6 gap-2' : 'w-12 group-hover:scale-110'}`}
                    >
                      <ShoppingBag size={20} />
                      {isExpanded && <span className="text-sm font-medium">Add to Order</span>}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            to="/menu"
            className="px-8 py-3 rounded-full border border-brown-dark text-brown-dark font-medium text-sm hover:bg-brown-dark hover:text-white transition-all duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
