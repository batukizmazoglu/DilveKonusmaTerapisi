'use client';

import Image from "next/image";
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';
import WhatsAppCallButton from '../components/WhatsAppCallButton';
import SocialMedia from '../components/SocialMedia';
import { motion } from 'framer-motion';
import FAQ from './components/FAQ';

// Animation variants for Framer Motion
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#B3BF88] via-[#96A65B] to-[#F2D43D] section overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#96A65B]/90 via-[#B3BF88]/80 to-[#F2D43D]/70"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
              ></motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F2D43D]/20 rounded-full blur-3xl"
              ></motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
              ></motion.div>
            </div>
            
            <div className="container">
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white drop-shadow-lg"
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block"
                  >
                    Dil ve
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="block text-white"
                  >
                    Konuşma Terapisti
                  </motion.span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-6 text-lg text-white/90 md:text-xl drop-shadow-md"
                >
                  Dil, konuşma ve yutma bozukluklarının tedavisinde uzmanlaşmış klinik deneyimi ile yanınızdayız.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
                >
                  <WhatsAppCallButton 
                    phoneNumber="+90 500 000 00 00"
                    message="Merhaba, randevu almak istiyorum."
                    className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  />
                  <Link href="/hizmetler" className="btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-[#96A65B] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Hizmetlerimiz
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section bg-white"
          >
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative aspect-square w-full max-w-md mx-auto"
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Dil ve Konuşma Terapisti"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    priority
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-gray-900"
                  >
                    Merhaba, Ben Dkt.
                  </motion.h2>
                  <div className="prose text-gray-600">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Dil ve Konuşma Terapisi bölümünden mezun olduktan sonra, çocuk ve yetişkinlerde görülen dil, konuşma ve yutma bozuklukları üzerine uzmanlaştım. 5 yılı aşkın klinik deneyimimle, her vakaya özel yaklaşım geliştirerek en etkili terapi yöntemlerini uyguluyorum.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Özellikle pediatrik dil ve konuşma bozuklukları alanında uzmanlaşmış olmakla birlikte, yetişkinlerde görülen ses bozuklukları ve yutma problemleri konusunda da kapsamlı tedavi hizmetleri sunmaktayım.
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/hakkimda" className="btn-secondary inline-flex items-center hover:scale-105 transition-transform duration-200">
                    Daha Fazlası
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section bg-white"
          >
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-900"
                >
                  Hizmetlerimiz
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-gray-600"
                >
                  Uzman kadromuz ile size özel terapi programları sunuyoruz
                </motion.p>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {services.map((service) => (
                  <motion.div 
                    key={service.title} 
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="card group cursor-pointer"
                  >
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      <Link href="/hizmetler" className="block">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-gray-600">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Neden Biz Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section bg-gradient-to-b from-white to-gray-50"
          >
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-900"
                >
                  Neden Biz?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-gray-600"
                >
                  Size özel, bilimsel ve etkili terapi yaklaşımımız
                </motion.p>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-primary-600 mr-3">✔️</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Bireyselleştirilmiş Terapi Programları
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Her danışanımız için özel olarak tasarlanmış, kişiye özgü terapi planları oluşturuyoruz.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl text-primary-600 mr-3">✔️</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Bilimsel Yaklaşım
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Güncel bilimsel araştırmalara dayalı, kanıta dayalı terapi yöntemleri uyguluyoruz.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section bg-gray-50"
          >
            <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-900"
                >
                  Hasta Yorumları
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-gray-600"
                >
                  Başarı hikayelerimizden bazıları
                </motion.p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.name} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card cursor-pointer"
                  >
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* SSS Bölümü */}
          <FAQ />

          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section bg-secondary-50"
          >
            <div className="container">
              <div className="lg:flex lg:items-center lg:justify-between">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-xl"
                >
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl"
                  >
                    Profesyonel Yardıma mı İhtiyacınız Var?
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-3 text-lg text-secondary-700"
                  >
                    Hemen WhatsApp üzerinden iletişime geçin.
                  </motion.p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-8 lg:mt-0 lg:flex-shrink-0"
                >
                  <WhatsAppCallButton 
                    phoneNumber="+90 500 000 00 00"
                    message="Merhaba, bilgi almak istiyorum."
                    className="btn-primary"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

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
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-12"
          >
            <div className="container mx-auto px-4">
              <div className="mt-8 text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-4"
                >
                  Sosyal Medya
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <SocialMedia links={socialLinks} />
                </motion.div>
              </div>
            </div>
          </motion.section>

          <WhatsAppButton phoneNumber="+90 500 000 00 00" message="Merhaba, bilgi almak istiyorum." />
        </main>
      </motion.div>
    </>
  );
}
