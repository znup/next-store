import styles from './Footer.module.sass';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__text}>
        Future Store © {new Date().getFullYear()}
      </p>
    </footer>
  );
};
