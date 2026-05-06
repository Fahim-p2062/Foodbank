import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface relative overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Flame className="text-primary w-8 h-8" />
              <span className="text-2xl font-playfair font-bold tracking-tight">
                EMBER <span className="text-primary">&</span> SALT
              </span>
            </Link>
            <p className="text-text-muted leading-relaxed max-w-xs">
              Experience the art of wood-fired cuisine in an atmosphere where fire meets flavor. A culinary journey like no other.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-light hover:bg-primary hover:border-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-light hover:bg-primary hover:border-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-light hover:bg-primary hover:border-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-text-light">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-text-light">Contact</h4>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>123 Culinary Ave, Smoke District,<br />Gastronomy City, GC 45678</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 (555) 888-FIRE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>hello@embersalt.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-text-light">Hours</h4>
            <ul className="space-y-3 text-text-muted">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-text-light">5 PM - 10 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-text-light">5 PM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-text-light">4 PM - 9 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-border">
                <p className="text-xs italic">* Brunch served Sat & Sun: 11 AM - 3 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative h-[1px] w-full bg-border overflow-hidden mb-8">
          <motion.div
            initial={{ left: '-100%' }}
            whileInView={{ left: '100%' }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-text-muted text-sm gap-4">
          <p>© {new Date().getFullYear()} Ember & Salt. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
    </footer>
  );
};

export default Footer;
