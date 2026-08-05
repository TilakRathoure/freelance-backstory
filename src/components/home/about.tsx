"use client";

import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";
import { ParallaxImage } from "~/components/motion/parallax-image";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-30 max-md:hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-full w-full"
          speed={15}
        />
      </div>
      <div className="relative mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-label mb-6">{site.about.label}</p>
            <h2 className="text-display-sm whitespace-pre-line text-ink">
              {site.about.heading}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          {site.about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.1 * (i + 1)}>
              <p className="text-body mb-8 text-lg md:text-xl">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="font-serif text-2xl text-ink md:text-3xl">
              {site.positioning}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
