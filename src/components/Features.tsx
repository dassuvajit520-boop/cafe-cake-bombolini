import { motion } from 'motion/react';
import { Leaf, Heart, Clock } from 'lucide-react';

const features = [
  {
    icon: <Leaf size={24} className="text-caramel" />,
    title: "Fresh Ingredients",
    description: "We use only the finest, locally sourced ingredients for our dough and fillings.",
    bgColor: "bg-hero-bg"
  },
  {
    icon: <Heart size={24} className="text-caramel" />,
    title: "Made with Love",
    description: "Every bomboloni is handcrafted with passion and care by our expert bakers.",
    bgColor: "bg-white"
  },
  {
    icon: <Clock size={24} className="text-caramel" />,
    title: "Baked Daily",
    description: "Fresh out of the oven every morning to ensure maximum softness and flavor.",
    bgColor: "bg-white"
  }
];

export default function Features() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start ${feature.bgColor}`}
          >
            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6 shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-xl font-serif font-semibold text-brown-dark mb-3">
              {feature.title}
            </h3>
            <p className="text-brown-dark/70 text-sm leading-relaxed font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
