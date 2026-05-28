import React, { useState } from 'react';
import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioHero from './components/PortfolioHero';
import PortfolioServices from './components/PortfolioServices';
import PortfolioWorks from './components/PortfolioWorks';
import PortfolioAbout from './components/PortfolioAbout';
import PortfolioContact from './components/PortfolioContact';
import PortfolioFooter from './components/PortfolioFooter';
import PortfolioAdminDashboard from './components/PortfolioAdminDashboard';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Multi-section anchor viewport coordinator
  const handleScrollToAnchor = (targetId) => {
    setActiveSection(targetId);
    
    // Check if the administrator dashboard bypass was invoked
    if (targetId === 'admin-dashboard') {
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const fixedHeaderOffset = 80;
      const elementTopPosition = targetElement.getBoundingClientRect().top;
      const calculatedOffsetPosition = elementTopPosition + window.pageYOffset - fixedHeaderOffset;

      window.scrollTo({
        top: calculatedOffsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Fallback exit coordinator to safely return to standard homepage from dashboard
  const handleExitDashboard = () => {
    setActiveSection('home');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#6366F1] selection:text-white">
      {/* 
        CONDITIONAL VIEW RENDERING
        If the active route state is set to 'admin-dashboard', we bypass the layout grid
        to render the secure data console cleanly.
      */}
      {activeSection === 'admin-dashboard' ? (
        <PortfolioAdminDashboard onBackToPortfolio={handleExitDashboard} />
      ) : (
        <>
          {/* GLOBAL FLOATING NAVIGATION BANNER */}
          <PortfolioNavbar activeSection={activeSection} onLinkClick={handleScrollToAnchor} />

          {/* CORE DISPLAY LAYER STACK */}
          <main className="space-y-16 md:space-y-28 pb-12">
            <div id="home">
              <PortfolioHero onActionClick={() => handleScrollToAnchor('works')} />
            </div>
            
            <div id="services">
              <PortfolioServices />
            </div>
            
            <div id="works">
              <PortfolioWorks />
            </div>
            
            <div id="about">
              <PortfolioAbout onContactClick={() => handleScrollToAnchor('contact')} />
            </div>
            
            <div id="contact">
              <PortfolioContact />
            </div>
          </main>

          {/* FOOTER METADATA MARKUP MAP */}
          <PortfolioFooter onNavClick={handleScrollToAnchor} />
        </>
      )}
    </div>
  );
}