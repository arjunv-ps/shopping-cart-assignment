import React from "react";
import { Link } from "react-router-dom";

import { HeaderCart } from "../header-cart";
import Logo from "../../../static/images/logo.png";
import "./header.scss";

export const Header = () => {
  console.log(Logo);
  return (
    <header>
      <img src={Logo} alt="main-logo" />
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <HeaderCart />
    </header>
  );
};
