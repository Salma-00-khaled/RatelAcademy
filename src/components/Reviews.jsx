import React, { useState } from 'react';
import './Reviews.css';

const importAll = (r) => r.keys().map(r);
const reviewImages = importAll(require.context('../images/reviews', false, /\.(png|jpe?g|svg)$/));

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + reviewImages.length) % reviewImages.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % reviewImages.length
    );
  };

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">آراء طلابنا</h1>
      <div className="reviews-grid">
        {reviewImages.map((image, idx) => (
          <div key={idx} className="review-card floating">
            <img
              src={image}
              alt={`مراجعة ${idx + 1}`}
              className="review-img"
              loading="lazy"
              onClick={() => openModal(idx)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img 
              src={reviewImages[currentImageIndex]} 
              alt={`مراجعة ${currentImageIndex + 1}`} 
              className="modal-image"
            />
            <div className="modal-navigation">
              <button className="nav-button prev-button" onClick={goToPrev}>
                ‹
              </button>
              <span className="image-counter">
                {currentImageIndex + 1} / {reviewImages.length}
              </span>
              <button className="nav-button next-button" onClick={goToNext}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;