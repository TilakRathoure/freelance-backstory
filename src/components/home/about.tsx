"use client";

import Image from "next/image";
import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="relative h-[48vh] min-h-[320px] w-full md:h-[62vh]">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/15" />
        <Reveal
          variant="fade-up"
          className="absolute inset-x-6 bottom-8 md:inset-x-10 md:bottom-14"
        >
          <p className="max-w-4xl font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-bg">
            {site.about.pullQuote}
          </p>
        </Reveal>
      </div>

      <div className="section mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-label mb-5">{site.about.label}</p>
            <h2 className="text-display-sm whitespace-pre-line text-ink">
              {site.about.heading}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.05}>
            <p className="font-serif text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
              {site.about.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-body mt-8 max-w-xl text-base md:text-lg">
              {site.about.paragraphs[1]}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-12 max-w-md text-sm leading-relaxed tracking-wide text-muted">
              {site.positioning}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
