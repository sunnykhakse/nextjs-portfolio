import styles from '../../styles/Home.module.css';
import { NAV_LINKS } from '../constants/navigation';

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  const title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      className={styles.themeToggle}
      onClick={onToggle}
      aria-label="Toggle dark/light mode"
      title={title}
    >
      {isDark ? (
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
};

type NavbarProps = {
  scrolled?: boolean;
  isDark?: boolean;
  onToggleTheme?: () => void;
};

const Navbar = ({ scrolled = false, isDark = true, onToggleTheme = () => {} }: NavbarProps) => {
  const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={handleLogoClick} role="button" tabIndex={0}>SK</div>
        <div className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className={styles.navRight}>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a href="#contact" className={styles.navBtn}>Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
