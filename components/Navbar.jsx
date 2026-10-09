"use client";

import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "@/components/Icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function LogoMark({ className = "size-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe9a8" />
          <stop offset="55%" stopColor="#f2c14e" />
          <stop offset="100%" stopColor="#c9962e" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="#0e0e12" stroke="url(#goldGrad)" strokeWidth="2" />
      <path
        d="M24 10s9 10.2 9 16.4a9 9 0 0 1-18 0C15 20.2 24 10 24 10z"
        fill="url(#goldGrad)"
      />
      <path
        d="M20.5 27.5a4.5 4.5 0 0 0 3.5 4.3"
        fill="none"
        stroke="#050507"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="33" cy="13" r="2.2" fill="#f2c14e" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 py-2.5" : "py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="Premium Car Wash — home">
          <LogoMark />
          <span className="font-heading text-lg font-bold leading-none tracking-wide text-white">
            PREMIUM <span className="gold-text">CAR WASH</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.32em] text-zinc-400">
              {SITE.city}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-[#f2c14e]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-5 !py-2.5 text-sm"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp Booking
          </a>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#f2c14e]/60 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-white/10 lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/5 hover:text-[#f2c14e]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-3"
            >
              <WhatsAppIcon className="size-5" />
              Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost mt-2">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
