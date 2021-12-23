import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './styles.scss';

export const Footer = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/my-cart';
  return (
    <footer className={clsx(styles.footer, { [styles.hideFooter]: hideFooter })}>
      <p className={styles.footerText}>
        Copyright c 2011-2018 Sabkha Bazaar Grocery Supplies Pvt Limited
      </p>
    </footer>
  );
};
