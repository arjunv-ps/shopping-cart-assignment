import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.scss';
import { Link } from 'react-router-dom';

const catogries = [
  { name: 'Fruits & Vegetables' },
  { name: 'Bakery Cakes and Diary' },
  { name: 'Beverages' }
];

export const ProductCategory = () => {
  const [show, setShow] = useState(false);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  console.log('productCategoryListContainer', styles);

  return (
    <>
      <div className={styles.productCategoryListContainer}>
        {catogries.map((category) => (
          <Link className={styles.productCategoryListContainerCategory} key={category.name} to="#">
            {category.name}
          </Link>
        ))}
      </div>
      <div className={styles.dropdown}>
        <button onClick={handleToggleMenu} className={styles.dropbtn}>
          Dropdown
        </button>
        <div id="myDropdown" className={clsx(styles.dropdownContent, { [styles.show]: show })}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};
