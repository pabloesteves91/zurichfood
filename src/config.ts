/**
 * Zentrale Einstellungen für zurichfood.ch.
 * Alles, was der Kunde ohne Code anpassen möchte, steht hier.
 */
export const SITE = {
  name: 'Zürich Food',
  tagline: { de: 'Geniessen · Entdecken · Erleben', en: 'Savour · Discover · Experience' },
  authors: ['Laura Wick', 'Eva Wick'],
  email: 'zurich.food@hotmail.com',
  phone: '076 588 37 70',
  phoneIntl: '+41765883770',
  instagram: 'https://www.instagram.com/zurich.food/',
  instagramHandle: '@zurich.food',
  since: 2018,

  /**
   * Suchmaschinen-Indexierung. Auf der GitHub-Pages-Testumgebung bleibt sie aus,
   * damit Google keinen Duplicate Content sieht. Für zurichfood.ch beim Build
   * PUBLIC_INDEXING=true setzen.
   */
  indexing: import.meta.env.PUBLIC_INDEXING === 'true',

  /**
   * Formular-Endpunkte (z.B. Formspree, Basin, Web3Forms).
   * Leer = Formular öffnet das E-Mail-Programm mit vorausgefüllter Nachricht.
   */
  contactFormAction: '',

  /**
   * Newsletter: Formular-URL von Brevo / Mailchimp (embedded form "action").
   * Leer = Formular zeigt einen Hinweis, dass der Newsletter bald startet.
   */
  newsletterAction: '',
  newsletterEmailField: 'EMAIL',

  /** Kennzahlen für die Partner-Seite. Leere Werte werden ausgeblendet. */
  stats: {
    instagramFollowers: '', // z.B. '42k'
    monthlyReach: '', // z.B. '250k'
    avgEngagement: '', // z.B. '6,1 %'
  },
} as const;
