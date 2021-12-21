import React, { useState } from 'react';
import { Button, Input } from '..';
import styles from './styles.scss';

const formElements = [
  { id: 'email', label: 'Email', name: 'email' },
  { id: 'password', label: 'Password', name: 'password' }
];

export const Login = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };
  return (
    <main className={styles.login}>
      <section className={styles.loginSection}>
        <h1>Login</h1>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>
      <section className={styles.loginSection}>
        <form>
          {formElements.map((ele) => (
            <div className={styles.loginSectionInputContainer} key={ele.id}>
              <Input
                label={ele.label}
                id={ele.id}
                name={ele.name}
                value={signUpFormData[ele.name]}
                onChange={handleChange}
              />
            </div>
          ))}{' '}
          <div>
            <Button label="Login" />
          </div>
        </form>
      </section>
    </main>
  );
};
