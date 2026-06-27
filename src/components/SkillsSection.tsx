import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../constants/skills';
import { SKILLS } from '../constants/content';
import type { ReactElement } from 'react';

type SkillsTabProps = {
  category: string;
  isActive: boolean;
  onClick: () => void;
};

const SkillsTab = ({ category, isActive, onClick }: SkillsTabProps) => (
  <button 
    className={`${styles.tabBtn} ${isActive ? styles.activeTab : ''}`}
    onClick={onClick}
  >
    {category.charAt(0).toUpperCase() + category.slice(1)}
  </button>
);

const SkillsList = ({ category, skills }: { category: string; skills: string[] }) => (
  <div className={styles.skillsGlass}>
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

const SkillsSection = (): ReactElement => {
  const [activeSkillTab, setActiveSkillTab] = useState<string>('frontend');
  const currentSkills = SKILLS_DATA[activeSkillTab] || SKILLS_DATA.frontend;

  return (
    <section className={styles.section} id="skills">
      <div className={styles.skillsContainer}>
        <div className={styles.skillsInfo}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>
            {SKILLS.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ textAlign: 'left', marginBottom: '32px' }}>
            {SKILLS.subtitle}
          </p>
          
          <div className={styles.tabsContainer}>
            {SKILL_CATEGORIES.map(category => (
              <SkillsTab 
                key={category}
                category={category}
                isActive={activeSkillTab === category}
                onClick={() => setActiveSkillTab(category)}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.skillsDisplay}>
          <SkillsList category={activeSkillTab} skills={currentSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
