export const addItemToCart = (cartItems, newCartItem) => {
  const currentCartItem = cartItems.find((cartItem) => {
    return cartItem.id === newCartItem.id;
  });
  if (currentCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === newCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const getCartItemsCount = (cartItems) =>
  cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);

export const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
