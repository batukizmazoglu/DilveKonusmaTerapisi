import Image from 'next/image';

const successStories = [
  {
    id: 1,
    name: 'Ali K.',
    age: '6 yaş',
    condition: 'Artikülasyon Bozukluğu',
    story: 'Ali, 6 yaşında artikülasyon problemi yaşayan bir çocuktu. 3 aylık yoğun terapi sonrasında, tüm sesleri doğru çıkarmayı başardı ve artık arkadaşlarıyla özgüvenle iletişim kurabiliyor.',
    duration: '3 ay',
    imageUrl: '/images/success/case1.jpg'
  },
  {
    id: 2,
    name: 'Zeynep M.',
    age: '28 yaş',
    condition: 'Kekemelik',
    story: 'Zeynep, iş hayatını etkileyen kekemelik problemi için kliniğimize başvurdu. 6 aylık terapi süreci sonunda, akıcı konuşma tekniklerini başarıyla uygulayarak iş toplantılarında kendini rahatça ifade edebilir hale geldi.',
    duration: '6 ay',
    imageUrl: '/images/success/case2.jpg'
  },
  {
    id: 3,
    name: 'Mehmet Y.',
    age: '45 yaş',
    condition: 'Ses Bozukluğu',
    story: 'Öğretmen olan Mehmet Bey, ses tellerindeki nodüller nedeniyle ses problemi yaşıyordu. Ses terapisi ve doğru ses kullanım teknikleri sayesinde, mesleğine sağlıklı bir şekilde devam edebiliyor.',
    duration: '4 ay',
    imageUrl: '/images/success/case3.jpg'
  }
];

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Başarı Hikayeleri
            </h1>
            <p className="text-xl text-gray-600">
              Her başarı hikayesi, yeni bir umudun başlangıcıdır. İşte bazı danışanlarımızın ilham verici yolculukları...
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid gap-12">
            {successStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src={story.imageUrl}
                      alt={`${story.name} başarı hikayesi`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                          {story.name}
                        </h2>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>{story.age}</span>
                          <span>•</span>
                          <span>{story.condition}</span>
                          <span>•</span>
                          <span>Terapi Süresi: {story.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {story.story}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Sizin Başarı Hikayeniz Ne Olacak?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Profesyonel desteğimizle, siz de kendi başarı hikayenizi yazabilirsiniz.
            </p>
            <a
              href="/iletisim"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              Ücretsiz Değerlendirme Randevusu Alın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 