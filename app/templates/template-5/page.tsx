"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export default function Template5() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-montserrat selection:bg-indigo-100 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-6 bg-white/70 backdrop-blur-md border-b border-slate-200/40">
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter"
        >
          MASTERY<span className="text-indigo-600">.DIGITAL</span>
        </motion.div>
        
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#about" className="hover:text-indigo-600 transition-colors">Program</a>
          <a href="#who" className="hover:text-indigo-600 transition-colors">Untuk Siapa</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimoni</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 transition-all hover:bg-slate-900"
        >
          Dapatkan Akses
        </motion.button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-8 border border-indigo-100">
              Versi 2026: Strategi Bisnes Digital
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8">
              Bina Empayar <br />
              <span className="text-indigo-600 italic">Tanpa Pejabat.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg font-medium leading-relaxed">
              Panduan langkah demi langkah membina pendapatan 5-angka sebulan hanya dengan menjual kepakaran digital anda.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 items-center">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-2xl">
                Beli Sekarang — RM97
              </button>
              <div className="flex -space-x-3 items-center">
                 {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-4 border-white" />)}
                 <span className="pl-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Menyertai 3,500+ Pelajar</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Mockup Placeholder */}
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: "circOut" }}
               className="aspect-[4/5] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[1px] border-slate-100 relative overflow-hidden group"
             >
                <div className="absolute inset-0 bg-linear-to-br from-indigo-50 to-white flex flex-col items-center justify-center p-12">
                   <div className="w-32 h-44 bg-white rounded-lg shadow-2xl mb-8 flex items-center justify-center border border-slate-100">
                      <div className="w-16 h-1 bg-indigo-600/10 rounded-full mb-2" />
                      <div className="w-12 h-1 bg-indigo-600/10 rounded-full" />
                   </div>
                   <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mb-2">E-Book Mockup</p>
                   <p className="text-slate-300 text-[10px] italic">Sila letak file ebook.png di folder public</p>
                </div>
                <Image src="/ebook.png" alt="Product Cover" fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity" />
             </motion.div>
             {/* Abstract Decor */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 blur-[80px] rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* 3. WHO IS THIS FOR? */}
      <section id="who" className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 px-6 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 -skew-x-12 translate-x-1/2" />
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
               <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Adakah Ini Anda?</h2>
               <p className="text-slate-400 text-lg font-medium">Jika anda berada dalam situasi ini, Mastery Digital direka khas untuk membantu anda keluar daripada zon selesa.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Makan Gaji", desc: "Anda penat bekerja 9-5 dan mahukan sistem pendapatan pasif yang stabil." },
                 { title: "Usahawan Baru", desc: "Anda baru nak start bisnes tapi tak tahu cara marketing yang berkesan." },
                 { title: "Freelancer", desc: "Anda ingin naikkan harga servis anda dan tarik pelanggan berkualiti tinggi." }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl mb-8 flex items-center justify-center font-black text-xl">
                       !
                    </div>
                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. CURRICULUM */}
      <section id="about" className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
               <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Apa Yang Anda <br /><span className="text-indigo-600">Terima.</span></h2>
                  <p className="text-slate-500 font-medium mb-12">Program ini dibahagikan kepada 4 fasa kritikal yang akan mengubah cara anda berfikir tentang bisnes.</p>
                  <button className="text-slate-900 border-b-2 border-indigo-600 pb-2 text-xs font-black uppercase tracking-widest hover:text-indigo-600 transition-colors">
                     Download Sukatan Pelajaran (PDF)
                  </button>
               </div>

               <div className="w-full lg:w-2/3 space-y-6">
                  {[
                    { fasa: "Fasa 01: Mindset & Niche", title: "Menemui 'Goldmine' Digital Anda", desc: "Cara mengenal pasti kepakaran anda yang orang sanggup bayar mahal." },
                    { fasa: "Fasa 02: Product Creation", title: "Membina Produk Digital Pertama", desc: "Teknik buat e-book atau video kelas yang berkualiti tanpa kos tinggi." },
                    { fasa: "Fasa 03: Marketing Machine", title: "Tarik Pelanggan Secara Automatik", desc: "Setting FB Ads, TikTok Ads & Email Marketing yang convert." },
                    { fasa: "Fasa 04: Scaling & Growth", title: "Mencapai Pendapatan 5-Angka", desc: "Cara duplicate kejayaan dan bina team kecil untuk urus bisnes anda." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 md:p-12 bg-white rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
                       <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4">{item.fasa}</p>
                       <h4 className="text-2xl font-black mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                       <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-indigo-600 text-white px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight italic">Real Result. Real People.</h2>
               <p className="text-white/70 text-lg font-medium">Bukan sekadar teori, ini adalah hasil daripada pelajar kami yang dah buat.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               {[
                 { name: "Farhan J.", role: "Graphic Designer", text: "Dulu saya jual servis RM50, sekarang produk digital saya jana pasif income RM3k-5k sebulan!" },
                 { name: "Siti Rahmah", role: "Home Baker", text: "Saya buat e-book resipi dan jualan meletup! Tak sangka orang sanggup bayar untuk ilmu saya." }
               ].map((t, i) => (
                 <div key={i} className="bg-white/10 p-12 rounded-[3rem] border border-white/20 backdrop-blur-sm relative">
                    <div className="text-5xl font-serif absolute top-8 left-8 opacity-20">“</div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 relative z-10 italic">
                       {t.text}
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-white/20" />
                       <div>
                          <p className="font-black uppercase tracking-widest text-xs">{t.name}</p>
                          <p className="text-white/50 text-[10px] font-bold">{t.role}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
         <h2 className="text-4xl font-black mb-16 text-center tracking-tight">Soalan Lazim (FAQ)</h2>
         <div className="space-y-4">
            {[
              { q: "Adakah ini sesuai untuk newbie?", a: "Ya, kami ajar dari basic akaun bank sampai cara setup website jualan." },
              { q: "Perlu modal besar ke?", a: "Kos minima. Anda cuma perlukan laptop dan internet sahaja untuk mula." },
              { q: "Berapa lama akses program ni?", a: "Akses seumur hidup! Anda boleh belajar ikut masa sendiri." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100">
                 <h5 className="font-black text-lg mb-4 flex justify-between items-center cursor-pointer group">
                    {item.q}
                    <span className="text-indigo-600 transform transition-transform group-hover:rotate-180">+</span>
                 </h5>
                 <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 7. PRICING & FINAL CTA */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/30 blur-[120px] rounded-full" />
            <div className="relative z-10">
               <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Mula Sekarang. <br />Jangan Tunggu Esok.</h2>
               <div className="flex items-center justify-center gap-4 mb-12">
                  <span className="text-slate-500 line-through text-2xl font-bold">RM199</span>
                  <span className="text-7xl font-black text-indigo-400">RM97</span>
               </div>
               <button className="w-full md:w-auto bg-white text-slate-900 px-[15%] py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-400 hover:text-white transition-all shadow-2xl">
                  Saya Nak Sertai Mastery Digital!
               </button>
               <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Bayaran Sekali • Akses Selamanya • Jaminan Pulangan Wang 30 Hari</p>
            </div>
         </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-20 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center">
          <div className="text-xl font-black tracking-tighter">
            MASTERY<span className="text-indigo-600">.DIGITAL</span>
          </div>
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
             <a href="#" className="hover:text-indigo-600">Privacy</a>
             <a href="#" className="hover:text-indigo-600">Terms</a>
             <a href="#" className="hover:text-indigo-600">Refund</a>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2026 Mastery Digital Academy</p>
        </div>
      </footer>

    </div>
  );
}
