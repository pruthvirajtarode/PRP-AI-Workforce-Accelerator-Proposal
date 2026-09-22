import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, XCircle } from 'lucide-react';

const currentStates = [
  "Manual lead research",
  "Manual reporting & dashboards",
  "Repeated email drafting",
  "Tedious spreadsheet formatting",
  "Searching scattered documents",
  "Manual follow-ups",
  "Taking meeting notes manually",
  "Repeated customer responses",
  "Disconnected information silos"
];

const futureStates = [
  "AI-assisted deep research",
  "Automated intelligent reports",
  "AI email drafting & context",
  "Intelligent data analysis",
  "AI knowledge search (RAG)",
  "Automated follow-up sequences",
  "Meeting intelligence & actions",
  "AI support copilots",
  "Connected organizational knowledge"
];

const CurrentFuture = () => {
  return (
    <section className="py-24 bg-surface/30 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
          
          {/* Current State */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-8 border-red-500/20 bg-red-950/10"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center text-red-400">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
              CURRENT STATE
            </h3>
            <ul className="space-y-4">
              {currentStates.map((state, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-textSecondary">
                  <XCircle className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                  <span className="text-sm">{state}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Divider */}
          <div className="flex flex-col items-center justify-center py-4 md:py-0">
            <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="my-4 p-4 rounded-full bg-gradient-to-b from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center relative z-20"
            >
              <ArrowDown className="text-white w-6 h-6 md:-rotate-90" />
            </motion.div>
            <div className="hidden md:block w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          {/* Future State */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-8 border-secondary/30 bg-secondary/5 shadow-[0_0_30px_rgba(0,229,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
            <h3 className="text-xl font-bold mb-6 flex items-center text-secondary relative z-10">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse" />
              AI ENABLED FUTURE
            </h3>
            <ul className="space-y-4 relative z-10">
              {futureStates.map((state, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{state}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CurrentFuture;
