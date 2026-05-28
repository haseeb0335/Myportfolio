import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import myPic  from '../assets/img1.jpg';

export default function PortfolioHero({ onActionClick }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200/60 px-3 py-1.5 rounded-full shadow-xs">
              <span className="text-base">👋</span>
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-brand-purple">WELCOME TO Haseeb.dev</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-brand-textDark tracking-tight leading-tight">
              I'm Haseeb <br />
              Full-Stack <span className="text-brand-purple">Developer</span> <br />
              Based In <span className="text-brand-purple">Pakistan</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-textMuted font-light max-w-xl leading-relaxed">
              I build modern, performant web applications, responsive user-centric dashboards, and scalable digital products that help businesses automate workflows and accelerate growth.
            </p>

            <div className="pt-2">
              <button
                onClick={onActionClick}
                className="flex items-center space-x-2 px-6 py-3.5 bg-brand-textDark hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg hover:shadow-xl active:scale-98 border-none cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight size={14} className="text-brand-purple" />
              </button>
            </div>
          </div>

          {/* Right Image Layout with Floating Stickers */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
              
              {/* Purple Backdrop Circle Block */}
              <div className="absolute inset-0 bg-brand-purple rounded-full transform scale-95 opacity-90 shadow-2xl shadow-brand-purple/20"></div>
              
              {/* Profile Image Node Placeholder */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={myPic} 
                  alt="Full-Stack Developer Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1: UI/UX Designer */}
              <div className="absolute top-[60%] -left-6 sm:-left-12 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand-textDark">UI/UX Designer</span>
              </div>

              {/* Floating Badge 2: Full-Stack Developer */}
              <div className="absolute top-1/4 -right-4 sm:-right-8 bg-black border border-neutral-800 px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 animate-fade-in [animation-delay:200ms]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-white">Full-Stack Developer</span>
              </div>

              {/* Floating Badge 3: Problem Solver */}
              <div className="absolute bottom-6 right-4 sm:-right-4 bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 animate-fade-in [animation-delay:400ms]">
                <div className="w-4 h-4 bg-purple-100 rounded-md flex items-center justify-center text-[10px]">⚡</div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand-textDark">Problem Solver</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Infinite Horizontal Running Brand Text Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-purple py-3.5 transform overflow-hidden whitespace-nowrap border-y border-brand-purple/20 shadow-sm z-10 flex">
        <div className="flex animate-marquee font-mono text-[11px] font-bold uppercase tracking-widest text-white space-x-12 px-6">
          <span>✦ Web Design</span>
          <span>✦ App Design</span>
          <span>✦ Dashboard Design</span>
          <span>✦ Frontend Engineering</span>
          <span>✦ API Architecture</span>
          <span>✦ Web Design</span>
          <span>✦ App Design</span>
          <span>✦ Dashboard Design</span>
        </div>
      </div>
    </section>
  );
}