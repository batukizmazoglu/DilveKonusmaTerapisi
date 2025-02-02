'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';

const faqs = [
  {
    question: "Dil ve konuşma terapisi seansları ne kadar sürüyor?",
    answer: "Seanslarımız genellikle 45-50 dakika sürmektedir. Her danışanın ihtiyacına göre seans sıklığı ve süresi değişebilmektedir."
  },
  {
    question: "Hangi yaş gruplarına hizmet veriyorsunuz?",
    answer: "Her yaş grubuna hizmet vermekteyiz. Çocuklar, gençler ve yetişkinler için özel olarak planlanmış terapi programlarımız bulunmaktadır."
  },
  {
    question: "Online terapi hizmeti veriyor musunuz?",
    answer: "Evet, uzaktan terapi hizmeti sunmaktayız. Online seanslarımız, yüz yüze seanslarımız kadar etkili ve profesyonel bir şekilde yürütülmektedir."
  },
  {
    question: "Terapi sürecinin süresi ne kadardır?",
    answer: "Terapi süresi, kişinin ihtiyaçlarına ve gelişimine göre değişkenlik gösterir. Detaylı değerlendirme sonrasında size özel bir program oluşturulacaktır."
  }
];

const FAQ = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sık Sorulan Sorular
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span className="font-medium">{faq.question}</span>
                    <span className={`transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </Disclosure.Button>
                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pt-4 pb-2 text-gray-600"
                      >
                        {faq.answer}
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 