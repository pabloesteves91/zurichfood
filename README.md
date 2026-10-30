# zurichfood.ch

Redesign von Zürich Food: Food-, Hotel- und Lifestyle-Guide von Laura & Eva Wick.
Gebaut mit [Astro](https://astro.build), statisch, schnell und für Google optimiert.

## Entwicklung

```bash
npm install
npm run dev       # http://localhost:4321/zurichfood/
npm run build     # Build + Suchindex (Pagefind) nach dist/
npm run preview
```

## Inhalte pflegen

- **CMS:** `/admin/` (Sveltia CMS). Login mit einem GitHub Personal Access Token
  (fine-grained, nur dieses Repository, Berechtigung *Contents: Read and write*).
  Jede Änderung wird als Commit gespeichert und automatisch veröffentlicht.
- **Beiträge:** `src/content/posts/de/*.md` und `src/content/posts/en/*.md`.
  Gleicher Dateiname = Übersetzung (für hreflang).
- **Adressen (Karte):** `src/content/places/*.json`
- **Bilder:** `src/content/posts/images/` (werden automatisch zu WebP/AVIF optimiert)
- **Einstellungen** (E-Mail, Newsletter, Formulare, Kennzahlen): `src/config.ts`

## SEO

- Saubere URLs, Canonical, hreflang (DE/EN), Open Graph
- Schema.org: Organization, WebSite, BlogPosting, Restaurant/Hotel mit Geo-Daten, FAQPage, BreadcrumbList
- `sitemap-index.xml`, `robots.txt`, RSS (`/rss.xml`, `/en/rss.xml`)
- Bilder responsive, Schriften lokal, kein Tracking, keine Cookies

## Deployment

GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / `/docs`**.

Die fertige Seite liegt im Ordner `docs/`. Nach jeder Änderung (auch im CMS) neu bauen und pushen:

```bash
git pull
npm run build
git add docs && git commit -m "Seite neu gebaut" && git push
```

Die Testumgebung ist für Google auf `noindex` gestellt. Für den Livegang auf zurichfood.ch so bauen:

```bash
SITE_URL=https://zurichfood.ch BASE_PATH=/ PUBLIC_INDEXING=true npm run build
```

und in `public/admin/config.yml` `site_url` anpassen. Danach die Domain in der
Google Search Console hinzufügen und die Sitemap einreichen.

## Offene Punkte

- Platzhaltertexte in den Beiträgen durch finale Texte ersetzen
- Impressum: Postadresse ergänzen; Datenschutz rechtlich prüfen lassen
- Newsletter-Anbieter (Brevo/Mailchimp) und Formular-Endpunkt in `src/config.ts` eintragen
- Instagram-Kennzahlen für die Partner-Seite in `src/config.ts` eintragen
- Koordinaten der Adressen kurz prüfen
