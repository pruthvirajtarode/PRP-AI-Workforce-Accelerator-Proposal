import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, UserCheck, Lock, CheckSquare, FileText, Activity } from 'lucide-react';

const principles = [
  { icon: ShieldAlert, title: "DATA PRIVACY", desc: "Do not expose confidential PRP or client information to public LLMs." },
  { icon: UserCheck, title: "HUMAN-IN-THE-LOOP", desc: "Humans approve high-impact actions like finalizing proposals or sending campaigns." },
  { icon: Lock, title: "SECURITY", desc: "Strict role-based access control and secure API integrations." },
  { icon: CheckSquare, title: "ACCURACY", desc: "AI outputs are validated and cross-referenced before utilization." },
  { icon: FileText, title: "GOVERNANCE", desc: "Clear, documented policies on acceptable AI usage for employees." },
  { icon: Activity, title: "AUDITABILITY", desc: "Tracking important AI-assisted actions and monitoring usage patterns." }
];

const ResponsibleAI = () => {
  return (
    <section className="py-24 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI With Control, Not AI Without Guardrails</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col group hover:border-red-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <p.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-textSecondary">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAI;
