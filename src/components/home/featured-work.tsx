"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projects } from "~/content/projects";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function FeaturedWork() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current || prefersReducedMotion()) return;

      const panels = gsap.utils.toArray<HTMLElement>(".work-panel");

      panels.forEach((panel) => {
        const image = panel.querySelector(".work-image");
        const text = panel.querySelectorAll(".work-text");

        gsap.fromTo(
          image,
          { scale: 1.15, filter: "blur(8px)" },
          {
            scale: 1,
            filter: "blur(0px)",
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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 60%",
              end: "top 20%",
              scrub: true,
            },
          },
        );

        if (window.innerWidth >= 768) {
          gsap.to(panel, {
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "+=55%",
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
      <div className="px-6 py-20 md:px-10">
        <p className="text-label text-beige/70">Featured Work</p>
        <h2 className="text-display-sm mt-4 text-bg">Selected stories</h2>
      </div>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="work-panel relative flex h-screen items-end overflow-hidden"
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          </div>
          <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-24">
            <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="work-text text-label text-beige/80">
                  {project.category} — {project.year}
                </p>
                <h3 className="work-text mt-3 font-serif text-5xl text-bg md:text-7xl lg:text-8xl">
                  {project.title}
                </h3>
              </div>
              <p className="work-text max-w-sm text-body text-beige/90">
                {project.excerpt}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
