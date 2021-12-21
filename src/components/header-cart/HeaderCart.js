import React from 'react';
import CartSvg from '../../../static/images/cart.svg';
import styles from './styles.scss';

export const HeaderCart = () => {
  return (
    <div className={styles.headerCart}>
      <img className={styles.headerCartImage} src={CartSvg} alt="cart" />0 Items
    </div>
  );
};
