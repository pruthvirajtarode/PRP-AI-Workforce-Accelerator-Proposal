import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { curriculum } from '../data/curriculum';

const Curriculum = () => {
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <section className="py-24 bg-surface/30 border-y border-white/5" id="curriculum">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Curriculum</h2>
          <p className="text-textSecondary">A comprehensive 12-module journey designed for practical business application.</p>
        </div>

        <div className="space-y-4">
          {curriculum.map((module, index) => (
            <motion.div 
              key={module.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-secondary font-mono font-bold">{module.id}</span>
                  <span className="text-lg font-semibold text-white">{module.title}</span>
                </div>
                {openModule === module.id ? <Minus className="text-primary" /> : <Plus className="text-textSecondary" />}
              </button>
              
              <AnimatePresence>
                {openModule === module.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10"
                  >
                    <div className="px-6 py-5 bg-black/20">
                      <h4 className="text-xs font-bold text-textSecondary uppercase tracking-widest mb-3">Topics Covered:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-textSecondary">
                            <span className="text-primary mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
