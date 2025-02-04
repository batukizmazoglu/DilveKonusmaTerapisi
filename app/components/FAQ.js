'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "Dil ve konuşma terapisi nedir?",
      answer: "Dil ve konuşma terapisi, iletişim bozukluklarının teşhis ve tedavisi için uygulanan bir sağlık hizmetidir. Her yaş grubunda görülebilen konuşma, dil, ses ve yutma bozukluklarının değerlendirilmesi ve tedavisini kapsar."
    },
    {
      question: "Hangi durumlarda dil ve konuşma terapisine ihtiyaç duyulur?",
      answer: "Gecikmiş dil gelişimi, artikülasyon bozuklukları, kekemelik, ses bozuklukları, afazi, yutma güçlüğü, otizm spektrum bozukluğu kaynaklı iletişim sorunları gibi durumlarda dil ve konuşma terapisine ihtiyaç duyulabilir."
    },
    {
      question: "Terapi süreci nasıl işler?",
      answer: "İlk görüşmede detaylı bir değerlendirme yapılır ve kişiye özel bir terapi planı oluşturulur. Seanslar genellikle haftada 1-2 kez, 45-60 dakika sürer. Terapi süresi, sorunun türüne ve kişinin ilerlemesine bağlı olarak değişiklik gösterir."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="section bg-[#F2F2F2]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#96A65B] font-bold text-3xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-[#0D0D0D]/70">
            En çok merak edilen konular hakkında bilgi alın
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-soft hover:shadow-md transition-all duration-300 border border-[#B3BF88]/20 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-[#B3BF88]/5 transition-colors duration-200"
              >
                <span className="text-base font-medium text-[#0D0D0D]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 text-[#96A65B] ${
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
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'max-h-72' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 bg-[#F2F2F2]/30 border-t border-[#B3BF88]/20">
                  <p className="text-[#0D0D0D]/70 text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/sss" 
            className="btn-secondary inline-flex items-center"
          >
            <span>Tüm Soruları Görüntüle</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 