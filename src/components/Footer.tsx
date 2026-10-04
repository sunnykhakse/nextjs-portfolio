import styles from '../../styles/Home.module.css';
import { getContent, type Locale } from '../constants/content';
import type { ReactElement } from 'react';

type FooterProps = {
  locale?: Locale;
};

const Footer = ({ locale = 'en' }: FooterProps): ReactElement => {
  const currentYear = new Date().getFullYear();
  const content = getContent(locale);

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
        <p>{content.footer.copyright.replace('{year}', String(currentYear))}</p>
      </div>
    </footer>
  );
};

export default Footer;
