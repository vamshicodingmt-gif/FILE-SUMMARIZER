"use client";

import { SITE, waLink } from "@/lib/site";
import {
  WhatsAppIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  MailIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f2c14e]/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Book Now</span>
          <h2 className="h2">Book Your Premium Wash Today</h2>
          <p className="mt-4 text-zinc-400">
            Message us on WhatsApp or give the director a call — we confirm your
            slot instantly.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Contact details */}
          <Reveal>
            <div className="card flex h-full flex-col">
              <h3 className="font-heading text-xl font-semibold text-white">
                Reach Us
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Premium Car Wash · {SITE.address}
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-[#25D366]/50 hover:bg-[#25D366]/5"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                      <WhatsAppIcon className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-zinc-500">
                        WhatsApp (Director)
                      </span>
                      <span className="font-heading text-lg font-semibold text-white">
                        {SITE.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-[#f2c14e]/50 hover:bg-[#f2c14e]/5"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#f2c14e]/15 text-[#f2c14e]">
                      <PhoneIcon className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-zinc-500">
                        Call Us
                      </span>
                      <span className="font-heading text-lg font-semibold text-white">
                        {SITE.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                    <PinIcon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      Studio & Doorstep
                    </span>
                    <span className="text-sm font-medium text-white">
                      Koramangala, Bengaluru 560034
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                    <ClockIcon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      Open
                    </span>
                    <span className="text-sm font-medium text-white">
                      {SITE.hours}
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                    <MailIcon className="size-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-zinc-500">
                      Email
                    </span>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-medium text-white transition hover:text-[#f2c14e]"
                    >
                      {SITE.email}
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  Areas we serve
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SITE.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Booking card + map */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-6">
              <div className="card relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-40 rounded-full bg-[#f2c14e]/15 blur-2xl"
                />
                <h3 className="font-heading text-xl font-semibold text-white">
                  Instant Booking on WhatsApp
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Tap below and send us a pre-filled message — we'll confirm your
                  slot, price and free pickup &amp; drop within minutes.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1"
                  >
                    <WhatsAppIcon className="size-5" />
                    Chat on WhatsApp
                  </a>
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-ghost flex-1">
                    <PhoneIcon className="size-5" />
                    Call Now
                  </a>
                </div>
                <p className="mt-4 text-xs text-zinc-500">
                  ⭐ 4.9 rating · 5,200+ vehicles detailed · Open 7 days, 9 AM – 8 PM
                </p>
              </div>

              <div className="glass relative min-h-[300px] flex-1 overflow-hidden rounded-3xl">
                <iframe
                  title="Premium Car Wash location — Koramangala, Bengaluru"
                  src="https://www.google.com/maps?q=Koramangala,+Bengaluru,+Karnataka,+India&z=13&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.92] contrast-[0.9]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
