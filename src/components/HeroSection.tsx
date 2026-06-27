import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { HERO } from '../constants/content';
import type { ReactElement } from 'react';

const HeroSection = (): ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          {HERO.titleMain} <br/>
          <span className={styles.gradientText}>{HERO.titleHighlight}</span> {HERO.titleEnd}
        </h1>
        <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: HERO.subtitle }} />
        <div className={styles.heroCta}>
          <a href={HERO.cta1Link} className={styles.primaryBtn}>{HERO.cta1}</a>
          <a href={HERO.cta2Link} className={styles.secondaryBtn}>{HERO.cta2}</a>
        </div>
      </div>
      
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroImageDecoration}></div>
        <Image 
          src="/headshot.jpg" 
          alt={HERO.titleMain}
          width={500} 
          height={600} 
          priority
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
