import styles from '../../styles/Home.module.css';
import { CONTACT } from '../constants/content';
import { CONTACT_LINKS, ContactLink } from '../constants/navigation';
import type { ReactElement } from 'react';

const ContactLinkEl = ({ label, href, type = 'primary', target = '' }: ContactLink) => {
  const className = type === 'primary' ? styles.primaryBtn : styles.socialBtn;
  const rel = target ? 'noreferrer' : undefined;

  return (
    <a 
      href={href} 
      className={className}
      target={target}
      rel={rel}
    >
      {label}
    </a>
  );
};

const ContactSection = (): ReactElement => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactGlass}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>
            {CONTACT.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ marginBottom: '32px', maxWidth: '100%' }}>
            {CONTACT.subtitle}
          </p>
          <div className={styles.contactLinks}>
            {CONTACT_LINKS.map((link, idx) => (
              <ContactLinkEl key={idx} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
