import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footContainer}>
      <h4 className={styles.footerLogo}>Daniel Jowett {new Date().getFullYear()}</h4>
      <ul className={styles.footerDetails}>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Website</li>
      </ul>
    </footer>
  );
};

export default Footer;
