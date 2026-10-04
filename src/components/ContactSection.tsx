import styles from '../../styles/Home.module.css';
import { getContent, type Locale } from '../constants/content';
import { getContactLinks, ContactLink } from '../constants/navigation';
import type { ReactElement } from 'react';

type ContactSectionProps = {
  locale?: Locale;
};

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

const ContactSection = ({ locale = 'en' }: ContactSectionProps): ReactElement => {
  const content = getContent(locale);
  const contactLinks = getContactLinks(locale);

  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactGlass}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>
            {content.contact.title}
          </h2>
          <p className={styles.sectionSubtitle} style={{ marginBottom: '32px', maxWidth: '100%' }}>
            {content.contact.subtitle}
          </p>
          <div className={styles.contactLinks}>
            {contactLinks.map((link, idx) => (
              <ContactLinkEl key={idx} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
