import type { Messages } from "./types";

export const en: Messages = {
  localeName: "English",
  nav: {
    home: "Home",
    services: "Services",
    branches: "Locations",
    promotions: "Promotions",
    jobs: "Careers",
    contact: "Contact",
    about: "About us",
    privacy: "Privacy notice",
    terms: "Terms and conditions",
    menu: "Menu",
    close: "Close",
    navigation: "Navigation",
    information: "Information",
  },
  language: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
  common: {
    brandAlt: "Tintorería TACUBA logo",
    rights: "All rights reserved.",
    learnMore: "Learn more",
    viewDetails: "View details",
  },
  company: {
    tagline: "Get used to looking your best every day",
    headline: "More than 60 years caring for your garments",
    years: "64 years of service",
    description:
      "Leading dry-cleaning company in Oaxaca. Specialists in dry cleaning, steam cleaning, professional pressing, dyeing, and institutional laundry.",
    specialties: [
      "Dry cleaning",
      "Steam cleaning",
      "Professional pressing",
      "Dyeing",
      "Institutional laundry",
    ],
    history: [
      "Tintorería Tacuba is a leader in dry cleaning, specializing in quality dry cleaning and pressing. For more than 60 years it has remained a customer favorite thanks to the daily effort of its team, so you can look impeccable in your garments.",
      "Tintorería Tacuba began more than 60 years ago as a small stain-removal workshop, with barely 70 m², no specialized machinery, and a small clientele. Over the years it earned the trust of the most demanding customers.",
      "Today it operates its own processing plant of 800 m², with specialized equipment for better garment care. Day by day it improves washing and pressing through timely delivery, competitive prices, and efficiency.",
    ],
    mission:
      "Improve our washing and pressing services through timely delivery, competitive prices, and efficiency, always caring for garments and focused on customer satisfaction.",
    vision:
      "Be a highly effective company that consolidates and maintains leadership in the Oaxaca market and supports the development of our people.",
    innovations:
      "At TACUBA we always aim to stay at the forefront of every process. We continually innovate to take better care of your garments.",
    institutional:
      "Institutional laundry for hotels, restaurants, hospitals, and businesses. Available through our locations with home pickup and delivery.",
  },
  home: {
    ctaServices: "View services",
    ctaBranches: "Find a location",
    leaderTitle: "A leader in dry cleaning",
    servicesEyebrow: "Services",
    servicesTitle: "Our services",
    servicesDescription:
      "TACUBA offers a wide range of services for garments, linens, curtains, leather, and much more.",
    viewAllServices: "View all services",
    exploreEyebrow: "Explore",
    exploreTitle: "What you need, clearly",
    exploreDescription:
      "Find locations, promotions, and institutional services without the clutter.",
    pathways: [
      {
        href: "/sucursales",
        title: "Locations",
        description: "Six service points in Oaxaca with home pickup and delivery.",
        image: "/images/mosaic-sucursales.png",
      },
      {
        href: "/promociones",
        title: "Promotions",
        description: "TACUBA wallet, birthday benefits, and current offers.",
        image: "/images/mosaic-monedero.png",
      },
      {
        href: "/servicios#domicilio",
        title: "Home delivery",
        description: "Don't stress — we take care of it for you.",
        image: "/images/servicio.jpg",
      },
      {
        href: "/acerca-de-nosotros#innovaciones",
        title: "Institutional laundry",
        description:
          "Institutional laundry for hotels, restaurants, hospitals, and businesses. Available through our locations with home pickup and delivery.",
        image: "/images/institucional.png",
      },
    ],
    testimonialsEyebrow: "Reviews",
    testimonialsTitle: "What our customers say",
    ctaTitle: "Visit any of our locations",
    ctaDescription:
      "Six locations in Oaxaca with home pickup and delivery. We're ready to care for your garments.",
    ctaBranchesButton: "View locations",
    ctaContactButton: "Contact",
  },
  servicesPage: {
    breadcrumb: "Services",
    title: "Our services",
    description:
      "TACUBA offers a wide range of services for garments, linens, curtains, leather, and much more.",
  },
  branchesPage: {
    breadcrumb: "Locations",
    title: "Locations",
    description:
      "Six service points with home pickup and delivery. Find the location nearest you.",
    locationsTitle: "Our locations",
    locationsDescription:
      "Hours, phone numbers, and services available at each plant and branch.",
    mapEyebrow: "Map",
    mapTitle: "Find your location",
    mapDescription:
      "Select a marker or a card to see the location on the map.",
    mapLabel: "Map of TACUBA locations in Oaxaca",
    directions: "Open in Maps",
  },
  promotionsPage: {
    breadcrumb: "Promotions",
    title: "TACUBA treats you well",
    description:
      "We have the best promotions for you. If you don't know them yet, we invite you to discover them.",
    eyebrow: "Benefits",
    sectionTitle: "Promotions",
    sectionDescription: "Tintorería TACUBA — the best in Oaxaca.",
    termsLinkPrefix: "See the",
    termsLink: "terms and conditions",
    termsLinkSuffix: "of the TACUBA wallet.",
  },
  jobsPage: {
    breadcrumb: "Careers",
    title: "Careers",
    description:
      "Join the Tintorería TACUBA team and help keep Oaxaca looking impeccable.",
    eyebrow: "Openings",
    sectionTitle: "Join our team",
    sectionDescription:
      "If you would like to apply, send us a message with your experience and interest. We will get back to you shortly.",
    howTitle: "How to apply",
    howBodyBefore: "Send your information to",
    howBodyOr: "or complete the",
    howFormLink: "contact form",
    howBodyAfter: ".",
    roles: [
      {
        title: "General assistant",
        description:
          "Support in plant and laundry processes. We look for responsible people eager to learn.",
        image: "/images/empleo-ayudante.jpg",
      },
      {
        title: "Front desk",
        description:
          "Receiving garments and assisting customers in branch. Customer service experience is valued.",
        image: "/images/empleo-mostrador.jpg",
      },
    ],
  },
  contactPage: {
    breadcrumb: "Contact",
    title: "Contact",
    description:
      "If you would like to send us a message, fill out the form below and we will get back to you shortly.",
    eyebrow: "Headquarters",
    sectionTitle: "We're here to help",
    alsoVisit: "You can also visit us at any of our",
    alsoVisitLink: "locations",
    alsoVisitSuffix: ".",
    formName: "Name *",
    formEmail: "E-mail",
    formMessage: "Message *",
    formChars: "characters remaining",
    formSubmit: "Send message",
    formHint: "Submitting will open your email client with a message to",
    mailSubject: "Website contact",
    mailName: "Name",
    mailEmail: "Email",
    mailMessage: "Message",
  },
  aboutPage: {
    breadcrumb: "About us",
    title: "About us",
    description: "A leading dry-cleaning company.",
    historyEyebrow: "History",
    historyTitle: "Our history",
    purposeEyebrow: "Purpose",
    missionTitle: "Mission",
    futureEyebrow: "Future",
    visionTitle: "Vision",
    innovationsEyebrow: "Innovations",
    innovationsTitle: "Always at the forefront",
  },
  privacyPage: {
    breadcrumb: "Privacy notice",
    title: "Privacy notice",
  },
  termsPage: {
    breadcrumb: "Terms and conditions",
    title: "Terms and conditions",
    eyebrow: "TACUBA wallet",
    sectionTitle: "Program conditions",
    sectionDescription: "Read the conditions for earning and redeeming points.",
  },
  services: [
    {
      id: "tintoreria",
      title: "Quality dry cleaning",
      summary:
        "We don't just wash and press your clothes — we care for them. Professional dry cleaning and pressing for dress, casual, and formal wear.",
      details: [
        "Dry cleaning preserves the original color and texture of your garments so they look new longer.",
        "We combine professional equipment with hand finishing for quality pressing.",
      ],
    },
    {
      id: "piel-gamuza",
      title: "Leather and suede",
      summary:
        "Specialized dry cleaning for leather and suede garments to preserve appearance and softness.",
    },
    {
      id: "blancos",
      title: "Linens & whites",
      summary:
        "Professional care for household and everyday whites, with processes designed to keep brightness and freshness.",
    },
    {
      id: "cortinas",
      title: "Curtains",
      summary:
        "Cleaning and pleating for regional and rubberized curtains so your spaces look impeccable.",
      details: ["Regional curtains", "Rubberized curtains", "Curtain pleating"],
    },
    {
      id: "peluches",
      title: "Sanitized plush toys",
      summary:
        "Cleaning and sanitizing for plush toys, with careful processes to restore hygiene and softness.",
    },
    {
      id: "planchado",
      title: "Pressing only",
      summary:
        "Professional pressing with hand finishing — ideal when you only need to restore presentation.",
    },
    {
      id: "tenido",
      title: "Professional dyeing",
      summary:
        "Professional dyeing to renew garment color with even, careful finishes.",
    },
    {
      id: "composturas",
      title: "Alterations",
      summary:
        "If you need any garment repair, come to Tacuba. From a hem correction to alterations on all kinds of garments.",
    },
    {
      id: "urgentes",
      title: "Urgent services",
      summary:
        "When time is short, we offer same-day urgent service and, at selected plants, 3-hour express service.",
    },
    {
      id: "domicilio",
      title: "Home pickup & delivery",
      summary:
        "We pick up and deliver your garments so you don't have to worry. We do it for you.",
    },
  ],
  branches: [
    {
      id: "santa-rosa",
      name: "Santa Rosa Plant",
      address: "Carr. Internacional 406 (next to Banamex), Col. Cuauhtémoc",
      phones: ["(951) 549 01 74", "Cel. 951 121 5951"],
      hours: "Contingency hours: 10:00 a.m. to 6:00 p.m.",
      amenities: [
        "Parking available",
        "Credit or debit card accepted",
        "Express service 3 hrs.",
        "Pressing while you wait",
        "Same-day urgent service",
      ],
    },
    {
      id: "centro",
      name: "Centro Branch",
      address: "Mier y Terán #216, Col. Centro",
      phones: ["(951) 516 52 25"],
      hours: "Contingency hours: 10:00 a.m. to 6:00 p.m.",
      amenities: [
        "Credit or debit card accepted",
        "Same-day urgent service",
      ],
    },
    {
      id: "san-sebastian",
      name: "San Sebastián Branch",
      address: "Carretera Internacional #5, Col. San Sebastián Tutla",
      phones: ["044 (951) 155 4198"],
      hours: "Hours: 10:00 a.m. to 6:00 p.m.",
      amenities: [
        "Credit or debit card accepted",
        "Same-day urgent service",
      ],
    },
    {
      id: "violetas",
      name: "Violetas Plant",
      address: "Violetas #121, Col. Reforma",
      phones: ["(951) 512 7592", "Cel. 044 (951) 155 4226"],
      hours: "Hours: 8:00 a.m. to 8:00 p.m.",
      amenities: [
        "Parking available",
        "Credit or debit card accepted",
        "Express service 3 hrs.",
        "Pressing while you wait",
        "Same-day urgent service",
      ],
    },
    {
      id: "universidad",
      name: "Universidad Branch",
      address:
        "Av. Universidad #206, across from UABJO, Fracc. Trinidad de las Huertas",
      phones: ["(951) 514 8356"],
      hours: "Hours: 08:00 a.m. to 7:00 p.m.",
      amenities: [
        "Parking available",
        "Credit or debit card accepted",
        "Same-day urgent service",
      ],
    },
    {
      id: "xoxo",
      name: "Xoxo Branch",
      address: "Blvd. Guadalupe Hinojosa #105, Col. Palestina",
      phones: ["044 (951) 155 4007"],
      hours: "Contingency hours: 10:00 a.m. to 6:00 p.m.",
      amenities: [
        "Credit or debit card accepted",
        "Same-day urgent service",
      ],
    },
  ],
  promotions: [
    {
      id: "monedero",
      title: "TACUBA wallet",
      summary:
        "Earn points with every service and redeem them at our locations. TACUBA treats you well with benefits designed for you.",
      image: "/images/monedero.jpg",
      points: [
        "Present your TACUBA wallet when requesting service.",
        "Each point equals $1.00 MXN.",
        "Bonuses are calculated per garment.",
        "Each location keeps its own benefits account.",
        "Validity and point accrual renew every October 30.",
      ],
    },
    {
      id: "cumpleanos",
      title: "On your birthday",
      summary:
        "On your special day, TACUBA treats you to exclusive benefits. Ask at your location about the current birthday promotion.",
      image: "/images/cumple.png",
    },
    {
      id: "promociones",
      title: "Current promotions",
      summary:
        "We have the best promotions for you. If you don't know them yet, visit any of our locations to learn more.",
      image: "/images/mosaic-monedero.png",
    },
  ],
  monederoTerms: [
    "You must present the TACUBA WALLET when requesting service to receive benefits.",
    "Promotions are temporary and may change without notice. Wallet validity and point accrual renew every October 30.",
    "Bonus calculation is per garment and uses corresponding rounding.",
    "Each point equals $1.00 MXN in benefits.",
    "Each point of sale (location) is independent and keeps its own benefits account.",
    "Tintorería Tacuba reserves the right to modify the use, accrual, and/or redemption conditions of the TACUBA WALLET program without prior notice.",
    "Tintorería Tacuba is not responsible in case of theft or loss, or for misuse of the wallet.",
  ],
  testimonials: [
    {
      quote:
        "With Tintorería Tacuba I feel confident that my clothes will be returned on time.",
    },
    {
      quote:
        "More than 60 years caring for my garments. The pressing quality shows in every detail.",
    },
    {
      quote:
        "Home delivery makes my life easier. Tacuba handles it for me and everything comes back impeccable.",
    },
  ],
  privacySections: [
    {
      title: "Controller",
      body: [
        "TACUBA DRY CLEAN S.A. DE C.V. (hereinafter Tintorería Tacuba), with address at Carretera Internacional Nº 406, Col. Cuauhtémoc, Santa Rosa Panzacola, Oaxaca de Juárez, Oax, C.P. 68030, is responsible for the use and protection of your personal data.",
      ],
    },
    {
      title: "What will we use your personal data for?",
      body: [
        "The personal data we collect will be used for the following purposes that are necessary for the service you request:",
      ],
      list: [
        "To verify and confirm your identity.",
        "To follow up on and fulfill the products and services contracted with us.",
        "To evaluate service quality.",
      ],
      extra: [
        "Additionally, we will use your personal information for the following purposes that are not necessary for the requested service, but that help us provide better care:",
      ],
      extraList: [
        "To inform you about our current benefits and promotions.",
        "To generate consumption statistics and reward your loyalty.",
        "To conduct internal market studies that allow us to offer better products and services.",
      ],
      closing: [
        "If you do not want your personal data processed for these additional purposes, you may submit a written request at a location stating so. Refusing these additional uses will not be a reason to deny you our services.",
        "Video surveillance: images and sounds captured by the video surveillance system will be used for your safety, that of our employees, and other visitors.",
      ],
    },
    {
      title: "Which personal data will we use?",
      body: [
        "We will use the following personal data: full name, address, phone number, email, birthday, image, and voice.",
      ],
    },
    {
      title: "With whom do we share your information?",
      body: [
        "To fulfill our obligations, Tintorería Tacuba may occasionally transfer your personal data to competent authorities when requested.",
        "We also inform you that your data will not be shared with people or companies unrelated to Tintorería Tacuba.",
      ],
    },
    {
      title: "ARCO rights",
      body: [
        "You have the right to Access, Rectification, Cancellation, and Opposition (ARCO rights) regarding your personal data.",
        "To exercise them, submit a written request at Tintorería Tacuba offices, by postal mail to the same address, or by email to contacto@tintoreriatacuba.com.mx.",
      ],
      list: [
        "Full name and address of the data subject, or another means to communicate the response.",
        "Documents proving the identity or legal representation of the data subject.",
        "A clear and precise description of the personal data for which a right is sought.",
        "Any other element or document that helps locate the personal data.",
      ],
    },
    {
      title: "Revoking consent",
      body: [
        "You may revoke the consent granted for the processing of your personal data. Please note that we may not always be able to fulfill your request immediately, as a legal obligation may require us to continue processing your data.",
        "To revoke your consent, submit your request at Tintorería Tacuba offices or write to contacto@tintoreriatacuba.com.mx.",
      ],
    },
    {
      title: "Cookies and tracking technologies",
      body: [
        "On our website we use cookies, web beacons, and other technologies to monitor your behavior as an internet user and provide a better service.",
        "Data obtained may include: browser used, server name, IP address, date, time and duration of browsing, sections consulted, and pages accessed.",
        "These technologies can be disabled from your browser's help section.",
      ],
    },
    {
      title: "Changes to this notice",
      body: [
        "This privacy notice may be modified due to new legal requirements, service needs, or other causes.",
        "Any modification may be consulted on this website.",
        "Last updated: September 3, 2016.",
      ],
    },
  ],
};
