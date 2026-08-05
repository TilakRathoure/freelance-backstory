"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";
import { cn } from "~/lib/cn";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  ScrollTrigger,
} from "~/lib/gsap";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const step = site.process.steps[active]!;

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || prefersReducedMotion()) return;
      if (window.innerWidth < 768) return;

      const steps = gsap.utils.toArray<HTMLElement>(".process-trigger");
      steps.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-lg bg-beige/35">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-label mb-5">{site.process.label}</p>
          <h2 className="text-display-sm max-w-xl whitespace-pre-line text-ink">
            {site.process.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
              {site.process.steps.map((s, i) => (
                <div
                  key={s.title}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-luxury",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 font-serif text-3xl text-ink md:text-4xl">
              {step.title}
            </p>
            <p className="text-body mt-4 max-w-md">{step.body}</p>
          </div>

          <ol className="md:col-span-6 md:col-start-7">
            {site.process.steps.map((s, i) => (
              <li
                key={s.title}
                className="process-trigger border-t border-ink/10 py-8 last:border-b md:py-14"
              >
                <button
                  type="button"
                  className="flex w-full items-baseline gap-6 text-left"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="VIEW"
                >
                  <span className="text-label w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-4xl transition-colors duration-500 md:text-6xl",
                      i === active ? "text-ink" : "text-ink/30",
                    )}
                  >
                    {s.title}
                  </span>
                </button>
                <p
                  className={cn(
                    "mt-4 max-w-md pl-16 text-sm leading-relaxed text-muted transition-opacity duration-500 md:hidden",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
