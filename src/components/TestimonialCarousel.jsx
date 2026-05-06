import { motion } from 'framer-motion';
import { testimonials } from '../data/menuData';
import { Star } from 'lucide-react';

const TestimonialCarousel = () => {
  // Double the testimonials for infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -100 * testimonials.length + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubledTestimonials.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-[400px] bg-surface p-10 rounded-2xl border border-border"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(item.stars)].map((_, i) => (
                <Star key={i} size={16} fill="#F5C842" className="text-accent" />
              ))}
            </div>
            <p className="text-xl font-playfair italic text-text-light mb-8 leading-relaxed">
              "{item.quote}"
            </p>
            <div>
              <h4 className="font-bold text-text-light">{item.name}</h4>
              <p className="text-sm text-primary uppercase tracking-widest">{item.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
