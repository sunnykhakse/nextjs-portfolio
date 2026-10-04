/**
 * Static content configuration (TypeScript)
 * Centralizes all static text content and supports multiple locales.
 */
export const LOCALES = ['en', 'hi', 'ar', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_OPTIONS: { value: Locale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'ar', label: 'العربية' },
  { value: 'fr', label: 'Français' }
];

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

export type ContentSet = {
  profile: {
    name: string;
    title: string;
    experience: string;
    pageTitle: string;
    metaDescription: string;
    keywords: string;
    siteUrl: string;
    image: string;
  };
  hero: {
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    cta1: string;
    cta1Link: string;
    cta2: string;
    cta2Link: string;
  };
  about: {
    title: string;
    subtitle: string;
    cards: Array<{ icon: string; title: string; description: string }>;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    impactLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    education: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };
  footer: {
    copyright: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    hireMe: string;
  };
  theme: {
    light: string;
    dark: string;
  };
  contactLinks: {
    email: string;
    whatsapp: string;
    linkedIn: string;
  };
};

export const CONTENT_BY_LOCALE: Record<Locale, ContentSet> = {
  en: {
    profile: {
      name: 'Snehal Khakse',
      title: 'Lead Full Stack Engineer & Engineering Leader',
      experience: '15+',
      pageTitle: 'Snehal Khakse | Engineering Leader & Lead Full Stack Engineer',
      metaDescription: 'Snehal Khakse is an engineering leader with 15+ years guiding teams, shaping architecture, and delivering secure platforms for FinTech, SaaS, retail, and logistics.',
      keywords: 'Engineering Leader, Technical Leadership, Lead Full Stack Engineer, Engineering Manager, Team Leadership, Architecture, FinTech, SaaS, React, Node.js, TypeScript',
      siteUrl: 'https://your-domain.example',
      image: '/og-image.png'
    },
    hero: {
      titleMain: 'Leading Teams.',
      titleHighlight: 'Building Systems',
      titleEnd: 'That Matter.',
      subtitle: `I'm <b>Snehal Khakse</b>, an engineering leader who connects people, product, and technology. For 15+ years, I've helped teams ship secure, scalable platforms across FinTech, SaaS, retail, and logistics.`,
      cta1: 'See Leadership Impact',
      cta1Link: '#projects',
      cta2: 'View Timeline',
      cta2Link: '#experience'
    },
    about: {
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
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'The tools and practices I use to guide decisions, unblock teams, and turn architecture into reliable delivery.'
    },
    projects: {
      title: 'Key Projects',
      subtitle: 'Selected platforms where technical direction, team leadership, and hands-on delivery created measurable product impact.',
      impactLabel: 'Impact:'
    },
    experience: {
      title: 'Employment Details',
      subtitle: 'From hands-on development to leading teams of 12, my career has grown around a simple goal: create clarity, strengthen people, and deliver dependable software.',
      education: '🎓 Bachelor of Engineering (E&T) — Amravati University (2007)'
    },
    contact: {
      title: 'Build a Stronger Engineering Team',
      subtitle: "I am actively seeking senior technical leadership roles in Dubai or Abu Dhabi. Let's discuss how I can help your teams make better decisions, deliver with confidence, and grow sustainably."
    },
    services: {
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
    },
    footer: {
      copyright: '© {year} Snehal Khakse. Designed & Built with Next.js.'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      hireMe: 'Hire Me'
    },
    theme: {
      light: 'Switch to Light Mode',
      dark: 'Switch to Dark Mode'
    },
    contactLinks: {
      email: 'Email Me',
      whatsapp: 'WhatsApp',
      linkedIn: 'LinkedIn'
    }
  },
  hi: {
    profile: {
      name: 'Snehal Khakse',
      title: 'लीड फुल स्टैक इंजीनियर और इंजीनियरिंग लीडर',
      experience: '15+',
      pageTitle: 'Snehal Khakse | इंजीनियरिंग लीडर और लीड फुल स्टैक इंजीनियर',
      metaDescription: 'Snehal Khakse 15+ वर्षों से टीमों का मार्गदर्शन, आर्किटेक्चर को आकार देने और फिनटेक, SaaS, रिटेल और लॉजिस्टिक्स में सुरक्षित प्लेटफ़ॉर्म तैयार करने में योगदान दे रहे हैं.',
      keywords: 'इंजीनियरिंग लीडर, टेक्निकल लीडरशिप, लीड फुल स्टैक इंजीनियर, इंजीनियरिंग मैनेजर, टीम लीडरशिप, आर्किटेक्चर, फिनटेक, SaaS, React, Node.js, TypeScript',
      siteUrl: 'https://your-domain.example',
      image: '/og-image.png'
    },
    hero: {
      titleMain: 'टीमों को मार्गदर्शित करें।',
      titleHighlight: 'सिस्टम बनाएं',
      titleEnd: 'जो मायने रखते हैं।',
      subtitle: "मैं <b>Snehal Khakse</b> हूँ, एक इंजीनियरिंग लीडर जो लोगों, प्रोडक्ट और टेक्नोलॉजी को जोड़ता है। 15+ वर्षों से मैंने टीमों को फिनटेक, SaaS, रिटेल और लॉजिस्टिक्स में सुरक्षित, स्केलेबल प्लेटफ़ॉर्म देने में मदद की है।",
      cta1: 'लीडरशिप प्रभाव देखें',
      cta1Link: '#projects',
      cta2: 'टाइमलाइन देखें',
      cta2Link: '#experience'
    },
    about: {
      title: 'मैं इंजीनियरिंग को कैसे चलाता हूँ',
      subtitle: 'मैं टीमों के लिए स्पष्टता बनाता हूँ, आर्किटेक्चर को व्यवहारिक बनाता हूँ और जटिल डिलीवरी को मापने योग्य प्रगति में बदलता हूँ।',
      cards: [
        { icon: '🏗️', title: 'संदर्भ के साथ दिशा', description: 'मैं प्रोडक्ट लक्ष्यों को स्पष्ट तकनीकी दिशा में बदलता हूँ, ताकि टीमें स्केल, स्पीड, सुरक्षा और रखरखाव के बीच संतुलन बनाकर काम कर सकें।' },
        { icon: '⚡', title: 'टीम की आदत के रूप में गुणवत्ता', description: 'मैं TDD और BDD, ऑटोमेटेड चेक, SonarQube और संरचित रिव्यू के माध्यम से गुणवत्ता को टीम की कार्य पद्धति में शामिल करता हूँ।' },
        { icon: '🤝', title: 'विकसित होती टीमें', description: 'मैं 12 इंजीनियरों तक की टीमों को योजना, फीडबैक, मार्गदर्शन और डिलीवरी रिवाजों के साथ नेतृत्व करता हूँ।' }
      ]
    },
    skills: {
      title: 'तकनीकी कौशल',
      subtitle: 'वे टूल और प्रैक्टिस जो मैं निर्णय लेने, टीमों को सुगमता देने और आर्किटेक्चर को विश्वसनीय डिलीवरी में बदलने के लिए उपयोग करता हूँ।'
    },
    projects: {
      title: 'मुख्य परियोजनाएँ',
      subtitle: 'ऐसे चयनित प्लेटफ़ॉर्म जहाँ तकनीकी दिशा, टीम नेतृत्व और हाथों-हाथ डिलीवरी ने measurable प्रभाव पैदा किया।',
      impactLabel: 'प्रभाव:'
    },
    experience: {
      title: 'नौकरी का विवरण',
      subtitle: 'हैंड्स-ऑन विकास से लेकर 12 लोगों की टीमों का नेतृत्व करने तक, मेरी यात्रा का लक्ष्य सरल रहा है: स्पष्टता बनाना, लोगों को मजबूत बनाना और भरोसेमंद सॉफ़्टवेयर बनाना।',
      education: '🎓 बी.ई. (E&T) — अमरावती यूनिवर्सिटी (2007)'
    },
    contact: {
      title: 'एक मजबूत इंजीनियरिंग टीम बनाएं',
      subtitle: 'मैं वर्तमान में दुबई या अबु धाबी में वरिष्ठ तकनीकी नेतृत्व भूमिकाओं की तलाश में हूँ। आइए पता करें कि मैं आपकी टीमों को बेहतर निर्णय लेने, आत्मविश्वास से डिलीवर करने और स्थायी रूप से विकसित होने में कैसे मदद कर सकता हूँ।'
    },
    services: {
      title: 'प्रैक्टिस में नेतृत्व',
      subtitle: 'मैं इंजीनियरिंग टीमों को परिणामों के साथ जोड़ता हूँ, सही तकनीकी निर्णय लेने में मदद करता हूँ और आत्मविश्वास के साथ पूरा काम पूरा करता हूँ।',
      items: [
        { title: 'तकनीकी दिशा', description: 'आर्किटेक्चर विज़न बनाएं, ट्रेड-ऑफ़ को स्पष्ट करें और उत्पादन तक लचीली सिस्टम को निर्देशित करें।' },
        { title: 'हैंड्स-ऑन डिलीवरी', description: 'कोड के करीब रहें, बाधाओं को दूर करें और उपयोगकर्ता मूल्य के आधार पर डिलीवरी को सही रखें।' },
        { title: 'डिलीवरी सिस्टम', description: 'विश्वसनीय CI/CD, इंफ्रास्ट्रक्चर और ऑब्सर्वेबिलिटी पद्धतियाँ बनाएं जो टीमों को तेज़ फीडबैक और सुरक्षित रिलीज़ दें।' },
        { title: 'टीम विकास', description: 'इंजीनियरों को प्रोत्साहित करें, स्वस्थ डिलीवरी रिवाज स्थापित करें और प्रभावी टीमें बनाएं।' }
      ]
    },
    footer: {
      copyright: '© {year} Snehal Khakse. Next.js के साथ बनाया गया और डिज़ाइन किया गया।'
    },
    nav: {
      about: 'परिचय',
      skills: 'कौशल',
      projects: 'प्रोजेक्ट्स',
      experience: 'अनुभव',
      hireMe: 'नियुक्ति करें'
    },
    theme: {
      light: 'लाइट मोड पर जाएँ',
      dark: 'डार्क मोड पर जाएँ'
    },
    contactLinks: {
      email: 'ईमेल करें',
      whatsapp: 'व्हाट्सऐप',
      linkedIn: 'लिंक्डइन'
    }
  },
  ar: {
    profile: {
      name: 'Snehal Khakse',
      title: 'مهندس Full Stack رائد وقائد هندسة',
      experience: '15+',
      pageTitle: 'Snehal Khakse | قائد هندسة ومهندس Full Stack رائد',
      metaDescription: 'Snehal Khakse قائد هندسة بخبرة تزيد عن 15 عامًا في توجيه الفرق، وتصميم البنية، وتقديم منصات آمنة في FinTech وSaaS والتجزئة واللوجستيات.',
      keywords: 'قائد هندسة، قيادة فنية، مهندس Full Stack رائد، مدير هندسة، قيادة الفريق، البنية، FinTech، SaaS، React، Node.js، TypeScript',
      siteUrl: 'https://your-domain.example',
      image: '/og-image.png'
    },
    hero: {
      titleMain: 'قيادة الفرق.',
      titleHighlight: 'بناء الأنظمة',
      titleEnd: 'التي تهم.',
      subtitle: "أنا <b>Snehal Khakse</b>، قائد هندسة أربط بين الناس والمنتج والتكنولوجيا. وعلى مدار أكثر من 15 عامًا، ساعدت الفرق على إطلاق منصات آمنة وقابلة للتطوير عبر FinTech وSaaS والتجزئة واللوجستيات.",
      cta1: 'مشاهدة أثر القيادة',
      cta1Link: '#projects',
      cta2: 'عرض الخط الزمني',
      cta2Link: '#experience'
    },
    about: {
      title: 'كيف أؤدي القيادة الهندسية',
      subtitle: 'أُنشئ وضوحًا للفرق، وأجعل البنية التقنية عملية، وأحوّل التنفيذ المعقد إلى تقدم قابل للقياس.',
      cards: [
        { icon: '🏗️', title: 'التوجيه ضمن السياق', description: 'أترجم أهداف المنتج إلى اتجاه فني واضح يساعد الفرق على موازنة القابلية للتوسع والسرعة والأمان وقابلية الصيانة.' },
        { icon: '⚡', title: 'الجودة كعادة جماعية', description: 'أدمج الجودة في طريقة عمل الفريق عبر TDD وBDD والفحوصات الآلية وSonarQube ومراجعات منظمة تجعل الملكية واضحة.' },
        { icon: '🤝', title: 'فرق تنمو وتتطور', description: 'أقود فرقًا يصل حجمها إلى 12 مهندسًا من خلال التخطيط والتغذية الراجعة والإرشاد والروتينات العملية التي تبني الثقة والمهارة.' }
      ]
    },
    skills: {
      title: 'المهارات التقنية',
      subtitle: 'الأدوات والممارسات التي أستخدمها لتوجيه القرارات، وتخفيف تعثر الفرق، وتحويل البنية إلى تنفيذ موثوق.'
    },
    projects: {
      title: 'المشاريع الرئيسية',
      subtitle: 'منصات مختارة تم فيها توجيه التقنية وقيادة الفريق والتسليم العملي لإحداث تأثير قابل للقياس.',
      impactLabel: 'الأثر:'
    },
    experience: {
      title: 'تفاصيل التوظيف',
      subtitle: 'من التطوير العملي إلى قيادة فرق تصل إلى 12 شخصًا، نمت مسيرتي حول هدف بسيط: خلق الوضوح، وتقوية الناس، وتقديم برامج موثوقة.',
      education: '🎓 بكالوريوس هندسة (E&T) — جامعة أمرavati (2007)'
    },
    contact: {
      title: 'قم ببناء فريق هندسي أقوى',
      subtitle: 'أهتم حاليًا بمناصب قيادية تقنيةSenior في دبي أو أبو ظبي. دعنا نناقش كيف يمكنني مساعدتك في اتخاذ قرارات أفضل، وتسليم بثقة، والنمو بشكل مستدام.'
    },
    services: {
      title: 'القيادة في الممارسة',
      subtitle: 'أساعد فرق الهندسة على مواءمة النتائج، واتخاذ قرارات فنية سليمة، وتسليم العمل بكفاءة وثقة.',
      items: [
        { title: 'التوجيه التقني', description: 'وضع رؤية للبنية، وتوضيح المقايضات، وتوجيه الأنظمة المرنة من الاكتشاف وحتى الإنتاج.' },
        { title: 'التسليم العملي', description: 'البقاء قريبًا من الكود لإزالة العوائق ونمذجة قرارات جيدة والحفاظ على التسليم متجذرًا في قيمة المستخدم.' },
        { title: 'أنظمة التسليم', description: 'إنشاء CI/CD موثوق، وبنية تحتية، وممارسات مراقبة تمنح الفرق ردود فعل أسرع وإصدارات أكثر أمانًا.' },
        { title: 'نمو الفريق', description: 'توجيه المهندسين، وإنشاء روتينات تسليم صحية، وبناء فرق عالية الأداء تتواصل بوضوح وتقيس التأثير.' }
      ]
    },
    footer: {
      copyright: '© {year} Snehal Khakse. مصمم ومبني باستخدام Next.js.'
    },
    nav: {
      about: 'نبذة',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'التجربة',
      hireMe: 'وظفني'
    },
    theme: {
      light: 'التبديل إلى الوضع الفاتح',
      dark: 'التبديل إلى الوضع الداكن'
    },
    contactLinks: {
      email: 'راسلني',
      whatsapp: 'واتساب',
      linkedIn: 'لينكدإن'
    }
  },
  fr: {
    profile: {
      name: 'Snehal Khakse',
      title: 'Ingénieur Full Stack senior & leader technique',
      experience: '15+',
      pageTitle: 'Snehal Khakse | Leader technique & Ingénieur Full Stack senior',
      metaDescription: 'Snehal Khakse est un leader technique avec plus de 15 ans d’expérience dans l’accompagnement d’équipes, la conception d’architecture et la livraison de plateformes sécurisées pour FinTech, SaaS, retail et logistique.',
      keywords: 'Leader technique, leadership technique, Ingénieur Full Stack senior, gestion d’équipe, architecture, FinTech, SaaS, React, Node.js, TypeScript',
      siteUrl: 'https://your-domain.example',
      image: '/og-image.png'
    },
    hero: {
      titleMain: 'Diriger des équipes.',
      titleHighlight: 'Construire des systèmes',
      titleEnd: 'qui comptent.',
      subtitle: "Je suis <b>Snehal Khakse</b>, un leader technique qui relie les personnes, les produits et la technologie. Depuis plus de 15 ans, j’aide les équipes à livrer des plateformes sécurisées et évolutives dans le FinTech, le SaaS, la vente au détail et la logistique.",
      cta1: 'Voir l’impact du leadership',
      cta1Link: '#projects',
      cta2: 'Voir la chronologie',
      cta2Link: '#experience'
    },
    about: {
      title: 'Comment je dirige l’ingénierie',
      subtitle: 'Je crée de la clarté pour les équipes, rends l’architecture concrète et transforme la complexité de livraison en progrès mesurable.',
      cards: [
        { icon: '🏗️', title: 'Direction avec contexte', description: 'Je transforme les objectifs produit en direction technique claire, en aidant les équipes à équilibrer évolutivité, vitesse, sécurité et maintenabilité.' },
        { icon: '⚡', title: 'La qualité comme habitude d’équipe', description: 'J’intègre la qualité au mode de travail via TDD, BDD, contrôles automatisés, SonarQube et revues structurées qui rendent la responsabilité visible.' },
        { icon: '🤝', title: 'Des équipes qui grandissent', description: 'Je dirige des équipes jusqu’à 12 ingénieurs avec planification, feedback, mentorat et rituels de livraison qui renforcent confiance et compétences.' }
      ]
    },
    skills: {
      title: 'Compétences techniques',
      subtitle: 'Les outils et pratiques que j’utilise pour orienter les décisions, débloquer les équipes et transformer l’architecture en livraisons fiables.'
    },
    projects: {
      title: 'Projets clés',
      subtitle: 'Plateformes sélectionnées où la direction technique, le leadership d’équipe et la livraison pratique ont créé un impact mesurable.',
      impactLabel: 'Impact :'
    },
    experience: {
      title: 'Détails professionnels',
      subtitle: 'Du développement technique au leadership d’équipes jusqu’à 12 personnes, ma carrière a été guidée par un objectif simple : clarifier, renforcer les personnes et livrer des logiciels fiables.',
      education: '🎓 Bachelor of Engineering (E&T) — Université d’Amravati (2007)'
    },
    contact: {
      title: 'Construire une équipe technique plus solide',
      subtitle: 'Je recherche activement des postes de leadership technique senior à Dubaï ou Abu Dhabi. Discutons de la manière dont je peux aider vos équipes à prendre de meilleures décisions, livrer avec confiance et grandir durablement.'
    },
    services: {
      title: 'Le leadership en pratique',
      subtitle: 'J’aide les équipes techniques à aligner les résultats, prendre de bonnes décisions et livrer avec confiance de bout en bout.',
      items: [
        { title: 'Direction technique', description: 'Définir une vision d’architecture, rendre les compromis explicites et guider des systèmes résilients de la découverte à la production.' },
        { title: 'Livraison pratique', description: 'Rester proche du code pour éliminer les blocages, modéliser de bonnes décisions et garder la livraison ancrée dans la valeur utilisateur.' },
        { title: 'Systèmes de livraison', description: 'Créer des pratiques CI/CD, infrastructure et observabilité fiables qui donnent aux équipes un retour plus rapide et des livraisons plus sûres.' },
        { title: 'Croissance de l’équipe', description: 'Mentorer les ingénieurs, établir des rituels de livraison sains et construire des équipes performantes qui communiquent clairement et mesurent l’impact.' }
      ]
    },
    footer: {
      copyright: '© {year} Snehal Khakse. Conçu et construit avec Next.js.'
    },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      hireMe: 'Engagez-moi'
    },
    theme: {
      light: 'Passer au mode clair',
      dark: 'Passer au mode sombre'
    },
    contactLinks: {
      email: 'Écrivez-moi',
      whatsapp: 'WhatsApp',
      linkedIn: 'LinkedIn'
    }
  }
};

export const PROFILE: ContentSet['profile'] = CONTENT_BY_LOCALE.en.profile;
export const getContent = (locale: Locale = 'en'): ContentSet => CONTENT_BY_LOCALE[locale] ?? CONTENT_BY_LOCALE.en;
