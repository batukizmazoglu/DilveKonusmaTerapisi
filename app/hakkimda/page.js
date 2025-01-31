'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Hakkımda</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/therapist-profile.jpg"
                alt="Konuşma Terapisti"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Uzm. Dkt. Ayşe Yılmaz</h2>
              <p className="text-gray-600 mb-4">
                15 yıllık deneyimim ile çocuk ve yetişkinlere yönelik konuşma terapisi hizmetleri sunmaktayım. 
                İstanbul Üniversitesi Dil ve Konuşma Terapisi Bölümü mezunuyum ve aynı üniversitede yüksek lisansımı tamamladım.
              </p>
              <p className="text-gray-600 mb-4">
                Uzmanlık alanlarım:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Artikülasyon ve Fonolojik Bozukluklar</li>
                <li>Dil Gelişim Gecikmesi</li>
                <li>Kekemelik Terapisi</li>
                <li>Ses Bozuklukları</li>
                <li>Otizm Spektrum Bozukluğunda İletişim</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6">Eğitim ve Sertifikalar</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">İstanbul Üniversitesi</h4>
                <p className="text-gray-600">Yüksek Lisans - Dil ve Konuşma Terapisi (2012)</p>
              </div>
              <div>
                <h4 className="font-medium">İstanbul Üniversitesi</h4>
                <p className="text-gray-600">Lisans - Dil ve Konuşma Terapisi (2010)</p>
              </div>
              <div>
                <h4 className="font-medium">Sertifikalar</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>PROMPT Terapi Tekniği Sertifikası</li>
                  <li>Lidcombe Kekemelik Programı Sertifikası</li>
                  <li>Disfaji Değerlendirme ve Terapi Sertifikası</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-2xl font-semibold mb-6">Yaklaşımım</h3>
            <p className="text-gray-600 mb-4">
              Her danışanın benzersiz olduğuna ve kişiye özel terapi planının başarıya ulaşmada anahtar rol oynadığına inanıyorum. 
              Bilimsel temelli yaklaşımları, güncel terapi tekniklerini ve yıllara dayanan deneyimimi birleştirerek, 
              her yaştan danışanım için en etkili tedavi planını oluşturmaya özen gösteriyorum.
            </p>
            <p className="text-gray-600">
              Terapi sürecinde aile katılımının önemine inanıyor ve ailelere gerekli eğitim ve destek hizmetlerini sunuyorum. 
              Düzenli ilerleme takibi ve şeffaf iletişim anlayışıyla, danışanlarımın gelişimini yakından izliyor ve 
              gerektiğinde terapi planında güncellemeler yapıyorum.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
} 