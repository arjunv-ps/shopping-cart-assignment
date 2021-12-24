import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../../static/images/offers/offer1.jpg';
import styles from './styles.scss';
import clsx from 'clsx';

export const ProductCarousel = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleButtonToggle = (number) => () => {
    showSlides(currentSlide + number);
  };

  const handleDotClick = (index) => () => {
    showSlides(index);
  };

  const showSlides = (n) => {
    if (n > banners.length) {
      setCurrentSlide(1);
    } else if (n < 1) {
      setCurrentSlide(banners.length);
    } else {
      setCurrentSlide(n);
    }
  };

  return (
    <div>
      <div className={styles.slideshowContainer}>
        {Array.isArray(banners) &&
          banners.map((banner, index) => (
            <div
              style={{ display: currentSlide === index + 1 ? 'block' : 'none' }}
              key={banner.id}
              className="mySlides fade">
              <img src={Image} alt={banner.bannerImageAlt} style={{ width: '100%' }} />
            </div>
          ))}

        <a className={styles.prev} onClick={handleButtonToggle(-1)}>
          PREV
        </a>
        <a className={styles.next} onClick={handleButtonToggle(+1)}>
          NEXT
        </a>
        <div style={{ textAlign: 'center' }}>
          {Array.isArray(banners) &&
            banners.map((_, index) => (
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
  banners: [
    {
      bannerImageAlt: '',
      bannerImageUrl: '',
      id: '',
      isActive: '',
      order: ''
    }
  ]
};

ProductCarousel.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      bannerImageAlt: PropTypes.string,
      bannerImageUrl: PropTypes.string,
      id: PropTypes.string,
      isActive: PropTypes.string,
      order: PropTypes.string
    })
  )
};
