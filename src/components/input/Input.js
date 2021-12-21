import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export const Input = ({ label, id, value, onChange, type, name, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        {...props}
      />
    </div>
  );
};

Input.defaultProps = {
  label: '',
  id: '',
  value: '',
  onChange: () => null,
  type: 'text',
  name: ''
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string
};
