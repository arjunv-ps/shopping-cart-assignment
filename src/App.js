import React from 'react';
import { Login, SignUp, NoMatch, Home, Products, MyCart } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import './index.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<Home />} path="/home" />
          <Route element={<Products />} path="/products" />
          <Route element={<Products />} path="/products/:categoryId" />
          <Route element={<MyCart />} path="/my-cart" />
          <Route element={<NoMatch />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
