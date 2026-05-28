import React, { useState } from 'react';
import BakeryWeb from '../assets/BakeryWeb.png'; 
import SchoolManagement from '../assets/SMS.png';
import CoffeeShop from '../assets/Coffeeshop.png';
import Restaurant from '../assets/img3.png';

export default function PortfolioWorks() {
  const [filter, setFilter] = useState('All');

  // YOUR GENUINE REAL-TIME PROJECTS ARRAY
  const projects = [
    {
      title: "School Management System",
      category: "Web & Mobile App",
      tech: "React JS • Node.js • MongoDB",
      desc: "Comprehensive school hub featuring role-based custom dashboards for admins, teachers, students, and parents. This also contains andriod App for students and parents to access their dashboards on the go. (ID: engrhaseeb0335@gmail.com | Password: 123456) for Admin ",
      img: SchoolManagement, // Swap with your actual screenshot later
      liveLink: "https://sms-tinj.vercel.app",
      githubLink: "https://github.com/haseeb0335/SMS"
    },
    {
      title: "Bakery Website",
      category: "Web Design",
      tech: "React JS • Tailwind CSS",
      desc: "A highly responsive modern storefront paired with a dedicated professional administrative management dashboard view. This design concept is taken from Pinterest and implemented with React and Tailwind CSS to create a visually appealing and user-friendly experience for both customers and bakery staff.",
      img: BakeryWeb,
      liveLink: "https://bakery-web-two.vercel.app/", // Links directly to your new repository!
      githubLink: "https://github.com/haseeb0335/Bakery-web"
    },
    {
      title: "Coffee Shop website",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with React and Tailwind CSS to create a visually appealing and user-friendly experience for both customers and coffee shop staff. It features a modern, responsive storefront layout that highlights the coffee shop's offerings, along with an intuitive navigation system for easy browsing.",
      img: CoffeeShop,
      liveLink: "https://coffee-shop-web-beta.vercel.app/",
      githubLink: "https://github.com/haseeb0335/Coffee-shop-web"
    },
     {
      title: "Restaurant website",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with React and Tailwind CSS to create a visually appealing and user-friendly experience for both customers and coffee shop staff. It features a modern, responsive storefront layout that highlights the coffee shop's offerings, along with an intuitive navigation system for easy browsing.",
      img: Restaurant,
      liveLink: "https://leafy-capybara-7a2ade.netlify.app/",
      githubLink: "https://github.com/haseeb0335/Restaurant-web"
    }
  ];

  // Dynamically maps out categories based on your image_6f5587.jpg reference layout
  const categories = ['All', 'Web Design', 'Dashboard', 'Mobile App'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase block">
            ✦ MY PORTFOLIO ✦
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-brand-textDark tracking-tight">
            My Latest Project That <br />
            <span className="text-brand-purple">Lives On The Net.</span>
          </h2>
        </div>

        {/* Filter Navigation Tabs exactly matching image_6f5587.jpg */}
        <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/10' 
                  : 'bg-white text-brand-textMuted border-gray-200 hover:text-brand-textDark hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Projects Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p, index) => (
          <div key={index} className="bg-brand-cardBg border border-gray-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-purple/10 transition-all group flex flex-col h-full">
            
            {/* Image Preview Window */}
            <div className="h-48 overflow-hidden relative bg-brand-bgLight">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-mono font-bold uppercase text-brand-purple border border-gray-100 shadow-xs">
                {p.category}
              </div>
            </div>

            {/* Content Details Block */}
            <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-mono font-bold text-brand-purple uppercase tracking-wider">{p.tech}</p>
                <h3 className="font-sans font-extrabold text-lg text-brand-textDark group-hover:text-brand-purple transition-colors">{p.title}</h3>
                <p className="text-xs text-brand-textMuted font-light leading-relaxed">{p.desc}</p>
              </div>

              {/* Action Source Pointers */}
              <div className="pt-2 flex items-center justify-between border-t border-gray-50/80">
                <a href={p.githubLink} target="_blank" rel="noreferrer" className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-textMuted hover:text-brand-textDark transition-colors">
                  View Code →
                </a>
                
                <a href={p.liveLink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-brand-bgLight group-hover:bg-brand-purple group-hover:text-white flex items-center justify-center text-brand-textDark transition-all shadow-xs" title="View Live Demo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1='7' y1='17' x2='17' y2='7'></line>
                    <polyline points='7 7 17 7 17 17'></polyline>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}