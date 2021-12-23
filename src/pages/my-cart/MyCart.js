import React from 'react';
import { MyCart as MyCartComponent } from '../../components';
import styles from './styles.scss';

export const MyCart = () => {
  return (
    <div className={styles.myCartPage}>
      <MyCartComponent />
    </div>
  );
};
