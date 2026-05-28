import React from 'react';

export default function PortfolioFooter({ onNavClick }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-left mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-100">
        
        {/* Left Info Branding Block */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => onNavClick('home')}>
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
          <p className="text-xs text-brand-textMuted font-light leading-relaxed max-w-xs">
            Building modern digital ecosystems, clean interface assets, and secure scalable background web applications.
          </p>
        </div>

        {/* Middle Links Map Navigation Grid */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-wider font-bold">
          <div className="flex flex-col space-y-2.5">
            <h5 className="text-brand-textDark text-[10px] tracking-widest opacity-40 mb-1">QUICK LINKS</h5>
            <button onClick={() => onNavClick('home')} className="text-left text-brand-textMuted hover:text-brand-purple bg-transparent border-none cursor-pointer">Home</button>
            <button onClick={() => onNavClick('services')} className="text-left text-brand-textMuted hover:text-brand-purple bg-transparent border-none cursor-pointer">Services</button>
          </div>
          <div className="flex flex-col space-y-2.5">
            <h5 className="text-brand-textDark text-[10px] tracking-widest opacity-40 mb-1">RESOURCES</h5>
            <button onClick={() => onNavClick('works')} className="text-left text-brand-textMuted hover:text-brand-purple bg-transparent border-none cursor-pointer">Portfolio</button>
            <button onClick={() => onNavClick('contact')} className="text-left text-brand-textMuted hover:text-brand-purple bg-transparent border-none cursor-pointer">Contact</button>
          </div>
        </div>

        {/* Right Social Interaction Hub Pointer Group */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-widest font-bold text-brand-textDark opacity-40">CONNECT INFO</h5>
          <div className="flex space-x-3">
            
            {/* Real GitHub Link */}
            <a 
              href="https://github.com/haseeb0335" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile" 
              className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-brand-textMuted hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Real LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/haseeb-ahmed-998710363" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile" 
              className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-brand-textMuted hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* WhatsApp Integration replacing Twitter/X */}
            <a 
              href="https://wa.me/923168591968" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chat on WhatsApp" 
              className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-brand-textMuted hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-2.297c1.648.978 3.254 1.486 4.949 1.487 5.428 0 9.843-4.388 9.846-9.782.002-2.614-1.011-5.074-2.855-6.918C16.7 4.646 14.25 3.632 11.71 3.631c-5.431 0-9.849 4.388-9.851 9.782-.001 1.778.475 3.466 1.393 4.978l-.985 3.596 3.79-.984zM17.473 14.3c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.83 1.04-1.016 1.25-.187.21-.374.24-.694.08-.32-.16-1.353-.5-2.578-1.6-.952-.85-1.594-1.9-1.782-2.22-.187-.32-.02-.494.14-.654.144-.144.32-.37.48-.56.16-.19.214-.32.32-.53.11-.21.054-.4-.03-.56-.084-.16-.723-1.74-.992-2.39-.262-.63-.53-.54-.723-.55-.186-.01-.4-.01-.615-.01-.213 0-.56.08-.853.4-.294.32-1.124 1.1-1.124 2.68 0 1.58 1.15 3.11 1.31 3.32.16.21 2.26 3.45 5.48 4.84.76.33 1.36.53 1.82.68.77.24 1.46.21 2.02.12.62-.09 1.89-.77 2.155-1.48.266-.71.266-1.32.188-1.45-.078-.13-.294-.21-.615-.37z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Copyright Text node metadata banner */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-brand-textMuted uppercase tracking-wider">
        <p>© 2026 HASEEB.dev. All rights reserved.</p>
        <p>Designed with excellence.</p>
      </div>
    </footer>
  );
}