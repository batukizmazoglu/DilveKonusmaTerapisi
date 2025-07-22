'use client';

import Image from "next/image";
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';
import WhatsAppCallButton from '../components/WhatsAppCallButton';
import SocialMedia from '../components/SocialMedia';
import { motion } from 'framer-motion';
import FAQ from './components/FAQ';

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
      name: 'Bir Veli',
      text: 'Oğlumun konuşma problemleri için aldığımız terapi sonuçları muhteşem. Artık çok daha rahat iletişim kurabiliyor.',
      role: 'Veli',
    },
    {
      name: 'Bir Hasta',
      text: 'Kekemelik sorunum için aldığım terapi hayatımı değiştirdi. Artık kendimi çok daha rahat ifade edebiliyorum.',
      role: 'Hasta',
    },
  ];

  const socialLinks = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/dilvekonusmaterapi/'
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Çocuklarda Dil Gelişimi: Ebeveynler İçin Rehber',
      excerpt: 'Çocuğunuzun dil gelişimini desteklemek için yapabileceğiniz aktiviteler ve öneriler...',
      date: '15 Ocak 2024',
      category: 'Çocuk Gelişimi',
      imageUrl: '/images/blog/child-development.jpg',
      slug: 'cocuklarda-dil-gelisimi',
      icon: '👶',
      readTime: '5 dk okuma'
    },
    {
      id: 2,
      title: 'Kekemelik Hakkında Bilinmesi Gerekenler',
      excerpt: 'Kekemelik nedir, nedenleri nelerdir ve nasıl tedavi edilir? Detaylı bir bakış...',
      date: '10 Ocak 2024',
      category: 'Kekemelik',
      imageUrl: '/images/blog/stuttering.jpg',
      slug: 'kekemelik-hakkinda',
      icon: '🗣️',
      readTime: '7 dk okuma'
    },
    {
      id: 3,
      title: 'Ses Terapisi: Sesinizi Koruma Rehberi',
      excerpt: 'Profesyonel ses kullanıcıları için ses sağlığını koruma yöntemleri...',
      date: '5 Ocak 2024',
      category: 'Ses Sağlığı',
      imageUrl: '/images/blog/voice-therapy.jpg',
      slug: 'ses-terapisi-rehberi',
      icon: '🎤',
      readTime: '6 dk okuma'
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="space-y-0">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#B3BF88] via-[#96A65B] to-[#F2D43D] section overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-[#B3BF88]/60 to-white/30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#96A65B]/40 via-white/50 to-[#F2D43D]/30"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
            
            <div className="container">
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-[#0D0D0D] drop-shadow-sm">
                  <span className="block">Dil ve</span>
                  <span className="block text-[#0D0D0D]">Konuşma Terapisti</span>
                </h1>
                <p className="mt-6 text-lg text-[#0D0D0D]/80 md:text-xl drop-shadow-sm">
                  Dil, konuşma ve yutma bozukluklarının tedavisinde uzmanlaşmış klinik deneyimi ile yanınızdayız.
                </p>
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                  <WhatsAppCallButton 
                    phoneNumber="+90 500 000 00 00"
                    message="Merhaba, randevu almak istiyorum."
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 rounded-xl bg-[#96A65B] hover:bg-[#7d8c4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#96A65B] shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                  />
                  <Link href="/hizmetler" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-xl bg-white/90 backdrop-blur-sm text-[#96A65B] border border-white/50 hover:bg-white hover:text-[#7d8c4a] shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                    Hizmetlerimiz
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <Image
                    src="/images/profile.jpg"
                    alt="Dil ve Konuşma Terapisti"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Merhaba, Ben Dkt.
                  </h2>
                  <div className="prose text-gray-600">
                    <p>
                      Dil ve Konuşma Terapisi bölümünden mezun olduktan sonra, çocuk ve yetişkinlerde görülen dil, konuşma ve yutma bozuklukları üzerine uzmanlaştım. 5 yılı aşkın klinik deneyimimle, her vakaya özel yaklaşım geliştirerek en etkili terapi yöntemlerini uyguluyorum.
                    </p>
                    <p>
                      Özellikle pediatrik dil ve konuşma bozuklukları alanında uzmanlaşmış olmakla birlikte, yetişkinlerde görülen ses bozuklukları ve yutma problemleri konusunda da kapsamlı tedavi hizmetleri sunmaktayım.
                    </p>
                  </div>
                  <Link href="/hakkimda" className="btn-secondary inline-flex items-center">
                    Daha Fazlası
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
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

          {/* Neden Biz Section */}
          <section className="section bg-gradient-to-b from-white to-gray-50">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-gray-900">
                  Neden Biz?
                </h2>
                <p className="mt-4 text-gray-600">
                  Size özel, bilimsel ve etkili terapi yaklaşımımız
                </p>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div className="card group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-primary-600 mr-3">✔️</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Bireyselleştirilmiş Terapi Programları
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Her danışanımız için özel olarak tasarlanmış, kişiye özgü terapi planları oluşturuyoruz.
                  </p>
                </div>

                <div className="card group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-primary-600 mr-3">✔️</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Bilimsel Yaklaşım
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Güncel bilimsel araştırmalara dayalı, kanıta dayalı terapi yöntemleri uyguluyoruz.
                  </p>
                </div>
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

          {/* SSS Bölümü */}
          <FAQ />

          {/* CTA Section */}
          <section className="section bg-secondary-50">
            <div className="container">
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl">
                    Profesyonel Yardıma mı İhtiyacınız Var?
                  </h2>
                  <p className="mt-3 text-lg text-secondary-700">
                    Hemen WhatsApp üzerinden iletişime geçin.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
                  <WhatsAppCallButton 
                    phoneNumber="+90 500 000 00 00"
                    message="Merhaba, bilgi almak istiyorum."
                    className="btn-primary"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Öne Çıkan Blog Yazıları */}
          <section className="section bg-white">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-gray-900">
                  Blog'dan Öne Çıkanlar
                </h2>
                <p className="mt-4 text-gray-600">
                  En son paylaşılan yazılarımız
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-primary-100 overflow-hidden"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full">
                            {post.icon} {post.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <span className="text-primary-600 font-medium hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                            Devamını Oku
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/blog" className="btn-secondary inline-flex items-center">
                  Tüm Yazıları Gör
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Sosyal Medya Bölümü */}
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

          <WhatsAppButton phoneNumber="+90 500 000 00 00" message="Merhaba, bilgi almak istiyorum." />
        </main>
      </motion.div>
    </>
  );
}
