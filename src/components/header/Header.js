import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderCart } from '../header-cart';
import Logo from '../../../static/images/logo.png';
import styles from './styles.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerLeftSection}>
          <img className={styles.headerLeftSectionLogo} src={Logo} alt="main-logo" />
          <nav>
            <Link className={styles.headerLeftSectionNavNavItem} to="/home">
              Home
            </Link>
            <Link className={styles.headerLeftSectionNavNavItem} to="/products">
              Products
            </Link>
          </nav>
        </div>
        <div>
          <Link className={styles.headerRightSectionNavNavItem} to="/login">
            SignIn
          </Link>
          <Link className={styles.headerRightSectionNavNavItem} to="/sign-up">
            Register
          </Link>
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};
