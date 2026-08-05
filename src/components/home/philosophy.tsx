"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { site } from "~/content/site";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function Philosophy() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || prefersReducedMotion()) return;

      const steps = gsap.utils.toArray<HTMLElement>(".phil-step");

      if (window.innerWidth < 768) {
        gsap.set(steps, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(steps, { opacity: 0.25, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${steps.length * 80}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      steps.forEach((step, i) => {
        tl.to(step, { opacity: 1, y: 0, duration: 1 }, i).to(
          step,
          { opacity: i === steps.length - 1 ? 1 : 0.25, duration: 1 },
          i + 0.7,
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-beige/40 px-6 py-24 md:px-10">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center">
        <p className="text-label mb-4">{site.philosophy.label}</p>
        <h2 className="text-display-sm mb-16 max-w-3xl whitespace-pre-line text-ink">
          {site.philosophy.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-5">
          {site.philosophy.steps.map((step, i) => (
            <article
              key={step.title}
              className="phil-step border-t border-ink/15 pt-6"
            >
              <span className="text-label mb-4 block">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl text-ink md:text-4xl">
                {step.title}
              </h3>
              <p className="text-body mt-4 text-sm md:text-base">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
