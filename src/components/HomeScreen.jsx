import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import backgroundVideo from '../videos/istockphoto-1511951446-640_adpp_is.mp4';
import backgroundImage from '../images/96b2a5fb6bc5e7d31747998e9b1b6e83.jpg';
import './HomeScreen.css';

const HomeScreen = () => {
  const [showWhatsAppFloat, setShowWhatsAppFloat] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/201141837325`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsAppFloat(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="home-screen">
       
        <div className="background-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={`video-background ${videoLoaded ? 'visible' : ''}`}
            onLoadedData={() => setVideoLoaded(true)}
            poster={backgroundImage}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!videoLoaded && (
            <div 
              className="image-fallback" 
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          )}
        </div>
        
        <div className="overlay"></div>
        
        
        <div className={`subtitle-wrapper ${subtitleVisible ? 'visible' : ''}`}>
          <div className="subtitle-container">
            <p className="subtitle">
              أكاديمية رتل لتعليم وحفظ القرآن الكريم
              <span className="subtitle-highlight">بالتجويد والقراءات العشر</span>
            </p>
          </div>
        </div>
        
        {/* Centered Content */}
        <div className="home-container">
          <div className="content">
            <h1 className="title">
              <span className="title-line">احجز اول حصة</span>
              <span className="title-highlight">تجريبة مجانا</span>
            </h1>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <span>تواصل معنا على واتساب</span>
              <FaWhatsapp className="button-icon" />
            </button>
          </div>
        </div>
      </div>

      {showWhatsAppFloat && (
        <div 
          className="whatsapp-float"
          onClick={handleWhatsAppClick}
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span className="float-tooltip">تواصل معنا</span>
        </div>
      )}
    </>
  );
};

export default HomeScreen;