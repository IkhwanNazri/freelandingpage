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

export default function Template3() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat selection:bg-red-100 overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-sm">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-black italic tracking-tighter"
        >
          MAJU<span className="text-red-600">AUTO</span>
        </motion.div>
        
        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#koleksi" className="hover:text-red-600 transition-colors">Koleksi Proton</a>
          <a href="#koleksi" className="hover:text-red-600 transition-colors">Koleksi Perodua</a>
          <a href="#promosi" className="hover:text-red-600 transition-colors">Promosi</a>
          <a href="#testimoni" className="hover:text-red-600 transition-colors">Testimoni</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-red-100"
        >
          Semak Kelayakan
        </motion.button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-red-100">
                Authorized Sales Advisor Malaysia
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                Miliki Kereta <br />
                <span className="text-red-600 uppercase">Idaman Anda</span> <br />
                Tanpa Deposit.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-slate-500 mb-10 max-w-lg font-medium leading-relaxed">
                Skim graduan, kakitangan kerajaan & swasta. Proses pantas, kelulusan segera, & penghantaran terus ke pintu rumah anda.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-2xl shadow-red-100">
                  Lihat Katalog 2026
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">
                  Whatsapp Penasihat
                </button>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <motion.div 
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative z-10"
             >
                {/* Simplified placeholder car image using gradient/bg since generate_image failed */}
                <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-100 shadow-2xl relative shadow-red-100/50 group">
                   <Image 
                     src="/banner.jpg" 
                     alt="Car Showroom" 
                     fill 
                     className="object-cover transition-opacity duration-500"
                   />
                   {/* Hint for user if image is missing */}
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-100 -z-10">
                      <p className="text-slate-300 font-black italic text-4xl tracking-tighter opacity-40 uppercase">No Banner Found</p>
                   </div>
                </div>
             </motion.div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* 3. CATALOUGE SECTION */}
      <section id="koleksi" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">Koleksi Terlaris</h2>
            <p className="text-slate-500 font-bold">Pilih antara model Proton & Perodua dengan tawaran terbaik.</p>
          </div>
          <div className="flex gap-2">
             <button className="px-6 py-2 bg-red-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">Global Brands</button>
             <button className="px-6 py-2 bg-white text-slate-400 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">Sedan</button>
             <button className="px-6 py-2 bg-white text-slate-400 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">SUV</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Proton X50", category: "SUV", price: "Bulanan dari RM 7xx", image: "/x50.jpg" },
            { name: "Perodua Myvi", category: "Hatchback", price: "Bulanan dari RM 4xx", image: "/myvi.webp" },
            { name: "Proton S70", category: "Sedan", price: "Bulanan dari RM 6xx", image: "/s70.webp" },
            { name: "Perodua Ativa", category: "SUV", price: "Bulanan dari RM 5xx", image: "/ativa.webp" },
            { name: "Proton X70", category: "SUV", price: "Bulanan dari RM 9xx", image: "/x70.webp" },
            { name: "Perodua Alza", category: "MPV", price: "Bulanan dari RM 6xx", image: "/alza.webp" },
          ].map((car, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100/50 transition-all p-8 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">{car.category}</p>
                  <h4 className="text-2xl font-black font-montserrat">{car.name}</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
              <div className="aspect-[16/10] bg-slate-50 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group">
                 <Image 
                   src={car.image} 
                   alt={car.name} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-50 -z-10">
                    <p className="text-slate-200 font-black text-[8px] uppercase tracking-widest text-center px-4">Sila letak file {car.image} di folder public</p>
                 </div>
              </div>
             
              <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                 <p className="font-black text-slate-900">{car.price}</p>
                 <button className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 bg-slate-900 text-white px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Proses Mudah <br /> <span className="text-red-600">4 Langkah Sahaja.</span></h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Pilih Model", desc: "Pilih model Proton atau Perodua idaman anda di katalog kami." },
                { step: "02", title: "Hantar Dokumen", desc: "Hanya perlu hantar salinan IC, Lesen & Slip Gaji melalui Whatsapp." },
                { step: "03", title: "Proses Loan", desc: "Kami bantu buat permohonan ke bank sehingga lulus dengan rate terbaik." },
                { step: "04", title: "Hantar Kereta", desc: "Kereta baru anda akan dihantar terus ke depan pintu rumah!" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-2xl font-black text-red-600 opacity-50">{item.step}</span>
                  <div>
                    <h5 className="text-lg font-bold mb-1">{item.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
                <Image src="/fnb-malaysia.png" alt="Happy Customer" fill className="object-cover opacity-40 grayscale" />
                <div className="text-center p-12">
                   <p className="text-5xl font-black italic mb-4">LULUS!</p>
                   <p className="text-xs uppercase tracking-[0.3em] font-bold text-red-600">Loan Success Story</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-slate-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black italic tracking-tighter uppercase">
            MAJU<span className="text-red-600">AUTO</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
             <a href="#" className="hover:text-red-600">Privacy Policy</a>
             <a href="#" className="hover:text-red-600">Terms & Conditions</a>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2026 Maju Auto Sales - Authorized Dealer</p>
        </div>
      </footer>

    </div>
  );
}
