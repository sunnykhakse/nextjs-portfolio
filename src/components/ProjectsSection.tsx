import styles from '../../styles/Home.module.css';
import { getContent, type Locale, type Project } from '../constants/content';

type ProjectCardProps = Project;

type ProjectsSectionProps = {
  locale?: Locale;
  projects?: Project[];
};

const TECHNOLOGY_DETAILS: Record<string, string> = {
  'Next.js': 'Production-ready React framework for server-rendered and scalable web apps.',
  'React.js': 'Component-based UI library for building interactive interfaces.',
  'TypeScript': 'Strongly typed JavaScript for safer and more maintainable apps.',
  'Material UI': 'Design system and component library for polished enterprise interfaces.',
  'Laravel': 'PHP framework for robust backend APIs and business logic.',
  'Node.js': 'JavaScript runtime for fast backend and API development.',
  'Express': 'Minimal backend framework for building web services and APIs.',
  'MySQL': 'Relational database for structured and efficient data storage.',
  'Redux': 'State management pattern for predictable application data flow.',
  'Bootstrap 5': 'Responsive CSS framework for fast UI development.',
  'Vue.js': 'Progressive JavaScript framework for interactive interfaces.',
  'Angular': 'Full-featured framework for structured enterprise web applications.',
  'Codeigniter': 'Lightweight PHP framework for high-performance web applications.',
  'HTML': 'Markup language for web page structure.',
  'CSS': 'Styling language for layout, colors, and responsive design.',
  'jQuery': 'JavaScript library for DOM manipulation and simpler client-side scripting.',
  'PHP': 'Server-side scripting language for dynamic web applications.',
  'JavaScript': 'Core language for client-side interactivity and modern web apps.',
  'MongoDB': 'Flexible document database for scalable and schema-less data.',
  'Git': 'Version control system for tracking code changes.',
  'Docker': 'Container platform for consistent app deployment environments.',
  'Jenkins': 'Automation server for CI/CD pipelines and deployment workflows.',
  'SonarQube': 'Static code analysis tool for quality and security checks.',
  'Magento': 'Commerce platform for scalable e-commerce solutions.',
  'NestJS': 'Structured TypeScript framework for scalable backend services.'
};

const ProjectCard = ({ role, title, description, metrics, tech, impactLabel }: ProjectCardProps & { impactLabel?: string }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectHeader}>
      <span className={styles.projectRole}>{role}</span>
    </div>
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectDesc}>{description}</p>
    <div className={styles.projectMetrics}>
      <strong>{impactLabel ?? 'Impact:'}</strong> {metrics}
    </div>
    <div className={styles.projectTech}>
      {tech.map(t => (
        <span
          key={t}
          className={styles.techDot}
          data-tooltip={TECHNOLOGY_DETAILS[t] ?? t}
          title={TECHNOLOGY_DETAILS[t] ?? t}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = ({ locale = 'en', projects = [] as Project[] }: ProjectsSectionProps) => {
  const content = getContent(locale);

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.sectionTitle}>{content.projects.title}</h2>
      <p className={styles.sectionSubtitle}>{content.projects.subtitle}</p>
      
      <div className={styles.projectsGrid}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} impactLabel={content.projects.impactLabel} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
