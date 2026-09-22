import React from 'react';
import { motion } from 'framer-motion';

const options = [
  {
    title: "AI Awareness Workshop",
    subtitle: "OPTION 1",
    desc: "Short introductory program for leadership alignment and basic literacy."
  },
  {
    title: "AI Productivity Program",
    subtitle: "OPTION 2",
    desc: "Practical employee enablement for daily tasks and time savings."
  },
  {
    title: "AI Workforce Accelerator",
    subtitle: "OPTION 3",
    desc: "Multi-week structured program with department-specific workflows."
  },
  {
    title: "AI Transformation Program",
    subtitle: "OPTION 4",
    desc: "Comprehensive: Training + Capstone Projects + AI Champions + Measurement."
  }
];

const TrainingOptions = () => {
  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Delivery Options</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Flexible enterprise structures designed to match PRP's goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-6 flex flex-col h-full border-t-4 ${
                idx === 3 ? 'border-t-secondary bg-secondary/5' : 'border-t-white/10'
              }`}
            >
              <span className="text-xs font-bold tracking-widest text-primary mb-2">{opt.subtitle}</span>
              <h3 className="text-lg font-bold text-white mb-4">{opt.title}</h3>
              <p className="text-sm text-textSecondary flex-grow">{opt.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded-lg bg-surface border border-white/10 text-sm font-medium text-white">
            Final scope and commercials to be finalized after discovery.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingOptions;
