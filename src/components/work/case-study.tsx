"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { Project } from "~/content/projects";
import { Reveal } from "~/components/motion/reveal";
import { ParallaxImage } from "~/components/motion/parallax-image";
import { buttonVariants } from "~/components/ui/button";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";
import { cn } from "~/lib/cn";

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="text-label mb-4">{label}</p>
      <h2 className="text-display-sm text-ink">{title}</h2>
    </Reveal>
  );
}

function ImageGrid({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", className)}>
      {images.map((src, i) => (
        <Reveal key={src + i} delay={i * 0.05}>
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.5rem]",
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
        </Reveal>
      ))}
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

  useGSAP(
    () => {
      registerGsap();
      if (!hero.current || prefersReducedMotion()) return;

      gsap.fromTo(
        ".case-hero-img",
        { scale: 1.12, filter: "blur(10px)" },
        { scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power3.out" },
      );

      gsap.fromTo(
        ".case-hero-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    },
    { scope: hero },
  );

  return (
    <article>
      <section
        ref={hero}
        className="relative flex min-h-screen items-end overflow-hidden bg-ink"
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
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

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading label="Overview" title="The brief" />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="text-body text-lg md:text-xl">{project.overview}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-10 flex flex-wrap gap-3">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-ink/15 px-4 py-2 text-sm text-muted"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-beige/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <div>
            <SectionHeading label="Problem" title="What stood in the way" />
            <Reveal>
              <p className="text-body mt-8 text-lg">{project.problem}</p>
            </Reveal>
          </div>
          <div>
            <SectionHeading label="Strategy" title="How we approached it" />
            <Reveal>
              <p className="text-body mt-8 text-lg">{project.strategy}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Moodboard" title="Visual direction" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {project.moodboard.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <ParallaxImage
                    src={src}
                    alt={`${project.title} moodboard ${i + 1}`}
                    className="h-full w-full"
                    speed={10}
                    sizes="33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading
              label="Creative Direction"
              title="Atmosphere & craft"
            />
            <Reveal>
              <p className="text-body mt-8 text-lg">
                {project.creativeDirection}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ImageGrid images={project.content} alt={`${project.title} content`} />
          </div>
        </div>
      </section>

      <section className="bg-bg px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Brand Identity" title="Systems that endure" />
          <Reveal>
            <p className="text-body mt-8 max-w-2xl text-lg">
              {project.brandIdentity}
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.colors.map((color) => (
              <div
                key={color}
                className="flex h-24 w-24 items-end rounded-2xl border border-ink/10 p-3"
                style={{ backgroundColor: color }}
              >
                <span
                  className={`text-[10px] ${
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
          <p className="mt-8 font-serif text-2xl text-ink">
            {project.typography.display} / {project.typography.body}
          </p>
          <div className="mt-12">
            <ImageGrid images={project.identity} alt={`${project.title} identity`} />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Instagram Feed" title="Social cadence" />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.feed.map((src, i) => (
              <Reveal key={src + i} delay={i * 0.04}>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${project.title} feed ${i + 1}`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Photography" title="Campaign stills" />
          <div className="mt-12 space-y-4">
            {project.photography.map((src, i) => (
              <Reveal key={src}>
                <div className="relative aspect-[21/9] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={src}
                    alt={`${project.title} photography ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige/40 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <div>
            <SectionHeading label="Packaging" title="Tactile moments" />
            <div className="mt-10">
              <ImageGrid
                images={project.packaging}
                alt={`${project.title} packaging`}
                className="md:grid-cols-1"
              />
            </div>
          </div>
          <div>
            <SectionHeading label="Website" title="Digital presence" />
            <div className="mt-10">
              <ImageGrid
                images={project.website}
                alt={`${project.title} website`}
                className="md:grid-cols-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Results" title="What changed" />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {project.stats.map((stat) => (
              <Reveal key={stat.label}>
                <p className="font-serif text-6xl text-ink md:text-7xl">
                  {stat.value}
                </p>
                <p className="text-label mt-4">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading label="Gallery" title="Selected frames" />
          <div className="mt-12">
            <ImageGrid images={project.gallery} alt={`${project.title} gallery`} />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-label mb-4">Next Project</p>
            <Link
              href={`/work/${next.slug}`}
              className="font-serif text-5xl text-ink transition-colors duration-500 hover:text-gold md:text-7xl"
              data-cursor="OPEN"
            >
              {next.title}
            </Link>
            <p className="mt-3 text-muted">
              {next.category} — {next.year}
            </p>
          </div>
          <Link
            href="/#work"
            className={buttonVariants({ variant: "outline" })}
            data-cursor="VIEW"
          >
            All Work
          </Link>
        </div>
      </section>
    </article>
  );
}
