import React, { useState } from 'react';
import BakeryWeb from '../assets/BakeryWeb.png'; 
import SchoolManagement from '../assets/SMS.png';
import CoffeeShop from '../assets/Coffeeshop.png';
import Restaurant from '../assets/img3.png';
import Bakeryimg from '../assets/img4.png';
import RealEstate from '../assets/img5.png';
import VogueWood from '../assets/img6.png';
import HomeInterior from '../assets/img7.png';
import NSBuilders from '../assets/img8.png';
import RafiBuilders from '../assets/img9.png';
import NÉRCESSO from '../assets/img10.png';
import PlantTree from '../assets/img11.png';
import HKbuilders from '../assets/img12.png';

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
      title: "NS Builders & Developers",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwind CSS to create NS builders & developers website. It features a modern, responsive storefront layout that highlights the real estate's offerings, along with an intuitive navigation system for easy browsing.",
      img: NSBuilders,
      liveLink: "https://ns-builders-developers.vercel.app/",
      githubLink: "https://github.com/haseeb0335/NS-Builders-Developers"
    },
    {
      title: "Rafi Builders & Developers",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwind CSS to create Rafi builders & developers website. It features a modern, responsive storefront layout that highlights the real estate's offerings, along with an intuitive navigation system for easy browsing.",
      img: RafiBuilders,
      liveLink: "https://ns-builders-developers-ou78.vercel.app/",
      githubLink: "https://github.com/haseeb0335/Rafi-Builders"
    },
     {
      title: "HK Builders & Developers",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwind CSS to create Rafi builders & developers website. It features a modern, responsive storefront layout that highlights the real estate's offerings, along with an intuitive navigation system for easy browsing.",
      img: HKbuilders,
      liveLink: "https://6a2468651f4734ebbdd41dd5--tourmaline-selkie-bfd796.netlify.app/",
      githubLink: "https://github.com/haseeb0335/HK-Builders"
    },
     {
      title: "Real Estate website",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwind CSS to create a real estate website. It features a modern, responsive storefront layout that highlights the real estate's offerings, along with an intuitive navigation system for easy browsing.",
      img: RealEstate,
      liveLink: "https://real-estate-web-three-rho.vercel.app/",
      githubLink: "https://github.com/haseeb0335/Real-Estate-web"
    },
     {
      title: "vogue-wood-studios-interior",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwind CSS to home interior design website. It features a modern, responsive storefront layout that highlights the interior design's offerings, along with an intuitive navigation system for easy browsing.",
      img: VogueWood,
      liveLink: "https://vogue-wood-studios-interior.vercel.app/",
      githubLink: "https://github.com/haseeb0335/VOGUE-WOOD-STUDIOS-INTERIOR"
    },
     {
      title: "Home & Kitchen finds",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwwind css to create interior design website. It features a modern, responsive storefront layout that highlights the interior design's offerings, along with an intuitive navigation system for easy browsing.",
      img: HomeInterior,
      liveLink: "https://home-interior-web.vercel.app/",
      githubLink: "https://github.com/haseeb0335/Home-Interior-web"
    },
      {
      title: "NÉRCESSO",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwwind css to create NÉRCESSO website. It features a modern, responsive storefront layout that highlights the interior design's offerings, along with an intuitive navigation system for easy browsing.",
      img: NÉRCESSO,
      liveLink: "https://n-rcesso.vercel.app/",
      githubLink: "https://github.com/haseeb0335/N-RCESSO"
    },
     {
      title: "PlantTree-Nursery-Home",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with react and Tailwwind css to create NÉRCESSO website. It features a modern, responsive storefront layout that highlights the interior design's offerings, along with an intuitive navigation system for easy browsing.",
      img: PlantTree,
      liveLink: "https://plant-tree-nursery-home.vercel.app/",
      githubLink: "https://github.com/haseeb0335/PlantTree-Nursery-Home"
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
      desc: "This design is taken from Pinterest and implemented with React and Tailwind CSS to create a restaurant website. It features a modern, responsive storefront layout that highlights the restaurant's offerings, along with an intuitive navigation system for easy browsing.",
      img: Restaurant,
      liveLink: "https://leafy-capybara-7a2ade.netlify.app/",
      githubLink: "https://github.com/haseeb0335/Restaurant-web"
    },
     {
      title: "Bakery website",
      category: "Web Design",
      tech: "React JS • Tailwind CSS" ,
      desc: "This design is taken from Pinterest and implemented with React and Tailwind CSS to create a visually appealing and user-friendly experience for both customers and restaurant staff. It features a modern, responsive storefront layout that highlights the restaurant's offerings, along with an intuitive navigation system for easy browsing.",
      img: Bakeryimg,
      liveLink: "https://bakery-web-2-cjl5ineyp-h03352503620-5431s-projects.vercel.app/",
      githubLink: "https://github.com/haseeb0335/Bakery-web-2"
    },
    
    
     
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