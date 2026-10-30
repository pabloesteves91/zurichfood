import { getCollection, type CollectionEntry } from 'astro:content';
import type { Category, Lang } from '../i18n';
import { postKey, postLang } from './urls';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(lang: Lang, category?: Category): Promise<Post[]> {
  const all = await getCollection(
    'posts',
    (p) => postLang(p) === lang && !p.data.draft && (!category || p.data.category === category),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const target: Lang = postLang(post) === 'de' ? 'en' : 'de';
  const all = await getCollection('posts', (p) => !p.data.draft && postLang(p) === target);
  return all.find((p) => postKey(p) === postKey(post));
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'de' ? 'de-CH' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function joinNames(names: string[], and: string): string {
  if (names.length < 2) return names.join('');
  return `${names.slice(0, -1).join(', ')} ${and} ${names.at(-1)}`;
}
