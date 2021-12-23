import React from 'react';
import { Products as ProductsComponent } from '../../components';

import styles from './styles.scss';

export const Products = () => {
  return (
    <div className={styles.productPage}>
      <ProductsComponent />
    </div>
  );
};
