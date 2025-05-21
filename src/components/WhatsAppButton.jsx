import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

const WhatsAppButton = () => {
  const phoneNumber = '201141837325'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="تحدث معنا عبر واتساب"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
