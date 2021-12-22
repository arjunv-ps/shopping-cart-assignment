import React from 'react';
import { Products as ProductsComponent } from '../../components';

export const Products = () => {
  return (
    <div
      style={{
        height: 'calc(100% - 162px)',
        maxWidth: '1080px',
        margin: '0 auto',
        overflowY: 'auto'
      }}>
      <ProductsComponent />
    </div>
  );
};
