import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ArrowDown, Bot, PhoneCall, MessageSquare, Briefcase } from 'lucide-react';

const nodes = [
  { id: 'sms', label: 'SMS', type: 'channel' },
  { id: 'voice', label: 'VOICE', type: 'channel' },
  { id: 'whatsapp', label: 'WHATSAPP', type: 'channel' },
  { id: 'rcs', label: 'RCS', type: 'channel' },
  { id: 'ivr', label: 'IVR', type: 'channel' },
  { id: 'cloud', label: 'CLOUD TELEPHONY', type: 'channel' },
  
  { id: 'chatbot', label: 'AI CHATBOT', type: 'ai', icon: MessageSquare, info: 'Automated intent recognition & 24/7 engagement.' },
  { id: 'voicebot', label: 'AI VOICEBOT', type: 'ai', icon: Bot, info: 'Conversational voice automation for inbound/outbound.' },
  { id: 'lead', label: 'LEAD MGMT', type: 'ai', icon: Briefcase, info: 'Intelligent scoring and automated routing.' },
  { id: 'crm', label: 'CRM', type: 'ai', icon: Network, info: 'Centralized customer data integration.' },
  
  { id: 'sales', label: 'SALES', type: 'dept' },
  { id: 'support', label: 'SUPPORT', type: 'dept' },
  { id: 'marketing', label: 'MARKETING', type: 'dept' },
  { id: 'ops', label: 'OPERATIONS', type: 'dept' }
];

const PRPEcosystem = () => {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-surface/50 relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">PRP Business Ecosystem</h2>
        <p className="text-textSecondary max-w-2xl mx-auto mb-16">
          PRP's technological infrastructure seamlessly connects channels to outcomes. Click on the AI nodes to see the impact.
        </p>

        <div className="flex flex-col items-center space-y-8">
          
          {/* Top Node */}
          <div className="w-48 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium tracking-widest shadow-lg">
            CUSTOMER
          </div>
          
          <ArrowDown className="text-white/20 animate-bounce" />

          {/* Channels Row */}
          <div className="flex flex-wrap justify-center gap-4">
            {nodes.filter(n => n.type === 'channel').map(node => (
              <div key={node.id} className="px-6 py-2 rounded-lg bg-surface border border-white/5 text-textSecondary text-sm font-medium hover:border-white/20 transition-colors">
                {node.label}
              </div>
            ))}
          </div>

          <ArrowDown className="text-white/20" />

          {/* PRP Platform */}
          <div className="w-64 py-4 rounded-xl bg-primary/20 border border-primary text-white font-bold tracking-widest shadow-[0_0_20px_rgba(0,89,179,0.3)]">
            PRP PLATFORM
          </div>

          <ArrowDown className="text-white/20" />

          <div className="w-24 py-2 rounded-full bg-secondary/20 border border-secondary text-secondary font-bold tracking-widest shadow-[0_0_15px_rgba(0,229,255,0.4)] relative">
            AI
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
          </div>

          <ArrowDown className="text-white/20" />

          {/* AI Nodes */}
          <div className="flex flex-wrap justify-center gap-6 relative">
            {nodes.filter(n => n.type === 'ai').map(node => (
              <div key={node.id} className="relative">
                <button 
                  onClick={() => setActiveInfo(activeInfo === node.id ? null : node.id)}
                  className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-300 w-36
                    ${activeInfo === node.id ? 'bg-secondary/20 border-secondary scale-105' : 'bg-surface border-white/10 hover:border-white/30'}`}
                >
                  {node.icon && <node.icon className={`w-6 h-6 mb-2 ${activeInfo === node.id ? 'text-secondary' : 'text-textSecondary'}`} />}
                  <span className={`text-xs font-bold ${activeInfo === node.id ? 'text-white' : 'text-textSecondary'}`}>{node.label}</span>
                </button>

                <AnimatePresence>
                  {activeInfo === node.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-3 rounded-lg bg-surface border border-secondary/50 text-xs text-left shadow-xl z-20"
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-t border-l border-secondary/50 rotate-45" />
                      <span className="relative z-10 text-white/90">{node.info}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <ArrowDown className="text-white/20" />

          {/* Departments */}
          <div className="flex flex-wrap justify-center gap-4">
            {nodes.filter(n => n.type === 'dept').map(node => (
              <div key={node.id} className="px-6 py-2 rounded-lg bg-surface border border-white/5 text-textSecondary text-sm font-medium">
                {node.label}
              </div>
            ))}
          </div>

          <ArrowDown className="text-white/20" />

          {/* Outcome */}
          <div className="w-72 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-widest shadow-xl">
            CUSTOMER EXPERIENCE
          </div>

        </div>
      </div>
    </section>
  );
};

export default PRPEcosystem;
