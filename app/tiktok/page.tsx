"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stepsData = [
  { title: "Skop Projek", desc: "Landing page satu muka surat yang laju. Tiada fungsi database kompleks.", svgPath: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" },
  { title: "Hosting Percuma", desc: "Live di subdomain Vercel. Kos custom domain ditanggung anda.", svgPath: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" },
  { title: "Bahan & Aset", desc: "Sediakan logo, gambar, dan copywriting. Saya fokus pada coding.", svgPath: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { title: "Konten Media", desc: "Proses pembuatan dirakam untuk TikTok/Portfolio saya.", svgPath: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" },
  { title: "Final Touch", desc: "Siap dalam 3-5 hari. Maksimum 1 kali sesi revisi kecil.", svgPath: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
];

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const bookedSlots = 3;

  return (
    <main className="min-h-screen bg-[#080808] text-white font-jakarta overflow-x-hidden">
      
      {/* 1. THE "NON-AI" BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] text-[20vw] font-black text-white/[0.02] leading-none select-none">
          FREE DESIGN
        </div>
        <div className="absolute bottom-[-5%] right-[-5%] text-[15vw] font-black text-white/[0.02] leading-none select-none">
          5 SLOTS ONLY
        </div>
      </div>

      {/* 2. MINIMALIST NAV */}
      <nav className="relative z-50 flex justify-between items-center p-6 md:p-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center font-black">X</div>
          <span className="text-sm font-bold tracking-[0.2em] uppercase">Built.Raw</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-[10px] font-bold text-slate-500 tracking-widest uppercase">Kuala Lumpur / 2024</span>
          <button onClick={() => setShowModal(true)} className="text-xs font-black border-b-2 border-violet-600 pb-1 hover:text-violet-500 transition uppercase">Join</button>
        </div>
      </nav>

      {/* 3. ASYMMETRIC HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-32 flex flex-col items-start">
        
        {/* Slot Progress (Floating) */}
        <motion.div 
          initial={{ rotate: -5, opacity: 0 }} animate={{ rotate: -2, opacity: 1 }}
          className="bg-white text-black p-4 mb-12 rounded-xl shadow-[10px_10px_0px_#7c3aed] flex items-center gap-6"
        >
          <div>
            <p className="text-[10px] font-black uppercase leading-none mb-1">Status</p>
            <p className="text-2xl font-black italic">{bookedSlots}/5 <span className="text-sm not-italic opacity-40 uppercase">Booked</span></p>
          </div>
          <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
             <motion.div initial={{ width: 0 }} animate={{ width: `${(bookedSlots/5)*100}%` }} className="h-full bg-violet-600" transition={{ delay: 1 }} />
          </div>
        </motion.div>

        <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-[0.8] mb-12">
          I BUILD <br /> 
          <span className="text-violet-600">FREE</span> WEB <br />
          FOR <span className="text-slate-800">U.</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-end w-full">
          <p className="text-lg md:text-2xl text-slate-400 max-w-md font-medium leading-snug">
            Tak payah bayar. Aku cuma nak buat konten TikTok. Kau bagi bahan, aku bagi website pro. 
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            onClick={() => { setCurrentStep(0); setShowModal(true); }}
            className="bg-violet-600 text-white p-8 md:p-12 rounded-full font-black text-2xl hover:bg-white hover:text-black transition-colors duration-500 shadow-2xl"
          >
            GET IT →
          </motion.button>
        </div>
      </section>

      {/* 4. BENTO GRID (LIVE PREVIEWS) */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <p className="text-xs font-black uppercase mb-8 tracking-widest text-slate-600 italic">Projek Telah Dibuat</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 h-[400px] bg-slate-900 rounded-2xl p-10 flex flex-col justify-between border border-white/5 hover:border-violet-500/50 transition-all">
            <span className="text-4xl font-black">01</span>
            <div>
              <h4 className="text-2xl font-bold">The Coffee Agency</h4>
              <p className="text-slate-500 text-sm">Minimalist e-commerce interface.</p>
            </div>
          </div>
          <div className="md:col-span-1 h-[400px] bg-white text-black rounded-[2rem] p-10 flex flex-col justify-between hover:bg-violet-600 hover:text-white transition-all">
            <span className="text-4xl font-black italic underline">LIVE</span>
            <h4 className="text-xl font-bold leading-tight">Vibes Tech Dashboard</h4>
          </div>
          <div className="md:col-span-1 h-[400px] bg-slate-900 rounded-[2rem] p-10 flex flex-col justify-between border border-white/5">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">→</div>
            <h4 className="text-xl font-bold">Your Web <br/> Could Be Here</h4>
          </div>
        </div>
      </section>

      {/* 5. THE MODAL (Clean & Sharp) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-lg h-screen bg-[#0f0f0f] border-l border-white/10 p-8 md:p-16 flex flex-col justify-center"
            >
              <div className="mb-20">
                <p className="text-violet-600 font-black text-sm uppercase tracking-widest mb-2">Step {currentStep + 1} / 5</p>
                <div className="w-full h-[1px] bg-white/10 relative">
                  <motion.div className="absolute top-0 left-0 h-full bg-violet-600" animate={{ width: `${(currentStep+1)/5 * 100}%` }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="mb-12">
                  <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase italic">{stepsData[currentStep].title}</h2>
                  <p className="text-slate-400 text-xl leading-relaxed">{stepsData[currentStep].desc}</p>
                </motion.div>
              </AnimatePresence>

              <div className="space-y-4">
                {currentStep < stepsData.length - 1 ? (
                  <button onClick={() => setCurrentStep(currentStep + 1)} className="w-full py-6 bg-white text-black rounded-full font-black text-xl hover:bg-violet-600 hover:text-white transition-all uppercase">
                    Faham, Next
                  </button>
                ) : (
                  <a href="LINK_BORANG_KAU" className="block w-full py-6 bg-violet-600 text-white rounded-full font-black text-xl text-center hover:bg-white hover:text-black transition-all uppercase">
                    Setuju & Apply
                  </a>
                )}
                <button onClick={() => setShowModal(false)} className="w-full text-slate-600 font-bold text-xs uppercase tracking-[0.3em] mt-4">Close [ESC]</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}