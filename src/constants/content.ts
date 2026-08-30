/**
 * Static content configuration (TypeScript)
 * Centralizes all static text content
 */
export const PROFILE = {
  name: 'Snehal Khakse',
  title: 'Lead Full Stack Engineer & Engineering Leader',
  experience: '15+',
  pageTitle: 'Snehal Khakse | Engineering Leader & Lead Full Stack Engineer',
  metaDescription: 'Snehal Khakse is an engineering leader with 15+ years guiding teams, shaping architecture, and delivering secure platforms for FinTech, SaaS, retail, and logistics.',
  keywords: 'Engineering Leader, Technical Leadership, Lead Full Stack Engineer, Engineering Manager, Team Leadership, Architecture, FinTech, SaaS, React, Node.js, TypeScript',
  // Update to your production domain when available
  siteUrl: 'https://your-domain.example',
  image: '/og-image.png'
} as const;

export const HERO = {
  titleMain: 'Leading Teams.',
  titleHighlight: 'Building Systems',
  titleEnd: 'That Matter.',
  subtitle: `I'm <b>Snehal Khakse</b>, an engineering leader who connects people, product, and technology. For 15+ years, I've helped teams ship secure, scalable platforms across FinTech, SaaS, retail, and logistics.`,
  cta1: 'See Leadership Impact',
  cta1Link: '#projects',
  cta2: 'View Timeline',
  cta2Link: '#experience'
} as const;

export const ABOUT = {
  title: 'How I Lead Engineering',
  subtitle: 'I create clarity for teams, make architecture practical, and turn complex delivery into measurable progress.',
  cards: [
    {
      icon: '🏗️',
      title: 'Direction With Context',
      description: 'I translate product goals into clear technical direction, helping teams balance scale, speed, security, and maintainability.'
    },
    {
      icon: '⚡',
      title: 'Quality as a Team Habit',
      description: 'I build quality into the way teams work through TDD and BDD, automated checks, SonarQube, and structured reviews that make ownership visible.'
    },
    {
      icon: '🤝',
      title: 'Teams That Grow',
      description: 'I lead teams of up to 12 engineers through planning, feedback, mentoring, and delivery rituals that build confidence and capability.'
    }
  ]
} as const;

export const SKILLS = {
  title: 'Technical Skills',
  subtitle: 'The tools and practices I use to guide decisions, unblock teams, and turn architecture into reliable delivery.'
} as const;

export const PROJECTS = {
  title: 'Key Projects',
  subtitle: 'Selected platforms where technical direction, team leadership, and hands-on delivery created measurable product impact.'
} as const;

export const EXPERIENCE = {
  title: 'Employment Details',
  subtitle: 'From hands-on development to leading teams of 12, my career has grown around a simple goal: create clarity, strengthen people, and deliver dependable software.',
  education: '🎓 Bachelor of Engineering (E&T) — Amravati University (2007)'
} as const;

export const CONTACT = {
  title: 'Build a Stronger Engineering Team',
  subtitle: "I am actively seeking senior technical leadership roles in Dubai or Abu Dhabi. Let's discuss how I can help your teams make better decisions, deliver with confidence, and grow sustainably."
} as const;

export const SERVICES = {
  title: 'Leadership in Practice',
  subtitle: 'I help engineering teams align around outcomes, make sound technical decisions, and deliver end-to-end with confidence.',
  items: [
    {
      title: 'Technical Direction',
      description: 'Set an architecture vision, make trade-offs explicit, and guide resilient systems from discovery through production.'
    },
    {
      title: 'Hands-On Delivery',
      description: 'Stay close enough to the code to remove blockers, model good decisions, and keep delivery grounded in user value.'
    },
    {
      title: 'Delivery Systems',
      description: 'Create dependable CI/CD, infrastructure, and observability practices that give teams faster feedback and safer releases.'
    },
    {
      title: 'Team Growth',
      description: 'Mentor engineers, establish healthy delivery rituals, and build high-performing teams that communicate clearly and measure impact.'
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
