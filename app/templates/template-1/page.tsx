"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Template1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-jakarta selection:bg-amber-200/30 overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-[0.2em] uppercase"
        >
          Veridian <span className="text-amber-400">Estates</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-amber-400 transition-colors">Portfolios</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Design</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Philosophy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-400 text-black px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest"
        >
          Book a Tour
        </motion.button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-1.png" 
            alt="Luxury Penthouse" 
            fill 
            className="object-cover opacity-60 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.p variants={fadeInUp} className="text-amber-400 text-xs font-black uppercase tracking-[0.5em] mb-6">
            Establishing the Pinnacle of Living
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            Redefining <br /> 
            <span className="italic font-light text-white/50">Modern Luxury.</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button className="w-full md:w-auto px-10 py-5 border border-white/20 hover:border-amber-400 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-amber-400 hover:text-black">
              View Collection
            </button>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <p className="text-sm text-white/60 max-w-xs text-left md:text-left">
              Bespoke architectural masterpieces designed for the few who demand nothing but perfection.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
        >
          <div className="w-px h-16 bg-linear-to-b from-transparent to-white" />
          <span className="text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </section>

      {/* 3. FEATURED SECTION */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8"
            >
              Where <span className="text-amber-400">Architecture</span> <br /> 
              Meets Artistry.
            </motion.h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Every Veridian property is more than just a home; it&apos;s a legacy. We combine timeless design principles with cutting-edge technology to create spaces that inspire.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-amber-400 mb-2">120+</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">Global Awards</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-amber-400 mb-2">15</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">Bespoke Projects</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative rounded-2xl overflow-hidden border border-white/5">
              <Image src="/hero-1.png" alt="Detail 1" fill className="object-cover scale-110 hover:scale-100 transition-transform duration-700" />
            </div>
            <div className="relative rounded-2xl overflow-hidden mt-12 border border-white/5">
              <Image src="/hero-1.png" alt="Detail 2" fill className="object-cover scale-110 hover:scale-100 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-400 opacity-[0.02]" />
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 italic">
              Experience the Future <br /> of Living.
            </h3>
            <button className="bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-amber-400 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              Schedule Private Viewing
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-white/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
            &copy; 2026 Veridian Estates Group
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Architecture</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
