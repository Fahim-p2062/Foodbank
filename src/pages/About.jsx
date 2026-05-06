import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { team, timeline } from '../data/menuData';

const About = () => {
  const introRef = useRef(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });
  const introY = useTransform(introScroll, [0, 1], ["0%", "30%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background"
    >
      {/* Cinematic Intro */}
      <section ref={introRef} className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: introY }} className="h-full w-full">
            <div className="absolute inset-0 bg-background/50 z-10" />
            <div 
              className="w-full h-[120%] bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577214495773-55739cfbe46c?auto=format&fit=crop&q=80&w=1920')` }}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-playfair font-bold text-text-light mb-12 leading-tight"
            >
              Born From <span className="italic text-accent">Passion</span>,<br />
              Plated With Purpose.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-xl text-text-muted max-w-2xl leading-relaxed"
            >
              <p>
                Founded in 2012 by Chef Julian Valez, Ember & Salt began as a humble experiment in wood-fired gastronomy. 
                What started with a single hand-built brick oven has evolved into a global destination for those seeking 
                authenticity and innovation on the same plate.
              </p>
              <p>
                We believe that fire is the most honest way to cook. It requires patience, respect, and an intimate 
                understanding of the ingredients. Every dish we serve is a testament to this philosophy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-text-light mb-4">Our Evolution</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border" />
            
            <div className="space-y-32">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex items-center ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  {/* Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(232,96,28,0.8)] z-10" />
                  
                  {/* Content */}
                  <div className={`w-1/2 ${i % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}>
                    <span className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-4 block">{item.year}</span>
                    <h3 className="text-2xl font-bold text-text-light mb-4 uppercase tracking-widest">{item.title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">The Artisans</span>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold text-text-light">Masters of the Flame</h2>
            </div>
            <p className="text-text-muted max-w-md text-lg">
              Our team is a collective of visionaries, each bringing their unique expertise to the hearth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl font-playfair font-bold text-text-light mb-1">{member.name}</h4>
                <p className="text-primary uppercase tracking-[0.2em] text-xs font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-accent text-6xl font-playfair italic mb-8 block">"</span>
            <p className="text-3xl md:text-5xl font-playfair font-bold text-text-light mb-8 leading-tight">
              We don't just cook food; we craft memories that linger like the scent of burning cedar.
            </p>
            <p className="text-text-muted uppercase tracking-widest font-bold">— Chef Julian Valez</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
