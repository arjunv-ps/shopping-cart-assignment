import React from 'react';
import { ProductCategory, ProductInfo } from '..';
import styles from './styles.scss';
import { API_URL } from '../../constants';

import { useFetch } from '../../hooks';
import { useParams } from 'react-router-dom';

const PRODUCTS_URL = `${API_URL}products`;
const CATEGORIES_URL = `${API_URL}categories`;

export const Products = () => {
  const { data: categories } = useFetch(CATEGORIES_URL);
  const { data: products } = useFetch(PRODUCTS_URL);
  const { categoryId } = useParams();

  const productList =
    categoryId && Array.isArray(products)
      ? products.filter((product) => product.category === categoryId)
      : products;

  return (
    <div className={styles.products}>
      <div>
        <ProductCategory categories={categories} />
      </div>
      <div className={styles.productsListContainer}>
        {Array.isArray(productList) &&
          productList.map((product, index) => <ProductInfo key={index} product={product} />)}
      </div>
    </div>
  );
};
