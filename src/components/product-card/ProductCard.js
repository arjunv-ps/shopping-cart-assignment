import React from 'react';
import { Button } from '..';
import OfferImage from '../../../static/images/category/baby.png';
import styles from './styles.scss';

export const ProductCard = () => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCardImageContainer}>
        <img className={styles.productCardImageContainerImage} src={OfferImage} alt="offer" />
      </div>
      <div className={styles.productCardInformation}>
        <h2>Fruits and Vegitables</h2>
        <p>A variety of things</p>
        <Button label="Explore fruits and veg" />
      </div>
    </article>
  );
};
