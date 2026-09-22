import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { companyData } from '../data/company';

const ExecutiveReport = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary print:bg-white print:text-black">
      {/* Non-printable controls */}
      <div className="no-print bg-surface border-b border-white/10 p-4 sticky top-0 z-50 flex justify-between items-center text-white backdrop-blur-md bg-opacity-80">
        <Link to="/" className="flex items-center space-x-2 text-textSecondary hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Presentation</span>
        </Link>
        <button 
          onClick={() => window.print()} 
          className="flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-500 shadow-lg shadow-primary/20 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
        >
          <Printer size={16} />
          <span>Print PDF</span>
        </button>
      </div>

      {/* Printable Report Content */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 print:p-0">
        
        {/* Cover Page */}
        <div className="relative min-h-[80vh] flex flex-col justify-center border-b border-white/10 pb-12 mb-16 print-page-break print:border-black/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none no-print" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none no-print" />
          
          <div className="relative z-10">
            <h4 className="text-secondary font-bold tracking-widest uppercase mb-4 print:text-gray-500">Executive Report</h4>
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 leading-tight print:text-black print:bg-none">
              PRP AI Workforce Accelerator
            </h1>
            <p className="text-2xl text-textSecondary mb-12 print:text-gray-600">{companyData.tagline}</p>
            <div className="mt-auto pt-12 border-t border-white/10 print:border-black/10 inline-block pr-12">
              <p className="text-sm font-bold text-white print:text-gray-900">PREPARED FOR:</p>
              <p className="text-lg text-secondary mt-1 print:text-gray-700">{companyData.name}</p>
              <p className="text-sm text-textSecondary mt-2 print:text-gray-500">2026</p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Executive Summary */}
          <div className="print-page-break bg-surface/50 p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden print:bg-white print:border-none print:shadow-none print:p-0">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary no-print" />
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4 print:text-gray-900 print:border-black/10 flex items-center">
              <span className="text-secondary mr-3 text-xl font-normal">01.</span> Executive Summary
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-textSecondary print:prose-slate">
              <p className="leading-relaxed">
                PRP Services Private Limited already operates at the intersection of communication, customer engagement, automation, and AI. The next opportunity is not simply adopting more AI tools. It is enabling the workforce to use AI effectively, responsibly, and consistently across the organization.
              </p>
              <p className="leading-relaxed">
                The program combines AI literacy, productivity, department-specific use cases, automation, and hands-on projects to deliver measurable business impact.
              </p>
            </div>
          </div>

          {/* Why Workforce Enablement */}
          <div className="print-page-break bg-surface/50 p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden print:bg-white print:border-none print:shadow-none print:p-0">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary no-print" />
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4 print:text-gray-900 print:border-black/10 flex items-center">
              <span className="text-secondary mr-3 text-xl font-normal">02.</span> Why AI Workforce Enablement
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-textSecondary print:prose-slate">
              <p className="leading-relaxed">
                While technology creates potential, only people create value. Ad-hoc AI use leads to fragmented processes, data privacy risks, and missed opportunities. By structuring AI enablement, PRP can transform AI from a novel tool into a scalable business multiplier.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Faster processing:</strong> AI-assisted proposal generation and lead intelligence.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Improved quality:</strong> Instant context generation for complex customer queries.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Reduced risk:</strong> Clear governance and data privacy controls.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Program Architecture */}
          <div className="print-page-break bg-surface/50 p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden print:bg-white print:border-none print:shadow-none print:p-0">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary no-print" />
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4 print:text-gray-900 print:border-black/10 flex items-center">
              <span className="text-secondary mr-3 text-xl font-normal">03.</span> The Accelerator Program
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-textSecondary print:prose-slate">
              <p className="leading-relaxed mb-6">The program is structured across five maturity levels:</p>
              <ol className="space-y-4 list-decimal list-inside marker:text-secondary marker:font-bold">
                <li><strong className="text-white print:text-black">AI Awareness:</strong> Understanding LLMs, conversational AI, and the market shift.</li>
                <li><strong className="text-white print:text-black">AI Productivity:</strong> Daily workflows for email, reporting, and meetings.</li>
                <li><strong className="text-white print:text-black">Department-Specific AI:</strong> Tailored applications for Sales, Support, and Marketing.</li>
                <li><strong className="text-white print:text-black">Generative AI & Automation:</strong> RAG, Vector Databases, and Agents for technical teams.</li>
                <li><strong className="text-white print:text-black">Hands-on Capstone:</strong> Building real, PRP-specific solutions.</li>
              </ol>
            </div>
          </div>

          {/* Measurement & ROI */}
          <div className="print-page-break bg-surface/50 p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden print:bg-white print:border-none print:shadow-none print:p-0">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary no-print" />
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/10 pb-4 print:text-gray-900 print:border-black/10 flex items-center">
              <span className="text-secondary mr-3 text-xl font-normal">04.</span> Measurement & ROI Framework
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-textSecondary print:prose-slate">
              <p className="leading-relaxed">
                We utilize a "Baseline → Target → Actual" measurement model. We do not invent ROI; we measure it accurately post-implementation.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Adoption:</strong> Active AI users and workflows created.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Productivity:</strong> Time saved per employee per week.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 no-print"></span>
                  <span><strong className="text-white print:text-black">Quality:</strong> Volume of AI-assisted support responses and lead processing time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExecutiveReport;
