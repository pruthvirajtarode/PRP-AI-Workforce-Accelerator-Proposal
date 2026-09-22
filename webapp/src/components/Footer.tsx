import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold tracking-tight mb-2">
              PRP <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI</span>
            </div>
            <p className="text-sm text-textSecondary font-medium">PRP AI Workforce Accelerator</p>
            <p className="text-xs text-textSecondary mt-1">AI Workforce Transformation Proposal • 2026</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://prpservices.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-textSecondary hover:text-white transition-colors">
              Official Website
            </a>
            <a href="https://www.linkedin.com/company/prp-services/home/" target="_blank" rel="noopener noreferrer" className="text-sm text-textSecondary hover:text-white transition-colors">
              LinkedIn
            </a>
            <button onClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-primary hover:text-secondary transition-colors font-medium">
              Start Discovery
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
