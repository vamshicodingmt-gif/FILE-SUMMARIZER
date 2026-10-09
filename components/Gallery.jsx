"use client";

import Image from "next/image";
import { GALLERY } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="section relative overflow-hidden bg-black/40">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="h2">Work That Speaks for Itself</h2>
          <p className="mt-4 text-zinc-400">
            A look inside our premium studio — real finishes, showroom shine, every
            time.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90}>
              <figure
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 50vw, 33vw"
                    }
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="font-heading text-sm font-semibold text-white">
                    {g.title}
                  </span>
                  <span className="rounded-full bg-[#f2c14e]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#f2c14e]">
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
