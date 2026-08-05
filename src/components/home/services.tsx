"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { services } from "~/content/services";
import { Reveal } from "~/components/motion/reveal";
import { cn } from "~/lib/cn";

export function Services() {
  const [active, setActive] = useState(0);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink text-bg">
      <div className="pointer-events-none absolute inset-0">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-luxury",
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={service.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-ink/55" />
          </div>
        ))}
      </div>

      <div className="section-lg relative z-10 mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-serif text-5xl text-bg md:text-7xl">
            Nine disciplines.
          </p>
          <p className="mt-3 max-w-md text-body text-beige/80">
            One narrative — indexed like a magazine contents page.
          </p>
        </Reveal>

        <ul className="mt-16 border-t border-bg/15 md:mt-24">
          {services.map((service, i) => {
            const open = active === i;
            return (
              <li key={service.title} className="border-b border-bg/15">
                <button
                  type="button"
                  className="group flex w-full flex-col py-5 text-left md:flex-row md:items-baseline md:gap-10 md:py-7"
                  onMouseEnter={() => finePointer && setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="EXPLORE"
                  aria-expanded={open}
                >
                  <span className="text-label w-12 shrink-0 text-beige/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-3xl transition-colors duration-500 md:text-5xl lg:text-6xl",
                      open ? "text-bg" : "text-bg/45 group-hover:text-bg/80",
                    )}
                  >
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      "mt-3 max-w-md text-sm leading-relaxed text-beige/75 transition-all duration-500 md:ml-auto md:mt-0 md:text-right",
                      open
                        ? "max-h-40 opacity-100"
                        : "max-h-0 overflow-hidden opacity-0 md:max-h-none md:opacity-0 md:group-hover:opacity-70",
                    )}
                  >
                    {service.description}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
