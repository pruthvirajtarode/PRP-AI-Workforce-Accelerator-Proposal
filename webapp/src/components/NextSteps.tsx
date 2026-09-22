import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = ["DISCOVER", "ASSESS", "ENABLE", "BUILD", "MEASURE", "SCALE"];

const NextSteps = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Start With Capability.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Build Toward Transformation.
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16 mt-12"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-sm font-bold tracking-widest text-textSecondary px-3 py-1 bg-surface border border-white/10 rounded-full">
                <span className="text-secondary mr-2">0{idx + 1}</span>
                {step}
              </span>
              {idx < steps.length - 1 && <ArrowRight className="mx-2 text-white/20 w-4 h-4 hidden sm:block" />}
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all"
          >
            <span>Start Discovery</span>
          </button>
          
          <Link 
            to="/report"
            className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all"
          >
            <span>Download Executive Report</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSteps;
