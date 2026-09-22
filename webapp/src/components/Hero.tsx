import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { companyData } from '../data/company';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-textSecondary uppercase">AI Workforce Transformation • 2026</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              PRP AI Workforce <span className="glow-text">Accelerator</span>
            </h1>
            
            <p className="text-xl text-textSecondary mb-8">
              {companyData.tagline}
            </p>
            
            <p className="text-lg text-textSecondary/80 mb-10 max-w-xl">
              {companyData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all"
              >
                <span>Start Discovery</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById('opportunity')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all"
              >
                <span>Explore the Opportunity</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center hidden lg:flex"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
               <div className="h-full w-full flex flex-col justify-between items-center py-8">
                  {[
                    { label: "EMPLOYEES", delay: 0 },
                    { label: "AI SKILLS", delay: 0.2 },
                    { label: "AI TOOLS", delay: 0.4 },
                    { label: "AI WORKFLOWS", delay: 0.6 },
                    { label: "AI PROJECTS", delay: 0.8 },
                    { label: "BUSINESS IMPACT", delay: 1, highlight: true }
                  ].map((node, idx) => (
                    <React.Fragment key={node.label}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: node.delay + 0.5 }}
                        className={`w-64 py-3 rounded-lg border text-center font-medium tracking-wide text-sm
                          ${node.highlight 
                            ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,89,179,0.5)]' 
                            : 'bg-surface/50 border-white/10 text-textSecondary'}`}
                      >
                        {node.label}
                      </motion.div>
                      {idx < 5 && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 24 }}
                          transition={{ delay: node.delay + 0.6 }}
                          className="w-px bg-gradient-to-b from-white/20 to-secondary/50 my-1"
                        />
                      )}
                    </React.Fragment>
                  ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
