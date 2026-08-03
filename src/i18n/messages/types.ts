export type ServiceMessage = {
  id: string;
  title: string;
  summary: string;
  details?: string[];
};

export type BranchMessage = {
  id: string;
  name: string;
  address: string;
  phones: string[];
  hours: string;
  amenities: string[];
};

export type PromotionMessage = {
  id: string;
  title: string;
  summary: string;
  image?: string;
  points?: string[];
};

export type PrivacySection = {
  title: string;
  body: string[];
  list?: string[];
  extra?: string[];
  extraList?: string[];
  closing?: string[];
};

export type Messages = {
  localeName: string;
  nav: {
    home: string;
    services: string;
    branches: string;
    promotions: string;
    jobs: string;
    contact: string;
    about: string;
    privacy: string;
    terms: string;
    menu: string;
    close: string;
    navigation: string;
    information: string;
  };
  language: {
    label: string;
    es: string;
    en: string;
  };
  common: {
    brandAlt: string;
    rights: string;
    learnMore: string;
    viewDetails: string;
  };
  company: {
    tagline: string;
    headline: string;
    years: string;
    description: string;
    specialties: string[];
    history: string[];
    mission: string;
    vision: string;
    innovations: string;
    institutional: string;
  };
  home: {
    ctaServices: string;
    ctaBranches: string;
    leaderTitle: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    viewAllServices: string;
    exploreEyebrow: string;
    exploreTitle: string;
    exploreDescription: string;
    pathways: {
      href: string;
      title: string;
      description: string;
      image: string;
    }[];
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaBranchesButton: string;
    ctaContactButton: string;
  };
  servicesPage: {
    breadcrumb: string;
    title: string;
    description: string;
  };
  branchesPage: {
    breadcrumb: string;
    title: string;
    description: string;
    locationsTitle: string;
    locationsDescription: string;
  };
  promotionsPage: {
    breadcrumb: string;
    title: string;
    description: string;
    eyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
    termsLinkPrefix: string;
    termsLink: string;
    termsLinkSuffix: string;
  };
  jobsPage: {
    breadcrumb: string;
    title: string;
    description: string;
    eyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
    howTitle: string;
    howBodyBefore: string;
    howBodyOr: string;
    howFormLink: string;
    howBodyAfter: string;
    roles: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  contactPage: {
    breadcrumb: string;
    title: string;
    description: string;
    eyebrow: string;
    sectionTitle: string;
    alsoVisit: string;
    alsoVisitLink: string;
    alsoVisitSuffix: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formChars: string;
    formSubmit: string;
    formHint: string;
    mailSubject: string;
    mailName: string;
    mailEmail: string;
    mailMessage: string;
  };
  aboutPage: {
    breadcrumb: string;
    title: string;
    description: string;
    historyEyebrow: string;
    historyTitle: string;
    purposeEyebrow: string;
    missionTitle: string;
    futureEyebrow: string;
    visionTitle: string;
    innovationsEyebrow: string;
    innovationsTitle: string;
  };
  privacyPage: {
    breadcrumb: string;
    title: string;
  };
  termsPage: {
    breadcrumb: string;
    title: string;
    eyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
  };
  services: ServiceMessage[];
  branches: BranchMessage[];
  promotions: PromotionMessage[];
  monederoTerms: string[];
  testimonials: { quote: string }[];
  privacySections: PrivacySection[];
};
