import React from 'react';
import feature1 from '../images/193e7bfdeed2353624cb522cc305f155.jpg'; 
import feature2 from '../images/1c5a0e230394a23c4a5e9def5d508246.jpg';
import feature3 from '../images/37716d41e3cdb4a50cff6a6204bb4819.jpg'; 
import feature4 from '../images/869ff38e254924d33250f60fe7d9eb03.jpg'; 
import feature5 from '../images/ca52be7dbd56fc71bc97a74ecbb893a4.jpg'; 
import feature6 from '../images/869ff38e254924d33250f60fe7d9eb03.jpg'; 
import feature7 from '../images/time.jpg'; 
import feature8 from '../images/193e7bfdeed2353624cb522cc305f155.jpg'; 
import './WhyUs.css';

const WhyUs = () => {
  const features = [
    {
      id: 1,
      title: "معلمين مجازين",
      description: "معلمون متخصصون وحاصلون على إجازات في القراءات من مشايخ معتمدين",
      image: feature1
    },
    {
      id: 2,
      title: "حصة تجريبية مجانًا",
      description: "جربة فعلية لمدة 30 دقيقة مع معلم متخصص قبل الاشتراك",
      image: feature2
    },
    {
      id: 3,
      title: "معلم خاص لكل طالب",
      description: "متابعة شخصية وبرنامج تعليمي معد خصيصاً لكل طالب",
      image: feature3
    },
    {
      id: 4,
      title: "قسم خاص للنساء",
      description: "فصول نسائية بإشراف معلمات مجازات مع خصوصية كاملة",
      image: feature4
    },
    {
      id: 5,
      title: "قسم خاص للأطفال",
      description: "مناهج ممتعة وطرق تحفيزية خاصة بالأطفال من 5-12 سنة",
      image: feature5
    },
    {
      id: 6,
      title: "تأسيس اللغة العربية",
      description: "تعليم القواعد الأساسية والنورانية ونور البيان بأفضل الطرق",
      image: feature6
    },
    {
      id: 7,
      title: "مرونة في مواعيد الحصص",
      description: "اختيار الأوقات المناسبة صباحاً أو مساءً بما يتناسب مع جدولك",
      image: feature7
    },
    {
      id: 8,
      title: "حلقات تحفيظ تفاعلية",
      description: "مجموعات صغيرة مع تفاعل مباشر وتنافس شريف في الحفظ",
      image: feature8
    }
  ];

  return (
    <div className="why-us-container">
      <div className="why-us-header">
        <h1 className="why-us-title">مميزات أكاديمية رتل</h1>
        <p className="why-us-subtitle">نقدم لكم تجربة فريدة في تعليم القرآن الكريم واللغة العربية</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-image-container">
              <img 
                src={feature.image} 
                alt={feature.title}
                className="feature-image"
                loading="lazy"
              />
              <div className="feature-overlay">
                <div className="feature-number">{feature.id}</div>
              </div>
            </div>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-icon">📖</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;