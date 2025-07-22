'use client';

import { motion } from 'framer-motion';

export default function WhatsAppCallButton({ phoneNumber, message, className }) {
  const handleClick = () => {
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message || 'Merhaba, bilgi almak istiyorum.');
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className={className}
    >
      WhatsApp ile İletişime Geç
    </motion.button>
  );
} 