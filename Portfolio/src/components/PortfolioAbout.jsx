import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import myPic from '../assets/img2.jpg';

export default function PortfolioAbout({ onContactClick }) {
  // Updated metrics replacing the dummy data with your authentic statistics
  const metrics = [
    { value: "05", label: "Clients In Pakistan" },
    { value: "15+", label: "Projects Completed" },
    { value: "01", label: "Award Won" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Image Profile frame with circular branding accents matching image_c281c2.png */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-brand-purple rounded-full opacity-85 transform scale-95 shadow-xl shadow-brand-purple/15"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src={myPic} 
                alt="Haseeb Profile Closeup" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Dynamic visual design tag stickers */}
            <div className="absolute bottom-4 -left-4 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-md text-[9px] font-mono uppercase font-bold text-brand-textDark tracking-wider">
              ⚡ Web Developer
            </div>
            <div className="absolute top-12 -right-4 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-md text-[9px] font-mono uppercase font-bold text-brand-textDark tracking-wider">
              🎨 UI/UX Design
            </div>
          </div>
        </div>

        {/* Right Side: Text Bio & Metrics Layout Columns */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase block">
              ✦ ABOUT ME ✦
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-brand-textDark tracking-tight">
              Who's Behind All This <br />
              Great <span className="text-brand-purple">Work?</span>
            </h2>
          </div>

          <p className="text-sm text-brand-textMuted font-light leading-relaxed max-w-xl">
            I am a dedicated full-stack engineer specializing in robust web, app, and interface software development. By bridging clean, structured frontends with operational backend architectures, I transform intricate real-world logistics into seamlessly managed online platforms.
          </p>

          {/* Counters row mapping */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 max-w-lg">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-purple font-mono tracking-tight">
                  {m.value}
                </h4>
                <p className="text-[10px] sm:text-xs font-medium text-brand-textMuted uppercase tracking-wider leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onContactClick}
              className="flex items-center space-x-1.5 px-5 py-3 bg-brand-purple hover:bg-brand-deepPurple text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md shadow-brand-purple/10 border-none cursor-pointer"
            >
              <span>Read More</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}