import projectsData from '../../data/projects.json';
import employmentData from '../../data/employment.json';
import type { PortfolioData, Project, Experience } from '../constants/content';

export const getProjectsData = (): Project[] => projectsData as Project[];
export const getEmploymentData = (): Experience[] => employmentData as Experience[];

export const loadPortfolioData = (): PortfolioData => ({
  projects: getProjectsData(),
  experience: getEmploymentData()
});

export type { PortfolioData, Project, Experience };
