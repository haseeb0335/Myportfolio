import React, { useState } from 'react';
import { 
  Briefcase, 
  Mail, 
  Layers, 
  Clock, 
  Search, 
  LogOut, 
  Lock, 
  Trash2 
} from 'lucide-react';

// Mock Data representing submissions directly matching your client inquiry form fields
const initialSubmissions = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    projectType: "Full-Stack Web Application",
    message: "Need a custom dashboard built with Vite, Tailwind CSS, and Node.js for tracking analytics. Timeline is roughly 3 weeks.",
    date: "May 28, 2026",
    status: "New"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    email: "s.jenkins@bakeryops.io",
    projectType: "E-Commerce Custom Platform",
    message: "Looking for an optimized online store with custom checkout flows, integrated inventory systems, and WhatsApp order alerts.",
    date: "May 26, 2026",
    status: "In Discussion"
  },
  {
    id: 3,
    name: "Kamran Khan",
    email: "kamran@academia.edu",
    projectType: "School Management Dashboard",
    message: "Seeking a specialized role-based system to coordinate student grades, parent notifications, and quick fee structures.",
    date: "May 24, 2026",
    status: "Completed"
  }
];

export default function PortfolioAdminDashboard({ onBackToPortfolio }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard Functional States
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedProject, setSelectedProject] = useState(initialSubmissions[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Handle Login Event
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Haseeb' && password === 'Haseeb0335@') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid administrator credentials.');
    }
  };

  // Handle Logout / Exit Event
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    if (onBackToPortfolio) onBackToPortfolio(); // Safely toggle view back to your landing page
  };

  // Update Submission Tracking Status
  const updateStatus = (id, newStatus) => {
    const updated = submissions.map(sub => {
      if (sub.id === id) {
        const updatedSub = { ...sub, status: newStatus };
        if (selectedProject?.id === id) {
          setSelectedProject(updatedSub);
        }
        return updatedSub;
      }
      return sub;
    });
    setSubmissions(updated);
  };

  // Delete/Archive a Submission Brief
  const deleteSubmission = (id) => {
    const filtered = submissions.filter(sub => sub.id !== id);
    setSubmissions(filtered);
    if (selectedProject?.id === id) {
      setSelectedProject(filtered[0] || null);
    }
  };

  // Filtering Logic based on Search Input & Category Filters
  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch = 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.projectType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || sub.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // ----------------- LOGIN RENDER INTERFACE -----------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-left font-sans">
        <div className="sm:mx-auto w-full max-w-md">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6366F1] flex items-center justify-center shadow-sm border border-purple-100">
              <Lock size={22} />
            </div>
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold text-[#1E293B] tracking-tight">
            Portfolio Workspace Control
          </h2>
          <p className="mt-1 text-center text-xs text-gray-400 font-mono uppercase tracking-wider">
            Inbound Project Briefs Manager
          </p>
        </div>

        <div className="mt-6 sm:mx-auto w-full max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl shadow-gray-200/20 rounded-3xl border border-gray-100 sm:px-10">
            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Admin Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 text-sm bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all text-[#1E293B]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">Secure Access Token</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 text-sm bg-[#F8F9FA] border border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all text-[#1E293B]"
                />
              </div>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-600 font-medium">
                  {loginError}
                </div>
              )}

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onBackToPortfolio}
                  className="w-1/3 flex items-center justify-center px-4 py-3 border border-gray-200 text-gray-500 font-bold text-xs uppercase tracking-widest rounded-xl transition-all hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 flex items-center justify-center px-4 py-3 bg-[#6366F1] hover:bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-indigo-600/10 cursor-pointer border-none"
                >
                  Unlock Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ----------------- MAIN DASHBOARD RENDER INTERFACE -----------------
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-left font-sans flex flex-col">
      {/* Top Navigation Header bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm shadow-gray-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#6366F1] flex items-center justify-center border border-purple-100 text-sm">
              🚀
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1E293B] tracking-tight leading-none">Haseeb Ahmed</h1>
              <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-500 uppercase">Live Pipeline</span>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center space-x-1.5 px-3 py-1.5 border border-gray-200 hover:border-red-200 rounded-xl text-xs text-gray-500 hover:text-red-600 bg-white transition-all cursor-pointer font-medium"
          >
            <LogOut size={13} />
            <span>Exit Controls</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Section: Filters & Submissions List (5 Columns Wide) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 text-gray-400" size={15} />
              <input 
                type="text"
                placeholder="Search clients, configuration types..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8F9FA] border border-gray-100 rounded-xl focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all text-[#1E293B]"
              />
            </div>

            {/* Status categorization tabs */}
            <div className="flex items-center space-x-1 bg-[#F8F9FA] p-1 rounded-xl border border-gray-100">
              {['All', 'New', 'In Discussion', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`flex-1 text-center text-[10px] font-bold py-1.5 rounded-lg transition-all cursor-pointer border-none ${
                    statusFilter === tab 
                      ? 'bg-white text-[#1E293B] shadow-sm' 
                      : 'text-gray-400 hover:text-gray-600 bg-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling Submission Card Queue */}
          <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-270px)] pr-1">
            {filteredSubmissions.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-8 text-center text-xs text-gray-400 font-light">
                No matching submission blueprints found.
              </div>
            ) : (
              filteredSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => setSelectedProject(sub)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left relative bg-white ${
                    selectedProject?.id === sub.id
                      ? 'border-[#6366F1] shadow-md shadow-indigo-600/5 ring-1 ring-[#6366F1]'
                      : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <div>
                      <h3 className="text-xs font-bold text-[#1E293B]">{sub.name}</h3>
                      <p className="text-[11px] text-gray-400 font-light">{sub.projectType}</p>
                    </div>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase tracking-wider ${
                      sub.status === 'New' ? 'bg-blue-50 text-blue-600' :
                      sub.status === 'In Discussion' ? 'bg-amber-50 text-amber-600' :
                      'bg-emerald-50 text-emerald-600'
                    }`}>
                      {sub.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 font-light leading-relaxed mb-2">
                    {sub.message}
                  </p>
                  <div className="text-[10px] font-mono text-gray-400 font-medium">
                    {sub.date}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Section: Detailed Inspection Panel (7 Columns Wide) */}
        <div className="lg:col-span-7">
          {selectedProject ? (
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/10 p-6 sm:p-8 space-y-6">
              
              {/* Profile Card Block Header */}
              <div className="border-b border-gray-100 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 text-[#6366F1] flex items-center justify-center border border-indigo-100 font-bold text-base">
                    {selectedProject.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#1E293B] tracking-tight leading-tight">{selectedProject.name}</h2>
                    <span className="text-xs text-gray-400 font-light flex items-center gap-1 mt-0.5">
                      <Mail size={12} /> {selectedProject.email}
                    </span>
                  </div>
                </div>

                {/* Tracking Status Actions */}
                <div className="flex items-center space-x-2 self-start sm:self-center">
                  <select
                    value={selectedProject.status}
                    onChange={(e) => updateStatus(selectedProject.id, e.target.value)}
                    className="px-3 py-1.5 bg-[#F8F9FA] border border-gray-200 text-xs font-medium rounded-xl text-gray-700 focus:outline-none cursor-pointer"
                  >
                    <option value="New">🟢 New Card</option>
                    <option value="In Discussion">🟡 In Discussion</option>
                    <option value="Completed">🔵 Marked Done / Archive</option>
                  </select>

                  <button 
                    onClick={() => deleteSubmission(selectedProject.id)}
                    className="p-2 border border-gray-100 hover:border-red-100 rounded-xl bg-[#F8F9FA] text-gray-400 hover:text-red-500 hover:bg-red-50/40 transition-all cursor-pointer"
                    title="Delete Brief Request"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Specification Breakdown Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    System Architecture Need
                  </span>
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#1E293B]">
                    <Layers size={14} className="text-[#6366F1]" />
                    <span>{selectedProject.projectType}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F9FA] border border-gray-100 rounded-2xl">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    Submission Timestamp
                  </span>
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#1E293B]">
                    <Clock size={14} className="text-emerald-500" />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
              </div>

              {/* Main Project Description Message Box */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                  Project Description Brief
                </span>
                <div className="bg-[#F8F9FA]/50 border border-gray-100 rounded-2xl p-4 sm:p-5 text-sm text-[#1E293B] font-light leading-relaxed whitespace-pre-wrap">
                  {selectedProject.message}
                </div>
              </div>

              {/* Quick Reply Trigger button */}
              <div className="pt-2">
                <a
                  href={`mailto:${selectedProject.email}?subject=Project Proposal: ${selectedProject.projectType}`}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#6366F1] hover:bg-[#4f46e5] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-indigo-600/10 text-none decoration-none"
                >
                  <Mail size={12} />
                  <span>Initiate Email Reply</span>
                </a>
              </div>

            </div>
          ) : (
            <div className="h-96 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center text-gray-400 font-light shadow-sm">
              <Briefcase size={28} className="text-gray-200 mb-2" />
              <p className="text-xs">Select a submission briefing card from the active layout queue grid to view records.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}