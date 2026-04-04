"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Template4() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tight text-blue-600"
        >
          Pure<span className="text-slate-900">Space</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-blue-100"
        >
          Book Now
        </motion.button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative px-6 py-16 md:py-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Trusted by 500+ Local Homes
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              Expert Cleaning <br />
              <span className="text-blue-600">for Your Home.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Premium cleaning services tailored to your lifestyle. We handle the dirty work so you can focus on what matters.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Get Free Quote
              </button>
              <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Our Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/service-1.png" 
              alt="Clean Living Room" 
              fill 
              className="object-cover"
            />
          </motion.div>
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 max-w-xs"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">100% Satisfaction</p>
              <p className="text-xs text-slate-400">Guaranteed quality results</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Professional Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide a wide range of cleaning solutions to meet your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Deep Cleaning", desc: "Thorough cleaning of every corner, including appliances and windows." },
              { title: "Recurring Service", desc: "Weekly or bi-weekly visits to keep your home consistently fresh." },
              { title: "Move In / Out", desc: "Setting the stage for new beginnings with a spotless transition." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="py-12 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-sm">&copy; 2026 PureSpace Professional Cleaning. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
            <a href="#" className="hover:text-slate-600">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
