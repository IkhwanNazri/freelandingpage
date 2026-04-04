"use client";

import React, { useState } from 'react';
import Image from 'next/image';
// Tambah import ni kat bahagian atas fail
import localFont from 'next/font/local';

const thailanddesa = localFont({
  src: '../fonts/THAILAND.ttf', // Pastikan path ni betul ke fail font kau
  variable: '--font-thailand',
});

export default function Page() {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState<{ show: boolean; name: string }>({ show: false, name: '' });

  const products = [
    { id: 1, name: 'Donut Red Velvet Raya', price: 38.00, image: '/image/DONUT.png' },
    { id: 2, name: 'Semperit Klasik Opah', price: 35.00, image: 'https://images.unsplash.com/photo-1621236304198-651a20733ee5?q=80&w=400' },
    { id: 3, name: 'Tart Nanas Premium', price: 40.00, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400' },
    { id: 4, name: 'Biskut Arab Gebu', price: 32.00, image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=400' },
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Trigger Popup Feedback
    setShowPopup({ show: true, name: product.name });
    setTimeout(() => setShowPopup({ show: false, name: '' }), 2000);
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const checkoutWhatsApp = () => {
    const phone = "60123456789"; 
    const list = cart.map(item => `- ${item.name} (x${item.quantity})`).join('\n');
    const message = `Salam Wan, saya nak order:\n\n${list}\n\n*Total: RM ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100">
      
      {/* 1. FLOATING CART BUTTON */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-green-900 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group"
      >
        <span className="absolute -top-2 -left-2 bg-yellow-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-black animate-bounce">
          {totalQuantity}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>

      {/* 2. SUCCESS POPUP MODAL (Feedback bila add to cart) */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-70 transition-all duration-500 ${showPopup.show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
        <div className="bg-white border border-green-100 shadow-2xl px-8 py-4 rounded-2xl flex items-center gap-4">
          <div className="w-5 h-5 p-2 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
          <p className="font-bold text-sm">{showPopup.name} ditambah!</p>
        </div>
      </div>

      {/* 3. SIDEBAR CART */}
      <div className={`fixed inset-0 z-[100] transition-all duration-300 ${isSidebarOpen ? "visible" : "invisible"}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black text-green-900 uppercase">Troli Syawal</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-300 hover:text-red-500 font-bold tracking-widest text-[10px]">TUTUP</button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-6">
              {cart.length === 0 ? <p className="text-center text-slate-400 mt-20">Troli kosong bang...</p> : 
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl">
                    <div>
                      <h4 className="font-bold text-xs">{item.name}</h4>
                      <p className="text-[10px] font-black text-green-700">{item.quantity} x RM {item.price}</p>
                    </div>
                    <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-red-400 text-[10px] font-bold">BUANG</button>
                  </div>
                ))
              }
            </div>
            {cart.length > 0 && (
              <div className="pt-8 border-t space-y-4">
                <div className="flex justify-between font-black text-lg">
                  <span>JUMLAH</span>
                  <span className="text-green-900">RM {totalPrice.toFixed(2)}</span>
                </div>
                <button onClick={checkoutWhatsApp} className="w-full py-5 bg-green-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em]">Check Out WhatsApp</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. LANDING PAGE SECTIONS */}
      <div className={`${thailanddesa.variable}  bg-white`}>
      {/* Kod Navbar Kau */}
      <nav className="h-24 flex items-center px-4  justify-between absolute top-0 w-full md:justify-center items-center ">
        <span 
          className="font-black text-4xl tracking-normal text-green-900" 
          style={{ fontFamily: 'var(--font-thailand)' }}
        >
          Cookies Raya
        </span>
      </nav>
      {/* ... rest of the code */}
    </div>

      <main>
        {/* HERO */}
        <section className="pt-32 px-6 max-w-7xl mx-auto mb-10">
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group">
            <Image src="/image/baru.png" alt="Hero" fill priority className="object-cover group-hover:scale-105 transition duration-700" />
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="px-6 max-w-7xl mx-auto mb-15">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-5xl md:text-7xl font-black text-green-900 leading-none">MANGKUK <br/><span className="italic font-serif text-yellow-500">KEMANISAN</span></h2>
            <p className="text-slate-400 max-w-xs text-sm font-medium">Koleksi biskut raya paling  2026 dengan rasa asli warisan Opah.</p>
          </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
  {products.map((product) => (
    <div key={product.id} className="bg-white rounded-[24px] md:rounded-[32px] p-2 md:p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Container Gambar - Aspect square tetap cantik */}
      <div className="relative aspect-square mb-3 md:mb-6 rounded-[18px] md:rounded-[24px] overflow-hidden bg-slate-50 border border-slate-50">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-105 transition duration-500" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all" />
      </div>

      <div className="px-1 md:px-2 flex flex-col flex-grow">
        {/* Nama & Harga - Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-1 md:gap-4">
          <h3 className="font-black text-[9px] md:text-[11px] uppercase text-green-900 leading-tight tracking-tight min-h-[20px] md:min-h-0">
            {product.name}
          </h3>
          <span className="text-yellow-600 font-black text-[10px] md:text-xs shrink-0">
            RM{product.price.toFixed(2)}
          </span>
        </div>

        {/* Deskripsi - Hide on mobile to keep it clean */}
        <p className="hidden md:block text-[10px] text-slate-400 mb-6 leading-relaxed line-clamp-2">
          Koleksi kuih raya premium resipi asli warisan yang menjamin rasa puas hati.
        </p>

        {/* Button - Slimmer on mobile */}
        <button 
          onClick={() => addToCart(product)}
          className="w-full py-2.5 md:py-4 mt-auto bg-green-900 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white active:scale-95 transition-all"
        >
          Tambah
        </button>
      </div>
    </div>
  ))}
</div>
        </section>
       
        {/* ABOUT / VALUE SECTION */}
        <section className="bg-slate-50 py-15 px-6">
         
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <Image src="/image/baru.png" fill alt="About" className="object-cover" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-green-900">KENAPA PILIH <br/>KAMI?</h2>
              <div className="space-y-6">
                {[
                  { t: 'Bahan Premium', d: 'Hanya menggunakan Butter Pure & Coklat import.' },
                  { t: 'Homemade', d: 'Dibuat segar setiap hari untuk menjaga kualiti.' },
                  { t: 'Penghantaran Pantas', d: 'Sampai depan pintu sebelum malam raya.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-900 shrink-0 flex items-center justify-center text-white text-[10px]">{i+1}</div>
                    <div>
                      <h4 className="font-black text-sm uppercase">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-green-900 uppercase">Apa Kata <span className="italic font-serif text-yellow-500 font-normal">Mereka?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <div key={i} className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-sm italic text-slate-600 text-sm leading-relaxed">
                "Biskut paling sedap pernah saya beli online. Crunchy, tak manis sangat. Memang repeat order!"
                <div className="mt-6 font-black text-green-900 not-italic uppercase text-[10px]">— Customer #{i}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 bg-green-900 text-white text-center">
        <p className="font-black text-2xl mb-4 tracking-tighter italic">BUILD WITH WAN.</p>
        <p className="text-[10px] opacity-50 uppercase tracking-[0.5em]">2026 Premium Collections</p>
      </footer>
    </div>
  );
}