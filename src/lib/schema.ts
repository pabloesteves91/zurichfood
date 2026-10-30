import type { CollectionEntry } from 'astro:content';
import { SITE } from '../config';
import { HTML_LANG, type Lang } from '../i18n';

export function organization(site: URL | undefined, base: string) {
  const root = new URL(base, site).href;
  return {
    '@type': 'Organization',
    '@id': `${root}#organization`,
    name: SITE.name,
    url: root,
    logo: { '@type': 'ImageObject', url: new URL('icon-512.png', root).href, width: 512, height: 512 },
    email: SITE.email,
    telephone: SITE.phoneIntl,
    sameAs: [SITE.instagram],
    founder: SITE.authors.map((name) => ({ '@type': 'Person', name })),
  };
}

export function website(site: URL | undefined, base: string, lang: Lang) {
  const root = new URL(base, site).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${root}#website`,
    name: SITE.name,
    alternateName: 'zurichfood.ch',
    url: root,
    inLanguage: HTML_LANG[lang],
    publisher: organization(site, base),
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqPage(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function placeSchema(place: CollectionEntry<'places'>['data']) {
  const priceRange = place.price ? '$'.repeat(place.price) : undefined;
  const base: Record<string, unknown> = {
    '@type': place.type,
    name: place.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: place.street,
      postalCode: place.postalCode,
      addressLocality: place.city,
      addressCountry: 'CH',
    },
    geo: { '@type': 'GeoCoordinates', latitude: place.lat, longitude: place.lng },
  };
  if (place.type === 'Event') {
    return { '@type': 'Place', name: place.name, address: base.address, geo: base.geo };
  }
  if (place.phone) base.telephone = place.phone;
  if (place.website) base.url = place.website;
  if (priceRange) base.priceRange = priceRange;
  if (place.cuisine && place.type === 'Restaurant') base.servesCuisine = place.cuisine;
  if (place.award) base.award = place.award;
  return base;
}
