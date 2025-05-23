import React from 'react';
import { FaCheck, FaStar, FaFire, FaWhatsapp, FaTag } from 'react-icons/fa';
import './packages.css';

const PackageCard = ({ 
  title, 
  priceSAR, 
  priceUSD, 
  originalPriceSAR,
  originalPriceUSD,
  sessions, 
  highlight, 
  popular, 
  features, 
  onSelect 
}) => {
  const handleSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSelect({ title, sessions, priceSAR, priceUSD, features });
  };

  return (
    <div 
      className={`package-card ${highlight ? 'highlight' : ''}`}
      onClick={handleSelect}
    >
      {popular && (
        <div className="popular-badge">
          <FaStar className="badge-icon" />
          <span>الأكثر طلباً</span>
        </div>
      )}

      {originalPriceSAR && (
        <div className="offer-badge">
          <FaTag className="badge-icon" />
          <span>عرض خاص</span>
        </div>
      )}

      <h3 className="package-title">{title}</h3>
      
      <div className="price-container">
        {originalPriceSAR ? (
          <>
            <span className="price-original">{originalPriceSAR} ريال</span>
            <span className="price">{priceSAR} ريال</span>
            <span className="price-usd">≈ {priceUSD} دولار</span>
          </>
        ) : (
          <>
            <span className="price">{priceSAR} ريال</span>
            <span className="price-usd">≈ {priceUSD} دولار</span>
          </>
        )}
      </div>
      
      <div className="sessions-count">
        <span>{sessions}</span> جلسة شهرياً
      </div>
      
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck className="feature-icon" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        className="select-button"
        onClick={handleSelect}
      >
        <FaWhatsapp className="whatsapp-icon" />
        اختر الباقة
      </button>
      
      {highlight && (
        <div className="highlight-corner">
          <FaFire className="highlight-icon" />
        </div>
      )}
    </div>
  );
};

export default PackageCard;
