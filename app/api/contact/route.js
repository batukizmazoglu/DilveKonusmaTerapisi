import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Form verilerini konsola yazdır
    console.log('Yeni İletişim Formu Mesajı:');
    console.log('-------------------------');
    console.log('Ad Soyad:', name);
    console.log('E-posta:', email);
    console.log('Konu:', subject);
    console.log('Mesaj:', message);
    console.log('-------------------------');

    return NextResponse.json({ 
      success: true,
      message: 'Form başarıyla gönderildi.'
    });
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return NextResponse.json(
      { error: 'Form işlenirken bir hata oluştu.' },
      { status: 500 }
    );
  }
} 