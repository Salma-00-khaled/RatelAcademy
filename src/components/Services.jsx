import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title">خدماتنا</h1>
        <p className="services-subtitle">
          نقدم لكم خدمات تعليمية متكاملة وفق أعلى معايير الجودة والإتقان
        </p>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-icon">✧</div>
          <div className="decoration-line"></div>
        </div>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📖</div>
          <h2>1- تحفيظ القرآن الكريم</h2>
          <p>
            تحفيظ القرآن الكريم أونلاين، بأساليب وتقنيات متطورة للرجال والنساء والأطفال، مع تفسير معاني الآيات الكريمة؛ لكي يسهل الحفظ والفهم، وذلك بواسطة معلمين ومعلمات ذوي خبرة، وحاصلين على إجازات بأعلى الأسانيد.
          </p>
          <div className="service-highlight"></div>
        </div>

        <div className="service-card">
          <div className="service-icon">✍️</div>
          <h2>2- تأسيس اللغة العربية</h2>
          <p>
            نقدم دورات متخصصة في تأسيس اللغة العربية، وتحسين المهارة اللغوية، وشرح قواعد اللغة العربية بشكل مبسط وميسر، وتعلم القاعدة النورانية وقاعدة نور البيان بواسطة معلمين متخصصين حاصلين على إجازات.
          </p>
          <div className="service-highlight"></div>
        </div>

        <div className="service-card">
          <div className="service-icon">🎯</div>
          <h2>3- تعلم التجويد</h2>
          <p>
            نقدم حصص فردية بين الطالب والمعلم لتعلم التجويد، مع مراجعة دورية من خلال قراء مجازين؛ ذلك لتقييم تقدم كل طالب وتصحيح الأخطاء وتحسين التلاوة وتحقيق تقدم مستمر وضمان الفهم الصحيح لأحكام التجويد.
          </p>
          <div className="service-highlight"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;