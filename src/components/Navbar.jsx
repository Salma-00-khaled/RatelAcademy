import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

   return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-text">W Ratel Academy</span>
          <span className="logo-subtext">اكاديمية ورتل</span>
        </a>

        {isMobile && (
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={closeMobileMenu}>الرئيسية</a></li>
          <li className="nav-item"><a href="#about" onClick={closeMobileMenu}>من نحن</a></li>
          <li className="nav-item"><a href="#services" onClick={closeMobileMenu}>خدماتنا</a></li>
          <li className="nav-item"><a href="#why-us" onClick={closeMobileMenu}> لماذا نحن</a></li>
          <li className="nav-item"><a href="#packages" onClick={closeMobileMenu}>الباقات</a></li>
          <li className="nav-item"><a href="#contact" onClick={closeMobileMenu}>تواصل معنا</a></li>
          <li className="nav-item"><a href="#reviews" onClick={closeMobileMenu}>آراء طلابنا</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
