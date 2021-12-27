import React, { useContext, useState } from 'react';
import clsx from 'clsx';

import { MyCart } from '..';
import CartSvg from '../../../static/images/cart.svg';
import { CartContext } from '../../context/cart/cart.provider';
import styles from './styles.scss';

export const HeaderCart = () => {
  const { cartItemsCount } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.headerCart}>
        <img
          onClick={handleToggleMenu}
          className={styles.headerCartImage}
          src={CartSvg}
          alt="cart"
        />
        {cartItemsCount} Items
      </div>
      <div className={styles.dropdown}>
        <div id="myDropdown" className={clsx(styles.dropdownContent, { [styles.show]: show })}>
          <div className={styles.dropdownHeader}>
            <p>My Card ({cartItemsCount} Items)</p>
            <button type="button" onClick={handleToggleMenu}>
              X
            </button>
          </div>
          <MyCart hideHeader />
        </div>
      </div>
    </>
  );
};
