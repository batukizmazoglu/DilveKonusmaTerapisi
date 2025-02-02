'use client';

export default function WhatsAppCallButton({ phoneNumber, message, className }) {
  const handleClick = () => {
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message || 'Merhaba, bilgi almak istiyorum.');
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      WhatsApp ile İletişime Geç
    </button>
  );
} 