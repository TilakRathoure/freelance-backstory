"use client";

import Image from "next/image";
import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";

const visuals = [
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1600&q=80",
];

const fields = [
  { color: "#111111", label: "Ink" },
  { color: "#B88A4A", label: "Gold" },
  { color: "#E8DED1", label: "Beige" },
  { color: "#F8F6F2", label: "Paper" },
];

export function Branding() {
  return (
    <section className="section-lg">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h2 className="text-display-sm max-w-2xl whitespace-pre-line text-ink">
            {site.brandingShowcase.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid h-[50vh] min-h-[280px] grid-cols-2 overflow-hidden md:mt-24 md:h-[70vh] md:grid-cols-4">
          {fields.map((field) => (
            <button
              key={field.label}
              type="button"
              className="group relative transition-transform duration-700 ease-luxury hover:z-10 hover:scale-[1.02]"
              style={{ backgroundColor: field.color }}
              data-cursor="VIEW"
            >
              <span
                className={`absolute bottom-5 left-5 text-sm tracking-[0.2em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  field.color === "#111111" ? "text-bg" : "text-ink"
                }`}
              >
                {field.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-12">
          {site.brandingShowcase.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className={
                i % 3 === 0
                  ? "md:col-span-7"
                  : i % 3 === 1
                    ? "md:col-span-5"
                    : "md:col-span-4"
              }
            >
              <figure>
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={visuals[i]!}
                    alt={item.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <p className="font-serif text-2xl text-ink md:text-3xl">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
