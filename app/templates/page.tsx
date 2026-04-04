"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: "template-1",
    title: "Veridian Estates",
    desc: "Luxury real estate landing page with ultra-premium minimalist design.",
    niche: "Real Estate",
    image: "/hero-1.png",
    url: "/templates/template-1"
  },
  {
    id: "template-2",
    title: "The Roast Lab",
    desc: "Specialty coffee shop landing page with a warm, artisanal feel.",
    niche: "F&B",
    image: "/fnb-1.png",
    url: "/templates/template-2"
  },
  {
    id: "template-3",
    title: "Maju Auto Sales",
    desc: "Automotive dealership landing page for Proton & Perodua with a bold, high-conversion design.",
    niche: "Automotive",
    image: "/banner.jpg",
    url: "/templates/template-3"
  },
  {
    id: "template-4",
    title: "PureSpace Services",
    desc: "Professional cleaning service landing page with a clean, trustworthy design.",
    niche: "Service",
    image: "/service-1.png",
    url: "/templates/template-4"
  },
  {
    id: "template-5",
    title: "EduPro Digital",
    desc: "Premium landing page for digital products, e-books, and online courses.",
    niche: "Education",
    image: "/hero-1.png",
    url: "/templates/template-5"
  },
  {
    id: "template-6",
    title: "Kuih Raya",
    desc: "Premium landing page for digital products, e-books, and online courses.",
    niche: "Kuih Raya",
    image: "/banner.png",
    url: "/templates/template-6"
  },
];

export default function TemplatesGallery() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-jakarta p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm mb-4 inline-block">
            ← Kembali ke Utama
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Free Landing Page <br />
            <span className="text-violet-500 italic">Templates.</span>
          </h1>
          <p className="text-slate-400 mt-6 max-w-lg text-lg">
            Koleksi template landing page premium yang anda boleh gunakan untuk bisnes anda.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <motion.div 
              key={tpl.id}
              whileHover={{ y: -10 }}
              className="group bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={tpl.image} 
                  alt={tpl.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {tpl.niche}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tpl.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {tpl.desc}
                </p>
                <Link 
                  href={tpl.url}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all w-full justify-center"
                >
                  Live Preview
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Placeholder for future templates */}
          {[2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-slate-900/20 border border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 text-2xl font-black italic">
                {i}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest">Coming Soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
