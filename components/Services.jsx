"use client";

import { SERVICES, waLink } from "@/lib/site";
import { ServiceIcon, ArrowRightIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f2c14e]/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="h2">Everything Your Vehicle Needs</h2>
          <p className="mt-4 text-zinc-400">
            From a quick foam wash to a full studio-grade detail — one premium team for
            cars and bikes across Bengaluru.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="card group flex h-full flex-col">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f2c14e]/20 to-[#c9962e]/10 text-[#f2c14e] ring-1 ring-[#f2c14e]/30 transition duration-300 group-hover:scale-110">
                  <ServiceIcon name={s.icon} className="size-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
                <a
                  href={waLink(`Hi Premium Car Wash! I'm interested in ${s.title}. Please share details & a slot. 🚗`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f2c14e] transition gap hover:gap-2.5"
                >
                  Book this service
                  <ArrowRightIcon className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
