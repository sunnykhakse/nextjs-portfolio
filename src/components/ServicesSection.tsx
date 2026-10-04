import styles from '../../styles/Home.module.css';
import { getContent, type Locale } from '../constants/content';
import type { ReactElement } from 'react';

type ServicesSectionProps = {
  locale?: Locale;
};

const ServicesSection = ({ locale = 'en' }: ServicesSectionProps): ReactElement => {
  const content = getContent(locale);

  return (
    <section className={styles.section} id="services">
      <h2 className={styles.sectionTitle}>{content.services.title}</h2>
      <p className={styles.sectionSubtitle}>{content.services.subtitle}</p>

      <div className={styles.philosophyGrid}>
        {content.services.items.map((s, i) => (
          <div key={i} className={styles.philosophyCard}>
            <h3>{s.title}</h3>
            <p style={{color:'var(--text-secondary)'}}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
