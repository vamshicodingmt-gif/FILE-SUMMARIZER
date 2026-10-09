"use client";

import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 text-center">
      <div>
        <p className="eyebrow">404 — Page Not Found</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          This Spot Is <span className="gold-text">Spotless…</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          The page you're looking for took a wrong turn. Head back to Premium Car
          Wash, Bengaluru — or book your wash right now.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/" className="btn-gold">
            Back to Home
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <WhatsAppIcon className="size-5" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
