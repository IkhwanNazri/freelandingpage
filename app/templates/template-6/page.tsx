"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const thailanddesa = localFont({
  src: "../../../public/fonts/thailand.ttf",
  variable: "--font-thailand",
});

const dyna = localFont({
  src: "../../../public/fonts/DynaPuff-Bold.ttf",
  variable: "--font-dyna",
});

export default function Home() {
  const products = [
    { id: 1, nama: 'Mini Donut Cookies', image: '/DONUT.png', price: '31.00' },
    { id: 2, nama: 'Mini Semperit', image: '/SEM.png', price: '31.00' },
  ];
  
  const [cart, setCart] = useState<any[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    alert(`${product.nama} masuk bakul!`);
  };

  const totalPrice = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const checkoutWhatsapp = () => {
    const phone = "60183249321"; // Menggunakan nombor Wan
    const list = cart.map(item => `- ${item.nama} (x${item.quantity})`).join('\n');
    const message = `beli :\n\n${list}\n\n*Total: RM ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-green-100">
      <div className={`${thailanddesa.variable} bg-white`}>
        <nav className="h-24 flex items-center px-4 justify-between absolute top-0 w-full md:justify-center mb-24 z-10">
          <span
            className="font-black text-4xl tracking-normal text-green-900"
            style={{ fontFamily: "var(--font-thailand)" }}
          >
            Cookies Raya
          </span>
        </nav>
      </div>

      <main>
        <section className="pt-24 px-6 max-w-7xl mx-auto mb-10">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
            <Image
              src="/baru.png"
              alt="Hero"
              fill
              priority
              className="object-cover transition duration-700"
            />
          </div>
        </section>

        <section className="px-6">
          <div className={`${dyna.variable} flex flex-col md:flex-row justify-between items-start mb-16 gap-4`}>
            <h2 className="text-5xl md:text-7xl font-black text-green-900 leading-none" style={{ fontFamily: "var(--font-dyna)" }}>
              Cookies <br /><span className="italic font-serif text-yellow-500">Raya</span>
            </h2>
            <p className="text-slate-800 max-w-xs text-lg font-medium">Koleksi biskut raya paling 2026 dengan rasa Ori</p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {products.map((p) => (
              <div key={p.id} className="bg-slate-100 rounded-xl flex flex-col p-2">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={p.image}
                    alt={p.nama}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[15px] mt-2 py-2 font-bold">{p.nama}</h3>
                <h4 className="text-[14px] font-bold text-blue-700">RM{p.price}</h4>
                
                <button 
                  onClick={() => addToCart(p)} 
                  className="w-full bg-green-800 py-2 text-white font-bold text-[11px] rounded-md mt-2 tracking-widest active:scale-95 transition"
                >
                  BELI SEKARANG
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src="/banner2-01.png" alt="Hero" fill className="object-cover" />
          </div>
          <h2 className="mt-5 text-5xl font-bold text-green-600">KENAPA PILIH</h2>
          <span className="text-5xl font-black text-green-700">KAMI?</span>

          <div className="space-y-6 mt-5">
            <div>
              <h5 className="text-[24px] font-semibold text-green-700">HOMEMADE</h5>
              <p className="text-green-800 font-sans">Dibuat segar setiap hari untuk menjaga kualiti.</p>
            </div>
            <div>
              <h5 className="text-[24px] font-semibold text-green-700">PENGHANTARAN PANTAS</h5>
              <p className="text-green-800 font-sans">Kami hantar terus ke depan pintu rumah anda.</p>
            </div>
          </div>
        </section>

        {/* function button */}
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="fixed bottom-8 right-8 z-50 bg-green-700 text-white p-4 rounded-full shadow-2xl"
        >
          <span className="absolute -top-2 -left-2 bg-yellow-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-black animate-bounce">
            {totalQuantity}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>

        {/* Sidebar Cart Re-added but with simple style */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-green-900">Bakul Raya</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 font-bold">TUTUP</button>
              </div>
              
              <div className="space-y-4">
                {cart.length === 0 ? <p className="text-slate-400">Bakul kosong...</p> : 
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                      <div>
                        <h4 className="font-bold">{item.nama}</h4>
                        <p className="text-sm text-green-600">{item.quantity} x RM {item.price}</p>
                      </div>
                      <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-red-400 text-xs font-bold">BUANG</button>
                    </div>
                  ))
                }
              </div>

              {cart.length > 0 && (
                <div className="mt-10 pt-8 border-t">
                  <div className="flex justify-between font-bold text-xl mb-6">
                    <span>Jumlah</span>
                    <span>RM {totalPrice.toFixed(2)}</span>
                  </div>
                  <button onClick={checkoutWhatsapp} className="w-full py-4 bg-green-900 text-white rounded-lg font-bold">Check Out WhatsApp</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="py-10 bg-green-900 text-white text-center">
        <p className="font-black text-xl italic uppercase">Build With Wan</p>
      </footer>
    </div>
  );
}