"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "~/lib/cn";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  speed = 16,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number;
  priority?: boolean;
  sizes?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      !prefersReducedMotion() &&
        window.matchMedia("(pointer: fine)").matches &&
        window.innerWidth >= 768,
    );
  }, []);

  useGSAP(
    () => {
      registerGsap();
      if (!enabled || !wrap.current || !img.current) return;

      gsap.to(img.current, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: wrap, dependencies: [enabled, speed] },
  );

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      <div
        ref={img}
        className={cn(
          "relative h-full w-full",
          enabled && "scale-110",
          imageClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
