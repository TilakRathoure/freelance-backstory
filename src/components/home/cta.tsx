"use client";

import Image from "next/image";
import { site } from "~/content/site";
import { Magnetic } from "~/components/motion/magnetic";
import { Reveal } from "~/components/motion/reveal";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="section relative z-10 mx-auto grid w-full max-w-[1600px] gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="text-display text-bg">
              {site.cta.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-body text-beige/75">
              {site.positioning}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={0.15}>
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${site.email}`}
                className="link-underline font-serif text-3xl text-bg md:text-4xl"
                data-cursor="EMAIL"
              >
                {site.email}
              </a>
            </Magnetic>
            <p className="text-label mt-8 text-beige/50">{site.cta.button}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
