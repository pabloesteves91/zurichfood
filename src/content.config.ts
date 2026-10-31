import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './i18n';

/** Optionales Feld: Das CMS schreibt leere Felder als '' oder null, das zählt als «nicht ausgefüllt». */
const opt = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

const posts = defineCollection({
  // Dateien liegen unter posts/<sprache>/<slug>.md – gleicher Dateiname = Übersetzung.
  loader: glob({ pattern: ['de/*.md', 'en/*.md'], base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Meta-Description und Lead, ideal 120–160 Zeichen. */
      description: z.string().max(200),
      /** Optionaler SEO-Titel (sonst = title). */
      seoTitle: opt(z.string()),
      /** Optionaler URL-Slug, z.B. für englische URLs. */
      urlSlug: opt(z.string()),
      category: z.enum(CATEGORIES),
      date: z.coerce.date(),
      updated: opt(z.coerce.date()),
      authors: z.array(z.string()).default(['Laura Wick', 'Eva Wick']),
      image: image(),
      imageAlt: z.string(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      disclosure: opt(z.string()),
      places: z.preprocess((v) => v ?? [], z.array(reference('places'))),
      faq: z.preprocess((v) => v ?? [], z.array(z.object({ q: z.string(), a: z.string() }))),
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
    cuisine: opt(z.string()),
    /** 1 = günstig … 4 = Fine Dining */
    price: opt(z.coerce.number().int().min(1).max(4)),
    phone: opt(z.string()),
    website: opt(z.string().url()),
    award: opt(z.string()),
    summary: z.object({ de: z.string(), en: z.string() }),
    /** Optionales eigenes Bild (sonst Titelbild des Beitrags) */
    image: opt(image()),
    /** Slug des Beitrags (Dateiname ohne .md) */
    post: opt(z.string()),
  }),
});

export const collections = { posts, places };
