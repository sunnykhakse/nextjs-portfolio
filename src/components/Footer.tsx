import styles from '../../styles/Home.module.css';
import type { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div 
          className={styles.logo} 
          style={{ fontSize: '1.2rem' }} 
          onClick={handleLogoClick}
          role="button"
          tabIndex={0}
        >
          SK.
        </div>
        <p>© {currentYear} Snehal Khakse. Designed & Built with Next.js.</p>
      </div>
    </footer>
  );
};

export default Footer;
