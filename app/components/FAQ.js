'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "Dil ve konuşma terapisi seansları ne kadar sürüyor?",
      answer: "Her seans yaklaşık 45-60 dakika sürmektedir. Seanslar genellikle haftada 1-2 kez olacak şekilde planlanır ve kişinin ihtiyaçlarına göre düzenlenir."
    },
    {
      question: "Hangi yaş gruplarına hizmet veriyorsunuz?",
      answer: "2 yaş ve üzeri tüm yaş gruplarına hizmet veriyoruz. Çocuklarda dil gelişimi, artikülasyon ve kekemelik; yetişkinlerde ses bozuklukları ve afazi gibi alanlarda uzmanlaşmış durumdayız."
    },
    {
      question: "Online terapi hizmeti veriyor musunuz?",
      answer: "Evet, uygun vakalarda online terapi seansları düzenliyoruz. Özellikle takip seansları ve belirli terapi yöntemleri için online terapi etkili bir seçenek olabilir."
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
            En çok merak edilen konular
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openQuestion === index ? 'rgb(249, 250, 251)' : 'white' }}
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

        <div className="text-center mt-8">
          <Link 
            href="/sss" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#96A65B] text-white hover:bg-[#B3BF88] transition-colors duration-300"
          >
            Tüm Soruları Gör
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 