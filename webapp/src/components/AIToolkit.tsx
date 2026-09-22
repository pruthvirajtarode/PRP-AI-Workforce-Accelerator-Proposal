import React from 'react';
import { motion } from 'framer-motion';

const AIToolkit = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Illustrative AI Toolkit</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Final tools to be aligned with PRP's environment during the discovery phase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">GENERAL AI</h3>
            <ul className="space-y-3 text-textSecondary">
              <li>ChatGPT</li>
              <li>Google Gemini</li>
              <li>Anthropic Claude</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">PRODUCTIVITY</h3>
            <ul className="space-y-3 text-textSecondary">
              <li>Microsoft Copilot</li>
              <li>AI Meeting Assistants</li>
              <li>AI Document Tools</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">DEVELOPMENT</h3>
            <ul className="space-y-3 text-textSecondary">
              <li>AI Coding Assistants</li>
              <li>LLM APIs (OpenAI, Gemini)</li>
              <li>Internal API Testing Tools</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-bold text-secondary mb-4 border-b border-secondary/20 pb-2">ADVANCED AI</h3>
            <ul className="space-y-3 text-textSecondary">
              <li>Vector Databases (Pinecone/Weaviate)</li>
              <li>RAG Architectures</li>
              <li>LangChain & LangGraph</li>
              <li>Custom AI Agents</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIToolkit;
