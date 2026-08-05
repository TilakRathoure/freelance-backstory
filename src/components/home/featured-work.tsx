"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projects } from "~/content/projects";
import { cn } from "~/lib/cn";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

const layouts = ["left", "center", "right"] as const;

export function FeaturedWork() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || prefersReducedMotion()) return;

      const panels = gsap.utils.toArray<HTMLElement>(".work-panel");

      panels.forEach((panel, index) => {
        const image = panel.querySelector(".work-image");
        const text = panel.querySelectorAll(".work-text");
        const direction = index % 2 === 0 ? 1.08 : 1.12;

        gsap.fromTo(
          image,
          { scale: direction },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          text,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 65%",
              end: "top 25%",
              scrub: true,
            },
          },
        );

        if (window.innerWidth >= 768) {
          gsap.to(panel, {
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "+=50%",
              pin: true,
              pinSpacing: false,
              scrub: true,
            },
          });
        }
      });
    },
    { scope: root },
  );

  return (
    <section id="work" ref={root} className="relative bg-ink">
      <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-10">
        <p className="text-label text-bg/80">Selected Work</p>
        <p className="text-label text-bg/50">
          {String(projects.length).padStart(2, "0")} Stories
        </p>
      </div>

      {projects.map((project, i) => {
        const layout = layouts[i % layouts.length]!;
        return (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="work-panel relative flex h-[100svh] items-end overflow-hidden"
            data-cursor="VIEW"
          >
            <div className="work-image absolute inset-0">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div
              className={cn(
                "relative z-10 w-full px-6 pb-16 md:px-10 md:pb-24",
                layout === "center" && "text-center",
                layout === "right" && "md:text-right",
              )}
            >
              <div
                className={cn(
                  "mx-auto flex max-w-[1600px] flex-col gap-4",
                  layout === "center" && "items-center",
                  layout === "right" && "md:items-end",
                  layout === "left" && "md:flex-row md:items-end md:justify-between",
                )}
              >
                <div>
                  <p className="work-text text-label text-beige/75">
                    {String(i + 1).padStart(2, "0")} — {project.category}
                  </p>
                  <h3 className="work-text mt-3 font-serif text-5xl text-bg md:text-7xl lg:text-8xl">
                    {project.title}
                  </h3>
                </div>
                <p
                  className={cn(
                    "work-text max-w-sm text-sm leading-relaxed text-beige/85",
                    layout === "center" && "mx-auto",
                  )}
                >
                  {project.year} · {project.excerpt}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
