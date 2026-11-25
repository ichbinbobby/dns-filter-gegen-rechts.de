# DNS-Filter gegen Rechts

An open domain list for DNS filters. The project website is intended for
`dns-filter-gegen-rechts.de`; the plain-text feed is available at
`https://dns-filter-gegen-rechts.de/domains`.

Source repository: <https://github.com/ichbinbobby/dns-filter-gegen-rechts.de>

## Current status

The list currently contains three publisher domains (`bild.de`, `welt.de`, and
`nius.de`), three documented media impersonation domains (`bfm-tv.net`,
`euronews.us.com`, and `politico-24.com`), three documented disinformation
hosts (`anonymousnews.org`, `friedrich-merz-cdu.de`, and `presseneu.de`), three
ad/tracking hosts referenced by the publishers' homepages, and BILD's image
host (`images.bild.de`).
Axel Springer identifies BILD and WELT as its brands; NIUS is published by
VIUS SE & Co. KGaA and is not an Axel Springer brand. See the
[Axel Springer brand list](https://www.axelspringer.com/en/brands) and the
[NIUS imprint](https://nius.de/impressum).

The media impersonation entries are documented by
[Mimikama](https://www.mimikama.org/russische-medienfaelschungen-newsguard-2026/)
and NewsGuard's
[Media Imposter Tracking Center](https://www.newsguardtech.com/special-reports/media-imposter-tracking-center/).
NewsGuard reported `politico-24.com` inaccessible as of March 16, 2026; it is
included as a documented impersonation domain, not as a claim that it is
currently active. The public tracker is not a complete list of all fake sites.

CORRECTIV describes `anonymousnews.org` as a source of far-right and
pro-Russian propaganda, and identifies `presseneu.de` as part of a Russian
disinformation network. DPA documented `friedrich-merz-cdu.de` as a fake
website impersonating Friedrich Merz's site. Current activity for the latter
two hosts was not confirmed during this review. CORRECTIV's report on the
Matrjoschka campaign describes fabricated media posts circulated on social
networks but does not identify a standalone hostname to block; no social
platforms or generic media assets were added.

The ad/tracking entries are limited to observed endpoints: the BILD ad-library
and click-tracking hosts, and `adnz.co`, which NIUS references as a preconnect
target. Its specific role could not be independently confirmed. `images.bild.de`
was observed serving images on BILD's homepage and thumbnails on its video page.
Other Google-hosted endpoints, general cloud/CDN/media hosts, and
consent-management hosts are excluded. DNS blocking is network-wide: listed
hosts can be blocked wherever requested, and third-party entries can affect ads
or tracking on unrelated sites. Homepage and video-page references are documented in
[`public/domains.txt`](./public/domains.txt); the site does not condition these
blocks on which page is being visited.

The canonical feed is [`public/domains.txt`](./public/domains.txt); it contains
one domain per line, with optional `#` comments. The `/domains` route serves
this file as plain text. Keep the landing-page status and entry count in sync
when the list changes. Whether a DNS filter also blocks subdomains depends on
that filter; separate domains are not covered unless they are listed
explicitly.

## Local development

Install dependencies and start the Nuxt development server:

```bash
npm install
npm run dev
```

The website is served at `http://localhost:3000`, and the source file at
`http://localhost:3000/domains.txt`. Vercel rewrites `/domains` to this file.

## Vercel domains

1. Import this repository as a Vercel project and deploy it.
2. In the Vercel project settings, add `dns-filter-gegen-rechts.de` as a
   project domain.
3. Configure the DNS records using the values Vercel shows for each domain.
4. Confirm the deployment serves the website on the apex domain and the plain
   text list at `https://dns-filter-gegen-rechts.de/domains`.

## Production checks

```bash
npm run build
npx eslint app/app.vue
```
