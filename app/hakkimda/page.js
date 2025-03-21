'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-[#0D0D0D]">
                Dkt.
              </h1>
              <p className="text-xl text-[#96A65B]">
                Dil ve Konuşma Terapisti
              </p>
              <p className="text-[#0D0D0D]">
                Klinik deneyimimle, dil ve konuşma terapisi alanında uzmanlaşmış bir terapistim. 
                Çocuklar ve yetişkinlerle çalışarak, her hastanın benzersiz ihtiyaçlarına özel çözümler üretiyorum.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/therapist-profile.jpg"
                alt="Dil ve Konuşma Terapisti"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim ve Deneyim */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#96A65B] mb-12">Eğitim ve Deneyim</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#96A65B]">Eğitim</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#B3BF88]"></div>
                  <div>
                    <h4 className="font-medium text-[#0D0D0D]">Yüksek Lisans - Dil ve Konuşma Terapisi</h4>
                    <p className="text-[#0D0D0D]/70">Üniversite, 20XX-20XX</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#B3BF88]"></div>
                  <div>
                    <h4 className="font-medium text-[#0D0D0D]">Lisans - Dil ve Konuşma Terapisi</h4>
                    <p className="text-[#0D0D0D]/70">Üniversite, 20XX-20XX</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-[#96A65B]">Deneyim</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#B3BF88]"></div>
                  <div>
                    <h4 className="font-medium text-[#0D0D0D]">Özel Klinik</h4>
                    <p className="text-[#0D0D0D]/70">20XX - Günümüz</p>
                    <p className="text-[#0D0D0D]/70">Dil ve konuşma terapisti olarak bireysel ve grup terapileri</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-[#B3BF88]"></div>
                  <div>
                    <h4 className="font-medium text-[#0D0D0D]">Sağlık Merkezi</h4>
                    <p className="text-[#0D0D0D]/70">20XX - 20XX</p>
                    <p className="text-[#0D0D0D]/70">Klinik dil ve konuşma terapisti</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar ve Eğitimler */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#96A65B] mb-12">Sertifikalar ve Uzmanlık Alanları</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sertifika kartları */}
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300 border border-[#B3BF88]/20">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-[#96A65B] mb-2">
                Sertifika
              </h3>
              <p className="text-[#0D0D0D]/70">Kurum, 20XX</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300 border border-[#B3BF88]/20">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-[#96A65B] mb-2">
                Sertifika
              </h3>
              <p className="text-[#0D0D0D]/70">Kurum, 20XX</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300 border border-[#B3BF88]/20">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-[#96A65B] mb-2">
                Sertifika
              </h3>
              <p className="text-[#0D0D0D]/70">Kurum, 20XX</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 