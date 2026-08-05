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

const collage = [
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    className: "left-[8%] top-[18%] h-[38vh] w-[28vw] max-w-xs",
  },
  {
    src: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    className: "right-[10%] top-[12%] h-[32vh] w-[22vw] max-w-[240px]",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    className: "bottom-[14%] left-[18%] h-[28vh] w-[24vw] max-w-[260px]",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80",
    className: "bottom-[18%] right-[16%] h-[34vh] w-[26vw] max-w-[280px]",
  },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!root.current) return;

      if (prefersReducedMotion()) {
        gsap.set(".hero-item", { opacity: 1, y: 0, scale: 1, filter: "none" });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-logo",
        { opacity: 0, scale: 1.15, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 },
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.12 },
          "-=0.6",
        )
        .fromTo(
          ".hero-sub, .hero-cta, .hero-scroll",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
          "-=0.5",
        )
        .fromTo(
          ".hero-float",
          { opacity: 0, scale: 1.12, y: 40 },
          { opacity: 0.9, scale: 1, y: 0, duration: 1.6, stagger: 0.15 },
          "-=1.4",
        );

      gsap.to(".hero-float", {
        y: "+=18",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".hero-bg-zoom", {
        scale: 1.08,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 pt-24 md:px-10"
    >
      <div className="hero-bg-zoom pointer-events-none absolute inset-0 scale-100 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/70" />
      </div>

      {collage.map((item, i) => (
        <div
          key={item.src}
          className={cn(
            "hero-float pointer-events-none absolute hidden overflow-hidden rounded-[1.5rem] opacity-0 shadow-2xl md:block",
            item.className,
          )}
          style={{ zIndex: i + 1 }}
        >
          <Image
            src={item.src}
            alt=""
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="hero-logo hero-item text-label mb-8 opacity-0">
          {site.name}
        </p>
        <h1 className="text-display text-ink">
          {site.hero.headline.map((line) => (
            <span key={line} className="hero-line hero-item block opacity-0">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-sub hero-item mt-8 max-w-md whitespace-pre-line text-body opacity-0">
          {site.hero.subtitle}
        </p>
        <div className="hero-cta hero-item mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0">
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
              className={buttonVariants({ variant: "outline" })}
              data-cursor="START"
            >
              {site.hero.ctaSecondary}
            </Link>
          </Magnetic>
        </div>
        <div className="hero-scroll hero-item mt-16 flex flex-col items-center gap-3 opacity-0">
          <span className="text-label">Scroll</span>
          <span className="block h-12 w-px origin-top animate-pulse bg-ink/30" />
        </div>
      </div>
    </section>
  );
}
