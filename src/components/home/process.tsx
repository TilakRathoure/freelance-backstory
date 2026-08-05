"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { site } from "~/content/site";
import { Reveal } from "~/components/motion/reveal";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || prefersReducedMotion()) return;

      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.3, x: -20 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-label mb-4">{site.process.label}</p>
          <h2 className="text-display-sm mb-20 max-w-xl whitespace-pre-line text-ink">
            {site.process.heading}
          </h2>
        </Reveal>
        <div className="relative pl-8 md:pl-12">
          <div className="process-line absolute bottom-0 left-0 top-0 w-px origin-top bg-gold" />
          <ol className="space-y-10 md:space-y-14">
            {site.process.steps.map((step, i) => (
              <li key={step} className="process-step relative">
                <span className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full bg-ink md:-left-[2.9rem]" />
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                  <span className="text-label w-16">0{i + 1}</span>
                  <h3 className="font-serif text-4xl text-ink md:text-6xl">
                    {step}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
