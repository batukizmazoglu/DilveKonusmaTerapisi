'use client';

import Image from "next/image";
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';
import WhatsAppCallButton from '../components/WhatsAppCallButton';
import SocialMedia from '../components/SocialMedia';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';

export default function Home() {
  const services = [
    {
      title: 'Çocuklarda Dil ve Konuşma Terapisi',
      description: 'Çocuklarda görülen dil ve konuşma bozukluklarının değerlendirilmesi ve tedavisi.',
      icon: '👶',
    },
    {
      title: 'Yetişkinlerde Konuşma Terapisi',
      description: 'Yetişkinlerde görülen konuşma bozuklukları ve ses problemlerinin tedavisi.',
      icon: '👥',
    },
    {
      title: 'Yutma Terapisi',
      description: 'Yutma güçlüğü yaşayan hastalara özel terapi programları.',
      icon: '🍽️',
    },
    {
      title: 'Ses Terapisi',
      description: 'Ses kısıklığı ve ses bozuklukları için özel terapi programları.',
      icon: '🎤',
    },
  ];

  const testimonials = [
    {
      name: 'Ayşe Y.',
      text: 'Oğlumun konuşma problemleri için aldığımız terapi sonuçları muhteşem. Artık çok daha rahat iletişim kurabiliyor.',
      role: 'Veli',
    },
    {
      name: 'Mehmet K.',
      text: 'Kekemelik sorunum için aldığım terapi hayatımı değiştirdi. Artık kendimi çok daha rahat ifade edebiliyorum.',
      role: 'Hasta',
    },
  ];

  const socialLinks = {
    facebook: 'https://facebook.com/talyadkt',
    instagram: 'https://instagram.com/talyadkt',
    twitter: 'https://twitter.com/talyadkt',
    youtube: 'https://youtube.com/talyadkt',
  };

  return (
    <>
      <Breadcrumb />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="space-y-0">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-primary-50 to-white section">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-gray-900">
                  <span className="block">Uzman Dil ve</span>
                  <span className="block text-primary-600">Konuşma Terapisti</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 md:text-xl">
                  Dil, konuşma ve yutma bozukluklarının tedavisinde uzmanlaşmış klinik deneyimi ile yanınızdayız.
                </p>
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                  <WhatsAppCallButton 
                    phoneNumber="+905555555555"
                    message="Merhaba, randevu almak istiyorum."
                    className="btn-primary"
                  />
                  <Link href="/hizmetler" className="btn-secondary">
                    Hizmetlerimiz
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section bg-white">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-gray-900">
                  Hizmetlerimiz
                </h2>
                <p className="mt-4 text-gray-600">
                  Uzman kadromuz ile size özel terapi programları sunuyoruz
                </p>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <div key={service.title} className="card group">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      <Link href="/hizmetler" className="block">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="section bg-gray-50">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-gray-900">
                  Hasta Yorumları
                </h2>
                <p className="mt-4 text-gray-600">
                  Başarı hikayelerimizden bazıları
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="card">
                    <div className="flex flex-col h-full">
                      <blockquote className="flex-1">
                        <p className="text-lg text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                      </blockquote>
                      <footer className="mt-6">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section bg-primary-600">
            <div className="container">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Profesyonel Yardıma mı İhtiyacınız Var?
                  </h2>
                  <p className="mt-3 text-lg text-primary-100">
                    Hemen WhatsApp üzerinden iletişime geçin.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                  <WhatsAppCallButton 
                    phoneNumber="+905555555555"
                    message="Merhaba, bilgi almak istiyorum."
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-primary-600 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white transition-all duration-200 shadow-soft"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
                <div className="flex justify-center">
                  <SocialMedia links={socialLinks} />
                </div>
              </div>
            </div>
          </section>

          <WhatsAppButton phoneNumber="+905555555555" message="Merhaba, bilgi almak istiyorum." />

          {/* SSS bölümü */}
          <FAQ />
        </main>
      </motion.div>
    </>
  );
}
