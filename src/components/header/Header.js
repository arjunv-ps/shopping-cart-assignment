import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeaderCart } from '../header-cart';
import Logo from '../../../static/images/logo.png';
import styles from './styles.scss';

export const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerLeftSection}>
          <img className={styles.headerLeftSectionLogo} src={Logo} alt="main-logo" />
          <nav>
            <Link
              style={location.pathname === '/home' ? { fontWeight: 'bold' } : {}}
              className={styles.headerLeftSectionNavNavItem}
              to="/home">
              Home
            </Link>
            <Link
              style={location.pathname === '/products' ? { fontWeight: 'bold' } : {}}
              className={styles.headerLeftSectionNavNavItem}
              to="/products">
              Products
            </Link>
          </nav>
        </div>
        <div>
          <Link
            style={location.pathname === '/login' ? { fontWeight: 'bold' } : {}}
            className={styles.headerRightSectionNavNavItem}
            to="/login">
            SignIn
          </Link>
          <Link
            style={location.pathname === '/sign-up' ? { fontWeight: 'bold' } : {}}
            className={styles.headerRightSectionNavNavItem}
            to="/sign-up">
            Register
          </Link>
          <HeaderCart />
        </div>
      </div>
    </header>
  );
};
