import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '..';
// import OfferImage from '../../../static/images/category/';
// import OfferImage from '../../../static/images/category/baby.png';
import OfferImage from 'Rootdir/static/images/category/baby.png';
import styles from './styles.scss';

export const ProductCard = ({ name, description, imageUrl }) => {
  // eslint-disable-next-line no-undef
  console.log('imageurl', `../../..${imageUrl}`);
  return (
    <article className={styles.productCard}>
      <div className={styles.productCardImageContainer}>
        <img
          className={styles.productCardImageContainerImage}
          // src={require(`../../..${imageUrl}`).default}
          // src={require(`Rootdir${imageUrl}`).default}
          src={OfferImage}
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
