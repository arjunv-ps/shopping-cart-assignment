import React from 'react';
import { ProductCard, ProductCarousel } from '..';
import { API_URL } from '../../constants';

import { useFetch } from '../../hooks';

import styles from './styles.scss';

const CATEGORIES_URL = `${API_URL}categories`;
const BANNERS_URL = `${API_URL}banners`;

export const Home = () => {
  const { data: categories } = useFetch(CATEGORIES_URL);
  const { data: banners } = useFetch(BANNERS_URL);

  return (
    <div className={styles.home}>
      <ProductCarousel banners={banners} />
      <>
        {Array.isArray(categories) &&
          categories
            .filter((category) => category.enabled)
            .map(({ name, description, imageUrl, id }) => {
              return (
                <ProductCard key={id} name={name} description={description} imageUrl={imageUrl} />
              );
            })}
      </>
      {/* <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  );
};
