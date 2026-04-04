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

export default function Template2() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-opensans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 backdrop-blur-md bg-white/90 border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight text-slate-900 group cursor-pointer"
        >
          Warung<span className="text-orange-600">Kopi</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#hero" className="hover:text-orange-600 transition-colors uppercase tracking-wider text-[11px]">Utama</a>
          <a href="#menu" className="hover:text-orange-600 transition-colors uppercase tracking-wider text-[11px]">Menu Pilihan</a>
          <a href="#about" className="hover:text-orange-600 transition-colors uppercase tracking-wider text-[11px]">Kisah Kami</a>
          <a href="#contact" className="hover:text-orange-600 transition-colors uppercase tracking-wider text-[11px]">Hubungi</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow-lg shadow-orange-100 flex items-center gap-2"
        >
          Tempah Sekarang
        </motion.button>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/fnb-malaysia.png" 
            alt="Local Cafe Vibe" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-orange-100">
              #1 Kopi Tempatan SME Malaysia
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
              Hirupan Warisan, <br />
              <span className="text-orange-600 italic">Keselesaan Moden.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Kami membawakan rasa kopi klasik Malaysia yang anda rindui dengan suasana kafe yang kontemporari dan selesa.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-center hover:bg-orange-600 transition-all shadow-xl shadow-slate-200">
                Lihat Menu Viral
              </a>
              <a href="#contact" className="bg-white text-slate-900 border-2 border-slate-900 px-10 py-4 rounded-xl font-bold text-center hover:bg-slate-50 transition-all">
                Cari Lokasi
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SIGNATURE MENU SECTION */}
      <section id="menu" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Signature selection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Pilihan Kopi & Santapan.
          </motion.h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Setiap cawan kopi kami diproses secara manual untuk mengekalkan aroma dan rasa autentik yang memikat selera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              name: "Kopi Tarik Ori", 
              price: "RM 9.90", 
              desc: "Kopi robusta kawkaw dengan adunan susu pekat yang pekat dan berkrim.",
              img: "/kopi-tarik.png"
            },
            { 
              name: "Gula Melaka Latte", 
              price: "RM 14.90", 
              desc: "Gabungan espresso premium dan manis asli Gula Melaka dari ladang.",
              img: "/fnb-malaysia.png" 
            },
            { 
              name: "Signature Toast", 
              price: "RM 7.50", 
              desc: "Roti bakar rangup dengan sapuan kaya buatan sendiri yang penuh aroma pandan.",
              img: "/fnb-1.png"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100 group transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full font-black text-sm text-slate-950 shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 font-inter group-hover:text-orange-600 transition-colors uppercase tracking-tight">{item.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
                <button className="text-slate-900 border-b-2 border-orange-600 pb-1 text-xs font-black uppercase tracking-widest hover:text-orange-600 transition-colors">
                  Add to order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT / STORY SECTION */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
             <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/fnb-malaysia.png" alt="Our Story" fill className="object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-600 rounded-full flex flex-col items-center justify-center text-white p-6 text-center rotate-12 shadow-2xl">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Tahun Pengalaman</p>
             </div>
          </div>
          
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              Kisah Kami
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">Bermula dengan Segelas Kopi Tarik.</h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
              WarungKopi bermula daripada gerai kecil di pinggir jalan pada tahun 2014. Misi kami kekal sama: menyediakan kopi berkualiti tinggi yang mampu milik untuk semua rakyat Malaysia tanpa mengira latar belakang.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h5 className="text-2xl font-bold mb-1">15k+</h5>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Cawan Terjual</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold mb-1">4.9/5</h5>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-black">Rating Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Apa Kata Pelanggan?</h2>
            <div className="flex justify-center gap-1 text-orange-400">
               {[1,2,3,4,5].map(i => (
                 <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                 </svg>
               ))}
            </div>
         </div>
         <div className="max-w-4xl mx-auto italic text-xl md:text-3xl font-medium text-slate-600 text-center leading-relaxed">
            &ldquo;Kopi Tarik dia memang padu habiaq! Suasana kedai pun rileks, sesuai sangat kalau nak buat kerja atau dating. Roti bakar dia pun rangup gila!&rdquo;
            <p className="mt-8 text-sm not-italic font-black uppercase tracking-[0.2em] text-slate-400">— Azrul, Pelanggan Setia Sejak 2019</p>
         </div>
      </section>

      {/* 6. CONTACT / CTA SECTION */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full" />
           <div className="relative z-10">
              <h3 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Jom Lepak <br /><span className="text-orange-500 font-light italic">Hari Ini?</span></h3>
              <p className="text-slate-400 max-w-md text-lg font-medium">Kami buka setiap hari dari jam 8 PAGI hingga 10 MALAM. Datanglah bawa kawan-kawan!</p>
           </div>
           <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
              <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-500 transition-all shadow-2xl shadow-orange-900/50">
                 WhatsApp Lokasi
              </button>
              <div className="flex justify-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest mt-4">
                 <span>Subang Jaya</span>
                 <span>Taman Tun</span>
                 <span>Cyberjaya</span>
              </div>
           </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-slate-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tight">
            Warung<span className="text-orange-600">Kopi</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
             <a href="#" className="hover:text-orange-600">Privacy</a>
             <a href="#" className="hover:text-orange-600">Terms</a>
             <a href="#" className="hover:text-orange-600">Sitemap</a>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2026 Warung Kopi SME Malaysia</p>
        </div>
      </footer>

    </div>
  );
}
