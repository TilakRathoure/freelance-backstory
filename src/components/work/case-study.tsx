"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { Project } from "~/content/projects";
import { Reveal } from "~/components/motion/reveal";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";
import { cn } from "~/lib/cn";

function GalleryBatch({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!ref.current || prefersReducedMotion()) return;

      const frames = ref.current.querySelectorAll(".gallery-frame");
      gsap.fromTo(
        frames,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("grid gap-4 md:grid-cols-2", className)}>
      {images.map((src, i) => (
        <div
          key={src + i}
          className={cn(
            "gallery-frame relative overflow-hidden opacity-0",
            i % 3 === 0 ? "aspect-[4/5]" : "aspect-[3/4]",
          )}
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function StatCount({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!ref.current || prefersReducedMotion()) return;

      gsap.fromTo(
        ref.current.querySelector(".stat-value"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref}>
      <p className="stat-value font-serif text-6xl text-ink md:text-7xl">
        {value}
      </p>
      <p className="text-label mt-4">{label}</p>
    </div>
  );
}

export function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const hero = useRef<HTMLElement>(null);
  const visual = [
    ...project.moodboard,
    ...project.photography,
    ...project.gallery,
  ].slice(0, 8);

  useGSAP(
    () => {
      registerGsap();
      if (!hero.current || prefersReducedMotion()) return;

      gsap.fromTo(
        ".case-hero-img",
        { scale: 1.1 },
        { scale: 1, duration: 1.8, ease: "power3.out" },
      );

      gsap.fromTo(
        ".case-hero-text",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.25,
        },
      );
    },
    { scope: hero },
  );

  return (
    <article>
      <section
        ref={hero}
        className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
      >
        <div className="case-hero-img absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <div className="mx-auto max-w-[1600px]">
            <p className="case-hero-text text-label text-beige/80">
              {project.category} — {project.year}
            </p>
            <h1 className="case-hero-text mt-4 font-serif text-6xl text-bg md:text-8xl lg:text-9xl">
              {project.title}
            </h1>
            <p className="case-hero-text mt-6 max-w-xl text-lg text-beige/90">
              {project.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="section mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-label mb-4">Overview</p>
            <h2 className="text-display-sm text-ink">The brief</h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
              {project.overview}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-10 space-y-2">
              {project.deliverables.map((d) => (
                <li key={d} className="text-sm tracking-wide text-muted">
                  — {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-beige/40">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
          <div className="px-6 py-20 md:sticky md:top-0 md:flex md:h-screen md:items-center md:px-10 md:py-0">
            <div>
              <p className="text-label mb-4">Problem</p>
              <h2 className="text-display-sm text-ink">What stood in the way</h2>
              <p className="text-body mt-8 max-w-md text-lg">{project.problem}</p>
            </div>
          </div>
          <div className="space-y-24 px-6 py-20 md:px-10 md:py-40">
            <div>
              <p className="text-label mb-4">Strategy</p>
              <h2 className="text-display-sm text-ink">How we approached it</h2>
              <p className="text-body mt-8 max-w-md text-lg">
                {project.strategy}
              </p>
            </div>
            <div>
              <p className="text-label mb-4">Direction</p>
              <h2 className="font-serif text-4xl text-ink md:text-5xl">
                Atmosphere & craft
              </h2>
              <p className="text-body mt-8 max-w-md text-lg">
                {project.creativeDirection}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-lg">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-serif text-5xl text-ink md:text-7xl">
              Visual chapter
            </p>
            <p className="text-body mt-4 max-w-md">
              Mood, photography, and selected frames — one immersive gallery.
            </p>
          </Reveal>
          <div className="mt-14">
            <GalleryBatch images={visual} alt={project.title} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="grid md:grid-cols-4">
          {project.colors.map((color) => (
            <div
              key={color}
              className="group relative flex h-[30vh] min-h-[180px] items-end p-6 transition-transform duration-700 ease-luxury hover:z-10 hover:scale-[1.02] md:h-[45vh]"
              style={{ backgroundColor: color }}
              data-cursor="VIEW"
            >
              <span
                className={`text-sm tracking-[0.2em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  color === "#111111" || color === "#1A1714"
                    ? "text-bg"
                    : "text-ink"
                }`}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
        <div className="section mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-serif text-3xl text-ink md:text-5xl">
              {project.brandIdentity}
            </p>
            <p className="text-label mt-8">
              {project.typography.display} / {project.typography.body}
            </p>
          </Reveal>
          <div className="mt-12">
            <GalleryBatch
              images={[...project.identity, ...project.packaging, ...project.website]}
              alt={`${project.title} identity`}
            />
          </div>
        </div>
      </section>

      <section className="section bg-beige/35">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="text-label mb-4">Results</p>
            <h2 className="text-display-sm text-ink">What changed</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {project.stats.map((stat) => (
              <StatCount
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[90svh] overflow-hidden bg-ink">
        <Link
          href={`/work/${next.slug}`}
          className="group absolute inset-0 block"
          data-cursor="OPEN"
        >
          <Image
            src={next.heroImage}
            alt={next.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-[1.6s] ease-luxury group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-ink/45 transition-colors duration-700 group-hover:bg-ink/35" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-10 md:pb-24">
            <div className="mx-auto max-w-[1600px]">
              <p className="text-label text-beige/70">Next Project</p>
              <h2 className="mt-4 font-serif text-5xl text-bg md:text-8xl">
                {next.title}
              </h2>
              <p className="mt-4 text-beige/80">
                {next.category} — {next.year}
              </p>
            </div>
          </div>
        </Link>
      </section>

      <div className="flex justify-center bg-ink px-6 pb-16">
        <Link
          href="/#work"
          className="link-underline text-label text-bg/70"
          data-cursor="VIEW"
        >
          All Work
        </Link>
      </div>
    </article>
  );
}
