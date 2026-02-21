"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const stepsData = [
  { title: "Skop Projek", desc: "Landing page satu muka surat yang laju. Tiada fungsi database/e-commerce kompleks.", svgPath: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" },
  { title: "Hosting Percuma", desc: "Live di subdomain Vercel. Kos custom domain (.com) ditanggung anda.", svgPath: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" },
  { title: "Bahan & Aset", desc: "Sediakan logo, gambar, dan copywriting. Saya fokus pada coding & design.", svgPath: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { title: "Konten Media", desc: "Proses pembuatan akan dirakam untuk konten TikTok/Portfolio saya.", svgPath: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" },
  { title: "Final Touch", desc: "Siap dalam 3-5 hari. Maksimum 1 kali sesi revisi kecil.", svgPath: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
];

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }
  })
};

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const bookedSlots = 3;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-violet-500/30 overflow-x-hidden font-jakarta relative">
      
      {/* 1. GRID BACKGROUND & BIG TEXT BG */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
  {/* 1. GRID BACKGROUND */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  {/* 2. DESKTOP BACKGROUND TEXT (SM ke atas) */}
              <div className="hidden sm:flex absolute inset-0 flex-col justify-center leading-[0.75] px-10">
                {/* BUILD - Rapat ke kiri */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[14vw] font-black text-white/10 select-none whitespace-nowrap tracking-tighter"
                >
                  BUILD WITH
                </motion.div>

                {/* WAN - Rapat ke kanan */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-[14vw] font-black text-white/10 select-none whitespace-nowrap self-end mr-[5vw] tracking-tighter"
                >
                  WAN
                </motion.div>
              </div>

          {/* 3. MOBILE BACKGROUND TEXT (Kecil dari SM) */}
          <div className="flex sm:hidden absolute inset-0 flex-col justify-center py-0 leading-none">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[30vw] font-black text-white/5 select-none">
              BUILD WITH
            </motion.div>
            {/* <div className="text-[30vw] font-black text-white/5 select-none whitespace-nowrap ">
              WITH
            </div> */}
            <motion.div 
             initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
            
            className="text-[30vw] font-black text-white/5 self-end select-none">
              WAN
            </motion.div>
          </div>

          {/* 4. VIGNETTE EFFECT (Untuk nampak lebih "Deep") */}
          <div className="absolute inset-0 bg-gradient-to-back from-[#050505] via-transparent to-[#050505] opacity-60"></div>
        </div>

      {/* 2. NAVBAR */}
      <nav className="relative z-20 flex justify-between items-center px-6 sm:px-8 py-6 max-w-7xl mx-auto">
        <motion.div 
  initial={{ opacity: 0, x: -20 }} 
  animate={{ opacity: 1, x: 0 }} 
  className="text-lg sm:text-xl font-bold tracking-tighter italic flex items-center gap-2"
>
  <span>BUILD WITH |</span>
  
  {/* Container untuk WAN */}
  <div className="relative px-1 overflow-hidden group">
    {/* Background Slide Yellow */}
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ 
        delay: 0.8, // Biar dia slide lepas teks muncul
        duration: 0.6, 
        ease: "circOut" 
      }}
      className="absolute inset-0 bg-yellow-400 z-0"
    />
    
    {/* Teks WAN */}
    <motion.span
      initial={{ color: "#ffffff" }}
      animate={{ color: "#000000" }}
      transition={{ delay: 1, duration: 0.3 }}
      className="relative z-10"
    >
WAN
    </motion.span>
  </div>
</motion.div>
        <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-white transition">Showcase</a>
          <a href="#" className="hover:text-white transition">Process</a>
          <a href="/tiktok" className="hover:text-white transition">TikTok</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)} 
          className="bg-white text-black px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-slate-200 transition shadow-lg"
        >
          Contact
        </motion.button>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-10 md:pt-20 pb-20">
  <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
    
    <motion.div initial="hidden" animate="visible" className="relative">
      
      {/* HEADER AREA: Teks & Lottie (Mobile Only) */}
      <div className="flex items-start justify-between md:block">
        <div className="flex-1">
          <motion.span 
            variants={wordReveal} custom={1}
            className="inline-block mb-4 px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase"
          >
            Limited Slots Available
          </motion.span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.85] mb-8">
            <motion.span variants={wordReveal} custom={2} className="inline-block">Design</motion.span> <br /> 
            <motion.span variants={wordReveal} custom={3} className="text-slate-500 italic inline-block">Fast.</motion.span> <br /> 
            <motion.span variants={wordReveal} custom={4} className="inline-block">Build</motion.span> <span className="text-blue-500"><motion.span variants={wordReveal} custom={5} className="inline-block">Free.</motion.span></span>
          </h1>
        </div>

        {/* LOTTIE UNTUK MOBILE SAHAJA (Duduk sebelah Design Fast) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 md:hidden relative -mt-4"
        >
          <DotLottieReact
            src="https://lottie.host/6ef615fb-aa2b-4c5e-89f1-7cbe61ca2af8/nOVoggWz25.lottie" 
            loop
            autoplay
          />
          {/* Mini Floating Card untuk Mobile */}
          <div className="absolute -bottom-2 -right-2 bg-white px-2 py-1 rounded-lg shadow-xl border border-slate-200 z-20">
             <p className="text-[7px] font-black text-violet-600 leading-none">⚡ FAST</p>
          </div>
        </motion.div>
      </div>

      {/* NEOBRUTALIST SLOT TRACKER */}
      <motion.div 
        whileHover={{ scale: 1.02, rotate: 0.5 }}
        className="bg-yellow-400 text-black p-4 mb-10 border-[3px] sm:border-4 border-black shadow-[6px_6px_0px_#000] sm:shadow-[8px_8px_0px_#000] flex items-center gap-4 relative overflow-hidden max-w-sm sm:max-w-md"
      >
        <div className="absolute top-0 left-0 w-full bg-black py-0.5">
          <motion.p 
            animate={{ x: [-200, 200] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="text-[8px] text-yellow-400 font-bold uppercase whitespace-nowrap"
          >
            Hurry Up! Only 2 Slots Left • Book Now • Hurry Up! Only 2 Slots Left
          </motion.p>
        </div>

        <div className="mt-2 flex items-center gap-4 w-full">
          <div className="bg-black text-yellow-400 px-3 py-2 rounded-lg font-black text-xl sm:text-2xl">
             {bookedSlots}/5
          </div>
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs font-black uppercase leading-tight">Project Slot Status</p>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className={`h-2.5 sm:h-3 flex-1 border-[1.5px] sm:border-2 border-black ${s <= bookedSlots ? 'bg-black' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.p variants={wordReveal} custom={6} className="text-base sm:text-lg text-slate-400 mb-10 max-w-sm sm:max-w-md leading-relaxed font-medium">
        Saya sedang mencari 5 bisnes bertuah untuk saya binakan landing page profesional secara percuma untuk dijadikan konten TikTok.
      </motion.p>
      
      <motion.button
        variants={wordReveal} custom={7}
        whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}
        onClick={() => { setCurrentStep(0); setShowModal(true); }}
        className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-violet-600 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-violet-500 transition-all hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] flex justify-center items-center gap-3"
      >
        Apply for Free Slot
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </motion.button>
    </motion.div>

    {/* VISUAL SIDE (Desktop Only - Tetap maintain layout asal) */}
    <div className="relative hidden md:block lg:pl-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full aspect-square flex items-center justify-center"
      >
        <DotLottieReact
          src="https://lottie.host/6ef615fb-aa2b-4c5e-89f1-7cbe61ca2af8/nOVoggWz25.lottie" 
          loop
          autoplay
        />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-10 bg-white p-6 rounded-3xl shadow-2xl w-full max-w-[200px] z-20 text-black border border-slate-200"
      >
        <p className="font-bold text-xs mb-1 text-violet-600">⚡ Instant Deploy</p>
        <p className="text-[10px] text-slate-500 leading-tight">Fastest workflow in the game.</p>
      </motion.div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/20 blur-[120px] -z-10 animate-pulse"></div>
    </div>

  </div>
