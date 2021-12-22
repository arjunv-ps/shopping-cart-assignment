import React from 'react';
import { ProductCard, ProductCarousel } from '..';
import styles from './styles.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <ProductCarousel />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
