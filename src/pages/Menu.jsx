import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuData } from '../data/menuData';
import DishCard from '../components/DishCard';
import DishModal from '../components/DishModal';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Taste the Fire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-playfair font-bold text-text-light mb-8"
          >
            The Menu
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>

        {/* Sticky Category Tabs */}
        <div className="sticky top-24 z-30 mb-16 py-4 bg-background/80 backdrop-blur-md border-y border-border">
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-sm uppercase tracking-widest font-bold transition-colors ${
                  activeCategory === category ? "text-primary" : "text-text-muted hover:text-text-light"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dish Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {menuData[activeCategory].map((dish, index) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <DishCard
                  dish={dish}
                  onClick={() => setSelectedDish(dish)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dish Modal */}
        <DishModal
          dish={selectedDish}
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
        />

        {/* Footer Info */}
        <div className="mt-32 p-12 bg-surface rounded-3xl border border-border text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair font-bold text-text-light mb-4">Dietary Requirements?</h3>
          <p className="text-text-muted mb-8">
            Our kitchen handles nuts, gluten, and dairy. Please inform your server of any allergies. 
            Vegan and gluten-free options are marked, and many dishes can be modified upon request.
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-text-muted">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" /> Vegetarian</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500" /> Gluten Free</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500" /> Spicy</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
