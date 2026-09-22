import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aiLabs } from '../data/aiLabs';
import { ChevronDown, Beaker } from 'lucide-react';

const AILabs = () => {
  const [activeLab, setActiveLab] = useState<string | null>(null);

  return (
    <section className="py-24 bg-surface/30 border-y border-white/5" id="labs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Beaker className="text-secondary w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold">PRP-Specific AI Labs</h2>
            </div>
            <p className="text-textSecondary text-lg">From Training to Working Prototypes. Employees build real solutions during the Capstone phase.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiLabs.map((lab, index) => (
            <motion.div 
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card overflow-hidden transition-all duration-300 ${activeLab === lab.id ? 'ring-1 ring-secondary shadow-[0_0_20px_rgba(0,229,255,0.15)]' : ''}`}
            >
              <button 
                onClick={() => setActiveLab(activeLab === lab.id ? null : lab.id)}
                className="w-full text-left p-6 flex flex-col h-full focus:outline-none"
              >
                <span className="text-secondary font-mono text-sm mb-3">LAB {lab.id}</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{lab.title}</h3>
                <div className="mt-auto flex items-center text-xs text-textSecondary uppercase tracking-wider font-semibold">
                  <span>View Details</span>
                  <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${activeLab === lab.id ? 'rotate-180 text-secondary' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {activeLab === lab.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10 bg-black/20"
                  >
                    <div className="p-6 space-y-4 text-sm text-textSecondary">
                      {lab.purpose && (
                        <div>
                          <strong className="block text-white mb-1">Purpose:</strong>
                          {lab.purpose}
                        </div>
                      )}
                      {lab.architecture && (
                        <div>
                          <strong className="block text-white mb-1">Architecture:</strong>
                          <div className="font-mono text-xs bg-black/40 p-2 rounded text-primary">{lab.architecture}</div>
                        </div>
                      )}
                      {lab.input && (
                        <div>
                          <strong className="block text-white mb-1">Input:</strong>
                          {lab.input}
                        </div>
                      )}
                      {lab.output && (
                        <div>
                          <strong className="block text-white mb-1">Output:</strong>
                          <ul className="list-disc pl-4 space-y-1">
                            {lab.output.map((out, i) => (
                              <li key={i}>{out}</li>
                            ))}
                          </ul>
                        </div>
                      )}
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

export default AILabs;
