import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const DishCard = ({ dish, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative bg-surface rounded-2xl overflow-hidden border border-border cursor-pointer shadow-xl transition-shadow hover:shadow-primary/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Badge */}
        {dish.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
            {dish.badge}
          </div>
        )}

        {/* Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-md text-text-light hover:text-primary transition-all scale-0 group-hover:scale-100 duration-300"
        >
          <Heart size={18} fill={isLiked ? "#E8601C" : "none"} className={isLiked ? "text-primary" : ""} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-playfair font-bold text-text-light group-hover:text-primary transition-colors">
            {dish.name}
          </h3>
          <span className="text-primary font-bold text-lg">${dish.price}</span>
        </div>
        <p className="text-text-muted text-sm line-clamp-2">
          {dish.description}
        </p>
      </div>
    </motion.div>
  );
};

export default DishCard;
