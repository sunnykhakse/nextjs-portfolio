import styles from '../../styles/Home.module.css';
import { ABOUT } from '../constants/content';
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

const PhilosophySection = (): ReactElement => {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.sectionTitle}>{ABOUT.title}</h2>
      <p className={styles.sectionSubtitle}>{ABOUT.subtitle}</p>
      <div className={styles.philosophyGrid}>
        {ABOUT.cards.map((card, idx) => (
          <PhilosophyCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
