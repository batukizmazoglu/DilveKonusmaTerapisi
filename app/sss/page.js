'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SSS() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "Dil ve konuşma terapisi nedir?",
      answer: "Dil ve konuşma terapisi, iletişim bozukluklarının teşhis ve tedavisi için uygulanan bir sağlık hizmetidir. Bu terapi, konuşma, dil, ses, akıcılık ve yutma bozukluklarının değerlendirilmesi ve tedavisini kapsar."
    },
    {
      question: "Hangi durumlarda dil ve konuşma terapisine ihtiyaç duyulur?",
      answer: "Gecikmiş dil gelişimi, artikülasyon bozuklukları, kekemelik, ses bozuklukları, afazi, yutma güçlüğü, otizm spektrum bozukluğu kaynaklı iletişim sorunları gibi durumlarda dil ve konuşma terapisine ihtiyaç duyulabilir."
    },
    {
      question: "Terapi süreci ne kadar sürer?",
      answer: "Terapi süresi, sorunun türüne, şiddetine ve kişinin ilerlemesine bağlı olarak değişiklik gösterir. Bazı vakalar birkaç ay sürerken, bazıları daha uzun sürebilir. Her danışan için özel bir terapi planı oluşturulur."
    },
    {
      question: "Terapi seansları ne sıklıkta yapılır?",
      answer: "Genellikle haftada 1-2 seans olarak planlanır, ancak bu durum kişinin ihtiyaçlarına ve sorunun ciddiyetine göre değişebilir. Her seans yaklaşık 45-60 dakika sürer."
    },
    {
      question: "Çocuğumun dil gelişimi normal mi?",
      answer: "Her çocuğun gelişim hızı farklıdır, ancak belirli yaş dönemlerinde beklenen dil gelişim basamakları vardır. Çocuğunuzun dil gelişimi hakkında endişeleriniz varsa, profesyonel bir değerlendirme için randevu alabilirsiniz."
    },
    {
      question: "Evde yapılabilecek destekleyici çalışmalar var mı?",
      answer: "Evet, terapi sürecini desteklemek için ev ortamında yapılabilecek çeşitli aktiviteler ve alıştırmalar vardır. Terapist, her danışan için özel ev programı oluşturur ve aileye gerekli rehberliği sağlar."
    },
    {
      question: "Online terapi mümkün mü?",
      answer: "Evet, bazı durumlarda online terapi seansları düzenlenebilir. Özellikle takip seansları ve belirli terapi yöntemleri için online terapi etkili bir seçenek olabilir."
    },
    {
      question: "Terapi ücretleri hakkında bilgi alabilir miyim?",
      answer: "Terapi ücretleri, seans sayısı ve terapi türüne göre değişiklik gösterebilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Randevu nasıl alabilirim?",
      answer: "Randevu almak için web sitemizdeki iletişim formunu doldurabilir, WhatsApp üzerinden mesaj gönderebilir veya doğrudan telefon ile arayabilirsiniz."
    },
    {
      question: "Terapi öncesi değerlendirme süreci nasıl işliyor?",
      answer: "İlk görüşmede detaylı bir değerlendirme yapılır. Bu süreçte mevcut durumun analizi, geçmiş sağlık öyküsü ve ihtiyaçlar belirlenir. Değerlendirme sonucunda kişiye özel bir terapi planı oluşturulur."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#B3BF88]/20 to-[#F2F2F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-[#96A65B] mb-6">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-[#0D0D0D]/80 text-lg">
              Dil ve konuşma terapisi hakkında merak ettiğiniz tüm sorular ve cevapları
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 border border-[#B3BF88]/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#B3BF88]/5 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-[#0D0D0D]">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 text-[#96A65B] ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openQuestion === index ? 'auto' : 0,
                    opacity: openQuestion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-[#F2F2F2]/30 border-t border-[#B3BF88]/20">
                    <p className="text-[#0D0D0D]/70">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#96A65B] mb-6">
              Hala Sorunuz mu Var?
            </h2>
            <p className="text-[#0D0D0D]/70 mb-8">
              Merak ettiğiniz diğer konular için bizimle iletişime geçebilirsiniz.
            </p>
            <WhatsAppButton 
              phoneNumber="+905555555555"
              message="Merhaba, bir sorum var."
              className="btn-primary"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 