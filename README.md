# DNS-Filter gegen Rechts

An open domain list for DNS filters. The project website is intended for
`dns-filter-gegen-rechts.de`; the plain-text feed is available at
`https://dns-filter-gegen-rechts.de/domains`.

Source repository: <https://github.com/ichbinbobby/dns-filter-gegen-rechts.de>

## Current status

The list is a scaffold and contains no domains yet. Do not add it to a DNS
filter until entries have been reviewed and published. The canonical feed is
[`public/domains.txt`](./public/domains.txt); add one domain per line, with
optional `#` comments. The `/domains` route serves this file as plain text.
Keep the landing-page status and entry count in sync when the list is ready.

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
