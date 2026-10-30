import type { CollectionEntry } from 'astro:content';
import { CATEGORY_META, ROUTES, type Category, type Lang, type RouteKey } from '../i18n';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the deploy base (e.g. /zurichfood). */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

export function route(key: RouteKey, lang: Lang): string {
  return withBase(ROUTES[key][lang]);
}

export function categoryPath(cat: Category, lang: Lang): string {
  return `${lang === 'en' ? '/en' : ''}/${CATEGORY_META[cat].slug[lang]}/`;
}

export function categoryUrl(cat: Category, lang: Lang): string {
  return withBase(categoryPath(cat, lang));
}

export function postLang(post: CollectionEntry<'posts'>): Lang {
  return post.id.split('/')[0] as Lang;
}

/** Shared key between translations: the file name without language folder. */
export function postKey(post: CollectionEntry<'posts'>): string {
  return post.id.split('/').slice(1).join('/');
}

export function postSlug(post: CollectionEntry<'posts'>): string {
  return post.data.urlSlug ?? postKey(post);
}

export function postPath(post: CollectionEntry<'posts'>): string {
  const lang = postLang(post);
  return `${categoryPath(post.data.category, lang)}${postSlug(post)}/`;
}

export function postUrl(post: CollectionEntry<'posts'>): string {
  return withBase(postPath(post));
}

export function absolute(path: string, site: URL | undefined): string {
  return new URL(path, site).href;
}
