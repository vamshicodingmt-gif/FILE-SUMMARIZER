"use client";

import { SITE, waLink } from "@/lib/site";
import {
  WhatsAppIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/Icons";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICES_LIST = [
  "Premium Car Wash",
  "Full Car Detailing",
  "Bike Wash (Inside & Outside)",
  "Interior Deep Clean & Vacuum",
  "Doorstep Service — Bengaluru",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="size-10" aria-hidden="true">
                <rect x="2" y="2" width="44" height="44" rx="13" fill="#0e0e12" stroke="#f2c14e" strokeWidth="2" />
                <path d="M24 10s9 10.2 9 16.4a9 9 0 0 1-18 0C15 20.2 24 10 24 10z" fill="#f2c14e" />
              </svg>
              <span className="font-heading text-lg font-bold tracking-wide text-white">
                PREMIUM <span className="gold-text">CAR WASH</span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.32em] text-zinc-400">
                  {SITE.city}
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Bengaluru's premium car wash &amp; detailing studio. Exterior + Interior
              ₹4,000 · Exterior ₹2,000 · Interior ₹2,000 · Bike wash inside &amp;
              outside.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppIcon className="size-5" />
              </a>
              <a
                href="#home"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-[#f2c14e] hover:text-[#f2c14e]"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="#home"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-[#f2c14e] hover:text-[#f2c14e]"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-zinc-400 transition hover:text-[#f2c14e]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="text-sm text-zinc-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 size-4 shrink-0 text-[#f2c14e]" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="size-4 shrink-0 text-[#f2c14e]" />
                <a href={`tel:${SITE.phoneRaw}`} className="transition hover:text-[#f2c14e]">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="size-4 shrink-0 text-[#25D366]" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#25D366]"
                >
                  WhatsApp the Director
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ClockIcon className="size-4 shrink-0 text-[#f2c14e]" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}, {SITE.city}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Premium Car Wash · Car Detailing · Bike Wash — Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  );
}
