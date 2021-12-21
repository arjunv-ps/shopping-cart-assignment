import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Button = ({ type, label, ...props }) => {
  return (
    <div className={styles.button}>
      <button type={type} {...props} className={styles.buttonButton}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'button',
  label: ''
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
};
