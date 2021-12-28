import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { addItemToCart, getCartItemsCount, getCartTotal, removeItemFromCart } from './cart.utils';

export const CartContext = createContext({
  cartItemsCount: 0,
  cartTotal: 0,
  cartItems: [],
  addItem: () => {},
  removeItem: () => {}
});

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item) => {
    setCartItems(addItemToCart(cartItems, item));
  };

  const removeItem = (item) => {
    setCartItems(removeItemFromCart(cartItems, item));
  };

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          cartItems,
          cartTotal,
          cartItemsCount,
          removeItem
        }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};
