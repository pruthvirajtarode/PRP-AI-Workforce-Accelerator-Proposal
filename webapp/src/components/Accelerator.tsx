import React from 'react';
import { motion } from 'framer-motion';

const levels = [
  { level: 1, title: 'AI AWARENESS', desc: 'Understand AI.' },
  { level: 2, title: 'AI PRODUCTIVITY', desc: 'Use AI every day.' },
  { level: 3, title: 'DEPARTMENT AI', desc: 'Apply AI to real workflows.' },
  { level: 4, title: 'AI AUTOMATION', desc: 'Build repeatable workflows.' },
  { level: 5, title: 'AI INNOVATION', desc: 'Create AI solutions.' }
];

const Accelerator = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Workforce Accelerator</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A structured, 5-level architecture to move employees from basic awareness to independent innovation.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting nodes */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-ml-px w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          {levels.map((level, index) => (
            <div key={level.level} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-[19px] md:left-1/2 md:-ml-[9px] w-[18px] h-[18px] rounded-full bg-background border-4 border-secondary z-10" />
              
              <div className="pl-16 md:pl-0 w-full md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`glass-card p-6 md:p-8 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                >
                  <div className="text-primary text-sm font-bold tracking-widest mb-2">
                    LEVEL {level.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{level.title}</h3>
                  <p className="text-textSecondary">{level.desc}</p>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accelerator;
