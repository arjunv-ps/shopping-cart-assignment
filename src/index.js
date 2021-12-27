import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import CartProvider from './context/cart/cart.provider';
import App from './App';

const render = (Component) =>
  ReactDOM.render(
    <CartProvider>
      <Component />
    </CartProvider>,
    document.getElementById('root')
  );

render(hot(App));
