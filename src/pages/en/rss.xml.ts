import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { feed } from '../../lib/feed';

export const GET = (ctx: APIContext) => feed(ctx, 'en').then((o) => rss(o));
