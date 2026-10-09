"use client";

import { REVIEWS, RATING } from "@/lib/site";
import { StarIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Stars({ count = 5, className = "size-4" }) {
  return (
    <div className="flex gap-0.5 text-[#f2c14e]" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-[#f2c14e]/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Google Reviews</span>
          <h2 className="h2">Loved by Bengaluru Vehicle Owners</h2>

          <div className="mt-6 inline-flex items-center gap-4 rounded-3xl glass px-6 py-4">
            <span className="font-heading text-5xl font-extrabold gold-text">
              {RATING.score}
            </span>
            <div className="text-left">
              <Stars className="size-5" />
              <p className="mt-1 text-sm text-zinc-400">
                Based on {RATING.count}+ verified Google reviews
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 90}>
              <article className="card flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-zinc-400">
                    Google Review
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  “{r.text}”
                </blockquote>
                <footer className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f2c14e] to-[#c9962e] font-heading text-sm font-bold text-black"
                  >
                    {initials(r.name)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-zinc-500">
                      {r.meta} · {r.date}
                    </div>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
