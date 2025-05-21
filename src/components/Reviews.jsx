import React, { useState } from 'react';
import './Reviews.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => r.keys().map(r);
const reviewImages = importAll(require.context('../images/reviews', false, /\.(png|jpe?g|svg)$/));

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(idx);
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={reviewImages[photoIndex]}
          nextSrc={reviewImages[(photoIndex + 1) % reviewImages.length]}
          prevSrc={reviewImages[(photoIndex + reviewImages.length - 1) % reviewImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + reviewImages.length - 1) % reviewImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % reviewImages.length)
          }
        />
      )}
    </div>
  );
};

export default Reviews;
