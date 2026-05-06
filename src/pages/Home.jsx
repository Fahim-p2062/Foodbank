import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import DishCard from '../components/DishCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { stats, menuData } from '../data/menuData';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const featuredDishes = [
    menuData.Mains[0],
    menuData.Starters[0],
    menuData.Mains[1]
  ];

  const bannerRef = useRef(null);
  const { scrollYProgress: bannerScroll } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });
  const bannerY = useTransform(bannerScroll, [0, 1], ["-20%", "20%"]);

  const headline = "Where Fire Meets Flavor";
  const headlineWords = headline.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920')` }}
          />
          <div className="noise-overlay opacity-20" />
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          {[
            { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400", top: "15%", left: "10%", delay: 0 },
            { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400", top: "60%", left: "15%", delay: 1 },
            { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400", top: "20%", right: "12%", delay: 0.5 },
            { src: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=400", top: "65%", right: "10%", delay: 1.5 },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.6, 
                scale: 1,
                y: [0, -20, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: img.delay },
                scale: { duration: 1, delay: img.delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: img.delay }
              }}
              style={{ top: img.top, left: img.left, right: img.right }}
              className="absolute w-48 h-48 rounded-full border-2 border-primary/20 p-2"
            >
              <img src={img.src} alt="" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-text-light mb-6 overflow-hidden flex flex-wrap justify-center gap-x-4">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl text-text-muted font-dm max-w-2xl mx-auto mb-12"
            >
              A modern bistro where ancestral techniques meet avant-garde flavors. Plated with purpose, served with fire.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/menu"
                className="group px-8 py-4 bg-primary text-background font-bold uppercase tracking-widest rounded-sm flex items-center gap-3 hover:bg-accent transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Explore Menu
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/reservations"
                className="group px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest rounded-sm flex items-center gap-3 hover:bg-primary hover:text-background transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Book a Table
                <Play size={16} className="fill-current" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface border-y border-border py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted uppercase tracking-widest text-xs font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Chef's Selection
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold text-text-light relative">
                Tonight's Signatures
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-4 left-0 h-1 bg-primary/30"
                />
              </h2>
            </div>
            <Link to="/menu" className="group flex items-center gap-3 text-text-light font-bold uppercase tracking-widest hover:text-primary transition-colors">
              See Full Menu
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface/30">
        <div className="container mx-auto px-6 mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Guest Stories
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-text-light">
            Voices of Ember & Salt
          </h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Full-Width CTA Banner */}
      <section ref={bannerRef} className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: bannerY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-background/60 z-10" />
          <div 
            className="w-full h-[140%] bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550966842-2849a2212971?auto=format&fit=crop&q=80&w=1920')` }}
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-playfair font-bold text-text-light mb-12 leading-tight">
              Ready for an <span className="italic text-accent">Unforgettable</span> Evening?
            </h2>
            <Link
              to="/reservations"
              className="inline-block px-12 py-6 bg-primary text-background font-bold uppercase tracking-[0.2em] text-lg hover:bg-accent transition-all duration-300 rounded-sm shadow-[0_0_50px_rgba(232,96,28,0.2)]"
            >
              Reserve Now
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
