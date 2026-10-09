# 🚗 Premium Car Wash — Bengaluru

A premium, fully **client-side rendered** Next.js website for **Premium Car Wash**,
Bengaluru — car wash, car detailing and bike wash (inside & outside) with complete
on-page SEO, ready to deploy on **Vercel** in one click.

## ✨ Services & Pricing

| Package | Price |
| --- | --- |
| Exterior Only | ₹2,000 |
| Interior Only (seats & cabin) | ₹2,000 |
| Exterior + Interior (signature) | ₹4,000 |
| Bike Wash — Inside & Outside | WhatsApp quote |

- ✅ Industrial **vacuum cleaner** available for every interior job
- ✅ Doorstep service across Bengaluru (Koramangala, HSR Layout, Indiranagar,
  Whitefield, Jayanagar, JP Nagar, Electronic City, Marathahalli & more)
- ✅ Open 9:00 AM – 8:00 PM, 7 days a week

## 📞 Contact (Director)

- **WhatsApp / Call:** +91 89042 19680 → [wa.me/918904219680](https://wa.me/918904219680)
- **Studio:** Koramangala, Bengaluru, Karnataka 560034

## 🛠 Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** — premium dark theme with gold accents
- Fully **client-side rendered** (`"use client"` page + components)
- `next/image` optimized, self-hosted images in `public/`

## 🚀 Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (same as Vercel)
npm run start    # serve the production build
```

## ☁️ Deploy to Vercel

The repo ships with a **`vercel.json`** (framework: Next.js, `npm ci` + `npm run build`,
Mumbai region `bom1`, security headers, immutable image caching) — Vercel picks it up
automatically.

1. Push this repository to GitHub (**the website lives on `main`** — the PR from
   `arena/26a66321-file-summarizer` has been merged, so a default Vercel import works).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto-detects **Next.js** — no extra config needed. Click **Deploy**.
4. (Recommended) Add your custom domain in **Project → Settings → Domains** and
   update `domain` in [`lib/site.js`](lib/site.js) so canonical URLs, Open Graph
   and the sitemap match your domain.
5. (Optional) Add your Google Search Console verification code in
   [`app/layout.jsx`](app/layout.jsx) and submit `https://yourdomain.com/sitemap.xml`
   in [Google Search Console](https://search.google.com/search-console).

**Troubleshooting:** if Vercel shows an old/empty site, check **Project → Settings →
Git → Production Branch** is set to `main` (the website is merged there).

## 🤖 AI Agents / LLM Crawling

- **`public/llms.txt`** — a markdown fact sheet for AI agents (services, prices,
  contact, areas, short answers). Served at `/llms.txt`.
- **`robots.txt`** explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot, Applebot-Extended, …) with full access.
- Rich JSON-LD (`LocalBusiness`, offers, reviews, FAQ) so assistants can quote
  prices, hours, phone and rating directly.

## 🔍 SEO Included

- ✅ Title template, meta description & 40+ keyword list
- ✅ Open Graph + Twitter `summary_large_image` cards (`public/og-image.jpg`)
- ✅ Canonical URL, `robots.txt` (AI-crawler friendly), dynamic **`/sitemap.xml`**, web app manifest
- ✅ JSON-LD structured data: `LocalBusiness` (with geo, hours, `AggregateRating`,
  `OfferCatalog` prices), `WebSite`, `FAQPage` → eligible for **rich results**
- ✅ Geo meta tags (IN-KA / Bengaluru) for local SEO
- ✅ Keyword-rich "About" section, FAQ rich-snippet content & keyword-optimized image alt text
- ✅ Semantic HTML (`header/nav/main/section/footer`, one `h1`, heading hierarchy)
- ✅ Image `alt` attributes, lazy loading, AVIF/WebP formats
- ✅ Branded 404 page, security headers & image caching via `vercel.json`

## 🎨 Customize

| What | Where |
| --- | --- |
| Name, phone, WhatsApp, address, domain | `lib/site.js` |
| Prices & packages | `PRICING` in `lib/site.js` |
| Reviews | `REVIEWS` in `lib/site.js` |
| Gallery photos | `public/gallery/` (+ `GALLERY` list) |
| Hero / OG image | `public/hero.jpg`, `public/og-image.jpg` |
| Colors & fonts | `app/globals.css` (`@theme`) |

## 📄 License

Private — © Premium Car Wash, Bengaluru.
