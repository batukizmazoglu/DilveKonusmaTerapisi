'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <main key={pathname} className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
} 