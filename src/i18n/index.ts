export const LANGS = ['de', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'de';

export const HTML_LANG: Record<Lang, string> = { de: 'de-CH', en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { de: 'de_CH', en: 'en_GB' };

/** Statische Seiten: gleiche Seite, sprachabhängige URL. */
export const ROUTES = {
  home: { de: '/', en: '/en/' },
  map: { de: '/karte/', en: '/en/map/' },
  search: { de: '/suche/', en: '/en/search/' },
  partner: { de: '/partner/', en: '/en/partners/' },
  about: { de: '/ueber-uns/', en: '/en/about/' },
  contact: { de: '/kontakt/', en: '/en/contact/' },
  newsletter: { de: '/newsletter/', en: '/en/newsletter/' },
  imprint: { de: '/impressum/', en: '/en/legal-notice/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
} as const;
export type RouteKey = keyof typeof ROUTES;

export const CATEGORIES = ['food', 'hotels', 'stores-brands', 'erlebnisse'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_META: Record<
  Category,
  { slug: Record<Lang, string>; name: Record<Lang, string>; short: Record<Lang, string>; intro: Record<Lang, string>; seoTitle: Record<Lang, string> }
> = {
  food: {
    slug: { de: 'food', en: 'food' },
    name: { de: 'Food', en: 'Food' },
    short: { de: 'Restaurants, Cafés, Brunch und Bars.', en: 'Restaurants, cafés, brunch and bars.' },
    intro: {
      de: 'Unsere Lieblingsrestaurants, Cafés, Brunch-Adressen und Bars in Zürich und der Schweiz, von Street Food bis Gourmet. Selbst besucht und ehrlich bewertet.',
      en: 'Our favourite restaurants, cafés, brunch spots and bars in Zurich and Switzerland, from street food to fine dining. Visited in person, reviewed honestly.',
    },
    seoTitle: {
      de: 'Restaurants, Cafés & Brunch in Zürich',
      en: 'Best Restaurants, Cafés & Brunch in Zurich',
    },
  },
  hotels: {
    slug: { de: 'hotels', en: 'hotels' },
    name: { de: 'Hotels', en: 'Hotels' },
    short: { de: 'Schöne Übernachtungen in der Stadt und darüber hinaus.', en: 'Beautiful stays in the city and beyond.' },
    intro: {
      de: 'Hotels, in denen wir selbst übernachtet haben, in Zürich, im Tessin, in den Bergen und überall dort, wo es sich lohnt.',
      en: 'Hotels we have stayed at ourselves, in Zurich, Ticino, the mountains and wherever else it is worth the trip.',
    },
    seoTitle: { de: 'Hotel-Tipps in Zürich & der Schweiz', en: 'Hotel Tips for Zurich & Switzerland' },
  },
  'stores-brands': {
    slug: { de: 'stores-brands', en: 'stores-brands' },
    name: { de: 'Stores & Brands', en: 'Stores & Brands' },
    short: { de: 'Gourmet-Shops, Concept-Stores und Marken.', en: 'Gourmet shops, concept stores and brands.' },
    intro: {
      de: 'Gourmet-Shops, Concept-Stores, lokale Marken und Küchenhelfer, die wir lieben und weiterempfehlen.',
      en: 'Gourmet shops, concept stores, local brands and kitchen tools we love and recommend.',
    },
    seoTitle: { de: 'Concept-Stores & Gourmet-Shops in Zürich', en: 'Concept Stores & Gourmet Shops in Zurich' },
  },
  erlebnisse: {
    slug: { de: 'erlebnisse', en: 'experiences' },
    name: { de: 'Erlebnisse', en: 'Experiences' },
    short: { de: 'Ausflüge, Events und Auszeiten.', en: 'Day trips, events and escapes.' },
    intro: {
      de: 'Ausflüge, Events, Märkte und kleine Auszeiten in und um Zürich, mit Daten, Öffnungszeiten und unseren Tipps.',
      en: 'Day trips, events, markets and little escapes in and around Zurich, with dates, opening hours and our tips.',
    },
    seoTitle: { de: 'Erlebnisse, Events & Ausflüge in Zürich', en: 'Things to Do in Zurich: Events & Day Trips' },
  },
};

export const UI = {
  de: {
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    close: 'Schliessen',
    search: 'Suche',
    map: 'Karte',
    partner: 'Partner',
    about: 'Über uns',
    contact: 'Kontakt',
    newsletter: 'Newsletter',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    readMore: 'Beitrag lesen',
    allPosts: 'Alle Beiträge',
    latest: 'Neueste Beiträge',
    featured: 'Titelgeschichte',
    comingSoon: 'Demnächst',
    by: 'Von',
    and: 'und',
    minRead: 'Min. Lesezeit',
    updated: 'Aktualisiert',
    disclosure: 'Transparenz',
    faq: 'Häufige Fragen',
    related: 'Das könnte dir auch gefallen',
    places: 'Adressen in diesem Beitrag',
    address: 'Adresse',
    phone: 'Telefon',
    website: 'Webseite',
    award: 'Auszeichnung',
    showOnMap: 'Auf der Karte zeigen',
    route: 'Route planen',
    home: 'Start',
    followUs: 'Folge uns auf Instagram',
    langSwitch: 'English',
    langSwitchShort: 'EN',
    rights: 'Alle Rechte vorbehalten.',
    noPosts: 'Hier entstehen gerade neue Beiträge. Folge uns auf Instagram, um nichts zu verpassen.',
    nlTitle: 'Die besten Adressen, einmal im Monat.',
    nlText: 'Neue Restaurants, Hotels und Erlebnisse, bevor sie alle kennen. Kein Spam, jederzeit abmeldbar.',
    nlPlaceholder: 'Deine E-Mail-Adresse',
    nlButton: 'Anmelden',
    nlSoon: 'Danke für dein Interesse! Der Newsletter startet in Kürze. Folge uns bis dahin auf Instagram.',
    nlConsent: 'Mit der Anmeldung akzeptierst du unsere',
    priceLevels: ['Günstig', 'Mittel', 'Gehoben', 'Fine Dining'],
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    search: 'Search',
    map: 'Map',
    partner: 'Partners',
    about: 'About',
    contact: 'Contact',
    newsletter: 'Newsletter',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    readMore: 'Read story',
    allPosts: 'All stories',
    latest: 'Latest stories',
    featured: 'Cover story',
    comingSoon: 'Coming soon',
    by: 'By',
    and: 'and',
    minRead: 'min read',
    updated: 'Updated',
    disclosure: 'Disclosure',
    faq: 'FAQ',
    related: 'You might also like',
    places: 'Places in this story',
    address: 'Address',
    phone: 'Phone',
    website: 'Website',
    award: 'Award',
    showOnMap: 'Show on map',
    route: 'Get directions',
    home: 'Home',
    followUs: 'Follow us on Instagram',
    langSwitch: 'Deutsch',
    langSwitchShort: 'DE',
    rights: 'All rights reserved.',
    noPosts: 'New stories are on their way. Follow us on Instagram so you don’t miss a thing.',
    nlTitle: 'The best addresses, once a month.',
    nlText: 'New restaurants, hotels and experiences before everyone else knows. No spam, unsubscribe any time.',
    nlPlaceholder: 'Your email address',
    nlButton: 'Subscribe',
    nlSoon: 'Thanks for your interest! The newsletter launches soon. Until then, follow us on Instagram.',
    nlConsent: 'By subscribing you accept our',
    priceLevels: ['Budget', 'Mid-range', 'Upscale', 'Fine dining'],
  },
} as const;

export function t(lang: Lang) {
  return UI[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}
