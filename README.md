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

- **Redaktion (einfach):** `/redaktion/`: neuen Beitrag schreiben, Titelbild hochladen, „Veröffentlichen“.
  Der Beitrag wird direkt auf `main` gespeichert, GitHub Actions baut die Seite neu (ca. 1–2 Min.).
  Die Seite ist nicht verlinkt, nicht in der Sitemap und auf `noindex`. Schreiben kann nur,
  wer einen GitHub-Token mit Zugriff auf dieses Repository hat.
- **Erweiterter Editor:** `/admin/` (Sveltia CMS): bestehende Beiträge und Adressen bearbeiten.
- **Token anlegen:** github.com → Settings → Developer settings → Personal access tokens →
  Fine-grained tokens → Generate new token → Repository: nur `zurichfood` →
  Permissions: *Contents: Read and write*.
- **Dateien:** Beiträge `src/content/posts/de|en/*.md` (gleicher Dateiname = Übersetzung),
  Adressen `src/content/places/*.json`, Bilder `src/content/posts/images/`.
- **Einstellungen** (E-Mail, Newsletter, Formulare, Kennzahlen): `src/config.ts`

## SEO

- Saubere URLs, Canonical, hreflang (DE/EN), Open Graph
- Schema.org: Organization, WebSite, BlogPosting, Restaurant/Hotel mit Geo-Daten, FAQPage, BreadcrumbList
- `sitemap-index.xml`, `robots.txt`, RSS (`/rss.xml`, `/en/rss.xml`)
- Bilder responsive, Schriften lokal, kein Tracking, keine Cookies

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) baut bei jedem Push auf `main` und veröffentlicht
auf GitHub Pages. Einmalig einstellen: **Settings → Pages → Source: GitHub Actions**.

Die Testumgebung ist für Google auf `noindex` gestellt. Für den Livegang auf zurichfood.ch
im Workflow setzen:

```
SITE_URL: https://zurichfood.ch
BASE_PATH: /
PUBLIC_INDEXING: 'true'
```

und in `public/admin/config.yml` `site_url` anpassen. Danach die Domain in der
Google Search Console hinzufügen und die Sitemap einreichen.

## Offene Punkte

- Platzhaltertexte in den Beiträgen durch finale Texte ersetzen
- Impressum: Postadresse ergänzen; Datenschutz rechtlich prüfen lassen
- Newsletter-Anbieter (Brevo/Mailchimp) und Formular-Endpunkt in `src/config.ts` eintragen
- Instagram-Kennzahlen für die Partner-Seite in `src/config.ts` eintragen
- Koordinaten der Adressen kurz prüfen
