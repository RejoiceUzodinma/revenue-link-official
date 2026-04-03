"use client";
import React from 'react';

export default function LgaPitch() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h2 className="text-xl font-black text-[#1E3A8A] tracking-tighter">RevenueLink</h2>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-[10px] font-black uppercase tracking-[5px] text-blue-600 mb-4 block">
          The Future of LGA Finance
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-[#1E3A8A] leading-tight tracking-tighter mb-6">
          Transparency in LGA <br /> 
          <span className="text-blue-500">Revenue Collection.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Eliminating leakages and empowering Local Government Areas with real-time digital 
          revenue tracking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/lga-portal" 
            className="w-full sm:w-auto bg-[#1E3A8A] text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-blue-900 transition-all text-sm uppercase tracking-widest"
          >
            Access Revenue Portal
          </a>
          <a 
            href="https://docs.google.com/forms/d/your-link" 
            target="_blank" 
            className="w-full sm:w-auto border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest"
          >
            Submit Application
          </a>
        </div>
      </main>
    </div>
  );
}