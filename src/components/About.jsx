import React from 'react';
import aboutImage2 from '../images/37716d41e3cdb4a50cff6a6204bb4819.jpg';
import aboutImage1 from '../images/193e7bfdeed2353624cb522cc305f155.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">عن أكاديمية ورتل</h1>
        
        <div className="about-grid">
          <div className="about-text">
             <p className="a-text">
           ورتل
            </p>
            <p>
      لتحفيظ القرآن الكريم أونلاين، هي أكاديمية متخصصة في تعليم القرآن الكريم واللغة العربية عن بعد، للرجال والنساء والأطفال، بواسطة معلمين متخصصين حاصلين على إجازات بأعلى الأسانيد.
            </p>
          </div>
          
          <div className="about-image-container">
            <img 
              src={aboutImage1} 
              alt="فصل تحفيظ القرآن" 
              className="about-image about-image-main"
            />
            <img 
              src={aboutImage2} 
              alt="معلم مع طالب" 
              className="about-image about-image-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;