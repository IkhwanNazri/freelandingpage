// app/layout.tsx
// import { DM_Sans, } from 'next/font/google';
import { Inter } from 'next/font/google'; // Import font yang anda nak
import { Open_Sans, Montserrat } from 'next/font/google'; // Import font yang anda nak
import './globals.css';
import type { Metadata } from "next";

// const syne = DM_Sans({ 
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
// });

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Kita buat variable CSS
});

const opensans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans', // Kita buat variable CSS
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Kita apply syne.className terus ke body */}
      <body className={`${inter.variable} ${opensans.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "Build With Wan", 
 
};