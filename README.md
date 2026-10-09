# Premium Car Wash — Website

Client-side rendered (React + Vite) website for **Premium Car Wash, Bengaluru**.
Services: car wash, car detailing, interior cleaning with vacuum, bike wash (inside & outside).

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Deploy on Vercel
1. Go to vercel.com → **Add New… → Project** → import `vamshicodingmt-gif/FILE-SUMMARIZER`.
2. Leave the defaults (framework: Vite, build: `npm run build`, output: `dist`). `vercel.json` already sets these
   and adds the rewrite that lets client-side routes (`/pricing`, `/contact`, …) work on refresh.
3. Click **Deploy**.

## Edit the business details
Everything (prices, phone, WhatsApp number, hours, services, gallery, reviews, FAQs) is in **`src/data/site.js`**.
Phone / WhatsApp: `+91 89042 19680`.

## SEO checklist (already in place)
- Unique `<title>`, meta description, canonical URL and Open Graph / Twitter tags on every page (`react-helmet-async`).
- Static JSON-LD structured data (`AutoWash`, prices, opening hours, address) in `index.html`; `FAQPage` + `OfferCatalog` on the pricing page.
- `public/sitemap.xml` and `public/robots.txt`.
- Semantic HTML, alt text on all images, mobile-responsive, fast static build.

**Before going live:** change `SITE.url` in `src/data/site.js` and the URLs in `index.html`, `public/robots.txt`
and `public/sitemap.xml` to your real domain (e.g. `https://www.premiumcarwash.in`), then add the site to Google Search Console and submit the sitemap.
