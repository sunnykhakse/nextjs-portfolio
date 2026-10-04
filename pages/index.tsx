import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { GetStaticProps } from 'next';
import { useMemo, useState } from 'react';

// Components
import styles from '../styles/Home.module.css';

const Navbar = dynamic(() => import('../src/components/Navbar'), { ssr: true });
const BackgroundGlow = dynamic(() => import('../src/components/BackgroundGlow'), {
  ssr: true,
  loading: () => null
});
const HeroSection = dynamic(() => import('../src/components/HeroSection'), { ssr: true });
const PhilosophySection = dynamic(() => import('../src/components/PhilosophySection'), { ssr: true });
const ServicesSection = dynamic(() => import('../src/components/ServicesSection'), { ssr: true });
const SkillsSection = dynamic(() => import('../src/components/SkillsSection'), { ssr: true });
const ProjectsSection = dynamic(() => import('../src/components/ProjectsSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: 240 }} />
});
const ExperienceSection = dynamic(() => import('../src/components/ExperienceSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: 220 }} />
});
const ContactSection = dynamic(() => import('../src/components/ContactSection'), {
  ssr: true,
  loading: () => <div style={{ minHeight: 220 }} />
});
const Footer = dynamic(() => import('../src/components/Footer'), { ssr: true });

// Hooks
import { useTheme, useScrolled } from '../src/hooks';

// Constants
import { getContent, type Locale } from '../src/constants/content';
import { getProjectsData, getEmploymentData } from '../src/lib/dataLoader';

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
  const [locale, setLocale] = useState<Locale>('en');
  const { isDark, toggleTheme, isLoaded } = useTheme();
  const scrolled = useScrolled();

  const content = useMemo(() => getContent(locale), [locale]);
  const localizedProjects = useMemo(() => getProjectsData(locale, projects), [locale, projects]);
  const localizedExperience = useMemo(() => getEmploymentData(locale, experience), [locale, experience]);
  const baseUrl = useMemo(() => content.profile.siteUrl.replace(/\/$/, ''), [content.profile.siteUrl]);
  const alternateUrls = useMemo(
    () => ({
      en: `${baseUrl}/?lang=en`,
      hi: `${baseUrl}/?lang=hi`,
      ar: `${baseUrl}/?lang=ar`,
      fr: `${baseUrl}/?lang=fr`
    } as const),
    [baseUrl]
  );

  // Prevent hydration mismatch by not rendering until client is ready
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{content.profile.pageTitle}</title>
        <meta name="description" content={content.profile.metaDescription} />
        <meta name="keywords" content={content.profile.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={content.profile.name} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={content.profile.name} />
        <meta property="og:title" content={content.profile.pageTitle} />
        <meta property="og:description" content={content.profile.metaDescription} />
        <meta property="og:image" content={content.profile.image} />
        <meta property="og:url" content={alternateUrls.en} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_AE' : locale === 'hi' ? 'hi_IN' : locale === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.profile.pageTitle} />
        <meta name="twitter:description" content={content.profile.metaDescription} />
        <meta name="twitter:image" content={content.profile.image} />
        <link rel="canonical" href={alternateUrls[locale]} />
        <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
        <link rel="alternate" hrefLang="en" href={alternateUrls.en} />
        <link rel="alternate" hrefLang="hi" href={alternateUrls.hi} />
        <link rel="alternate" hrefLang="ar" href={alternateUrls.ar} />
        <link rel="alternate" hrefLang="fr" href={alternateUrls.fr} />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${content.profile.name}",
            "jobTitle": "${content.profile.title}",
            "description": "${content.profile.metaDescription}",
            "keywords": "${content.profile.keywords}",
            "url": "${alternateUrls.en}",
            "sameAs": [
              "https://www.linkedin.com",
              "https://wa.me/918446212878"
            ],
            "knowsAbout": [
              "Engineering Leadership",
              "Full Stack Engineering",
              "Architecture",
              "FinTech",
              "SaaS",
              "React",
              "Node.js",
              "TypeScript"
            ],
            "areaServed": ["Dubai", "Abu Dhabi", "India", "Europe"]
          }`}
        </script>
      </Head>

      <BackgroundGlow />
      <Navbar
        scrolled={scrolled}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        locale={locale}
        onChangeLocale={setLocale}
      />

      <main className={styles.container} dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale}>
        <HeroSection locale={locale} />
        <PhilosophySection locale={locale} />
        <ServicesSection locale={locale} />
        <SkillsSection locale={locale} />
        <ProjectsSection locale={locale} projects={localizedProjects} />
        <ExperienceSection locale={locale} experience={localizedExperience} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
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
