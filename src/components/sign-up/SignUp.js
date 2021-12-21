import React, { useState } from 'react';
import { Button, Input } from '..';
import styles from './styles.scss';

const formElements = [
  { id: 'first-name', label: 'First Name', name: 'firstName' },
  { id: 'last-name', label: 'Last Name', name: 'lastName' },
  { id: 'email', label: 'Email', name: 'email' },
  { id: 'password', label: 'Password', name: 'password' },
  { id: 'confirm-password', label: 'Confirm Password', name: 'confirmPassword' }
];

export const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <main className={styles.signUp}>
        <section className={styles.signUpSection}>
          <h1>Signup</h1>
          <p>We do not share you personal details with anyone</p>
        </section>
        <section className={styles.signUpSection}>
          <form>
            {formElements.map((ele) => (
              <div className={styles.signUpSectionInputContainer} key={ele.id}>
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
              <Button label="Signup" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
