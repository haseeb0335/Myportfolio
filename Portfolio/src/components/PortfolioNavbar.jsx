import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Lock } from 'lucide-react';

export default function PortfolioNavbar({ activeSection, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  // Corrected semantic links mapping accurately to your section architecture IDs
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20">
        
        {/* Brand Logo Wrapper with Custom Development SVG Logo */}
        <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => onLinkClick('home')}>
          <svg 
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6"
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="12" fill="currentColor" className="text-brand-purple/5 group-hover:text-brand-purple/10 transition-colors" />
            <path 
              d="M14 13L9 20L14 27" 
              stroke="currentColor" 
              className="text-brand-purple" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M26 13L31 20L26 27" 
              stroke="currentColor" 
              className="text-brand-purple" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M22 11L18 29" 
              stroke="currentColor" 
              className="text-brand-textDark group-hover:text-brand-purple transition-colors duration-300" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </svg>
          <span className="font-sans font-extrabold text-xl tracking-tight text-brand-textDark group-hover:text-brand-purple transition-colors duration-300">
            HASEEB<span className="text-brand-purple font-mono font-bold">.dev</span>
          </span>
        </div>

        {/* Desktop Navigation Link Map */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-wider font-bold">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onLinkClick(link.id)}
              className={`transition-all border-none bg-transparent cursor-pointer relative py-1 ${
                activeSection === link.id 
                  ? 'text-brand-purple font-bold' 
                  : 'text-brand-textMuted hover:text-brand-textDark'
              }`}
            >
              {link.label}
              {/* Clean underline animation indicator for active state */}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple rounded-full" />
              )}
            </button>
          ))}
          
          {/* Subtle Workspace Divider line splitting public and admin channels */}
          <span className="h-4 w-[1px] bg-gray-200 block" />

          {/* Secure Workspace Control Lock Trigger */}
          <button
            onClick={() => onLinkClick('admin-dashboard')}
            className={`p-2 rounded-xl transition-all border-none bg-transparent cursor-pointer group relative ${
              activeSection === 'admin-dashboard' 
                ? 'text-brand-purple bg-purple-50' 
                : 'text-gray-400 hover:text-brand-purple hover:bg-gray-50'
            }`}
            title="Admin Dashboard Portal"
          >
            <Lock size={15} />
            
            {/* Context Tooltip Popup for desktop pointers */}
            <span className="absolute top-12 right-0 bg-gray-900 text-white font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Admin Portal
            </span>
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => onLinkClick('contact')}
            className="flex items-center space-x-1 px-5 py-2.5 bg-brand-purple hover:bg-brand-deepPurple text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-brand-purple/10 cursor-pointer border-none"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Mobile Direct Lock Icon Access Portal */}
          <button
            onClick={() => onLinkClick('admin-dashboard')}
            className={`p-2 rounded-lg transition-all border-none bg-transparent cursor-pointer ${
              activeSection === 'admin-dashboard' ? 'text-brand-purple bg-purple-50' : 'text-gray-400'
            }`}
          >
            <Lock size={16} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-textDark hover:text-brand-purple p-1 bg-transparent border-none cursor-pointer flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Context Collapse Panel Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 px-6 py-6 flex flex-col space-y-4 font-mono text-xs uppercase tracking-wider font-bold text-left shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onLinkClick(link.id);
                setIsOpen(false);
              }}
              className={`text-left py-2 border-none bg-transparent cursor-pointer transition-colors ${
                activeSection === link.id ? 'text-brand-purple pl-2 border-l-2 border-brand-purple' : 'text-brand-textMuted'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <hr className="border-gray-100 my-1" />

          <button
            onClick={() => {
              onLinkClick('contact');
              setIsOpen(false);
            }}
            className="w-full text-center py-3 bg-brand-purple hover:bg-brand-deepPurple text-white font-bold rounded-xl border-none cursor-pointer shadow-md text-xs uppercase tracking-widest"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}