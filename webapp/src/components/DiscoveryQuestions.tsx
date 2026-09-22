import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { discoveryQuestions } from '../data/discovery';

const DiscoveryQuestions = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(discoveryQuestions[0].category);

  return (
    <section className="py-24 border-y border-white/5 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Discovery Questionnaire</h2>
        </div>

        <div className="space-y-4">
          {discoveryQuestions.map((cat, index) => (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold tracking-widest text-white">{cat.category}</span>
                {openCategory === cat.category ? <Minus className="text-secondary" /> : <Plus className="text-textSecondary" />}
              </button>
              
              <AnimatePresence>
                {openCategory === cat.category && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10"
                  >
                    <div className="px-6 py-5 bg-black/20">
                      <ul className="space-y-4">
                        {cat.questions.map((q, i) => (
                          <li key={i} className="flex items-start space-x-3 text-textSecondary">
                            <span className="text-secondary mt-1">Q{i + 1}.</span>
                            <span>{q}</span>
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

export default DiscoveryQuestions;
