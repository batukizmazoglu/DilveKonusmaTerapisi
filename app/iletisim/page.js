'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2] pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-[#96A65B] mb-6">
              İletişim
            </h1>
            <p className="text-[#0D0D0D]/80 text-lg">
              Sizinle tanışmak ve size yardımcı olmak için sabırsızlanıyoruz. Bize ulaşın...
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* İletişim Bilgileri */}
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <h2 className="text-2xl font-bold text-[#96A65B] mb-8">İletişim Bilgileri</h2>
                <div className="grid gap-8">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-[#0D0D0D]/90 mb-2">Adres</h3>
                    <p className="text-base text-[#0D0D0D]/70">Talya Azmidolu Dil ve Konuşma Merkezi, Lefkoşa, KKTC</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-[#0D0D0D]/90 mb-2">Telefon</h3>
                    <p className="text-base text-[#0D0D0D]/70">+90 (532) 123 45 67</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-[#0D0D0D]/90 mb-2">E-posta</h3>
                    <p className="text-base text-[#0D0D0D]/70">info@psikolojikdanismanlik.com</p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-[#0D0D0D]/90 mb-2">Çalışma Saatleri</h3>
                    <p className="text-base text-[#0D0D0D]/70">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                  </div>
                </div>
              </motion.div>

              {/* Google Maps */}
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -5 }}
                className="w-full h-[450px] rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501.9949790875911!2d33.35598063300162!3d35.19858528821924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17f0230c1241%3A0x13a8f9c67d28dd9b!2sTalya%20Azmidolu%20Dil%20ve%20Konu%C5%9Fma%20Merkezi!5e1!3m2!1str!2s!4v1738610134358!5m2!1str!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* İletişim Formu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <h2 className="text-2xl font-semibold text-[#96A65B] mb-6">Bize Ulaşın</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0D0D0D]/80">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      inputMode="text"
                      className="mt-1 block w-full rounded-lg border-[#B3BF88]/20 shadow-sm focus:border-[#96A65B] focus:ring-[#96A65B] bg-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0D0D0D]/80">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      inputMode="email"
                      className="mt-1 block w-full rounded-lg border-[#B3BF88]/20 shadow-sm focus:border-[#96A65B] focus:ring-[#96A65B] bg-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0D0D0D]/80">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      className="mt-1 block w-full rounded-lg border-[#B3BF88]/20 shadow-sm focus:border-[#96A65B] focus:ring-[#96A65B] bg-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0D0D0D]/80">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full rounded-lg border-[#B3BF88]/20 shadow-sm focus:border-[#96A65B] focus:ring-[#96A65B] bg-white/50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#96A65B] text-white py-3 px-6 rounded-lg hover:bg-[#B3BF88] transition-colors duration-300 font-medium"
                  >
                    Gönder
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 