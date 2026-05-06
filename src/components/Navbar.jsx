import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border py-4' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <Flame className="text-primary w-8 h-8 transition-transform group-hover:scale-110" />
          <span className="text-2xl font-playfair font-bold tracking-tight">
            EMBER <span className="text-primary">&</span> SALT
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group text-sm uppercase tracking-widest font-medium text-text-light/90 hover:text-text-light transition-colors"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"
                initial={false}
                animate={location.pathname === link.path ? { width: '100%' } : {}}
              />
            </Link>
          ))}
          <Link
            to="/reservations"
            className="px-6 py-2.5 bg-primary text-background font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-accent transition-all relative overflow-hidden group shadow-[0_0_20px_rgba(232,96,28,0.3)] hover:shadow-[0_0_25px_rgba(245,200,66,0.5)]"
          >
            <span className="relative z-10">Reserve a Table</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-light p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-background flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-8 right-6 text-text-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="text-4xl font-playfair font-bold text-text-light hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/reservations"
                className="px-8 py-4 bg-primary text-background font-bold text-lg uppercase tracking-widest rounded-sm"
              >
                Book a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
