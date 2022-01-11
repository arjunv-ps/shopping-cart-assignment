import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';
import styles from './styles.scss';

export const ProductCard = ({ name, description, imageUrl }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCardImageContainer}>
        <img
          className={styles.productCardImageContainerImage}
          src={
            require(`../../assets/images/category/${imageUrl.split('/').pop().split('.')[0]}.png`)
              .default
          }
          alt="offer"
        />
      </div>
      <div className={styles.productCardInformation}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button label={`Explore ${name}`} />
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  key: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};

ProductCard.defaultProps = {
  name: '',
  key: '',
  description: '',
  imageUrl: ''
};
