import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from './ClientLayout';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Talya Azmidolu Dil ve Konuşma Merkezi',
  description: 'Dkt. Talya Azmidolu ile profesyonel dil ve konuşma terapisi hizmetleri',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          href={inter.url}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <Analytics />
      </body>
    </html>
  );
}
