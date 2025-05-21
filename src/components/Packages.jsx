import React, { useState } from 'react';
import PackageCard from './PackageCard';
import './packages.css';
import { FaWhatsapp } from 'react-icons/fa';

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData);

    const phoneNumber = '201141837325'; 

    const message = `مرحباً، أود الاشتراك في الباقة التعليمية التالية:

📌 *${packageData.title}*

📝 *تفاصيل الباقة:*
- عدد الجلسات: ${packageData.sessions} جلسة
- السعر: ${packageData.priceSAR} ريال سعودي (${packageData.priceUSD} دولار)

📱 الرجاء التواصل معي عبر هذا الرقم لإتمام التسجيل والاستفسار.`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const packagesList = [
    {
      title: "الباقة الأساسية",
      sessions: "4",
      priceSAR: "25",
      priceUSD: "8.5",
      highlight: true,
      popular: true,
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم شهري"]
    },
    {
      title: "الباقة المتوسطة",
      sessions: "8",
      priceSAR: "50",
      priceUSD: "17",
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم شهري", "متابعة يومية"]
    },
    {
      title: "الباقة المكثفة",
      sessions: "12",
      priceSAR: "75",
      priceUSD: "25.5",
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم أسبوعي", "متابعة يومية", "إجازة مصغرة"]
    },
    {
      title: "الباقة المتميزة",
      sessions: "16",
      priceSAR: "100",
      priceUSD: "34",
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم أسبوعي", "متابعة يومية", "إجازة مصغرة", "شهادة إتمام"]
    },
    {
      title: "الباقة المتميزة",
      sessions: "20",
      priceSAR: "125",
      priceUSD: "42",
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم أسبوعي", "متابعة يومية", "إجازة مصغرة", "شهادة إتمام"]
    },
    {
      title: "الباقة المتميزة",
      sessions: "24",
      priceSAR: "150",
      priceUSD: "51",
      features: ["جلسات أسبوعية", "تسجيلات الحصص", "تقييم أسبوعي", "متابعة يومية", "إجازة مصغرة", "شهادة إتمام"]
    }
  ];

  return (
    <section id="packages" className="packages-section">
      <div className="packages-header">
        <h2 className="packages-title">باقاتنا التعليمية</h2>
        <p className="packages-subtitle">اختر الباقة المناسبة لك واستمتع بتجربة تعليمية فريدة</p>
      </div>

      <div className="packages-grid">
        {packagesList.map((pkg, index) => (
          <PackageCard
            key={index}
            {...pkg}
            onSelect={handlePackageSelect}
          />
        ))}
      </div>

      {selectedPackage && (
        <div className="whatsapp-confirmation">
          <FaWhatsapp className="whatsapp-icon" />
          <span>جارٍ تحويلك إلى واتساب لإكمال حجز {selectedPackage.title}</span>
        </div>
      )}
    </section>
  );
}

export default Packages;
