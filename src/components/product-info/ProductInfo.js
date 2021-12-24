import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';

import styles from './styles.scss';
import Apple from '../../../static/images/products/fruit-n-veg/apple.jpg';

export const ProductInfo = ({ product }) => {
  return (
    <div className={styles.productInfo}>
      <h3>{product.name}</h3>
      <div className={styles.productInfoProductInfoContainer}>
        <div className={styles.productInfoProductInfoContainerImageContainer}>
          <img src={Apple} alt={product.name} />
        </div>
        <div className={styles.productInfoProductInfoContainerInformationContainer}>
          <p className={styles.productInfoProductInfoContainerInformationContainerDescription}>
            {product.description}
          </p>
          <Button className={styles.mobileButton} label={`Buy Now @ RS${product.price}`} />
        </div>
      </div>
      <Button className={styles.tabletButton} label={`Buy Now @ RS${product.price}`} />
      <div className={styles.productInfoBottomSection}>
        <span className={styles.productInfoBottomSectionPrice}>MRP Rs.{product.price}</span>
        <Button className={styles.productInfoBottomSectionButton} label={`Buy Now`} />
      </div>
    </div>
  );
};

ProductInfo.defaultProps = {
  product: {
    name: '',
    price: '',
    description: '',
    imageURL: '',
    stock: '',
    category: '',
    sku: '',
    id: ''
  }
};

ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    stock: PropTypes.string,
    category: PropTypes.string,
    sku: PropTypes.string,
    id: PropTypes.string
  })
};
