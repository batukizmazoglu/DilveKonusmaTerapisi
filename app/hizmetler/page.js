'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Bireysel Terapi',
    description: 'Kişisel gelişim ve ruh sağlığı sorunlarınızla başa çıkmanıza yardımcı olan birebir terapi seansları.',
    price: '800 TL/Seans',
    duration: '50 Dakika',
    icon: '👤'
  },
  {
    id: 2,
    title: 'Çift Terapisi',
    description: 'İlişkinizi güçlendirmek ve sorunları çözmek için profesyonel destek.',
    price: '1000 TL/Seans',
    duration: '60 Dakika',
    icon: '👥'
  },
  {
    id: 3,
    title: 'Online Terapi',
    description: 'Evinizin rahatlığında online platformlar üzerinden terapi hizmeti.',
    price: '700 TL/Seans',
    duration: '45 Dakika',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Grup Terapisi',
    description: 'Benzer sorunları yaşayan kişilerle birlikte iyileşme yolculuğu.',
    price: '500 TL/Seans',
    duration: '90 Dakika',
    icon: '👥'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-[#96A65B] mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-[#0D0D0D]/80 text-lg">
              Dil ve konuşma terapisi alanında uzmanlaşmış ekibimizle size özel çözümler sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-[#96A65B] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#0D0D0D]/70 mb-6">
                  {service.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-[#B3BF88]/20">
                  <span className="font-medium text-[#96A65B]">{service.price}</span>
                  <span className="text-[#0D0D0D]/60">{service.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#96A65B] mb-6">
              Sizin İçin En Uygun Terapi Programını Belirleyelim
            </h2>
            <p className="text-[#0D0D0D]/70 mb-8">
              Ücretsiz ön değerlendirme için bizimle iletişime geçin.
            </p>
            <button className="btn-primary">
              Randevu Alın
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 