import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-white px-2 py-1 rounded mr-3 flex items-center justify-center">
              <img src={logo} alt="PRP Services" className="h-8 object-contain" />
            </div>
            <div className="text-xl font-bold tracking-tight">
              AI <span className="glow-text">Workforce</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('opportunity')} className="text-sm text-textSecondary hover:text-white transition-colors">AI Opportunity</button>
            <button onClick={() => scrollTo('curriculum')} className="text-sm text-textSecondary hover:text-white transition-colors">Curriculum</button>
            <button onClick={() => scrollTo('labs')} className="text-sm text-textSecondary hover:text-white transition-colors">AI Labs</button>
            <button onClick={() => scrollTo('measurement')} className="text-sm text-textSecondary hover:text-white transition-colors">Measurement</button>
            
            <div className="flex items-center space-x-4">
              <Link to="/report" className="flex items-center space-x-2 text-sm text-textSecondary hover:text-white transition-colors">
                <Download size={16} />
                <span>Report</span>
              </Link>
              <button onClick={() => scrollTo('discovery')} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                Start Discovery
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-white/10 px-4 py-6 space-y-4">
          <button onClick={() => scrollTo('opportunity')} className="block w-full text-left text-textSecondary hover:text-white py-2">AI Opportunity</button>
          <button onClick={() => scrollTo('curriculum')} className="block w-full text-left text-textSecondary hover:text-white py-2">Curriculum</button>
          <button onClick={() => scrollTo('labs')} className="block w-full text-left text-textSecondary hover:text-white py-2">AI Labs</button>
          <button onClick={() => scrollTo('measurement')} className="block w-full text-left text-textSecondary hover:text-white py-2">Measurement</button>
          <Link to="/report" className="block w-full text-left text-textSecondary hover:text-white py-2">View PDF Report</Link>
          <button onClick={() => scrollTo('discovery')} className="block w-full bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-lg font-medium transition-colors mt-4">
            Start Discovery
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
