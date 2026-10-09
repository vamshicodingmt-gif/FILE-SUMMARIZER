"use client";

import Image from "next/image";
import { SITE, STATS, waLink } from "@/lib/site";
import { WhatsAppIcon, ArrowRightIcon, ChevronDownIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,5,7,0.92)_100%))]" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2c14e]">
            <span aria-hidden="true">⭐</span> 4.9 Rated · Premium Car Wash · {SITE.city}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Car Deserves a <span className="gold-text">Premium Wash</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Professional <strong className="text-white">car wash</strong>,{" "}
            <strong className="text-white">full detailing</strong> &{" "}
            <strong className="text-white">bike wash (inside &amp; outside)</strong> in
            Bengaluru. Exterior + Interior <strong className="text-[#f2c14e]">₹4,000</strong> ·
            Exterior only <strong className="text-[#f2c14e]">₹2,000</strong> · Interior only{" "}
            <strong className="text-[#f2c14e]">₹2,000</strong> — with industrial vacuum
            cleaning and doorstep service.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <WhatsAppIcon className="size-5" />
              Book on WhatsApp
            </a>
            <a href="#pricing" className="btn-ghost">
              View Pricing
              <ArrowRightIcon className="size-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll down to services"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-zinc-400 transition hover:text-[#f2c14e]"
      >
        <ChevronDownIcon className="size-7 animate-bounce" />
      </a>
    </section>
  );
}
