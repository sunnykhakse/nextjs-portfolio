import styles from '../../styles/Home.module.css';
import { PROJECTS, Project } from '../constants/content';

type ProjectCardProps = Project;

const ProjectCard = ({ role, title, description, metrics, tech }: ProjectCardProps) => (
  <div className={styles.projectCard}>
    <div className={styles.projectHeader}>
      <span className={styles.projectRole}>{role}</span>
    </div>
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectDesc}>{description}</p>
    <div className={styles.projectMetrics}>
      <strong>Impact:</strong> {metrics}
    </div>
    <div className={styles.projectTech}>
      {tech.map(t => <span key={t} className={styles.techDot}>{t}</span>)}
    </div>
  </div>
);

const ProjectsSection = ({ projects = [] as Project[] }) => {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.sectionTitle}>{PROJECTS.title}</h2>
      <p className={styles.sectionSubtitle}>{PROJECTS.subtitle}</p>
      
      <div className={styles.projectsGrid}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
