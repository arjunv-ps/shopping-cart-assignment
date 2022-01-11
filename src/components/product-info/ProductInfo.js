import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';

import styles from './styles.scss';
import { CartContext } from '../../context/cart/cart.provider';

export const ProductInfo = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const handleBuyClick = () => {
    addItem(product);
  };
  return (
    <div className={styles.productInfo}>
      <h3 className={styles.productInfoHeader}>{product.name}</h3>
      <div className={styles.productInfoProductInfoContainer}>
        <div className={styles.productInfoProductInfoContainerImageContainer}>
          <img
            src={
              require(`../../assets/images/products/${product.imageURL
                .split('/')
                .slice(-2)
                .join('/')}`).default
            }
            alt={product.name}
          />
        </div>
        <div className={styles.productInfoProductInfoContainerInformationContainer}>
          <p className={styles.productInfoProductInfoContainerInformationContainerDescription}>
            {product.description}
          </p>
          <Button
            onClick={handleBuyClick}
            className={styles.mobileButton}
            label={`Buy Now @ RS${product.price}`}
          />
        </div>
      </div>
      <Button
        onClick={handleBuyClick}
        className={styles.tabletButton}
        label={`Buy Now @ RS${product.price}`}
      />
      <div className={styles.productInfoBottomSection}>
        <span className={styles.productInfoBottomSectionPrice}>MRP Rs.{product.price}</span>
        <Button
          onClick={handleBuyClick}
          className={styles.productInfoBottomSectionButton}
          label={`Buy Now`}
        />
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
