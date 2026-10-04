import styles from '../../styles/Home.module.css';
import { getContent, type Locale } from '../constants/content';
import type { ReactElement } from 'react';

type PhilosophyCardProps = {
  icon: string;
  title: string;
  description: string;
};

const PhilosophyCard = ({ icon, title, description }: PhilosophyCardProps) => (
  <div className={styles.philosophyCard}>
    <div className={styles.iconWrapper}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

type PhilosophySectionProps = {
  locale?: Locale;
};

const PhilosophySection = ({ locale = 'en' }: PhilosophySectionProps): ReactElement => {
  const content = getContent(locale);

  return (
    <section className={styles.section} id="about">
      <h2 className={styles.sectionTitle}>{content.about.title}</h2>
      <p className={styles.sectionSubtitle}>{content.about.subtitle}</p>
      <div className={styles.philosophyGrid}>
        {content.about.cards.map((card, idx) => (
          <PhilosophyCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
