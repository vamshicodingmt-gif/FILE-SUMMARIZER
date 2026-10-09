"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";
import { PlusIcon, MinusIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section relative overflow-hidden bg-black/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">FAQs</span>
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="mt-4 text-zinc-400">
              Everything you need to know before booking your premium wash in
              Bengaluru. Still curious? WhatsApp us — we reply within minutes.
            </p>
          </Reveal>

          <div className="space-y-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="glass rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-heading text-base font-semibold text-white">
                        {f.q}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f2c14e]/15 text-[#f2c14e] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        {isOpen ? (
                          <MinusIcon className="size-4" />
                        ) : (
                          <PlusIcon className="size-4" />
                        )}
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-400">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
