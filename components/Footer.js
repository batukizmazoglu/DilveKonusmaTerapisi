'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">İletişim</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Örnek Mahallesi, 123. Sokak</p>
              <p>No: 45/6, Merkez</p>
              <p>İstanbul, Türkiye</p>
              <p>Tel: (0212) 123 45 67</p>
              <p>E-posta: info@talyadkt.com</p>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimda" className="text-sm text-gray-600 hover:text-primary-600">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-sm text-gray-600 hover:text-primary-600">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-gray-600 hover:text-primary-600">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Çalışma Saatleri</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 09:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} TalyaDKT. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 