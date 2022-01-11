import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import { Button } from '..';
import { CartContext } from '../../context/cart/cart.provider';

export const CartCard = ({ product }) => {
  const { removeItem, addItem } = useContext(CartContext);
  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCardLeftSection}>
        <div>
          <img
            src={
              require(`../../assets/images/products/${product.imageURL
                .split('/')
                .slice(-2)
                .join('/')}`).default
            }
            alt={product.name}
          />
        </div>
        <div className={styles.cartCardInfoContainer}>
          <h3>{product.name}</h3>
          <div className={styles.cartCardButtonControlContainer}>
            <Button
              onClick={() => removeItem(product)}
              className={styles.cartCardButtonControl}
              label="-"
            />
            <span>{product.quantity}</span>
            <Button
              onClick={() => addItem(product)}
              className={styles.cartCardButtonControl}
              label="+"
            />
          </div>
        </div>
      </div>
      <div className={styles.cartCardRightSection}>Rs{product.quantity * product.price}</div>
    </div>
  );
};

CartCard.defaultProps = {
  product: {
    imageURL: '',
    name: '',
    price: '',
    quantity: ''
  }
};

CartCard.propTypes = {
  product: PropTypes.shape({
    imageURL: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })
};
