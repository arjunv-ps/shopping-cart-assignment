import React from 'react';
import { ProductCategory, ProductInfo } from '..';
import styles from './styles.scss';

import Apple from '../../../static/images/products/fruit-n-veg/apple.jpg';

const products = [
  {
    name: 'Fresho Kiwi - Green, 3psc',
    price: '12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple
  },
  {
    name: 'Test apple - Green, 3psc',
    price: '22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple
  },
  {
    name: 'Test apple - Green, 3psc',
    price: '22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple
  },
  {
    name: 'Test apple - Green, 3psc',
    price: '22',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple
  }
];

export const Products = () => {
  return (
    <div className={styles.products}>
      <div>
        <ProductCategory />
      </div>
      <div className={styles.productsListContainer}>
        {products.map((product, index) => (
          <ProductInfo key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
