import React, { useState } from 'react';
import { MessageSquare, Mail, Send, ArrowUpRight } from 'lucide-react';

export default function PortfolioContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Application',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Inquiry Submitted:', formData);
    alert('Thank you! Your message has been received.');
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Connect Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase block">
              ✦ HIRE ME ✦
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-brand-textDark tracking-tight">
              Let's Collaborate On <br />
              Your Next <span className="text-brand-purple">Digital Asset.</span>
            </h2>
          </div>
          
          <p className="text-sm text-brand-textMuted font-light leading-relaxed max-w-sm">
            I'm currently accepting freelance contracts, full-stack developments, and UI/UX design consultations. Reach out directly or drop your details into the project planner.
          </p>

          <div className="space-y-3 pt-4 max-w-md">
            {/* Real WhatsApp Quick-Connect Card */}
            <a 
              href="https://wa.me/923168591968?text=Hi%20Haseeb,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-purple/20 transition-all group decoration-none"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-textDark">WhatsApp Chat</h4>
                  <p className="text-xs text-brand-textMuted font-light">Instant updates & fast responses</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-brand-textMuted group-hover:text-brand-purple transition-colors" />
            </a>

            {/* Official Email Contact Card */}
            <a 
              href="mailto:engrhaseeb03@gmail.com" 
              className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-purple/20 transition-all group decoration-none"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-textDark">Official Email</h4>
                  <p className="text-xs text-brand-textMuted font-light">engrhaseeb03@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-brand-textMuted group-hover:text-brand-purple transition-colors" />
            </a>

            {/* Updated LinkedIn Connection Card */}
            <a 
              href="https://www.linkedin.com/in/haseeb-ahmed-998710363" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-purple/20 transition-all group decoration-none"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-textDark">LinkedIn Connection</h4>
                  <p className="text-xs text-brand-textMuted font-light">Corporate & contract networking</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-brand-textMuted group-hover:text-brand-purple transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Premium Interactive Form */}
        <div className="lg:col-span-7 bg-white border border-gray-50 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-100/50">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-textMuted">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ahmed Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 text-sm bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-purple focus:bg-white transition-all text-brand-textDark font-light"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-textMuted">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 text-sm bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-purple focus:bg-white transition-all text-brand-textDark font-light"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-textMuted">Project Architecture Requirement</label>
              <select 
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 text-sm bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-purple focus:bg-white transition-all text-brand-textDark font-light appearance-none cursor-pointer"
              >
                <option value="Full-Stack Web Application">Full-Stack Web Application (React, Node, DB)</option>
                <option value="E-Commerce Custom Platform">E-Commerce / Custom Bakery Platform</option>
                <option value="School Management Dashboard">School Management Dashboard / System</option>
                <option value="UI/UX Interface Design">UI/UX Interface Design (Tailwind UI)</option>
                <option value="Cross-Platform Mobile App">Cross-Platform Mobile Application (APK)</option>
              </select>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-textMuted">Project Description</label>
              <textarea 
                rows="4"
                required
                placeholder="Tell me about your product requirements, timelines, or primary features..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 text-sm bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-purple focus:bg-white transition-all text-brand-textDark font-light resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 bg-brand-purple hover:bg-brand-deepPurple text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-brand-purple/10 border-none cursor-pointer"
            >
              <span>Submit Project Brief</span>
              <Send size={12} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}