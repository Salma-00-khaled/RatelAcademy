import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const phoneNumber = '201141837325'; 
    

    const message = `رسالة جديدة
    
👤 *الاسم:* ${formData.name}

    
📝 *الرسالة:*
${formData.message}
    
`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">تواصل معنا</h2>
      <p className="contact-subtitle">نحن هنا للرد على استفساراتكم بكل سرور</p>

      <div className="contact-container">
     
        <div className="contact-info">
          <div className="info-card">
            <FaPhone className="info-icon" />
            <h4>الهاتف</h4>
            <p>+2 01141837325</p>
          </div>
        
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h4>العنوان</h4>
            <p>online service</p>
          </div>
        </div>

      
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="الاسم الكامل" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
         
          <textarea 
            rows="5" 
            name="message"
            placeholder="اكتب رسالتك هنا..." 
            required 
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">
            <FaWhatsapp className="whatsapp-icon" />
      إرسال 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;