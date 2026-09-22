import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, ShieldCheck, Zap, User } from 'lucide-react';

const layers = [
  {
    name: "LAYER 1: EMPLOYEE EXPERIENCE",
    items: ["AI Assistant", "AI Copilot", "AI Dashboard"],
    icon: User,
    color: "from-white/20 to-white/5",
    textColor: "text-white"
  },
  {
    name: "LAYER 2: AI SERVICES",
    items: ["LLM", "RAG", "Document Intelligence", "Predictive Analytics", "AI Agents"],
    icon: Zap,
    color: "from-secondary/20 to-secondary/5",
    textColor: "text-secondary"
  },
  {
    name: "LAYER 3: AUTOMATION",
    items: ["Workflow", "Notifications", "Approvals", "Integrations"],
    icon: Layers,
    color: "from-primary/20 to-primary/5",
    textColor: "text-primary"
  },
  {
    name: "LAYER 4: DATA",
    items: ["CRM", "ERP", "Documents", "Excel", "Email", "Database", "APIs"],
    icon: Database,
    color: "from-white/10 to-transparent",
    textColor: "text-textSecondary"
  },
  {
    name: "LAYER 5: GOVERNANCE",
    items: ["RBAC", "Audit Logs", "Privacy", "Security", "Human Approval"],
    icon: ShieldCheck,
    color: "from-red-500/20 to-red-500/5",
    textColor: "text-red-400"
  }
];

const Architecture = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise AI Architecture</h2>
          <p className="text-textSecondary max-w-2xl mx-auto italic">
            "AI should augment PRP's existing systems rather than unnecessarily replace them."
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 border-l-4 ${
                index === 1 ? 'border-l-secondary' : index === 2 ? 'border-l-primary' : index === 4 ? 'border-l-red-500' : 'border-l-white/20'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <div className={`p-2 rounded-lg bg-white/5 ${layer.textColor}`}>
                    <layer.icon size={20} />
                  </div>
                  <h3 className={`font-bold tracking-wider text-sm ${layer.textColor}`}>{layer.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {layer.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded bg-black/30 text-xs text-white/80 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
