import React from 'react';
import { motion } from 'framer-motion';
import { roadmap } from '../data/roadmap';

const Roadmap = () => {
  return (
    <section className="py-24 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Roadmap</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {roadmap.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center glass-card p-4 md:p-6"
            >
              <div className="w-24 shrink-0 text-center">
                <span className="text-xs font-bold text-secondary tracking-widest">{step.phase}</span>
              </div>
              <div className="w-px h-12 bg-white/10 mx-4 md:mx-8 hidden sm:block" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-textSecondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
