import Link from 'next/link';
import Image from 'next/image';

// Örnek blog gönderileri
const blogPosts = [
  {
    id: 1,
    title: 'Çocuklarda Dil Gelişimi: Ebeveynler İçin Rehber',
    excerpt: 'Çocuğunuzun dil gelişimini desteklemek için yapabileceğiniz aktiviteler ve öneriler...',
    date: '15 Ocak 2024',
    category: 'Çocuk Gelişimi',
    imageUrl: '/images/blog/child-development.jpg',
    slug: 'cocuklarda-dil-gelisimi'
  },
  {
    id: 2,
    title: 'Kekemelik Hakkında Bilinmesi Gerekenler',
    excerpt: 'Kekemelik nedir, nedenleri nelerdir ve nasıl tedavi edilir? Detaylı bir bakış...',
    date: '10 Ocak 2024',
    category: 'Kekemelik',
    imageUrl: '/images/blog/stuttering.jpg',
    slug: 'kekemelik-hakkinda'
  },
  {
    id: 3,
    title: 'Ses Terapisi: Sesinizi Koruma Rehberi',
    excerpt: 'Profesyonel ses kullanıcıları için ses sağlığını koruma yöntemleri...',
    date: '5 Ocak 2024',
    category: 'Ses Sağlığı',
    imageUrl: '/images/blog/voice-therapy.jpg',
    slug: 'ses-terapisi-rehberi'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section bg-white border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Dil ve konuşma terapisi hakkında güncel bilgiler, öneriler ve profesyonel görüşler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-primary-600 font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Güncel Bilgilerden Haberdar Olun
            </h2>
            <p className="text-gray-600 mb-8">
              E-bültenimize kayıt olarak dil ve konuşma terapisi alanındaki son gelişmelerden haberdar olun.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 