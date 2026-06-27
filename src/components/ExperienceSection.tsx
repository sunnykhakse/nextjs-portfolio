import styles from '../../styles/Home.module.css';
import { EXPERIENCE, Experience } from '../constants/content';

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

const ExperienceSection = ({ experience = [] as Experience[] }) => {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.expHeader}>
        <h2 className={styles.sectionTitle}>{EXPERIENCE.title}</h2>
        <div className={styles.certBadge}>
          {EXPERIENCE.education}
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
