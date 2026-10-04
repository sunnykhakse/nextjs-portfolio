import styles from '../../styles/Home.module.css';
import { getContent, type Experience, type Locale } from '../constants/content';

type ExperienceSectionProps = {
  locale?: Locale;
  experience?: Experience[];
};

const ExperienceCard = ({ period, role, company, details }: Experience) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineDot}></div>
    <div className={styles.timelineContent}>
      <div className={styles.timelineDate}>{period}</div>
      <h3 className={styles.timelineRole}>{role}</h3>
      <div className={styles.timelineCompany}>{company}</div>
      <ul className={styles.timelineList}>
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ExperienceSection = ({ locale = 'en', experience = [] as Experience[] }: ExperienceSectionProps) => {
  const content = getContent(locale);

  return (
    <section className={styles.section} id="experience">
      <div className={styles.expHeader}>
        <h2 className={styles.sectionTitle}>{content.experience.title}</h2>
        <p className={styles.sectionSubtitle}>{content.experience.subtitle}</p>
        <div className={styles.certBadge}>
          {content.experience.education}
        </div>
      </div>
      
      <div className={styles.timeline}>
        {experience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
