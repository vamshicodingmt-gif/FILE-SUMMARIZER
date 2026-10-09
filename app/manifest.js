import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: "Premium Car Wash — Bengaluru",
    short_name: "Premium Car Wash",
    description:
      "Premium car wash, car detailing & bike wash in Bengaluru. Exterior + Interior ₹4,000 · Exterior ₹2,000 · Interior ₹2,000.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050507",
    theme_color: "#f2c14e",
    lang: "en-IN",
    categories: ["automotive", "lifestyle", "local business"],
    icons: [
      {
        src: "/icons/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
