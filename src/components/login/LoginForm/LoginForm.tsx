'use client';

import { handleLogin } from 'app/actions';
import styles from './LoginForm.module.sass';

export const LoginForm = () => {
  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  };

  return (
    <div className={styles.NewAccountForm}>
      <h2 className={styles.NewAccountForm__title}>Login</h2>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="password" name="password" placeholder="Contraseña" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
};
