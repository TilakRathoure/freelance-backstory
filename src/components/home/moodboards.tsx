"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { moodboards } from "~/content/moodboards";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function Moodboards() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || !track.current) return;

      if (prefersReducedMotion() || window.innerWidth < 768) {
        return;
      }

      const amount = track.current.scrollWidth - window.innerWidth;

      gsap.to(track.current, {
        x: -amount,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${amount}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      gsap.to(root.current, {
        backgroundColor: "#E8DED1",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${amount}`,
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-hidden bg-bg py-24 md:py-0">
      <div className="px-6 md:absolute md:left-10 md:top-24 md:z-10 md:px-0">
        <p className="text-label mb-3">Moodboards</p>
        <h2 className="text-display-sm max-w-md text-ink">
          Horizontal studies.
        </h2>
      </div>
      <div
        ref={track}
        className="flex flex-col gap-8 px-6 md:h-screen md:w-max md:flex-row md:items-center md:gap-10 md:px-10 md:pt-20"
      >
        {moodboards.map((item) => (
          <article
            key={item.title}
            className={`relative shrink-0 overflow-hidden rounded-[1.75rem] ${
              item.phone
                ? "aspect-[9/16] w-[70vw] max-w-[280px] md:w-[22vw]"
                : "aspect-[4/5] w-[80vw] max-w-md md:w-[32vw]"
            }`}
            data-cursor="VIEW"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="40vw"
              className="object-cover transition-transform duration-[1.2s] ease-luxury hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
              <h3 className="font-serif text-2xl text-bg">{item.title}</h3>
              <p className="mt-1 text-sm text-beige/90">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
