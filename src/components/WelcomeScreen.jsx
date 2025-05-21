import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';
import logo from '../images/logo.jpg';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsExiting(true); 
    }, 2500); 

    const timer2 = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div className={`welcome-screen ${isExiting ? 'exit-animation' : ''}`}>
      <div className="logo-container">
        <img 
          src={logo} 
          alt="RatelAcademy Logo" 
          className={`welcome-logo ${isExiting ? 'logo-exit' : 'logo-enter'}`}
        />
        <div className={`pulse-circle ${isExiting ? 'pulse-exit' : ''}`}></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;