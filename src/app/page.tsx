"use client"

import React from "react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
      {/* 背景のオシャレな青い線 */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#2563eb" strokeWidth="2" strokeDasharray="12 6" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="8 8" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="8 8" />
      </svg>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
        <div className="bg-white rounded-2xl shadow-xl p-20 w-full flex flex-col items-center" style={{ minHeight: '577px', maxWidth: '893px' }}>
          <h1 className="text-[5.1rem] font-bold text-gray-900 mb-10 tracking-tight font-sans text-center">TOMOYA YAMASHITA</h1>
          <p className="text-[2.19rem] text-gray-700 font-sans text-center mb-6">Okayama / Japan</p>
          <p className="text-[1.46rem] text-gray-600 text-center font-sans mb-12">welcome to my self-introduction page.</p>
          <a href="/content" className="mt-4 px-13 py-5 rounded-full bg-neutral-900 text-white text-[1.46rem] font-bold shadow-md hover:bg-neutral-700 transition-colors">Click!</a>
        </div>
      </main>
    </div>
  );
}