import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveMetrics from './components/ExecutiveMetrics';
import WhyAI from './components/WhyAI';
import PRPEcosystem from './components/PRPEcosystem';
import WorkforceOpportunity from './components/WorkforceOpportunity';
import CurrentFuture from './components/CurrentFuture';
import Accelerator from './components/Accelerator';
import Curriculum from './components/Curriculum';
import AIToolkit from './components/AIToolkit';
import AILabs from './components/AILabs';
import Architecture from './components/Architecture';
import ResponsibleAI from './components/ResponsibleAI';
import AIMaturity from './components/AIMaturity';
import AIChampions from './components/AIChampions';
import Impact from './components/Impact';
import KPIDashboard from './components/KPIDashboard';
import Prioritization from './components/Prioritization';
import TrainingOptions from './components/TrainingOptions';
import Roadmap from './components/Roadmap';
import Discovery from './components/Discovery';
import DiscoveryQuestions from './components/DiscoveryQuestions';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-textPrimary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ExecutiveMetrics />
        <WhyAI />
        <PRPEcosystem />
        <WorkforceOpportunity />
        <CurrentFuture />
        <Accelerator />
        <Curriculum />
        <AIToolkit />
        <AILabs />
        <Architecture />
        <ResponsibleAI />
        <AIMaturity />
        <AIChampions />
        <Impact />
        <KPIDashboard />
        <Prioritization />
        <TrainingOptions />
        <Roadmap />
        <Discovery />
        <DiscoveryQuestions />
        <NextSteps />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
