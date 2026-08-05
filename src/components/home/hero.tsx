"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { site } from "~/content/site";
import { Magnetic } from "~/components/motion/magnetic";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current) return;

      if (prefersReducedMotion()) {
        gsap.set(".hero-item", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-brand",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2 },
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 48 },
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 },
          "-=0.7",
        )
        .fromTo(
          ".hero-sub, .hero-cta, .hero-scroll",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
          "-=0.5",
        )
        .fromTo(
          ".hero-plane",
          { scale: 1.08 },
          { scale: 1, duration: 2.2, ease: "power2.out" },
          0,
        );

      gsap.to(".hero-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg"
    >
      <div className="hero-plane absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
      </div>

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[1600px]">
          <p className="hero-brand hero-item font-serif text-3xl tracking-tight text-ink opacity-0 md:text-5xl lg:text-6xl">
            {site.name}
          </p>

          <h1 className="mt-8 max-w-5xl text-display text-ink md:mt-12">
            {site.hero.headline.map((line) => (
              <span key={line} className="hero-line hero-item block opacity-0">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p className="hero-sub hero-item max-w-sm whitespace-pre-line text-body opacity-0">
              {site.hero.subtitle}
            </p>
            <div className="hero-cta hero-item flex flex-wrap items-center gap-8 opacity-0">
              <Magnetic>
                <Link
                  href="#work"
                  className={buttonVariants({ variant: "primary" })}
                  data-cursor="VIEW"
                >
                  {site.hero.ctaPrimary}
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-sm tracking-[0.18em] uppercase",
                  )}
                  data-cursor="START"
                >
                  {site.hero.ctaSecondary}
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="hero-scroll hero-item mt-14 opacity-0 md:mt-20">
            <div className="h-px w-full origin-left bg-ink/10">
              <div className="hero-progress h-px w-full origin-left scale-x-0 bg-ink/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
