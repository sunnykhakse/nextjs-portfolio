import styles from '../../styles/Home.module.css';
import { SERVICES } from '../constants/content';
import type { ReactElement } from 'react';

const ServicesSection = (): ReactElement => {
  return (
    <section className={styles.section} id="services">
      <h2 className={styles.sectionTitle}>{SERVICES.title}</h2>
      <p className={styles.sectionSubtitle}>{SERVICES.subtitle}</p>

      <div className={styles.philosophyGrid}>
        {SERVICES.items.map((s, i) => (
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
