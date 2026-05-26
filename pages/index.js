import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import projectsData from '../data/projects.json'
import employmentData from '../data/employment.json'

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState('frontend');
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Apply theme whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillsData = {
    frontend: ['React.js', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'jQuery', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel', 'Magento', 'Microservices'],
    database: ['MySQL', 'MongoDB'],
    tools: ['NPM', 'Git', 'Jira', 'Confluence', 'Docker', 'Jenkins', 'SonarQube']
  };

  const projects = projectsData;
  const experienceList = employmentData;

  return (
    <div className={styles.main}>
      <Head>
        <title>Snehal Khakse | Lead Full Stack Engineer</title>
        <meta name="description" content="Portfolio of Snehal Khakse, Lead Full Stack Engineer with 15+ years of experience." />
      </Head>

      {/* Ambient Orbs */}
      <div className={styles.bgGlow}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      {/* Sticky Navbar */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>SK.</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          <div className={styles.navRight}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                /* Sun icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <a href="#contact" className={styles.navBtn}>Hire Me</a>
          </div>
        </div>
      </nav>

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <div className={styles.pulse}></div>
              Actively seeking Senior Tech Roles in Dubai / Abu Dhabi
            </div>
            <h1 className={styles.title}>
              Architecting <br/>
              <span className={styles.gradientText}>Enterprise-Grade</span> Systems.
            </h1>
            <p className={styles.subtitle}>
              I'm <b>Snehal Khakse</b>, a Lead / Senior Full Stack Engineer. With over 15 years of experience delivering scalable, secure applications across FinTech, SaaS, Retail, and Logistics domains.
            </p>
            <div className={styles.heroCta}>
              <a href="#projects" className={styles.primaryBtn}>Explore My Work</a>
              <a href="#experience" className={styles.secondaryBtn}>View Timeline</a>
            </div>
          </div>
          
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageDecoration}></div>
            <Image 
              src="/headshot.png" 
              alt="Snehal Khakse" 
              width={500} 
              height={600} 
              priority
              className={styles.heroImage}
            />
          </div>
        </section>

        {/* Philosophy / About */}
        <section className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>Engineering Philosophy</h2>
          <p className={styles.sectionSubtitle}>My approach to building software and leading teams over the last 15+ years.</p>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <div className={styles.iconWrapper}>🏗️</div>
              <h3>Scalable Architecture</h3>
              <p>Deep expertise in microservices and cloud platforms. Proven track record designing systems meant to handle high traffic and complex workflows.</p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.iconWrapper}>⚡</div>
              <h3>Quality First (TDD/BDD)</h3>
              <p>Committed to high-quality code. I actively reform unit testing with TDD/BDD, use SonarQube, and mandate structured PR reviews to minimize technical debt.</p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.iconWrapper}>🤝</div>
              <h3>Agile Team Leadership</h3>
              <p>Experienced in leading engineering teams (up to 12 members). I manage end-to-end delivery via Agile/Scrum, bridging the gap between business and tech.</p>
            </div>
          </div>
        </section>

        {/* Interactive Skills Section */}
        <section className={styles.section} id="skills">
          <div className={styles.skillsContainer}>
            <div className={styles.skillsInfo}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Technical Skills</h2>
              <p className={styles.sectionSubtitle} style={{ textAlign: 'left', marginBottom: '32px' }}>
                A breakdown of the technologies, tools, and databases I utilize in my day-to-day architecture.
              </p>
              
              <div className={styles.tabsContainer}>
                {Object.keys(skillsData).map(key => (
                  <button 
                    key={key} 
                    className={`${styles.tabBtn} ${activeSkillTab === key ? styles.activeTab : ''}`}
                    onClick={() => setActiveSkillTab(key)}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.skillsDisplay}>
              <div className={styles.skillsGlass}>
                <div className={styles.skillListInteractive}>
                  {(skillsData[activeSkillTab] || skillsData.frontend).map((skill, idx) => (
                    <span key={`${activeSkillTab}-${idx}`} className={styles.skillTagLarge} style={{ animationDelay: `${idx * 0.05}s` }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className={styles.section} id="projects">
          <h2 className={styles.sectionTitle}>Key Projects</h2>
          <p className={styles.sectionSubtitle}>A selection of enterprise platforms and applications I've developed.</p>
          
          <div className={styles.projectsGrid}>
            {projects.map((proj, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectRole}>{proj.role}</span>
                </div>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>
                <div className={styles.projectMetrics}>
                  <strong>Impact:</strong> {proj.metrics}
                </div>
                <div className={styles.projectTech}>
                  {proj.tech.map(t => <span key={t} className={styles.techDot}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className={styles.section} id="experience">
          <div className={styles.expHeader}>
            <h2 className={styles.sectionTitle}>Employment Details</h2>
            <div className={styles.certBadge}>
              🎓 Bachelor of Engineering (E&T) — Amravati University (2007)
            </div>
          </div>
          
          <div className={styles.timeline}>
            {experienceList.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDate}>{exp.period}</div>
                  <h3 className={styles.timelineRole}>{exp.role}</h3>
                  <div className={styles.timelineCompany}>{exp.company}</div>
                  <ul className={styles.timelineList}>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className={styles.section} id="contact">
          <div className={styles.contactGlass}>
            <div className={styles.contactContent}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Let's Build Together</h2>
              <p className={styles.sectionSubtitle} style={{ marginBottom: '32px', maxWidth: '100%' }}>
                I am actively seeking senior technical roles in Dubai or Abu Dhabi. Let's discuss how my 15+ years of experience can drive your projects forward.
              </p>
              <div className={styles.contactLinks}>
                <a href="mailto:khakse.sunny@gmail.com" className={styles.primaryBtn}>Email Me</a>
                <a href="https://wa.me/918446212878" target="_blank" rel="noreferrer" className={styles.socialBtn}>WhatsApp</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialBtn}>LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logo} style={{fontSize: '1.2rem'}} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>SK.</div>
            <p>© {new Date().getFullYear()} Snehal Khakse. Designed & Built with Next.js.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
