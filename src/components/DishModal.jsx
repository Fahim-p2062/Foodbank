import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Leaf, Flame } from 'lucide-react';

const DishModal = ({ dish, isOpen, onClose }) => {
  if (!dish) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="relative w-full max-w-4xl bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/50 text-text-light hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="mb-8">
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
                  {dish.badge || "Signature Dish"}
                </span>
                <h2 className="text-4xl font-playfair font-bold text-text-light mb-4">
                  {dish.name}
                </h2>
                <p className="text-2xl text-accent font-bold">${dish.price}</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 text-text-light font-bold mb-3 uppercase tracking-wider text-sm">
                    <Info size={16} className="text-primary" />
                    Description
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {dish.ingredients && (
                  <div>
                    <h4 className="flex items-center gap-2 text-text-light font-bold mb-3 uppercase tracking-wider text-sm">
                      <Flame size={16} className="text-primary" />
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients.map((ing) => (
                        <span key={ing} className="px-3 py-1 bg-background border border-border rounded-full text-xs text-text-muted">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {dish.allergens && dish.allergens.length > 0 && (
                  <div className="pt-6 border-t border-border">
                    <h4 className="flex items-center gap-2 text-text-light font-bold mb-3 uppercase tracking-wider text-sm">
                      <Leaf size={16} className="text-accent" />
                      Allergen Information
                    </h4>
                    <p className="text-xs text-text-muted italic">
                      Contains: {dish.allergens.join(", ")}
                    </p>
                  </div>
                )}

                <div className="pt-8">
                  <button
                    onClick={onClose}
                    className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest hover:bg-accent transition-colors rounded-sm"
                  >
                    Back to Menu
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DishModal;
