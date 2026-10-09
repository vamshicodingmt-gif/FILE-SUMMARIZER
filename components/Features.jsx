"use client";

import { FEATURES } from "@/lib/site";
import { ServiceIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Features() {
  return (
    <section id="why-us" className="section relative overflow-hidden">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="h2">The Premium Difference</h2>
          <p className="mt-4 text-zinc-400">
            We treat every car and bike like our own — with the right tools, the
            right products and the right people.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article className="card text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f2c14e]/20 to-[#c9962e]/10 text-[#f2c14e] ring-1 ring-[#f2c14e]/30">
                  <ServiceIcon name={f.icon} className="size-8" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
