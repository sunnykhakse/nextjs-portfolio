import Head from 'next/head';
import type { GetStaticProps } from 'next';

// Components
import Navbar from '../src/components/Navbar';
import BackgroundGlow from '../src/components/BackgroundGlow';
import HeroSection from '../src/components/HeroSection';
import PhilosophySection from '../src/components/PhilosophySection';
import ServicesSection from '../src/components/ServicesSection';
import SkillsSection from '../src/components/SkillsSection';
import ProjectsSection from '../src/components/ProjectsSection';
import ExperienceSection from '../src/components/ExperienceSection';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import styles from '../styles/Home.module.css';

// Hooks
import { useTheme, useScrolled } from '../src/hooks';

// Constants
import { PROFILE } from '../src/constants/content';

interface HomeProps {
  projects: any[];
  experience: any[];
}

/**
 * Home - Main page component
 * Follows SRP: Only composes and orchestrates components
 * Follows OCP: Easy to add/remove sections without modifying page logic
 */
export default function Home({ projects = [], experience = [] }: HomeProps) {
  const { isDark, toggleTheme, isLoaded } = useTheme();
  const scrolled = useScrolled();

  // Prevent hydration mismatch by not rendering until client is ready
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{PROFILE.pageTitle}</title>
        <meta name="description" content={PROFILE.metaDescription} />
        <meta name="keywords" content={(PROFILE as any).keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PROFILE.pageTitle} />
        <meta property="og:description" content={PROFILE.metaDescription} />
        <meta property="og:image" content={(PROFILE as any).image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PROFILE.pageTitle} />
        <meta name="twitter:description" content={PROFILE.metaDescription} />
        <meta name="twitter:image" content={(PROFILE as any).image} />
        <link rel="canonical" href={(PROFILE as any).siteUrl} />

        {/* Structured Data: Person */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${PROFILE.name}",
            "jobTitle": "${PROFILE.title}",
            "description": "${PROFILE.metaDescription}",
            "keywords": "${(PROFILE as any).keywords}"
          }`}
        </script>
      </Head>

      <BackgroundGlow />
      <Navbar scrolled={scrolled} isDark={isDark} onToggleTheme={toggleTheme} />

      <main className={styles.container}>
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

/**
 * getStaticProps - Load data at build time
 * Following ISP: Only loads needed data
 * Following DIP: Uses data loader interface
 */
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { loadPortfolioData } = await import('../src/lib/dataLoader');
  const { projects, experience } = loadPortfolioData();

  return {
    props: {
      projects,
      experience
    },
    revalidate: 3600 // ISR: Revalidate every hour
  };
};
