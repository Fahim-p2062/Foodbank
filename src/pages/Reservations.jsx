import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare, CheckCircle2, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Confetti burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E8601C', '#F5C842', '#0D0A07']
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Secure Your Table
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-playfair font-bold text-text-light mb-8"
            >
              Reservations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-xl max-w-2xl mx-auto"
            >
              Join us for an evening of culinary artistry. For parties larger than 8, 
              please contact us directly at <span className="text-primary font-bold">+1 (555) 888-FIRE</span>.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface rounded-3xl border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden group"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 border border-primary/20 rounded-3xl group-hover:border-primary/50 transition-colors duration-500" />
                
                <form onSubmit={handleSubmit} className="relative z-10">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {/* Name */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-background border border-border rounded-lg px-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-background border border-border rounded-lg px-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Date */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                        <input
                          required
                          type="date"
                          className="w-full bg-background border border-border rounded-lg pl-14 pr-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </motion.div>

                    {/* Time */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Time</label>
                      <div className="relative">
                        <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                        <select className="w-full bg-background border border-border rounded-lg pl-14 pr-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors appearance-none">
                          <option>5:00 PM</option>
                          <option>6:00 PM</option>
                          <option>7:00 PM</option>
                          <option>8:00 PM</option>
                          <option>9:00 PM</option>
                        </select>
                      </div>
                    </motion.div>

                    {/* Party Size */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                        <select className="w-full bg-background border border-border rounded-lg pl-14 pr-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors appearance-none">
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5 Guests</option>
                          <option>6 Guests</option>
                          <option>7 Guests</option>
                          <option>8 Guests</option>
                        </select>
                      </div>
                    </motion.div>

                    {/* Special Requests */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Special Requests</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-6 top-6 text-primary" size={20} />
                        <textarea
                          rows={4}
                          placeholder="Allergies, special occasions, or table preferences..."
                          className="w-full bg-background border border-border rounded-lg pl-14 pr-6 py-4 text-text-light focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.div variants={itemVariants} className="md:col-span-2 pt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-6 bg-primary text-background font-bold uppercase tracking-[0.3em] rounded-lg hover:bg-accent transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                      >
                        <AnimatePresence mode="wait">
                          {isLoading ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-3"
                            >
                              <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                              Processing...
                            </motion.div>
                          ) : (
                            <motion.span
                              key="text"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Confirm Reservation
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-surface rounded-3xl border border-primary/30 p-16 text-center shadow-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle2 size={48} className="text-primary" />
                </motion.div>
                <h2 className="text-4xl font-playfair font-bold text-text-light mb-4">Table Confirmed!</h2>
                <p className="text-text-muted text-xl mb-12 max-w-md mx-auto">
                  We've sent a confirmation email to your inbox. We look forward to seeing you at Ember & Salt.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 border border-border text-text-light hover:bg-surface-light transition-colors rounded-sm uppercase tracking-widest text-sm font-bold"
                >
                  Make Another Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Additional Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border">
                <Flame size={20} className="text-primary" />
              </div>
              <h4 className="font-bold text-text-light mb-2 uppercase tracking-widest text-sm">Dress Code</h4>
              <p className="text-text-muted text-sm italic">Smart Casual / Upscale</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border">
                <Users size={20} className="text-primary" />
              </div>
              <h4 className="font-bold text-text-light mb-2 uppercase tracking-widest text-sm">Private Events</h4>
              <p className="text-text-muted text-sm italic">Available for buyout</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 border border-border">
                <Clock size={20} className="text-primary" />
              </div>
              <h4 className="font-bold text-text-light mb-2 uppercase tracking-widest text-sm">Grace Period</h4>
              <p className="text-text-muted text-sm italic">15 minute hold</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reservations;
