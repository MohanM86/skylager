# Skylager.no — Infrastrukturfiler

## 📁 Filstruktur

```
skylager.no/
├── index.html              ← Hovedsiden (skylager.html)
├── 404.html                ← Feilside 404
├── 500.html                ← Feilside 500
├── robots.txt              ← Søkemotorkontroll
├── sitemap.xml             ← Sitemap-indeks
├── sitemap-pages.xml       ← Sider-sitemap
├── sitemap-posts.xml       ← Artikler-sitemap (tom, klar for innhold)
├── sitemap-images.xml      ← Bilder-sitemap
├── manifest.json           ← PWA-manifest
├── vercel.json             ← Vercel-konfigurasjon
├── security.txt            ← Sikkerhetskontakt (RFC 9116)
├── humans.txt              ← Teamkreditering
├── browserconfig.xml       ← Windows-tile
├── README.md               ← Denne filen
└── assets/
    ├── css/
    │   └── styles.css      ← Ekstern CSS (valgfri)
    ├── js/
    │   └── main.js         ← Ekstern JS (valgfri)
    └── img/
        ├── logo.svg        ← SVG-logo
        ├── og-image.jpg    ← Open Graph bilde (PLACEHOLDER)
        ├── twitter-image.jpg ← Twitter Card bilde (PLACEHOLDER)
        ├── favicon-32x32.png ← Favicon 32x32 (PLACEHOLDER)
        ├── favicon-16x16.png ← Favicon 16x16 (PLACEHOLDER)
        └── apple-touch-icon.png ← Apple touch icon (PLACEHOLDER)
```

## 🖼️ Slik bytter du placeholder-bildene

Alle bilder merket (PLACEHOLDER) er 1x1 piksel og MÅ byttes før produksjon.

### og-image.jpg (Open Graph / sosiale medier)
- **Størrelse:** 1200 × 630 piksler
- **Format:** JPG, maks 300 KB
- **Innhold:** Skylager.no-logo, tagline, gradient-bakgrunn (#060918 → #0ea5e9)
- **Brukes av:** Facebook, LinkedIn, Slack, Discord ved deling
- **Verktøy:** Canva, Figma eller https://og-image.vercel.app

### twitter-image.jpg (Twitter/X Card)
- **Størrelse:** 1200 × 600 piksler
- **Format:** JPG, maks 300 KB
- **Innhold:** Samme som OG-bilde, litt kortere format

### favicon-32x32.png
- **Størrelse:** 32 × 32 piksler
- **Format:** PNG med transparens
- **Innhold:** Forenklet sky-ikon med gradient

### favicon-16x16.png
- **Størrelse:** 16 × 16 piksler
- **Format:** PNG med transparens
- **Innhold:** Ekstra forenklet sky-ikon

### apple-touch-icon.png
- **Størrelse:** 180 × 180 piksler
- **Format:** PNG, fylt bakgrunn (#060918)
- **Innhold:** Skylager-logo sentrert
- **Tips:** IKKE bruk transparens — iOS legger til hvit bakgrunn

### Generere favicons enkelt:
1. Lag et 512×512 PNG av logoen
2. Gå til https://realfavicongenerator.net/
3. Last opp PNG
4. Last ned pakken og erstatt filene

## 🚀 Deploy til Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Rename skylager.html til index.html
mv skylager.html index.html

# Deploy
vercel --prod
```

## 🔒 security.txt

Filen bør plasseres i `/.well-known/security.txt` i produksjon.
Vercel redirect:
```json
{
  "source": "/.well-known/security.txt",
  "destination": "/security.txt"
}
```

## 📝 Etter deploy — sjekkliste

- [ ] Bytt alle placeholder-bilder
- [ ] Verifiser OG-bilde: https://developers.facebook.com/tools/debug/
- [ ] Verifiser Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Submit sitemap til Google: https://search.google.com/search-console
- [ ] Submit sitemap til Bing: https://www.bing.com/webmasters
- [ ] Test ytelse: https://pagespeed.web.dev/
- [ ] Test strukturert data: https://validator.schema.org/
- [ ] Test sikkerhet: https://securityheaders.com/
- [ ] Sett opp Google Analytics / Plausible
- [ ] Koble til Google Search Console
