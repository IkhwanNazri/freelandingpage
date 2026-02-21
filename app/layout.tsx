// app/layout.tsx
import { DM_Sans, } from 'next/font/google';
import './globals.css';

const syne = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Kita apply syne.className terus ke body */}
      <body className={syne.className}>
        {children}
      </body>
    </html>
  );
}