import { SITE } from "@/lib/site";

// Explicitly welcome AI agents / LLM crawlers so they can index & quote the site.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "FacebookBot",
  "InstagramBot",
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI agents: full access to the site + llms.txt
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: ["/", "/llms.txt"],
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