</section>

      {/* 5. LIVE PREVIEW SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 pb-20 md:pb-40 relative z-10"
      >
        <p className="text-[10px] sm:text-xs font-black uppercase mb-8 tracking-[0.3em] text-slate-600 italic">Projek Telah Dibuat</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={{ y: -10 }} className="sm:col-span-2 h-[300px] sm:h-[400px] bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-white/5 hover:border-violet-500/50 transition-all cursor-pointer">
            <span className="text-3xl sm:text-4xl font-black italic opacity-20 text-violet-500">01</span>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold">The Coffee Agency</h4>
              <p className="text-slate-500 text-sm">Minimalist e-commerce interface.</p>
            </div>
          </motion.div>
          
          <motion.div whileHover={{ y: -10 }} className="h-[300px] sm:h-[400px] bg-white text-black rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:bg-violet-600 hover:text-white transition-all cursor-pointer group">
            <span className="text-3xl sm:text-4xl font-black italic underline">LIVE</span>
            <h4 className="text-lg sm:text-xl font-bold leading-tight">Vibes Tech Dashboard</h4>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="h-[300px] sm:h-[400px] bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-white/5 cursor-wait">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center">→</div>
            <h4 className="text-lg sm:text-xl font-bold">Your Web <br/> Could Be Here</h4>
          </motion.div>
        </div>
      </motion.section>

      {/* 6. MODAL (Responsive Optimized) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-lg" 
              onClick={() => setShowModal(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="p-6 sm:p-10">
                <div className="flex gap-1.5 mb-8">
                  {stepsData.map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-violet-600' : 'bg-slate-100'}`} />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="min-h-[220px] sm:min-h-[250px]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-black mb-6 border border-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d={stepsData[currentStep].svgPath} />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3">{stepsData[currentStep].title}</h2>
                    <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{stepsData[currentStep].desc}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col gap-3 mt-6">
                  {currentStep < stepsData.length - 1 ? (
                    <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} onClick={() => setCurrentStep(currentStep + 1)} className="w-full py-4 sm:py-5 bg-black text-white rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-800 transition shadow-lg">
                      Faham, Seterusnya
                    </motion.button>
                  ) : (
                    <motion.a whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} href="URL_BORANG_KAMU" className="w-full py-4 sm:py-5 bg-violet-600 text-white rounded-2xl font-bold text-base sm:text-lg text-center hover:bg-violet-700 transition shadow-xl">
                      Setuju & Tuntut Slot
                    </motion.a>
                  )}
                  <button onClick={() => setShowModal(false)} className="py-2 text-slate-400 text-xs sm:text-sm font-medium hover:text-slate-600">Batal Permohonan</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}