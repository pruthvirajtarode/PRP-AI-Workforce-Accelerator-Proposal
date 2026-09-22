import React from 'react';
import { motion } from 'framer-motion';
import { departments } from '../data/useCases';

const WorkforceOpportunity = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Should Not Belong Only to the Technology Team.</h2>
          <p className="text-textSecondary max-w-2xl mx-auto mb-6">
            When every department is enabled to utilize generative AI, the entire organization moves faster. Here is where the opportunity lies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110" />
              
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="p-2 rounded-lg bg-surface border border-white/10 group-hover:border-primary/50 transition-colors">
                  <dept.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{dept.name}</h3>
              </div>

              <ul className="space-y-3 relative z-10 flex-grow mb-6">
                {dept.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-textSecondary">
                    <span className="text-secondary mt-1">•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors text-left flex items-center">
                Explore Scenarios <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkforceOpportunity;
