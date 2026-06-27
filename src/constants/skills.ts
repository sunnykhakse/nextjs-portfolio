export const SKILLS_DATA: Record<string, string[]> = {
  frontend: ['React.js', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'jQuery', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel', 'Magento', 'Microservices'],
  database: ['MySQL', 'MongoDB'],
  tools: ['NPM', 'Git', 'Jira', 'Confluence', 'Docker', 'Jenkins', 'SonarQube']
};

export const SKILL_CATEGORIES = Object.keys(SKILLS_DATA);

export default SKILLS_DATA;
