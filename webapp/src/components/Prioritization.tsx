import React, { useState } from 'react';
import { motion } from 'framer-motion';

const quadrants = [
  {
    title: "QUICK WINS",
    desc: "High Value, Low Complexity",
    color: "border-secondary/50 bg-secondary/10",
    textColor: "text-secondary",
    items: ["Email assistance", "Document summarization", "Meeting summaries", "Automated reports", "Knowledge search"]
  },
  {
    title: "STRATEGIC",
    desc: "High Value, High Complexity",
    color: "border-primary/50 bg-primary/10",
    textColor: "text-primary",
    items: ["AI sales copilot", "AI support copilot", "AI lead intelligence", "Internal RAG assistant"]
  },
  {
    title: "INCREMENTAL",
    desc: "Low Value, Low Complexity",
    color: "border-white/20 bg-white/5",
    textColor: "text-white/80",
    items: ["Basic grammar checking", "Simple Q&A", "Formatting data"]
  },
  {
    title: "ADVANCED (LONG TERM)",
    desc: "Low Initial Value, High Complexity",
    color: "border-orange-500/30 bg-orange-500/10",
    textColor: "text-orange-400",
    items: ["AI agents", "Voice intelligence integration", "Intelligent CRM routing"]
  }
];

const Prioritization = () => {
  return (
    <section className="py-24 border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Use-Case Prioritization Matrix</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Mapping out the execution strategy to ensure rapid ROI while building long-term capability.
          </p>
        </div>

        <div className="relative">
          {/* Axis Labels */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-xs font-bold tracking-widest text-textSecondary hidden md:block">
            BUSINESS VALUE →
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest text-textSecondary hidden md:block">
            IMPLEMENTATION COMPLEXITY →
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full max-w-[800px] mx-auto">
            
            {/* Top Left: Quick Wins (High Value, Low Complexity) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`p-6 rounded-xl border ${quadrants[0].color} flex flex-col h-full`}>
              <h3 className={`text-xl font-bold mb-1 ${quadrants[0].textColor}`}>{quadrants[0].title}</h3>
              <p className="text-xs text-white/50 mb-4">{quadrants[0].desc}</p>
              <ul className="space-y-2 mt-auto">
                {quadrants[0].items.map((item, i) => (
                  <li key={i} className="text-sm font-medium text-white flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Top Right: Strategic (High Value, High Complexity) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={`p-6 rounded-xl border ${quadrants[1].color} flex flex-col h-full`}>
              <h3 className={`text-xl font-bold mb-1 ${quadrants[1].textColor}`}>{quadrants[1].title}</h3>
              <p className="text-xs text-white/50 mb-4">{quadrants[1].desc}</p>
              <ul className="space-y-2 mt-auto">
                {quadrants[1].items.map((item, i) => (
                  <li key={i} className="text-sm font-medium text-white flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bottom Left: Incremental (Low Value, Low Complexity) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className={`p-6 rounded-xl border ${quadrants[2].color} flex flex-col h-full`}>
              <h3 className={`text-xl font-bold mb-1 ${quadrants[2].textColor}`}>{quadrants[2].title}</h3>
              <p className="text-xs text-white/50 mb-4">{quadrants[2].desc}</p>
              <ul className="space-y-2 mt-auto">
                {quadrants[2].items.map((item, i) => (
                  <li key={i} className="text-sm font-medium text-white/80 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bottom Right: Advanced (Low Value initially, High Complexity) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className={`p-6 rounded-xl border ${quadrants[3].color} flex flex-col h-full`}>
              <h3 className={`text-xl font-bold mb-1 ${quadrants[3].textColor}`}>{quadrants[3].title}</h3>
              <p className="text-xs text-white/50 mb-4">{quadrants[3].desc}</p>
              <ul className="space-y-2 mt-auto">
                {quadrants[3].items.map((item, i) => (
                  <li key={i} className="text-sm font-medium text-white flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Prioritization;
