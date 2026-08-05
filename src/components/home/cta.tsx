"use client";

import { site } from "~/content/site";
import { Magnetic } from "~/components/motion/magnetic";
import { Reveal } from "~/components/motion/reveal";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";

export function Cta() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center justify-center bg-ink px-6 py-28 md:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-display text-bg">
            {site.cta.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md text-body text-beige/80">
            {site.positioning}
          </p>
        </Reveal>
        <Reveal delay={0.25} className="mt-12">
          <Magnetic strength={0.45}>
            <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ variant: "gold", size: "lg" }))}
              data-cursor="EMAIL"
            >
              {site.cta.button}
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
