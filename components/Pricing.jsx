"use client";

import { PRICING, waLink, inr } from "@/lib/site";
import { CheckIcon, WhatsAppIcon, SparkleIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="section relative overflow-hidden bg-black/40">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-1/2 h-80 w-80 translate-x-1/2 rounded-full bg-[#f2c14e]/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="h2">Simple, Honest Prices</h2>
          <p className="mt-4 text-zinc-400">
            No hidden charges. Every package includes industrial vacuum cleaning,
            premium products and a satisfaction guarantee.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p, i) => {
            const message = p.price
              ? `Hi Premium Car Wash! I'd like to book the "${p.name}" package (${inr(p.price)}) in Bengaluru. Please confirm a slot. 🚗✨`
              : "Hi Premium Car Wash! I'd like a quote for the Bike Wash (inside & outside) in Bengaluru. 🏍️";
            return (
              <Reveal key={p.name} delay={i * 90}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${
                    p.popular
                      ? "border border-[#f2c14e]/70 bg-gradient-to-b from-[#f2c14e]/10 to-[#c9962e]/5 shadow-2xl shadow-amber-500/20 lg:-translate-y-3"
                      : "glass"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#f2c14e] to-[#c9962e] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
                      <SparkleIcon className="size-3.5" />
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-heading text-lg font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400">{p.tagline}</p>

                  <div className="mt-5">
                    {p.price ? (
                      <span className="font-heading text-4xl font-extrabold text-white">
                        {inr(p.price)}
                      </span>
                    ) : (
                      <span className="font-heading text-3xl font-extrabold gold-text">
                        On Request
                      </span>
                    )}
                    <span className="ml-2 text-sm text-zinc-500">
                      {p.price ? "per vehicle" : "WhatsApp quote"}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f2c14e]/15 text-[#f2c14e]">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 w-full ${p.popular ? "btn-gold" : "btn-ghost"}`}
                  >
                    <WhatsAppIcon className="size-5" />
                    {p.price ? "Book on WhatsApp" : "Get Bike Quote"}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-zinc-500">
            ✔ All prices inclusive of taxes · ✔ Doorstep service across Bengaluru · ✔
            Industrial vacuum cleaner available for every interior job
          </p>
        </Reveal>
      </div>
    </section>
  );
}
