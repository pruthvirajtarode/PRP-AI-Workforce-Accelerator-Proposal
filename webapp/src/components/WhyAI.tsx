import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, Users } from 'lucide-react';

const WhyAI = () => {
  return (
    <section className="py-24 relative" id="opportunity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AI. Why Now.</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Globe className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">THE MARKET IS CHANGING</h3>
            <p className="text-textSecondary leading-relaxed">
              AI is fundamentally changing how teams communicate, sell, support customers, analyze information, and build software. Falling behind on workforce enablement means losing competitive velocity.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <Building2 className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">PRP HAS THE FOUNDATION</h3>
            <p className="text-textSecondary leading-relaxed">
              PRP already works with AI Chatbots, Voicebots, Customer Engagement, WhatsApp API, Cloud Telephony, and Lead Management. The technological infrastructure is already in place.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">THE WORKFORCE LAYER</h3>
            <p className="text-textSecondary leading-relaxed">
              Technology creates value only when employees know how to use it effectively. The next frontier is empowering the people behind the platform with AI capabilities.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-card p-6 md:p-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-lg font-semibold tracking-wide">
            <div className="text-primary">PRP PLATFORM</div>
            <div className="text-white/30 hidden md:block">+</div>
            <div className="text-secondary">PRP PEOPLE</div>
            <div className="text-white/30 hidden md:block">+</div>
            <div className="text-white">AI CAPABILITY</div>
            <div className="text-white/30 hidden md:block">=</div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl font-bold">
              AI-READY ORGANIZATION
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAI;
