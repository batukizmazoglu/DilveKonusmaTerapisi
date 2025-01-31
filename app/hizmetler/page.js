import React from 'react';

const services = [
  {
    id: 1,
    title: 'Bireysel Terapi',
    description: 'Kişisel gelişim ve ruh sağlığı sorunlarınızla başa çıkmanıza yardımcı olan birebir terapi seansları.',
    price: '800 TL/Seans',
    duration: '50 Dakika'
  },
  {
    id: 2,
    title: 'Çift Terapisi',
    description: 'İlişkinizi güçlendirmek ve sorunları çözmek için profesyonel destek.',
    price: '1000 TL/Seans',
    duration: '60 Dakika'
  },
  {
    id: 3,
    title: 'Online Terapi',
    description: 'Evinizin rahatlığında online platformlar üzerinden terapi hizmeti.',
    price: '700 TL/Seans',
    duration: '45 Dakika'
  },
  {
    id: 4,
    title: 'Grup Terapisi',
    description: 'Benzer sorunları yaşayan kişilerle birlikte iyileşme yolculuğu.',
    price: '500 TL/Seans',
    duration: '90 Dakika'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="font-medium">{service.price}</span>
              <span>{service.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 