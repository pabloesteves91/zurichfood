import type { APIContext } from 'astro';
import { SITE } from '../config';
import { CATEGORY_META, HTML_LANG, type Lang } from '../i18n';
import { getPosts } from './posts';
import { postUrl, route } from './urls';

export async function feed(ctx: APIContext, lang: Lang) {
  const posts = await getPosts(lang);
  return {
    title: SITE.name,
    description: SITE.tagline[lang],
    site: new URL(route('home', lang), ctx.site).href,
    customData: `<language>${HTML_LANG[lang]}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postUrl(p),
      categories: [CATEGORY_META[p.data.category].name[lang]],
    })),
  };
}
