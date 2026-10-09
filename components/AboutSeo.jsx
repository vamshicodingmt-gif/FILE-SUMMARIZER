"use client";

import { SITE, waLink, inr } from "@/lib/site";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

const POINTS = [
  `Exterior + Interior premium package — ${inr(4000)}`,
  `Exterior only wash — ${inr(2000)}`,
  `Interior only (seats & cabin) — ${inr(2000)}`,
  "Bike wash — inside & outside",
  "Industrial vacuum cleaner for deep interior cleaning",
  "Doorstep service across Bengaluru, 7 days a week",
];

export default function AboutSeo() {
  return (
    <section id="about" className="section relative overflow-hidden bg-black/40">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">About Premium Car Wash</span>
            <h2 className="h2">
              Premium Car Wash in Bengaluru — Car Detailing &amp; Bike Wash Near You
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              <p>
                Looking for a <strong className="text-zinc-200">premium car wash in Bengaluru</strong>?{" "}
                Premium Car Wash is Bengaluru's trusted premium car wash and detailing
                studio — serving <strong className="text-zinc-200">Koramangala, HSR Layout,
                Indiranagar, Whitefield, Jayanagar, JP Nagar, Electronic City,
                Marathahalli</strong> and every major area of Bengaluru (Bangalore),
                Karnataka.
              </p>
              <p>
                From a quick <strong className="text-zinc-200">exterior foam wash</strong> to a
                complete <strong className="text-zinc-200">interior + exterior detailing</strong>{" "}
                package, we deliver a showroom finish for cars and bikes alike. Every wash
                uses pH-neutral premium products and plush microfiber towels, and every
                interior job includes an <strong className="text-zinc-200">industrial vacuum
                cleaner</strong> for deep dust removal from seats, carpets and the boot.
              </p>
              <p>
                Prefer zero hassle? Our <strong className="text-zinc-200">doorstep car wash and
                detailing service</strong> comes to your home or office anywhere in Bengaluru —
                we bring the water, the vacuum and the shine. Open 9:00 AM – 8:00 PM,
                seven days a week, and rated <strong className="text-zinc-200">4.9★ by 127+
                customers</strong>.
              </p>
            </div>
            <div className="mt-8">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <WhatsAppIcon className="size-5" />
                Book the Best Premium Car Wash in Bengaluru
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-white">
                Premium Car Wash — Quick Facts
              </h3>
              <ul className="mt-5 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f2c14e]/15 text-[#f2c14e]">
                      <CheckIcon className="size-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-[#f2c14e]/30 bg-[#f2c14e]/5 p-4">
                <p className="text-sm text-zinc-300">
                  <span className="font-semibold text-white">Studio:</span> {SITE.address}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  <span className="font-semibold text-white">Hours:</span> {SITE.hours}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  <span className="font-semibold text-white">WhatsApp Director:</span>{" "}
                  {SITE.phoneDisplay}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
