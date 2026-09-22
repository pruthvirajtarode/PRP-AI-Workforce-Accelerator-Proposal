import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { companyData } from '../data/company';

const ExecutiveReport = () => {
  return (
    <div className="min-h-screen bg-white text-black print:bg-white print:text-black">
      {/* Non-printable controls */}
      <div className="no-print bg-background border-b border-white/10 p-4 sticky top-0 z-50 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center space-x-2 text-textSecondary hover:text-white">
          <ArrowLeft size={20} />
          <span>Back to Presentation</span>
        </Link>
        <button 
          onClick={() => window.print()} 
          className="flex items-center space-x-2 bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium"
        >
          <Printer size={16} />
          <span>Print PDF</span>
        </button>
      </div>

      {/* Printable Report Content */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 print:p-0">
        
        {/* Cover Page */}
        <div className="min-h-[80vh] flex flex-col justify-center border-b pb-12 mb-12 print-page-break">
          <h4 className="text-gray-500 font-bold tracking-widest uppercase mb-4">Executive Report</h4>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">PRP AI Workforce Accelerator</h1>
          <p className="text-2xl text-gray-600 mb-12">{companyData.tagline}</p>
          <div className="mt-auto pt-12">
            <p className="text-sm font-bold text-gray-900">PREPARED FOR:</p>
            <p className="text-lg text-gray-700">{companyData.name}</p>
            <p className="text-sm text-gray-500 mt-2">2026</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-12 print-page-break">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">1. Executive Summary</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              PRP Services Private Limited already operates at the intersection of communication, customer engagement, automation, and AI. The next opportunity is not simply adopting more AI tools. It is enabling the workforce to use AI effectively, responsibly, and consistently across the organization.
            </p>
            <p>
              The program combines AI literacy, productivity, department-specific use cases, automation, and hands-on projects to deliver measurable business impact.
            </p>
          </div>
        </div>

        {/* Why Workforce Enablement */}
        <div className="mb-12 print-page-break">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">2. Why AI Workforce Enablement</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              While technology creates potential, only people create value. Ad-hoc AI use leads to fragmented processes, data privacy risks, and missed opportunities. By structuring AI enablement, PRP can transform AI from a novel tool into a scalable business multiplier.
            </p>
            <ul>
              <li><strong>Faster processing:</strong> AI-assisted proposal generation and lead intelligence.</li>
              <li><strong>Improved quality:</strong> Instant context generation for complex customer queries.</li>
              <li><strong>Reduced risk:</strong> Clear governance and data privacy controls.</li>
            </ul>
          </div>
        </div>

        {/* Program Architecture */}
        <div className="mb-12 print-page-break">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">3. The Accelerator Program</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>The program is structured across five maturity levels:</p>
            <ol>
              <li><strong>AI Awareness:</strong> Understanding LLMs, conversational AI, and the market shift.</li>
              <li><strong>AI Productivity:</strong> Daily workflows for email, reporting, and meetings.</li>
              <li><strong>Department-Specific AI:</strong> Tailored applications for Sales, Support, and Marketing.</li>
              <li><strong>Generative AI & Automation:</strong> RAG, Vector Databases, and Agents for technical teams.</li>
              <li><strong>Hands-on Capstone:</strong> Building real, PRP-specific solutions (e.g., an internal AI Knowledge Assistant).</li>
            </ol>
          </div>
        </div>

        {/* Measurement & ROI */}
        <div className="mb-12 print-page-break">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">4. Measurement & ROI Framework</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              We utilize a "Baseline → Target → Actual" measurement model. We do not invent ROI; we measure it accurately post-implementation.
            </p>
            <ul>
              <li><strong>Adoption:</strong> Active AI users and workflows created.</li>
              <li><strong>Productivity:</strong> Time saved per employee per week.</li>
              <li><strong>Quality:</strong> Volume of AI-assisted support responses and lead processing time.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExecutiveReport;
