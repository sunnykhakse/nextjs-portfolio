import { getContent, type Locale } from './content';

export type ContactLink = {
  label: string;
  href: string;
  type?: 'primary' | 'social';
  target?: string;
};

export const getNavLinks = (locale: Locale = 'en') => {
  const { nav } = getContent(locale);

  return [
    { label: nav.about, href: '#about' },
    { label: nav.skills, href: '#skills' },
    { label: nav.projects, href: '#projects' },
    { label: nav.experience, href: '#experience' }
  ] as const;
};

export const getContactLinks = (locale: Locale = 'en'): ContactLink[] => {
  const { contactLinks } = getContent(locale);

  return [
    { label: contactLinks.email, href: 'mailto:khakse.sunny@gmail.com', type: 'primary' },
    { label: contactLinks.whatsapp, href: 'https://wa.me/918446212878', type: 'social', target: '_blank' },
    { label: contactLinks.linkedIn, href: 'https://linkedin.com', type: 'social', target: '_blank' }
  ];
};

export const NAV_LINKS = getNavLinks('en');
export const CONTACT_LINKS = getContactLinks('en');

export default NAV_LINKS;
