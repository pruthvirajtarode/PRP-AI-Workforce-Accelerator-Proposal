import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, FastForward, TrendingUp, Users, Lightbulb } from 'lucide-react';

const impacts = [
  { label: "TIME SAVED", icon: Clock },
  { label: "ERROR REDUCTION", icon: AlertTriangle },
  { label: "FASTER DECISIONS", icon: FastForward },
  { label: "PRODUCTIVITY", icon: TrendingUp },
  { label: "AI ADOPTION", icon: Users },
  { label: "INNOVATION", icon: Lightbulb }
];

const Impact = () => {
  return (
    <section className="py-24 border-y border-white/5" id="measurement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Impact Measurement</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            We do not invent ROI. We build the measurement framework to validate it.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-12 text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-bold tracking-wider">
            {impacts.map((impact, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center space-x-2 text-white">
                  <impact.icon className="w-5 h-5 text-primary" />
                  <span>{impact.label}</span>
                </div>
                {idx < impacts.length - 1 && <span className="text-white/30 hidden md:block">+</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: "AI ADOPTION", desc: "Active AI users", val: "TBD" },
            { title: "PRODUCTIVITY", desc: "Time saved", val: "TBD" },
            { title: "AUTOMATION", desc: "Workflows created", val: "TBD" },
            { title: "INNOVATION", desc: "Use cases developed", val: "TBD" },
            { title: "SKILL", desc: "Pre/post assessment", val: "TBD" },
            { title: "IMPACT", desc: "Validated outcomes", val: "TBD" }
          ].map((kpi, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <div className="text-[10px] text-textSecondary font-bold tracking-widest mb-1">{kpi.title}</div>
              <div className="text-xs text-white mb-4 h-8">{kpi.desc}</div>
              <div className="text-2xl font-bold text-secondary">{kpi.val}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-textSecondary italic">* All numerical values are illustrative and "To be measured" against the baseline established during discovery.</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
