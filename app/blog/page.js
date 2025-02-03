'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Örnek blog gönderileri
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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-[#96A65B] mb-6">
              Blog
            </h1>
            <p className="text-[#0D0D0D]/80 text-lg">
              Dil ve konuşma terapisi hakkında güncel bilgiler, öneriler ve profesyonel görüşler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#96A65B] bg-[#B3BF88]/10 px-3 py-1.5 rounded-full">
                        {post.icon} {post.category}
                      </span>
                      <span className="text-sm text-[#0D0D0D]/60 font-medium">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-[#96A65B] hover:text-[#B3BF88] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#0D0D0D]/70">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#B3BF88]/20">
                      <span className="text-sm text-[#0D0D0D]/60">
                        {post.date}
                      </span>
                      <span className="text-[#96A65B] font-medium hover:translate-x-1 transition-transform duration-300">
                        Devamını Oku →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block text-[#96A65B] font-medium mb-4">📬 BÜLTEN</span>
            <h2 className="text-3xl font-bold text-[#96A65B] mb-6">
              Güncel Bilgilerden Haberdar Olun
            </h2>
            <p className="text-[#0D0D0D]/70 mb-8 text-lg">
              E-bültenimize kayıt olarak dil ve konuşma terapisi alanındaki son gelişmelerden haberdar olun.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-xl border border-[#B3BF88]/30 focus:outline-none focus:ring-2 focus:ring-[#96A65B] focus:border-transparent shadow-soft"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Abone Ol
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 