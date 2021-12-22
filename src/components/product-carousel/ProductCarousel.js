import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Offer1 from '../../../static/images/offers/offer1.jpg';
import Offer2 from '../../../static/images/offers/offer2.jpg';
import styles from './styles.scss';
import clsx from 'clsx';

const offerImages = [
  { imageUrl: Offer1, alt: 'offer-1' },
  { imageUrl: Offer2, alt: 'offer-2' }
];

export const ProductCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleButtonToggle = (number) => () => {
    showSlides(currentSlide + number);
  };

  const handleDotClick = (index) => () => {
    showSlides(index);
  };

  const showSlides = (n) => {
    if (n > images.length) {
      setCurrentSlide(1);
    } else if (n < 1) {
      setCurrentSlide(images.length);
    } else {
      setCurrentSlide(n);
    }
  };

  return (
    <div>
      <div className={styles.slideshowContainer}>
        {images.map((image, index) => (
          <div
            style={{ display: currentSlide === index + 1 ? 'block' : 'none' }}
            key={image.alt}
            className="mySlides fade">
            <img src={image.imageUrl} alt={image.alt} style={{ width: '100%' }} />
          </div>
        ))}

        <a className={styles.prev} onClick={handleButtonToggle(-1)}>
          PREV
        </a>
        <a className={styles.next} onClick={handleButtonToggle(+1)}>
          NEXT
        </a>
        <div style={{ textAlign: 'center' }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={clsx(styles.dot, { [styles.active]: currentSlide === index + 1 })}
              onClick={handleDotClick(index + 1)}></span>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

ProductCarousel.defaultProps = {
  images: offerImages
};

ProductCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      alt: PropTypes.string
    })
  )
};
