import React from 'react';
import { Globe, Layers, Cpu, Monitor, Palette } from 'lucide-react';

export default function PortfolioServices() {
  const services = [
    {
      icon: <Globe className="text-brand-purple" size={22} />,
      title: "Web Design",
      desc: "I design modern, fast, and responsive websites that build strong digital presences and sleek user flows."
    },
    {
      icon: <Layers className="text-brand-purple" size={22} />,
      title: "App Design",
      desc: "I create intuitive, user-centric interfaces and seamless digital layouts for cross-platform mobile applications."
    },
    {
      icon: <Monitor className="text-brand-purple" size={22} />,
      title: "Software Design for PC & Mobile",
      desc: "I deliver comprehensive system architectures and robust, interactive dashboard layouts scaled for both desktop and mobile screens."
    },
    {
      icon: <Palette className="text-brand-purple" size={22} />,
      title: "Graphic Design (Illustrator & Canva)",
      desc: "I craft eye-catching product imagery, marketing banners, and professional digital brand assets optimized for high visual impact."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left py-12">
      <div className="text-center space-y-2 mb-12">
        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase">
          ✦ MY SERVICES ✦
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-brand-textDark tracking-tight">
          Solutions We Provide <br />
          For Your <span className="text-brand-purple">Works</span>
        </h2>
      </div>

      {/* Grid dynamically layout: 1 col on mobile, 2 on tablet, and 4 items clean on desktop screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((srv, index) => (
          <div 
            key={index} 
            className="bg-brand-cardBg border border-gray-100 p-6 rounded-2xl shadow-xs hover:shadow-xl hover:border-brand-purple/20 transition-all group relative flex flex-col justify-between min-h-[250px]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-bgLight flex items-center justify-center transition-colors group-hover:bg-brand-purple/10">
                {srv.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans font-bold text-lg text-brand-textDark group-hover:text-brand-purple transition-colors duration-300">
                  {srv.title}
                </h3>
                <p className="text-xs text-brand-textMuted font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <button 
                title={`Learn more about ${srv.title}`} 
                className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-brand-textDark group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple transition-all cursor-pointer bg-transparent"
              >
                <img 
                  src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'></line><polyline points='12 5 19 12 12 19'></polyline></svg>" 
                  alt="Arrow right icon" 
                  className="w-3.5 h-3.5 group-hover:invert group-hover:brightness-200 transition-all" 
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}