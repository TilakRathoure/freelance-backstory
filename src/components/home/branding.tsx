"use client";

import Image from "next/image";
import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";
import { ParallaxImage } from "~/components/motion/parallax-image";

const visuals = [
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1626785774573-4b7993141ae4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1400&q=80",
];

export function Branding() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-label mb-4">{site.brandingShowcase.label}</p>
          <h2 className="text-display-sm mb-16 max-w-2xl whitespace-pre-line text-ink">
            {site.brandingShowcase.heading}
          </h2>
        </Reveal>

        <div className="mb-16 flex flex-wrap gap-3">
          {["#F8F6F2", "#111111", "#6D6256", "#B88A4A", "#E8DED1"].map(
            (color) => (
              <div
                key={color}
                className="flex h-24 w-24 items-end rounded-2xl border border-ink/10 p-3 md:h-32 md:w-32"
                style={{ backgroundColor: color }}
              >
                <span
                  className={`text-[10px] tracking-wider ${
                    color === "#111111" ? "text-bg" : "text-ink"
                  }`}
                >
                  {color}
                </span>
              </div>
            ),
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          {site.brandingShowcase.items.map((item, i) => (
            <Reveal
              key={item.title}
              className={
                i % 3 === 0
                  ? "md:col-span-7"
                  : i % 3 === 1
                    ? "md:col-span-5"
                    : "md:col-span-4"
              }
            >
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                {i % 2 === 0 ? (
                  <ParallaxImage
                    src={visuals[i]!}
                    alt={item.title}
                    className="h-full w-full"
                    speed={12}
                    sizes="60vw"
                  />
                ) : (
                  <Image
                    src={visuals[i]!}
                    alt={item.title}
                    fill
                    sizes="40vw"
                    className="object-cover transition-transform duration-[1.2s] ease-luxury group-hover:scale-105"
                  />
                )}
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-2xl text-bg md:text-3xl">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-beige">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-ink/10 pt-12">
          <p className="text-label mb-4">Typography</p>
          <p className="font-serif text-6xl text-ink md:text-8xl">Aa</p>
          <p className="mt-4 font-serif text-3xl text-muted">
            Cormorant Garamond — Editorial Display
          </p>
          <p className="mt-2 text-lg tracking-wide text-muted">
            Inter — Modern Sans for body & interface
          </p>
        </Reveal>
      </div>
    </section>
  );
}
