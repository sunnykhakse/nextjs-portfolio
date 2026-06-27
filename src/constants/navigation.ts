export type ContactLink = {
  label: string;
  href: string;
  type?: 'primary' | 'social';
  target?: string;
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' }
] as const;

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email Me', href: 'mailto:khakse.sunny@gmail.com', type: 'primary' },
  { label: 'WhatsApp', href: 'https://wa.me/918446212878', type: 'social', target: '_blank' },
  { label: 'LinkedIn', href: 'https://linkedin.com', type: 'social', target: '_blank' }
];

export default NAV_LINKS;
