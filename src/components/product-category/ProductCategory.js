import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './styles.scss';
import { Link, useParams } from 'react-router-dom';

export const ProductCategory = ({ categories }) => {
  const [show, setShow] = useState(false);
  const { categoryId } = useParams();

  const handleToggleMenu = () => {
    setShow(!show);
  };

  const categoriesList = Array.isArray(categories)
    ? categories.filter((category) => category.enabled)
    : [];

  return (
    <>
      <div className={styles.productCategoryListContainer}>
        <Link
          className={clsx(styles.productCategoryListContainerCategory, {
            [styles.productCategoryListContainerCategoryActive]: !categoryId
          })}
          key="all"
          to={`/products`}>
          All
        </Link>
        {categoriesList.map((category) => (
          <Link
            className={clsx(styles.productCategoryListContainerCategory, {
              [styles.productCategoryListContainerCategoryActive]: categoryId === category.id
            })}
            key={category.id}
            to={`/products/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </div>
      <div className={styles.dropdown}>
        <button onClick={handleToggleMenu} className={styles.dropbtn}>
          Categories
        </button>
        <div id="myDropdown" className={clsx(styles.dropdownContent, { [styles.show]: show })}>
          <Link
            className={clsx(styles.productCategoryListContainerCategory, {
              [styles.activeItem]: !categoryId
            })}
            key="all"
            to={`/products`}>
            All
          </Link>
          {categoriesList.map((category) => (
            <Link
              className={clsx(styles.productCategoryListContainerCategory, {
                [styles.activeItem]: categoryId === category.id
              })}
              key={category.id}
              to={`/products/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

ProductCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string,
      description: PropTypes.string,
      enabled: PropTypes.bool,
      order: PropTypes.number,
      imageUrl: PropTypes.string,
      id: PropTypes.string
    })
  )
};

ProductCategory.defaultProps = {
  categories: [
    {
      name: '',
      key: '',
      description: '',
      enabled: true,
      order: 1,
      imageUrl: '',
      id: ''
    }
  ]
};
