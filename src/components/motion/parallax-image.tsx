"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "~/lib/cn";
import { gsap, prefersReducedMotion, registerGsap } from "~/lib/gsap";

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  speed = 20,
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

  useGSAP(
    () => {
      registerGsap();
      if (!wrap.current || !img.current || prefersReducedMotion()) return;

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
    { scope: wrap },
  );

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      <div ref={img} className={cn("relative h-full w-full scale-110", imageClassName)}>
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
