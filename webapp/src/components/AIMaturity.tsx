import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const levels = [
  { level: 1, name: "AI AWARE", skill: "Understands concepts and risks.", behavior: "Uses no AI tools or only casually.", example: "Reads about AI.", outcome: "Risk mitigation." },
  { level: 2, name: "AI USER", skill: "Basic prompting.", behavior: "Uses tools like ChatGPT for simple queries.", example: "Drafting an email.", outcome: "Minor time savings." },
  { level: 3, name: "AI POWER USER", skill: "Context engineering.", behavior: "Daily usage for complex synthesis.", example: "Summarizing long meeting transcripts.", outcome: "Significant productivity." },
  { level: 4, name: "AI AUTOMATOR", skill: "Workflow integration.", behavior: "Links AI to other tools (Zapier, APIs).", example: "Automating lead scoring updates.", outcome: "Process automation." },
  { level: 5, name: "AI INNOVATOR", skill: "System design.", behavior: "Builds custom internal AI solutions.", example: "Building a custom Support Copilot.", outcome: "Competitive advantage." }
];

const AIMaturity = () => {
  const [activeLevel, setActiveLevel] = useState(3);

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Maturity Model</h2>
          <p className="text-textSecondary">Measuring the workforce progression.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Progress Path */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {levels.map((lvl) => (
                <button
                  key={lvl.level}
                  onClick={() => setActiveLevel(lvl.level)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between
                    ${activeLevel === lvl.level 
                      ? 'bg-primary/20 border-primary shadow-[0_0_15px_rgba(0,89,179,0.3)]' 
                      : 'bg-surface border-white/10 hover:border-white/30'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                      ${activeLevel >= lvl.level ? 'bg-secondary text-background' : 'bg-white/10 text-textSecondary'}`}>
                      {lvl.level}
                    </div>
                    <span className={`font-bold ${activeLevel === lvl.level ? 'text-white' : 'text-textSecondary'}`}>
                      {lvl.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail View */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              {levels.map((lvl) => lvl.level === activeLevel && (
                <motion.div
                  key={lvl.level}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 border-secondary/30 bg-secondary/5 relative overflow-hidden h-full min-h-[300px]"
                >
                  <div className="absolute -top-10 -right-10 text-[150px] font-bold text-white/10 pointer-events-none select-none">
                    {lvl.level}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-6">{lvl.name}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-textSecondary block mb-1">Skill</span>
                      <p className="text-white">{lvl.skill}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-textSecondary block mb-1">Behavior</span>
                      <p className="text-white">{lvl.behavior}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-textSecondary block mb-1">Example</span>
                      <p className="text-white">{lvl.example}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">Outcome</span>
                      <p className="text-lg font-medium text-white">{lvl.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIMaturity;
