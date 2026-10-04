export const SKILLS_DATA: Record<string, string[]> = {
  frontend: ['React.js', 'Redux', 'Next.js', 'JavaScript', 'TypeScript', 'jQuery', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express', 'NestJS', 'PHP', 'Laravel', 'Magento', 'Microservices'],
  database: ['MySQL', 'MongoDB'],
  tools: ['NPM', 'Git', 'Jira', 'Confluence', 'Docker', 'Jenkins', 'SonarQube']
};

export const SKILL_CATEGORY_LABELS: Record<string, Record<string, string>> = {
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools'
  },
  hi: {
    frontend: 'फ्रंटएंड',
    backend: 'बेकएंड',
    database: 'डेटाबेस',
    tools: 'टूल्स'
  },
  ar: {
    frontend: 'الواجهة الأمامية',
    backend: 'الخلفية',
    database: 'قاعدة البيانات',
    tools: 'الأدوات'
  },
  fr: {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de données',
    tools: 'Outils'
  }
};

export const SKILL_CATEGORY_DESCRIPTIONS: Record<string, Record<string, string>> = {
  en: {
    frontend: 'Designing responsive product experiences, reusable components, and clean UI architecture.',
    backend: 'Building APIs, service layers, and secure business logic that scales with product growth.',
    database: 'Structuring reliable data models, queries, and persistence choices for performance and clarity.',
    tools: 'Using delivery, quality, and team workflow tools to ship faster with confidence.'
  },
  hi: {
    frontend: 'रिस्पॉन्सिव यूज़र एक्सपीरियंस, रीयूज़ेबल कॉम्पोनेंट और साफ़ UI आर्किटेक्चर बनाना।',
    backend: 'एपीआई, सर्विस लेयर और सुरक्षित बिज़नेस लॉजिक बनाना जो प्रोडक्ट के विकास के साथ स्केल करे।',
    database: 'परफॉर्मेंस और स्पष्टता के लिए डेटा मॉडल, क्वेरी और स्टोरेज डिज़ाइन तैयार करना।',
    tools: 'सुगम डिलीवरी, गुणवत्ता नियंत्रण और टीम वर्कफ़्लो के लिए टूल्स का उपयोग।'
  },
  ar: {
    frontend: 'تصميم تجارب منتجات متجاوبة، ومكونات قابلة لإعادة الاستخدام، وبنية واجهة نظيفة.',
    backend: 'بناء واجهات برمجة التطبيقات، طبقات الخدمات، ومنطق أعمال آمن وقابل للتوسع.',
    database: 'هيكلة نماذج بيانات، واستعلامات، وقرارات التخزين لتحقيق الأداء والوضوح.',
    tools: 'استخدام أدوات التوصيل والجودة وسير العمل لضمان تسليم موثوق وسريع.'
  },
  fr: {
    frontend: 'Concevoir des expériences produit réactives, des composants réutilisables et une architecture UI claire.',
    backend: 'Construire des API, des services et une logique métier sécurisée qui grandit avec le produit.',
    database: 'Structurer les modèles de données et les requêtes pour des performances fiables et une meilleure clarté.',
    tools: 'Utiliser des outils de livraison, qualité et collaboration pour livrer avec confiance.'
  }
};

export const SKILL_CATEGORIES = Object.keys(SKILLS_DATA);

export const getSkillCategoryLabel = (category: string, locale: string = 'en') =>
  SKILL_CATEGORY_LABELS[locale]?.[category] ?? SKILL_CATEGORY_LABELS.en[category] ?? category;

export const getSkillCategoryDescription = (category: string, locale: string = 'en') =>
  SKILL_CATEGORY_DESCRIPTIONS[locale]?.[category] ?? SKILL_CATEGORY_DESCRIPTIONS.en[category] ?? '';

export default SKILLS_DATA;
