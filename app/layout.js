import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from './ClientLayout';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dil ve Konuşma Terapisi',
  description: 'Uzman dil ve konuşma terapisti ile profesyonel terapi hizmetleri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <Analytics />
      </body>
    </html>
  );
}
