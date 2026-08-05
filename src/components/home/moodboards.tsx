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
      if (prefersReducedMotion() || window.innerWidth < 768) return;

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
    },
    { scope: root },
  );

  return (
    <section ref={root} className="overflow-hidden bg-bg py-16 md:py-0">
      <div
        ref={track}
        className="flex flex-col gap-12 px-6 md:h-screen md:w-max md:flex-row md:items-center md:gap-16 md:px-10"
      >
        <div className="shrink-0 md:w-[28vw]">
          <p className="font-serif text-5xl text-ink md:text-7xl">
            Mood studies
          </p>
          <p className="text-body mt-5 max-w-xs">
            Horizontal boards — type beside the image, never stamped on it.
          </p>
        </div>

        {moodboards.map((item, i) => (
          <figure
            key={item.title}
            className={`shrink-0 ${
              item.phone
                ? "w-[70vw] max-w-[260px] md:w-[18vw]"
                : i % 3 === 0
                  ? "w-[85vw] max-w-xl md:w-[34vw]"
                  : "w-[75vw] max-w-md md:w-[26vw]"
            }`}
            data-cursor="VIEW"
          >
            <div
              className={`relative overflow-hidden ${
                item.phone
                  ? "aspect-[9/16] rounded-[2rem]"
                  : i % 4 === 0
                    ? "aspect-[5/6]"
                    : "aspect-[4/5] rounded-sm"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.caption}</p>
              </div>
              <span className="text-label">
                {String(i + 1).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
