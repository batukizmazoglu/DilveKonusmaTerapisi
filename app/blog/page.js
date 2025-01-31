import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Anksiyete ile Başa Çıkma Yöntemleri',
    summary: 'Günlük hayatta anksiyete ile başa çıkmanın etkili yolları ve pratik öneriler.',
    date: '15 Şubat 2024',
    readTime: '5 dakika',
    image: '/images/anxiety.jpg'
  },
  {
    id: 2,
    title: 'Sağlıklı İlişki Nasıl Kurulur?',
    summary: 'İlişkilerde güven, iletişim ve empati becerilerini geliştirmenin yolları.',
    date: '10 Şubat 2024',
    readTime: '7 dakika',
    image: '/images/relationships.jpg'
  },
  {
    id: 3,
    title: 'Depresyonla Mücadele',
    summary: 'Depresyonun belirtileri, tedavi yöntemleri ve destek alma yolları hakkında bilgiler.',
    date: '5 Şubat 2024',
    readTime: '6 dakika',
    image: '/images/depression.jpg'
  },
  {
    id: 4,
    title: 'Stres Yönetimi Teknikleri',
    summary: 'Modern hayatta stresi azaltmanın ve daha dengeli bir yaşam kurmanın ipuçları.',
    date: '1 Şubat 2024',
    readTime: '4 dakika',
    image: '/images/stress.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime} okuma</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 