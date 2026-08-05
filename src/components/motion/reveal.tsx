"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "~/lib/cn";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

type RevealVariant = "fade-up" | "clip" | "mask" | "none";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!ref.current || variant === "none") return;

      const el = ref.current;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0, clearProps: "clipPath,transform" });
        return;
      }

      if (variant === "clip" || variant === "mask") {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.25,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [variant, delay, y] },
  );

  return (
    <div
      ref={ref}
      className={cn(variant === "fade-up" && "opacity-0", className)}
    >
      {children}
    </div>
  );
}
