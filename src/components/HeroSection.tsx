import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { getContent, type Locale } from '../constants/content';
import type { ReactElement } from 'react';

type HeroSectionProps = {
  locale?: Locale;
};

const HeroSection = ({ locale = 'en' }: HeroSectionProps): ReactElement => {
  const content = getContent(locale);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          {content.hero.titleMain} <br/>
          <span className={styles.gradientText}>{content.hero.titleHighlight}</span> {content.hero.titleEnd}
        </h1>
        <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: content.hero.subtitle }} />
        <div className={styles.heroCta}>
          <a href={content.hero.cta1Link} className={styles.primaryBtn}>{content.hero.cta1}</a>
          <a href={content.hero.cta2Link} className={styles.secondaryBtn}>{content.hero.cta2}</a>
        </div>
      </div>
      
      <div className={styles.heroImageWrapper}>
        <div className={styles.heroImageDecoration}></div>
        <Image 
          src="/headshot.jpg" 
          alt={content.hero.titleMain}
          width={500} 
          height={600} 
          priority
          sizes="(max-width: 768px) 100vw, 42vw"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
