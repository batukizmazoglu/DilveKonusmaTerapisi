'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Mesajınız başarıyla gönderildi!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">İletişim Formu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
          <input
            type="text"
            required
            inputMode="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            required
            inputMode="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Konu</label>
          <input
            type="text"
            required
            inputMode="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mesaj</label>
          <textarea
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Gönder
        </button>
      </form>
      {status && (
        <div className="mt-4 p-4 text-center rounded-md bg-green-100 text-green-700">
          {status}
        </div>
      )}
    </div>
  );
} 