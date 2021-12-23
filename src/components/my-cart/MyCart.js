import React from 'react';
import { Button, CartCard } from '..';
import styles from './styles.scss';

import LowetPrice from '../../../static/images/lowest-price.png';

import Apple from '../../../static/images/products/fruit-n-veg/apple.jpg';

const products = [
  {
    name: 'Fresho Kiwi - Green, 3psc',
    price: 12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple,
    quantity: 4
  },
  {
    name: 'Test apple - Green, 3psc',
    price: 22,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple,
    quantity: 4
  },
  {
    name: 'Test apple - Green, 3psc',
    price: 22,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple,
    quantity: 4
  },
  {
    name: 'Test apple - Green, 3psc',
    price: 22,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis lorem diam.',
    image: Apple,
    quantity: 4
  }
];

export const MyCart = () => {
  return (
    <div className={styles.myCart}>
      <div className={styles.myCartHeader}>
        <h2>My Cart</h2>
        <span> ({1} items)</span>
      </div>
      <div className={styles.productListContainer}>
        <>
          {products.map((product, index) => (
            <CartCard key={index} product={product} />
          ))}
          <div className={styles.myCartBanner}>
            <img src={LowetPrice} alt="lowest-price" />
            <p>You won&apos;t find it cheaper anywhere</p>
          </div>
        </>
      </div>

      <div className={styles.myCartFooter}>
        <p>Promocode can be applied on payment page</p>
        <Button
          className={styles.myCartCheckoutButton}
          label={
            <div className={styles.myCartCheckoutButtonContent}>
              <span>Proceed to Checkout</span>
              <span>Rs.187 &gt;</span>
            </div>
          }
        />
      </div>
    </div>
  );
};
