import React from 'react';
import { motion } from 'framer-motion';

const KPIDashboard = () => {
  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Illustrative ROI Dashboard</h2>
            <p className="text-textSecondary text-sm">Values to be established during discovery and baseline assessment.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <div className="px-3 py-1 bg-surface border border-white/10 rounded-md text-xs font-medium text-white">Q3 2026</div>
            <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-md text-xs font-medium text-primary">Export CSV</div>
          </div>
        </div>

        <div className="glass-card p-6 border-white/10">
          
          {/* Top KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              { label: "Employees Trained", value: "TBD" },
              { label: "AI Adoption Rate", value: "TBD" },
              { label: "Workflows Created", value: "TBD" },
              { label: "Est. Time Saved (hrs)", value: "TBD" },
              { label: "Use Cases Live", value: "TBD" },
              { label: "Competency Avg", value: "TBD" }
            ].map((metric, i) => (
              <div key={i} className="p-4 bg-background border border-white/5 rounded-lg">
                <div className="text-xs text-textSecondary mb-2">{metric.label}</div>
                <div className="text-xl font-bold text-white">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Charts area mockup */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Chart 1 */}
            <div className="lg:col-span-2 p-6 bg-background border border-white/5 rounded-lg flex flex-col">
              <h3 className="text-sm font-bold text-white mb-6">AI Competency: Pre vs Post Training</h3>
              <div className="flex-grow flex items-end justify-around h-48 pb-2 border-b border-white/10">
                <div className="w-16 bg-white/5 rounded-t-sm h-1/3 relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-textSecondary opacity-0 group-hover:opacity-100 transition-opacity">Baseline</div>
                </div>
                <div className="w-16 bg-primary/80 rounded-t-sm h-4/5 relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-textSecondary opacity-0 group-hover:opacity-100 transition-opacity">Target</div>
                </div>
              </div>
              <div className="flex justify-around mt-4 text-xs text-textSecondary">
                <span>Baseline</span>
                <span>Post-Training</span>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="p-6 bg-background border border-white/5 rounded-lg flex flex-col">
              <h3 className="text-sm font-bold text-white mb-6">Department Adoption</h3>
              <div className="flex-grow space-y-4">
                {[
                  { dept: "Sales", w: "80%" },
                  { dept: "Support", w: "65%" },
                  { dept: "Marketing", w: "50%" },
                  { dept: "Ops", w: "40%" }
                ].map((d, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white">{d.dept}</span>
                      <span className="text-textSecondary">TBD</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: d.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIDashboard;
