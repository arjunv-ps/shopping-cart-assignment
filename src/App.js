import React from 'react';
import { Login, SignUp, NoMatch, Home } from './pages';
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
          <Route element={<NoMatch />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
