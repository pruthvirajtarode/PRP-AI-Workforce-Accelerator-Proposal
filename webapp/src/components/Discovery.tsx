import React from 'react';
import { motion } from 'framer-motion';

const Discovery = () => {
  return (
    <section className="py-24 bg-surface/30" id="discovery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Discovery Call</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">Where the real opportunity will be identified.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "PEOPLE",
              items: ["Number of employees", "Departments", "Current skills", "AI exposure"]
            },
            {
              title: "PROCESS",
              items: ["Repetitive workflows", "Manual tasks", "Bottlenecks", "Reporting"]
            },
            {
              title: "TECHNOLOGY",
              items: ["Current AI tools", "CRM", "ERP", "APIs", "Security"]
            },
            {
              title: "BUSINESS",
              items: ["Priorities", "Productivity goals", "Customer experience", "Innovation"]
            }
          ].map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-t-4 border-t-primary"
            >
              <h3 className="text-lg font-bold tracking-widest text-white mb-6">{pillar.title}</h3>
              <ul className="space-y-3 text-textSecondary text-sm">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discovery;
