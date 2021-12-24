import React from 'react';
import { Home as HomeComponent } from '../../components';
import styles from './styles.scss';

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <HomeComponent />
    </div>
  );
};
