import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Button, CartCard } from '..';
import styles from './styles.scss';

import LowetPrice from '../../../static/images/lowest-price.png';

import { CartContext } from '../../context/cart/cart.provider';

export const MyCart = ({ hideHeader }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.myCart} style={hideHeader ? { paddingTop: 0 } : {}}>
      {!hideHeader && (
        <div className={styles.myCartHeader}>
          <h2>My Cart</h2>
          <span> ({1} items)</span>
        </div>
      )}
      <div className={styles.productListContainer}>
        <>
          {cartItems.map((product, index) => (
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

MyCart.propTypes = {
  hideHeader: PropTypes.bool
};

MyCart.defaultProps = {
  hideHeader: false
};
