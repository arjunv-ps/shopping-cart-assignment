import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './styles.scss';

export const Button = ({ type, label, className, ...props }) => {
  return (
    <div className={clsx(styles.button, className)}>
      <button type={type} {...props} className={styles.buttonButton}>
        {label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'button',
  label: '',
  className: ''
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
