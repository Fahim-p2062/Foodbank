import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Culinary Ave, Smoke District, GC 45678",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 888-FIRE",
      link: "tel:+15558883473"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@embersalt.com",
      link: "mailto:hello@embersalt.com"
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: "Mon-Sun: 5:00 PM - 11:00 PM",
      link: "/reservations"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Info */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-playfair font-bold text-text-light mb-12"
            >
              Find the <span className="italic text-accent">Flame</span>.
            </motion.h1>

            <div className="space-y-8 mb-16">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 p-8 bg-surface rounded-2xl border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center border border-border group-hover:bg-primary transition-colors">
                    <info.icon size={24} className="text-primary group-hover:text-background transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1 block">
                      {info.label}
                    </span>
                    <p className="text-xl text-text-light font-playfair">{info.value}</p>
                  </div>
                  <ArrowUpRight className="text-text-muted group-hover:text-primary transition-colors" size={24} />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Follow the Smoke:</span>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-light hover:bg-primary hover:border-primary transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2 h-[600px] lg:h-auto rounded-3xl overflow-hidden border border-border relative"
          >
            {/* Google Maps Iframe Placeholder */}
            <iframe
              title="Ember & Salt Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450937!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus"
              className="w-full h-full grayscale contrast-125 invert-[0.85] hue-rotate-[180deg]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
            
            {/* Map Overlay Overlay */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-background/20" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
