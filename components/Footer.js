'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-[#96A65B] mb-4">
              Dil ve Konuşma Merkezi
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
              Dil, konuşma ve yutma bozukluklarının tedavisinde uzmanlaşmış klinik deneyimi ile yanınızdayız. 
              Her yaş grubuna özel terapi programları sunuyoruz.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-[#96A65B] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+90 (500) 000 00 00</span>
              </div>
            </div>
          </motion.div>

          {/* Hızlı Bağlantılar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Bağlantılar</h4>
            <div className="space-y-3">
              <Link href="/hakkimda" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                Hakkımda
              </Link>
              <Link href="/hizmetler" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                Hizmetlerimiz
              </Link>
              <Link href="/basari-hikayeleri" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                Başarı Hikayeleri
              </Link>
              <Link href="/blog" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                Blog
              </Link>
              <Link href="/sss" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                S.S.S
              </Link>
              <Link href="/iletisim" className="block text-gray-600 hover:text-[#96A65B] transition-colors duration-200 text-sm">
                İletişim
              </Link>
            </div>
          </motion.div>

          {/* İletişim ve Çalışma Saatleri */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-[#96A65B] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-600">Merkez Mahallesi, Ana Cadde No:123, İstanbul</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[#96A65B] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span className="text-sm text-gray-600">info@dilvekonusmamerkezi.com</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h5 className="text-sm font-medium text-gray-900 mb-2">Çalışma Saatleri</h5>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-medium">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-medium text-red-500">Kapalı</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Alt Bölüm */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Dil ve Konuşma Merkezi. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/gizlilik-politikasi" className="text-sm text-gray-500 hover:text-[#96A65B] transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-sm text-gray-500 hover:text-[#96A65B] transition-colors duration-200">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}