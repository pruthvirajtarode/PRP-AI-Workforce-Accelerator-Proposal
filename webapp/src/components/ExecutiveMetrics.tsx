import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Lightbulb, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: Brain,
    title: "AI READINESS",
    value: "Assess → Enable → Measure",
    delay: 0.1
  },
  {
    icon: Zap,
    title: "PRODUCTIVITY",
    value: "AI-assisted workflows",
    delay: 0.2
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    value: "Employee-led AI use cases",
    delay: 0.3
  },
  {
    icon: TrendingUp,
    title: "ADOPTION",
    value: "From awareness to daily usage",
    delay: 0.4
  }
];

const ExecutiveMetrics = () => {
  return (
    <section className="py-12 border-y border-white/10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: metric.delay, duration: 0.5 }}
              className={`pt-6 md:pt-0 ${index !== 0 ? 'md:pl-8' : ''}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <metric.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-textSecondary uppercase">{metric.title}</h3>
              </div>
              <p className="text-lg font-medium text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveMetrics;
