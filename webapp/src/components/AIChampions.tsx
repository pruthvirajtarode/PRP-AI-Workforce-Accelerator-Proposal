import React from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Lightbulb, UserCheck, Shield, Rocket } from 'lucide-react';

const AIChampions = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRP AI Champions Network</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Ensuring the training translates into permanent cultural change by establishing internal leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass-card p-8">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="w-full p-4 rounded-xl border border-white/10 bg-white/5">
                  <span className="text-xs text-textSecondary font-bold tracking-widest block mb-1">SPONSORSHIP</span>
                  <span className="font-bold text-white">MANAGEMENT SPONSOR</span>
                </div>
                <div className="w-px h-6 bg-primary/50" />
                <div className="w-full p-4 rounded-xl border border-primary/30 bg-primary/10">
                  <span className="text-xs text-primary font-bold tracking-widest block mb-1">ENABLEMENT</span>
                  <span className="font-bold text-white">AI TRAINING PROGRAM</span>
                </div>
                <div className="w-px h-6 bg-primary/50" />
                <div className="w-full p-6 rounded-xl border border-secondary/50 bg-secondary/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] relative">
                  <Network className="absolute top-4 right-4 text-secondary/30 w-8 h-8" />
                  <span className="text-xs text-secondary font-bold tracking-widest block mb-1">LEADERSHIP</span>
                  <span className="font-bold text-white text-xl block mb-2">DEPARTMENT AI CHAMPIONS</span>
                  <p className="text-sm text-textSecondary">High-aptitude employees selected from Sales, Support, Tech, and Marketing.</p>
                </div>
                <div className="w-px h-6 bg-secondary/50" />
                <div className="w-full flex justify-between gap-2">
                  <div className="flex-1 p-3 rounded-xl border border-white/10 bg-surface text-xs font-bold text-textSecondary">EMPLOYEES</div>
                  <div className="flex-1 p-3 rounded-xl border border-white/10 bg-surface text-xs font-bold text-textSecondary">USE CASES</div>
                  <div className="flex-1 p-3 rounded-xl border border-white/10 bg-surface text-xs font-bold text-white">INNOVATION</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Champion Responsibilities</h3>
            
            {[
              { icon: Lightbulb, text: "Identify AI opportunities & automation potentials." },
              { icon: Users, text: "Help colleagues adopt new AI workflows." },
              { icon: Network, text: "Share best practices across departments." },
              { icon: Shield, text: "Support responsible AI usage & compliance." },
              { icon: Rocket, text: "Coordinate pilots and track ROI with leadership." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-surface border border-white/10 shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-textSecondary mt-1">{item.text}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIChampions;
