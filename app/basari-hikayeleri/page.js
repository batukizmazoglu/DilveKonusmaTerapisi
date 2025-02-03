'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    title: 'Konuşma Güçlüğünü Aşan Minik Kahraman',
    description: 'Ali, 5 yaşında konuşma güçlüğü yaşayan bir çocuktu. 6 aylık terapi sürecinin sonunda akıcı konuşmaya başladı.',
    category: 'Çocuk Terapisi',
    duration: '6 Ay',
    icon: '🌟'
  },
  {
    id: 2,
    title: 'Kekemeliği Yenen Genç',
    description: 'Ayşe, 16 yaşında kekemelik problemi yaşıyordu. Terapi sonrası özgüvenli bir şekilde konuşmaya başladı.',
    category: 'Kekemelik Terapisi',
    duration: '8 Ay',
    icon: '💫'
  },
  {
    id: 3,
    title: 'Ses Problemini Aşan Öğretmen',
    description: 'Mehmet öğretmen, ses tellerindeki yorgunluk nedeniyle zorluk yaşıyordu. Ses terapisi ile mesleğine sorunsuz devam ediyor.',
    category: 'Ses Terapisi',
    duration: '3 Ay',
    icon: '🎯'
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-[#96A65B] mb-6">
              Başarı Hikayeleri
            </h1>
            <p className="text-[#0D0D0D]/80 text-lg">
              Her başarı hikayesi, yeni bir umudun başlangıcıdır. İşte sizlere ilham verecek gerçek başarı hikayeleri...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <div className="text-4xl mb-4">{story.icon}</div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-[#B3BF88]/10 text-[#96A65B]">
                    {story.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-[#96A65B] mb-4">
                  {story.title}
                </h2>
                <p className="text-[#0D0D0D]/70 mb-6">
                  {story.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-[#B3BF88]/20">
                  <span className="text-[#0D0D0D]/60">Terapi Süresi:</span>
                  <span className="font-medium text-[#96A65B]">{story.duration}</span>
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
              Siz de Kendi Başarı Hikayenizi Yazmaya Hazır mısınız?
            </h2>
            <p className="text-[#0D0D0D]/70 mb-8">
              Profesyonel desteğimizle, siz de kendi başarı hikayenizi yazabilirsiniz.
            </p>
            <button className="btn-primary">
              Ücretsiz Değerlendirme Randevusu Alın
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#96A65B] mb-6">
              Danışanlarımızın Yorumları
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-[#B3BF88]/20"
              >
                <p className="text-[#0D0D0D]/70 italic mb-4">
                  "Terapistimizin desteğiyle oğlumun konuşma problemi büyük ölçüde çözüldü. Artık çok daha özgüvenli."
                </p>
                <p className="font-medium text-[#96A65B]">- Ayşe Y., Anne</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-[#B3BF88]/20"
              >
                <p className="text-[#0D0D0D]/70 italic mb-4">
                  "Kekemelik sorunum için aldığım terapi hayatımı değiştirdi. Kendimi çok daha iyi ifade edebiliyorum."
                </p>
                <p className="font-medium text-[#96A65B]">- Mehmet K., Öğrenci</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 