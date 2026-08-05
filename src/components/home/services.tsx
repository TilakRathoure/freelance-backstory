"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Clapperboard,
  Globe,
  Package,
  Rocket,
  Share2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { services } from "~/content/services";
import { Reveal } from "~/components/motion/reveal";
import { TiltCard } from "~/components/motion/tilt-card";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Globe,
  Share2,
  Clapperboard,
  Package,
  TrendingUp,
  Users,
  Briefcase,
  Rocket,
};

export function Services() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-label mb-4">Capabilities</p>
          <h2 className="text-display-sm mb-16 max-w-2xl text-ink">
            Nine disciplines.
            <br />
            One narrative.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <TiltCard>
                  <article
                    className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-bg p-8 transition-all duration-700 ease-luxury hover:border-gold/40"
                    data-cursor="EXPLORE"
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-[0.12] transition-opacity duration-700 ease-luxury group-hover:opacity-35"
                    />
                    <div className="relative z-10 flex h-full flex-col">
                      <Icon className="mb-8 h-5 w-5 text-gold" strokeWidth={1.25} />
                      <h3 className="font-serif text-4xl text-ink md:text-5xl">
                        {service.title}
                      </h3>
                      <p className="text-body mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-luxury group-hover:max-h-40 group-hover:opacity-100">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
