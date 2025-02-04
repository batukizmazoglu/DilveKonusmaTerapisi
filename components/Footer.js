'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* İletişim Bilgileri */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-primary-600 uppercase tracking-wider">İletişim</h3>
            <div className="space-y-1 text-[11px] text-gray-600">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Örnek Mah. 123. Sk. No:45/6, İstanbul</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(0212) 123 45 67</span>
              </p>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Hızlı Bağlantılar</h3>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <Link href="/hakkimda" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Hakkımda
              </Link>
              <Link href="/hizmetler" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Hizmetler
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                Blog
              </Link>
              <Link href="/iletisim" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                İletişim
              </Link>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Çalışma Saatleri</h3>
            <div className="text-[11px] text-gray-600 grid grid-cols-2 gap-1">
              <span>Pazartesi - Cuma:</span>
              <span>09:00 - 18:00</span>
              <span>Cumartesi:</span>
              <span>09:00 - 14:00</span>
              <span>Pazar:</span>
              <span>Kapalı</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-[11px] text-gray-500">
            © {new Date().getFullYear()} Talya Azmidolu Dil ve Konuşma Merkezi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 