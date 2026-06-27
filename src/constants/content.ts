/**
 * Static content configuration (TypeScript)
 * Centralizes all static text content
 */
export const PROFILE = {
  name: 'Snehal Khakse',
  title: 'Lead Full Stack Engineer',
  experience: '15+',
  pageTitle: 'Snehal Khakse | Lead Full Stack Engineer',
  metaDescription: 'Portfolio of Snehal Khakse — Lead Full Stack Engineer with 15+ years building scalable, secure web and cloud platforms for FinTech, SaaS, and Logistics.',
  keywords: 'Lead Full Stack Engineer, Senior Software Engineer, Microservices, Cloud Architecture, FinTech, SaaS, React, Node.js, TypeScript, DevOps',
  // Update to your production domain when available
  siteUrl: 'https://your-domain.example',
  image: '/og-image.png'
} as const;

export const HERO = {
  titleMain: 'Architecting',
  titleHighlight: 'Enterprise-Grade',
  titleEnd: 'Systems.',
  subtitle: `I'm <b>Snehal Khakse</b>, a Lead / Senior Full Stack Engineer. With over 15 years of experience delivering scalable, secure applications across FinTech, SaaS, Retail, and Logistics domains.`,
  cta1: 'Explore My Work',
  cta1Link: '#projects',
  cta2: 'View Timeline',
  cta2Link: '#experience'
} as const;

export const ABOUT = {
  title: 'Engineering Philosophy',
  subtitle: 'My approach to building software and leading teams over the last 15+ years.',
  cards: [
    {
      icon: '🏗️',
      title: 'Scalable Architecture',
      description: 'Deep expertise in microservices and cloud platforms. Proven track record designing systems meant to handle high traffic and complex workflows.'
    },
    {
      icon: '⚡',
      title: 'Quality First (TDD/BDD)',
      description: 'Committed to high-quality code. I actively reform unit testing with TDD/BDD, use SonarQube, and mandate structured PR reviews to minimize technical debt.'
    },
    {
      icon: '🤝',
      title: 'Agile Team Leadership',
      description: 'Experienced in leading engineering teams (up to 12 members). I manage end-to-end delivery via Agile/Scrum, bridging the gap between business and tech.'
    }
  ]
} as const;

export const SKILLS = {
  title: 'Technical Skills',
  subtitle: 'A breakdown of the technologies, tools, and databases I utilize in my day-to-day architecture.'
} as const;

export const PROJECTS = {
  title: 'Key Projects',
  subtitle: "A selection of enterprise platforms and applications I've developed."
} as const;

export const EXPERIENCE = {
  title: 'Employment Details',
  education: '🎓 Bachelor of Engineering (E&T) — Amravati University (2007)'
} as const;

export const CONTACT = {
  title: "Let's Build Together",
  subtitle: "I am actively seeking senior technical roles in Dubai or Abu Dhabi. Let's discuss how my 15+ years of experience can drive your projects forward."
} as const;

export const SERVICES = {
  title: 'What I Do',
  subtitle: 'Engineering leadership, system design and full-cycle product delivery for teams and startups.',
  items: [
    {
      title: 'Architecture & Design',
      description: 'Design resilient microservices, event-driven systems, and scalable data architectures that support high availability and maintainability.'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end delivery using modern stacks (React, Next.js, Node.js, TypeScript). Focus on performance, accessibility, and developer ergonomics.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'CI/CD, IaC (Terraform), and cloud migrations across AWS and Azure with emphasis on cost, security, and observability.'
    },
    {
      title: 'Team Leadership',
      description: 'Mentoring, hiring, and building high-performing engineering teams that ship reliably and measure impact.'
    }
  ]
} as const;

export const FOOTER = {
  copyright: `© {year} Snehal Khakse. Designed & Built with Next.js.`
} as const;

export type Project = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  metrics?: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  details: string[];
};

export type PortfolioData = {
  projects: Project[];
  experience: Experience[];
};
