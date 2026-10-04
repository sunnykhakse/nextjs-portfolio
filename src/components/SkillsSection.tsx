import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { SKILLS_DATA, SKILL_CATEGORIES, getSkillCategoryLabel, getSkillCategoryDescription } from '../constants/skills';
import { getContent, type Locale } from '../constants/content';
import type { ReactElement } from 'react';

type SkillsTabProps = {
  category: string;
  isActive: boolean;
  onClick: () => void;
};

const SkillsTab = ({ category, isActive, onClick, locale }: SkillsTabProps & { locale?: string }) => (
  <button 
    className={`${styles.tabBtn} ${isActive ? styles.activeTab : ''}`}
    onClick={onClick}
  >
    {getSkillCategoryLabel(category, locale)}
  </button>
);

const SkillsList = ({ category, skills, locale }: { category: string; skills: string[]; locale?: string }) => (
  <div className={styles.skillsGlass}>
    <p style={{ margin: '0 0 18px', color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
      {getSkillCategoryDescription(category, locale)}
    </p>
    <div className={styles.skillListInteractive}>
      {skills.map((skill, idx) => (
        <span 
          key={`${category}-${idx}`} 
          className={styles.skillTagLarge} 
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

type SkillsSectionProps = {
  locale?: Locale;
};

const SkillsSection = ({ locale = 'en' }: SkillsSectionProps): ReactElement => {
  const [activeSkillTab, setActiveSkillTab] = useState<string>('frontend');
  const content = getContent(locale);
  const currentSkills = SKILLS_DATA[activeSkillTab] || SKILLS_DATA.frontend;

  return (
    <section className={styles.section} id="skills">
      <div className={styles.skillsContainer}>
        <div className={styles.skillsInfo}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
            {content.skills.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ textAlign: 'left', marginBottom: '32px' }}>
            {content.skills.subtitle}
          </p>
          
          <div className={styles.tabsContainer}>
            {SKILL_CATEGORIES.map(category => (
              <SkillsTab 
                key={category}
                category={category}
                locale={locale}
                isActive={activeSkillTab === category}
                onClick={() => setActiveSkillTab(category)}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.skillsDisplay}>
          <SkillsList category={activeSkillTab} skills={currentSkills} locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
