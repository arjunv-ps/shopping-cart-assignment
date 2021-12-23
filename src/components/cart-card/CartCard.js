import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import { Button } from '..';

export const CartCard = ({ product }) => {
  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCardLeftSection}>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.cartCardInfoContainer}>
          <h3>{product.name}</h3>
          <div className={styles.cartCardButtonControlContainer}>
            <Button className={styles.cartCardButtonControl} label="-" />
            <span>{product.quantity}</span>
            <Button className={styles.cartCardButtonControl} label="+" />
          </div>
        </div>
      </div>
      <div className={styles.cartCardRightSection}>Rs{product.price}</div>
    </div>
  );
};

CartCard.defaultProps = {
  product: {
    image: '',
    name: '',
    price: '',
    quantity: ''
  }
};

CartCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })
};
