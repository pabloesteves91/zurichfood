import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './i18n';

const posts = defineCollection({
  // Dateien liegen unter posts/<sprache>/<slug>.md – gleicher Dateiname = Übersetzung.
  loader: glob({ pattern: ['de/*.md', 'en/*.md'], base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Meta-Description und Lead, ideal 120–160 Zeichen. */
      description: z.string().max(200),
      /** Optionaler SEO-Titel (sonst = title). */
      seoTitle: z.string().optional(),
      /** Optionaler URL-Slug, z.B. für englische URLs. */
      urlSlug: z.string().optional(),
      category: z.enum(CATEGORIES),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      authors: z.array(z.string()).default(['Laura Wick', 'Eva Wick']),
      image: image(),
      imageAlt: z.string(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      disclosure: z.string().optional(),
      places: z.array(reference('places')).default([]),
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

const places = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/places' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    /** schema.org-Typ für Google, z.B. Restaurant, Hotel, Store, Event, CafeOrCoffeeShop, BarOrPub */
    type: z.string().default('LocalBusiness'),
    street: z.string(),
    postalCode: z.string(),
    city: z.string(),
    /** Für Filter: "Kreis 1" … "Kreis 12" oder eine Region wie "Tessin". */
    area: z.string(),
    lat: z.number(),
    lng: z.number(),
    cuisine: z.string().optional(),
    /** 1 = günstig … 4 = Fine Dining */
    price: z.number().int().min(1).max(4).optional(),
    phone: z.string().optional(),
    website: z.string().url().optional(),
    award: z.string().optional(),
    summary: z.object({ de: z.string(), en: z.string() }),
    /** Optionales eigenes Bild (sonst Titelbild des Beitrags) */
    image: image().optional(),
    /** Slug des Beitrags (Dateiname ohne .md) */
    post: z.string().optional(),
  }),
});

export const collections = { posts, places };
