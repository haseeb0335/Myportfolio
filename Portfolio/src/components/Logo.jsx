import React from 'react';

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <div className="flex items-center space-x-2.5 group cursor-pointer">
      {/* Brand Icon Graphic */}
      <svg 
        className={`${className} transition-transform duration-300 group-hover:rotate-6`}
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background Accent Node */}
        <rect width="40" height="40" rx="12" fill="currentColor" className="text-brand-purple/5 group-hover:text-brand-purple/10 transition-colors" />
        
        {/* Left Braced Terminal Vector */}
        <path 
          d="M14 13L9 20L14 27" 
          stroke="currentColor" 
          className="text-brand-purple" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right Braced Terminal Vector */}
        <path 
          d="M26 13L31 20L26 27" 
          stroke="currentColor" 
          className="text-brand-purple" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Center Dynamic Forward Slash Data Bridge */}
        <path 
          d="M22 11L18 29" 
          stroke="currentColor" 
          className="text-brand-textDark group-hover:text-brand-purple transition-colors duration-300" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography Title Text */}
      <span className="font-sans font-black tracking-tight text-lg text-brand-textDark group-hover:text-brand-purple transition-colors duration-300">
        HASEEB<span className="text-brand-purple font-mono font-bold">.dev</span>
      </span>
    </div>
  );
}