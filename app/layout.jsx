import "./globals.css";
import { SITE, SEO, PRICING, REVIEWS, FAQS } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: SEO.title,
    template: "%s | Premium Car Wash Bengaluru",
  },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: "Premium Car Wash Bengaluru",
  authors: [{ name: "Premium Car Wash", url: SITE.domain }],
  creator: "Premium Car Wash",
  publisher: "Premium Car Wash",
  category: "Automotive Services",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Premium Car Wash Bengaluru",
    title: "Premium Car Wash Bengaluru | Car Detailing & Bike Wash — ₹2,000 onwards",
    description:
      "Professional car wash, full detailing & bike wash (inside/outside) in Bengaluru. Exterior + Interior ₹4,000 · Exterior ₹2,000 · Interior ₹2,000. Industrial vacuum & doorstep service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Car Wash Bengaluru — gleaming luxury car at a premium wash studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Car Wash Bengaluru | Car Detailing & Bike Wash",
    description:
      "Premium car wash, detailing & bike wash in Bengaluru from ₹2,000. Book on WhatsApp +91 89042 19680.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.svg", type: "image/svg+xml", sizes: "192x192" },
    ],
    apple: [{ url: "/icons/icon-192.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: ["/logo.svg"],
  },
  manifest: "/manifest.webmanifest",
  // Local-SEO geo tags
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    ICBM: "12.9716, 77.5946",
    "business:contact_data:street_address": "Koramangala",
    "business:contact_data:locality": "Bengaluru",
    "business:contact_data:region": "Karnataka",
    "business:contact_data:postal_code": "560034",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": SITE.phoneRaw,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
    { media: "(prefers-color-scheme: light)", color: "#f2c14e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD structured data (LocalBusiness + Offers + Reviews + FAQ + WebSite)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": `${SITE.domain}/#business`,
      name: SITE.name,
      alternateName: "Premium Car Wash Bangalore",
      description: SEO.description,
      url: SITE.domain,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      priceRange: "₹₹",
      image: [`${SITE.domain}/og-image.jpg`, `${SITE.domain}/hero.jpg`],
      logo: `${SITE.domain}/logo.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koramangala",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560034",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9352,
        longitude: 77.6245,
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: REVIEWS.slice(0, 4).map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: r.text,
      })),
      sameAs: [`https://wa.me/${SITE.whatsapp}`],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Car wash & detailing services",
        itemListElement: PRICING.filter((p) => p.price).map((p) => ({
          "@type": "Offer",
          name: `${p.name} — Premium Car Wash Bengaluru`,
          description: p.tagline,
          price: p.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `${SITE.domain}/#pricing`,
          itemOffered: {
            "@type": "Service",
            name: p.name,
            areaServed: { "@type": "City", name: "Bengaluru" },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.domain}/#website`,
      url: SITE.domain,
      name: "Premium Car Wash Bengaluru",
      description: SEO.description,
      publisher: { "@id": `${SITE.domain}/#business` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.domain}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        {/* Premium fonts — loaded by the browser (build stays network-free) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Search Console verification — replace content with your code */}
        {/* <meta name="google-site-verification" content="YOUR_CODE_HERE" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
